"use client";

import { useState, useRef } from "react";

import { LocationT } from "@/interface/global.types";
import { useFetchLocations } from "@/hooks/api/utils";
import { LocationFieldT } from "@/interface/ui/forms-ui";

import TextField from "./TextField";
import LocationFieldDropdown from "./ui/LocationFieldDropdown";
import LocationFieldAdornment from "./ui/LocationFieldAdornment";

const LocationField: React.FC<LocationFieldT> = ({
  value,
  onChange,
  textFieldProps,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");

  const onSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const onOptionSelect = (option: LocationT) => {
    setSearch("");
    onChange(option);
  };

  const onClear = () => {
    setSearch("");
    onChange({ lat: 0, lon: 0, location: "", location_name: "" });

    if (inputRef.current) inputRef.current.focus();
  };

  const { loading, options } = useFetchLocations(search);

  return (
    <div style={{ position: "relative" }}>
      <TextField
        label="მდებარეობა"
        labelPosition="out"
        {...textFieldProps}
        onChange={onSearchChange}
        value={search || value || ""}
        htmlInputProps={{
          onFocus: () => setOpen(true),
          onBlur: () => setOpen(false),
          ref: inputRef,
        }}
        adornment={
          <LocationFieldAdornment hasValue={Boolean(value)} onClear={onClear} />
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
  );
};

export default LocationField;
