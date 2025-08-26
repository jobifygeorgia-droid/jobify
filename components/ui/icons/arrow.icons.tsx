import { IconPropsT } from "@/components/ui/icons/icon.types";

export const Arrow: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        width={width || 46}
        height={height || 35}
        viewBox="0 0 46 35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.4043 17.2143H44.0234M44.0234 17.2143L28.4162 1.60718M44.0234 17.2143L28.4162 32.8215"
          strokeWidth="2.92634"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export const ArrowTriangle: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        width={width || 12}
        height={height || 8}
        viewBox="0 0 12 8"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.99785 2.98591L2.09785 6.82591C1.91452 7.00642 1.68118 7.09668 1.39785 7.09668C1.11452 7.09668 0.881185 7.00642 0.697852 6.82591C0.514518 6.6454 0.422852 6.41565 0.422852 6.13668C0.422852 5.85771 0.514518 5.62796 0.697852 5.44745L5.29785 0.918218C5.39785 0.819756 5.50619 0.750012 5.62285 0.708987C5.73952 0.667961 5.86452 0.647449 5.99785 0.647449C6.13119 0.647449 6.25619 0.667961 6.37285 0.708987C6.48952 0.750012 6.59785 0.819756 6.69785 0.918218L11.2979 5.44745C11.4812 5.62796 11.5729 5.85771 11.5729 6.13668C11.5729 6.41565 11.4812 6.6454 11.2979 6.82591C11.1145 7.00642 10.8812 7.09668 10.5979 7.09668C10.3145 7.09668 10.0812 7.00642 9.89785 6.82591L5.99785 2.98591Z" />
      </svg>
    </span>
  );
};

export const PaginationArrow: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        width={width || 16}
        height={height || 16}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" />
      </svg>
    </span>
  );
};

export const PaginationMultipleArrow: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        width={width || 16}
        height={height || 16}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.27301 4L3.33301 4.94L6.38634 8L3.33301 11.06L4.27301 12L8.27301 8L4.27301 4Z" />
        <path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" />
      </svg>
    </span>
  );
};
