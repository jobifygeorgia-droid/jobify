import { FormattedGeocoderAddressComponentT } from "@/interface/ui/ui";

export default function generateLocationNames(
  addresses: Array<google.maps.GeocoderAddressComponent>,
  establishment?: string
) {
  const resultToAccumulate: FormattedGeocoderAddressComponentT = {
    city: "",
    country: "",
    district: "",
    street_name: "",
    street_number: "",
    establishment: "",
  };

  const formattedAddress = addresses.reduce((acc, component) => {
    if (component.types.includes("street_number"))
      acc.street_number = component.long_name;
    else if (component.types.includes("route"))
      acc.street_name = component.long_name;
    else if (component.types.includes("sublocality"))
      acc.district = component.long_name;
    else if (component.types.includes("locality"))
      acc.city = component.long_name;
    else if (component.types.includes("country"))
      acc.country = component.long_name;
    else if (component.types.includes("establishment"))
      acc.establishment = component.long_name;

    return acc;
  }, resultToAccumulate);

  // If geocoder API was not able to detect location ''Service''
  // set fallback on it from google.maps.places.PlacesService API
  formattedAddress.establishment =
    formattedAddress.establishment || establishment || "";

  const location = generateLocation(formattedAddress);
  const location_name = generateLocationName(formattedAddress);

  return { location, location_name };
}

function generateLocation(address: FormattedGeocoderAddressComponentT) {
  if (!address) return "";

  return [address.city, address.country].filter(Boolean).join(", ");
}

function generateLocationName(address: FormattedGeocoderAddressComponentT) {
  if (!address) return "";

  const location_name = [
    `${address.street_name + " " + address.street_number}`.trim(),
    address.establishment,
    address.district,
    address.city,
    address.country,
  ]
    .filter(Boolean)
    .join(", ");

  return location_name;
}
