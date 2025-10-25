import { useMediaQuery } from "react-responsive";

type DeviceT =
  | "unknown"
  | "mobile"
  | "tablet"
  | "laptop"
  | "small-desktop"
  | "large-desktop";

/**
 * Classifies the current viewport into a device category using CSS media queries.
 *
 * The returned value is one of: {@link DeviceT} union.
 *
 * Breakpoints:
 * - `mobile`: max-width 639px
 * - `tablet`: min-width 640px and max-width 1055px
 * - `laptop`: min-width 1056px and max-width 1279px
 * - `small-desktop`: min-width 1280px and max-width 1535px
 * - `large-desktop`: min-width 1536px
 *
 * Returns `"unknown"` during server-side rendering or before media queries resolve on first render.
 *
 * @returns The inferred device category as a {@link DeviceT} union.
 *
 * @remarks
 * - Updates reactively on viewport resize.
 * - Depends on a media query hook (e.g., useMediaQuery) being available in the environment.
 * - For SSR, consider handling the initial "unknown" state to avoid layout shifts.
 */
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
