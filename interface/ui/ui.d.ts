// Alert
type AlertT = {
  id?: string;
  text: string;
  title?: string;
  type?: "danger" | "warning" | "success";
  delay?: number;
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
