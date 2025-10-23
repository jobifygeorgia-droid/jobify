import React from "react";

// Alert
type AlertT = {
  id?: string;
  text: string;
  title?: string;
  type?: "danger" | "warning" | "success";
  delay?: number;
};

// Dialog
type DialogT = {
  title?: string;
  content: React.ReactNode;
  loading?: boolean;
  type?: "danger" | "warning" | "normal";
  onConfirmCallback?: () => void;
  loadingOnConfirm?: boolean;
  closeOnConfirm?: boolean;
};

// Chip
type ClickableChipT = {
  isActive: boolean;
  onClick: () => void;
};

type StaticChipT = {
  isActive?: undefined;
  onClick?: undefined;
};

export type ChipT = {
  type?: "primary" | "secondary" | "tertiary";
  className?: string;
  children: React.ReactNode;
} & (ClickableChipT | StaticChipT);

export type AnchorChipT = Omit<ChipT, "onClick"> & {
  href: string;
};
