import { useMediaQuery } from "react-responsive";

type DeviceT =
  | "unknown"
  | "mobile"
  | "tablet"
  | "laptop"
  | "small-desktop"
  | "large-desktop";

export default function useDevice() {
  let device: DeviceT = "unknown";

  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1055 });
  const isLaptop = useMediaQuery({ minWidth: 1056, maxWidth: 1279 });
  const isSmallDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 1535 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1536 });

  if (isMobile) device = "mobile";
  else if (isTablet) device = "tablet";
  else if (isLaptop) device = "laptop";
  else if (isSmallDesktop) device = "small-desktop";
  else if (isLargeDesktop) device = "large-desktop";

  return device;
}
