"use client";

import classnames from "classnames";
import { useState, useRef } from "react";

import { LocationT } from "@/interface/global.types";
import { useFetchLocations } from "@/hooks/api/utils";
import { LocationFieldT } from "@/interface/ui/forms-ui";

import TextField from "./TextField";
import { Map } from "@/components/layouts";
import LocationFieldDropdown from "./ui/LocationFieldDropdown";
import LocationFieldAdornment from "./ui/LocationFieldAdornment";
import { useGoogleMapContext } from "@/providers/GoogleMapProvider";

const LocationField: React.FC<LocationFieldT> = (props) => {
  const {
    showMap = false,
    textFieldProps = {},
    containerClassName = "",
  } = props;

  const { onSetPinByCoords } = useGoogleMapContext();

  const inputRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");

  const onSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const onOptionSelect = (location: LocationT) => {
    setSearch("");
    props.onChange(location);

    if (!showMap) return;
    onSetPinByCoords({ lat: location.lat, lng: location.lon });
  };

  const onSelectFromMap = (location: LocationT) => {
    props.onChange(location);
  };

  const onClear = () => {
    setSearch("");
    props.onChange({ lat: 0, lon: 0, location: "", location_name: "" });

    if (inputRef.current) inputRef.current.focus();
  };

  const { loading, options } = useFetchLocations(search);

  return (
    <div className={classnames(containerClassName, "flex flex-col gap-4")}>
      <div className="relative">
        <TextField
          label="მდებარეობა"
          {...textFieldProps}
          onChange={onSearchChange}
          value={search || props.value || ""}
          htmlInputProps={{
            onFocus: () => setOpen(true),
            onBlur: () => setOpen(false),
            ref: inputRef,
          }}
          adornment={
            <LocationFieldAdornment
              onClear={onClear}
              hasValue={Boolean(props.value)}
            />
          }
        />

        {open && (
          <LocationFieldDropdown
            loading={loading}
            options={options}
            onOptionSelect={onOptionSelect}
          />
        )}
      </div>

      {showMap && (
        <div className="w-full h-[320px]">
          <Map isClickable={true} onClick={onSelectFromMap} showCenterButton />
        </div>
      )}
    </div>
  );
};

export default LocationField;
