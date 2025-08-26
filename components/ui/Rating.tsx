"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import MuiRating from "@mui/material/Rating";
import { Stack } from "@mui/material";

type RatingT = {
  value: number | null;
  granular?: boolean;
  readonly?: boolean;
  size?: "small" | "medium" | "large" | "huge";
};

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Rating: React.FC<RatingT> = (props) => {
  const { value, granular, size = "medium", readonly = false } = props;

  const [rating, setRating] = useState<number | null>(() => value);
  const [label, setLabel] = useState(-1);

  return (
    <Stack direction="row" alignItems="center">
      <MuiRating
        name="rating"
        value={rating}
        readOnly={readonly}
        precision={granular ? 0.5 : 1}
        size={size !== "huge" ? size : "medium"}
        getLabelText={getLabelText}
        onChangeActive={(_, newHover) => {
          setLabel(newHover);
        }}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        sx={{
          fontSize: size === "huge" ? 50 : undefined,
          "& .MuiRating-iconFilled": {
            color: "var(--color-orange)",
          },
        }}
      />

      {label !== -1 && (
        <Box sx={{ ml: 2 }} fontWeight={500}>
          {labels[label !== -1 ? label : value ? value : ""]}
        </Box>
      )}
    </Stack>
  );
};

export default Rating;
