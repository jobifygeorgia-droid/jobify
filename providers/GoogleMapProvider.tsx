"use client";

import {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";
import { useLoadScript } from "@react-google-maps/api";

import { GOOGLE_MAPS_API_KEY } from "@/lib/constants";
import { GetAddressFromCoordsT } from "@/interface/ui/ui";

import { usePopupsContext } from "./PopupsProvider";
import { generateLocationNames, logger } from "@/lib/utils";

type GoogleMapProviderT = {
  children: React.ReactNode;
};

type GoogleMapContextT = {
  isLoaded: boolean;
  error: string | null;
  marker: google.maps.LatLngLiteral | undefined;
  onLoad: (mapInstance: google.maps.Map) => void;
  onUnmount: () => void;
  onCenter: () => void;
  onMapClick: (
    event: google.maps.MapMouseEvent
  ) => Promise<GetAddressFromCoordsT | undefined>;
  onSetPinByCoords: (coords: google.maps.LatLngLiteral) => void;
};

const GoogleMapContext = createContext<GoogleMapContextT>({
  error: null,
  isLoaded: false,
  marker: undefined,
  onLoad: () => {},
  onUnmount: () => {},
  onCenter: () => {},
  onMapClick: () => Promise.resolve(undefined),
  onSetPinByCoords: () => {},
});

const GoogleMapProvider: React.FC<GoogleMapProviderT> = ({ children }) => {
  const { addAlert } = usePopupsContext();

  /**
   * Load Google Maps script with Places library
   * @remarks
   * - `isLoaded` indicates whether the script has finished loading
   */
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  /**
   * Map instance ref
   * - you can access map instance via `map.current`
   * - `map.current` has access to all google maps methods
   */
  const map = useRef<google.maps.Map | null>(null);

  /**
   * Current marker position state
   */
  const [marker, setMarker] = useState<google.maps.LatLngLiteral | undefined>(
    undefined
  );

  /**
   * Store map instance on load to the map ref
   */
  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    if (!map.current) {
      map.current = mapInstance;
    }
  }, []);

  /**
   * Cleanup on unmount
   */
  const onUnmount = useCallback(() => {
    map.current = null;
  }, []);

  /**
   * Center map to the current marker position
   */
  const onCenter = useCallback(() => {
    if (!marker) return;
    map.current?.panTo(marker);
  }, [marker]);

  /**
   * Set pin on map by given coordinates
   * - use this function to set marker programmatically when user searches for location  by text field
   * and you want to set pin on map to the searched location
   * @param coords - The coordinates to set the pin to { `lat`: number; `lng`: number;}
   */
  const onSetPinByCoords = useCallback((coords: google.maps.LatLngLiteral) => {
    if (!coords) return;
    setMarker(coords);
    map.current?.panTo(coords);
  }, []);

  /**
   * Get establishment name from coordinates with help of PlacesService
   * @param coords - The coordinates to get the address for { `lat`: number; `lng`: number;}
   * @returns - establishment name | undefined
   */
  const readPlaceService = async (coords: google.maps.LatLngLiteral) => {
    const placesService = new google.maps.places.PlacesService(map.current!);

    return await new Promise<string | undefined>((resolve) => {
      const request = { location: coords, radius: 20 }; // 20 meters

      placesService.nearbySearch(request, (results, status) => {
        const hasResults =
          status === google.maps.places.PlacesServiceStatus.OK && results?.[0];

        if (!hasResults) return resolve(undefined);

        const candidateValue = results?.find((r) =>
          r.types?.includes("establishment")
        )?.name;

        resolve(candidateValue);
      });
    });
  };

  /**
   * Get address components from coordinates with help of Geocoder service
   * Geocoder does not includes establishment information in most of the cases
   * so we use PlacesService API in combination to get it
   * @param coords - The coordinates to get the address for { `lat`: number; `lng`: number;}
   * @returns - {@link GetAddressFromCoordsT} | undefined
   */
  const readGeocoderLocationAddressComponents = async (
    coords: google.maps.LatLngLiteral
  ) => {
    const geocoder = new google.maps.Geocoder();

    return new Promise<Array<google.maps.GeocoderAddressComponent> | undefined>(
      (resolve) => {
        geocoder.geocode({ location: coords }, (results, status) => {
          const hasResults = status === "OK" && results && results[0];

          if (!hasResults) return resolve(undefined);

          const candidateValue = results[0].address_components;

          resolve(candidateValue);
        });
      }
    );
  };

  /**
   * Get address components from coordinates
   * @param coords - The coordinates to get the address for { `lat`: number; `lng`: number;}
   * @returns - {@link GetAddressFromCoordsT} | undefined
   */
  const getAddressFromCoords = async (
    coords: google.maps.LatLngLiteral
  ): Promise<GetAddressFromCoordsT | undefined> => {
    const [geocoderLocation, placeServiceLocation] = await Promise.all([
      readGeocoderLocationAddressComponents(coords),
      readPlaceService(coords),
    ]);

    if (!Array.isArray(geocoderLocation) || !geocoderLocation) return;

    const formattedResult = {
      lat: coords.lat,
      lon: coords.lng,
      ...generateLocationNames(geocoderLocation, placeServiceLocation),
    };

    return formattedResult;
  };

  /**
   * - use this function to get address when user clicks on map
   * - it sets marker position and returns address info
   */
  const onMapClick = async (
    event: google.maps.MapMouseEvent
  ): Promise<GetAddressFromCoordsT | undefined> => {
    if (!event.latLng) return;

    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setMarker({ lat, lng });

    const location = await getAddressFromCoords({ lat, lng });

    return location;
  };

  /**
   * Setting up user location access
   * logic bellow detects user current location (if has access)
   * and sets it as default value of marker - {latitude, longitude}
   */

  const [error, setError] = useState<string | null>(null);

  const onError = useCallback(
    (message: string) => {
      setError(message);

      addAlert({
        type: "warning",
        title: "ლოკაციაზე წვდომა არ არის დაშვებული",
        text: "ლოკაციაზე წვდომა არ არის დაშვებული, გამოყენებული იქნება ნაგულისხმევი მდებარეობა.",
      });
    },
    [addAlert]
  );

  /**
   * Read user current location
   */
  const readUserCurrentLocation = useCallback(
    () =>
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const cords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          setMarker(cords);
        },
        (err) => {
          const tbilisiFallback = {
            lat: 41.7151,
            lng: 44.8271,
          };

          logger(err);
          onError("Location permission denied. Using default location.");
          setMarker(tbilisiFallback);
        }
      ),
    [onError]
  );

  useEffect(() => {
    if (navigator.geolocation) readUserCurrentLocation();
    else onError("Geolocation not supported.");
  }, [onError, readUserCurrentLocation]);

  return (
    <GoogleMapContext.Provider
      value={{
        error,
        isLoaded,
        onLoad,
        onUnmount,
        onCenter,
        marker,
        onMapClick,
        onSetPinByCoords,
      }}
    >
      {children}
    </GoogleMapContext.Provider>
  );
};

export default GoogleMapProvider;

export const useGoogleMapContext = (): GoogleMapContextT => {
  const context = useContext(GoogleMapContext);

  if (!context)
    throw new Error("Please use google map api inside its Provider");

  return context;
};
