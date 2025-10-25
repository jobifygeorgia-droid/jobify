"use client";

import { useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

import { BackToCenterButton, MapFallback } from "./ui";
import { GetAddressFromCoordsT } from "@/interface/ui/ui";
import { useGoogleMapContext } from "@/providers/GoogleMapProvider";

type MapT = {
  zoom?: number;
  isClickable?: boolean;
  showCenterButton?: boolean;
  center?: google.maps.LatLngLiteral;
  mapOptions?: google.maps.MapOptions;
  onClick?: (params: GetAddressFromCoordsT) => void;
};

const Map: React.FC<MapT> = (props) => {
  const { mapOptions = {}, isClickable = false, zoom = 16, center } = props;
  const { marker, onMapClick, onSetPinByCoords, onCenter, ...map } =
    useGoogleMapContext();

  const handleMapClick = async (e: google.maps.MapMouseEvent) => {
    if (!isClickable) return;
    const location = await onMapClick(e);

    if (!location) return;
    props.onClick?.(location);
  };

  useEffect(() => {
    if (!center) return;
    onSetPinByCoords(center);
  }, [center, onSetPinByCoords]);

  if (!map.isLoaded) return <MapFallback />;

  return (
    <div className="relative w-full h-full">
      <GoogleMap
        zoom={zoom}
        center={marker}
        onLoad={map.onLoad}
        onUnmount={map.onUnmount}
        onClick={handleMapClick}
        options={{
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.INLINE_START_BLOCK_START,
          },
          streetViewControl: true,
          streetViewControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT,
          },
          scrollwheel: true,
          mapTypeControl: true,
          fullscreenControl: true,
          cameraControl: true,
          draggable: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, // simple toggle, no dropdown
            position: google.maps.ControlPosition.TOP_LEFT,
            mapTypeIds: [],
          },
          ...mapOptions,
        }}
        mapContainerStyle={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
        }}
      >
        {props.showCenterButton && (
          <BackToCenterButton onCenter={() => onCenter()} />
        )}

        {marker && <Marker position={marker} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
