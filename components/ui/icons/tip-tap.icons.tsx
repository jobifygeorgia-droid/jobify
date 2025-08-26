import { IconPropsT } from "@/components/ui/icons/icon.types";

export const Bold: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width || 24}
        height={height || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"></path>
      </svg>
    </span>
  );
};

export const Italic: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width || 24}
        height={height || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="19" x2="10" y1="4" y2="4"></line>
        <line x1="14" x2="5" y1="20" y2="20"></line>
        <line x1="15" x2="9" y1="4" y2="20"></line>
      </svg>
    </span>
  );
};

export const OrderedList: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width || 24}
        height={height || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 12h11"></path>
        <path d="M10 18h11"></path>
        <path d="M10 6h11"></path>
        <path d="M4 10h2"></path>
        <path d="M4 6h1v4"></path>
        <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
      </svg>
    </span>
  );
};

export const UnorderedList: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width || 24}
        height={height || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 12h.01"></path>
        <path d="M3 18h.01"></path>
        <path d="M3 6h.01"></path>
        <path d="M8 12h13"></path>
        <path d="M8 18h13"></path>
        <path d="M8 6h13"></path>
      </svg>
    </span>
  );
};

export const SplitList: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width || 24}
        height={height || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 12H3"></path>
        <path d="M16 6H3"></path>
        <path d="M16 18H3"></path>
        <path d="M18 9v6"></path>
        <path d="M21 12h-6"></path>
      </svg>
    </span>
  );
};

export const SinkList: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width || 24}
        height={height || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m3 10 2.5-2.5L3 5"></path>
        <path d="m3 19 2.5-2.5L3 14"></path>
        <path d="M10 6h11"></path>
        <path d="M10 12h11"></path>
        <path d="M10 18h11"></path>
      </svg>
    </span>
  );
};

export const LiftList: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width || 24}
        height={height || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 12H3"></path>
        <path d="M16 18H3"></path>
        <path d="M10 6H3"></path>
        <path d="M21 18V8a2 2 0 0 0-2-2h-5"></path>
        <path d="m16 8-2-2 2-2"></path>
      </svg>
    </span>
  );
};

export const Underline: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={width || 24}
        height={height || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
        <line x1="4" x2="20" y1="20" y2="20"></line>
      </svg>
    </span>
  );
};

export const Heading1: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 12h8"></path>
        <path d="M4 18V6"></path>
        <path d="M12 18V6"></path>
        <path d="m17 12 3-2v8"></path>
      </svg>
    </span>
  );
};

export const Heading2: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 12h8"></path>
        <path d="M4 18V6"></path>
        <path d="M12 18V6"></path>
        <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"></path>
      </svg>
    </span>
  );
};

export const Heading3: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 12h8"></path>
        <path d="M4 18V6"></path>
        <path d="M12 18V6"></path>
        <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"></path>
        <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"></path>
      </svg>
    </span>
  );
};

export const Heading4: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 18V6"></path>
        <path d="M17 10v3a1 1 0 0 0 1 1h3"></path>
        <path d="M21 10v8"></path>
        <path d="M4 12h8"></path>
        <path d="M4 18V6"></path>
      </svg>
    </span>
  );
};

export const Heading5: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 12h8"></path>
        <path d="M4 18V6"></path>
        <path d="M12 18V6"></path>
        <path d="M17 13v-3h4"></path>
        <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"></path>
      </svg>
    </span>
  );
};

export const Heading6: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 12h8"></path>
        <path d="M4 18V6"></path>
        <path d="M12 18V6"></path>
        <circle cx="19" cy="16" r="2"></circle>
        <path d="M20 10c-2 2-3 3.5-3 6"></path>
      </svg>
    </span>
  );
};

export const AlignCenter: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17 12H7"></path>
        <path d="M19 18H5"></path>
        <path d="M21 6H3"></path>
      </svg>
    </span>
  );
};

export const AlignLeft: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 12H3"></path>
        <path d="M17 18H3"></path>
        <path d="M21 6H3"></path>
      </svg>
    </span>
  );
};

export const AlignRight: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 12H9"></path>
        <path d="M21 18H7"></path>
        <path d="M21 6H3"></path>
      </svg>
    </span>
  );
};

export const Justify: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 12h18"></path>
        <path d="M3 18h18"></path>
        <path d="M3 6h18"></path>
      </svg>
    </span>
  );
};

export const HighLight: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m9 11-6 6v3h9l3-3"></path>
        <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path>
      </svg>
    </span>
  );
};

export const Subscript: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m4 5 8 8"></path>
        <path d="m12 5-8 8"></path>
        <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"></path>
      </svg>
    </span>
  );
};

export const Superscript: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m4 19 8-8"></path>
        <path d="m12 19-8-8"></path>
        <path d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"></path>
      </svg>
    </span>
  );
};

export const Strike: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
        <path d="M14 12a4 4 0 0 1 0 8H6"></path>
        <line x1="4" x2="20" y1="12" y2="12"></line>
      </svg>
    </span>
  );
};

export const Blockquote: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.78,8.89c0-3.07,1.53-4.3,4.3-4.34L5.38,6C3.78,6.17,3,7,3.1,8.31H4.54V12H.78Zm5.9,0c0-3.07,1.53-4.3,4.3-4.34L11.28,6C9.68,6.17,8.89,7,9,8.31h1.44V12H6.68Z"></path>
        <path d="M16.94,15.11c0,3.07-1.53,4.3-4.3,4.34L12.35,18c1.6-.16,2.39-1,2.28-2.3H13.18V12h3.76Zm5.9,0c0,3.07-1.53,4.3-4.3,4.34L18.24,18c1.6-.16,2.39-1,2.28-2.3H19.08V12h3.76Z"></path>
      </svg>
    </span>
  );
};

export const Code: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    </span>
  );
};

export const Line: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        version="1.1"
        viewBox="0 0 17 17"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g></g>
        <path d="M17 8v1h-17v-1h17z"></path>
      </svg>
    </span>
  );
};

export const LinkIcon: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
        <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
        <line x1="8" x2="16" y1="12" y2="12"></line>
      </svg>
    </span>
  );
};

export const RemoveLink: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 17H7A5 5 0 0 1 7 7"></path>
        <path d="M15 7h2a5 5 0 0 1 4 8"></path>
        <line x1="8" x2="12" y1="12" y2="12"></line>
        <line x1="2" x2="22" y1="2" y2="22"></line>
      </svg>
    </span>
  );
};

export const Youtube: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
        <path d="m10 15 5-3-5-3z"></path>
      </svg>
    </span>
  );
};

export const LineBreak: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M265.5 83.5A9.5 9.5 0 0 0 256 93v96a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0-9.5 9.5v96a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0-9.5-9.5h-96a9.5 9.5 0 0 0-9.5 9.5v96a9.5 9.5 0 0 0 9.5 9.5h96a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0 9.5 9.5h96a9.5 9.5 0 0 0 9.5-9.5v-96a9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0 9.5-9.5v-96a9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0 9.5-9.5V93a9.5 9.5 0 0 0-9.5-9.5h-96zm9.5 19h77v77h-77v-77zm0 115h77v77h-77v-77zm-115 115h77v77h-77v-77zm115 0h77v77h-77v-77z"></path>
      </svg>
    </span>
  );
};

export const FontIcon: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.55397 22H3.3999L10.9999 3H12.9999L20.5999 22H18.4458L16.0458 16H7.95397L5.55397 22ZM8.75397 14H15.2458L11.9999 5.88517L8.75397 14Z"></path>
      </svg>
    </span>
  );
};

export const Undo: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 7v6h6"></path>
        <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path>
      </svg>
    </span>
  );
};

export const Redo: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 7v6h-6"></path>
        <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path>
      </svg>
    </span>
  );
};

export const AddTable: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
        <path d="M3 10h18"></path>
        <path d="M10 3v18"></path>
        <path d="M16 19h6"></path>
        <path d="M19 16v6"></path>
      </svg>
    </span>
  );
};

export const RemoveTable: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10"></path>
        <path d="M3 10h18"></path>
        <path d="M10 3v18"></path>
        <path d="M16 19h6"></path>
      </svg>
    </span>
  );
};

export const AddColumnBefore: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z"></path>
        <path d="M5 12l4 0"></path>
        <path d="M7 10l0 4"></path>
      </svg>
    </span>
  );
};

export const AddColumnAfter: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z"></path>
        <path d="M15 12l4 0"></path>
        <path d="M17 10l0 4"></path>
      </svg>
    </span>
  );
};

export const DeleteColumn: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z"></path>
        <path d="M16 10l4 4"></path>
        <path d="M16 14l4 -4"></path>
      </svg>
    </span>
  );
};

export const AddRowAfter: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z"></path>
        <path d="M12 15l0 4"></path>
        <path d="M14 17l-4 0"></path>
      </svg>
    </span>
  );
};

export const AddRowBefore: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 18v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
        <path d="M12 9v-4"></path>
        <path d="M10 7l4 0"></path>
      </svg>
    </span>
  );
};

export const DeleteRow: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z"></path>
        <path d="M10 16l4 4"></path>
        <path d="M10 20l4 -4"></path>
      </svg>
    </span>
  );
};

export const MergeCells: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        version="1.1"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M482.2 508.4L331.3 389c-3-2.4-7.3-0.2-7.3 3.6V478H184V184h204v128c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V144c0-15.5-12.5-28-28-28H144c-15.5 0-28 12.5-28 28v736c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v128H184V546h140v85.4c0 3.8 4.4 6 7.3 3.6l150.9-119.4c2.4-1.8 2.4-5.4 0-7.2zM880 116H596c-15.5 0-28 12.5-28 28v168c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V184h204v294H700v-85.4c0-3.8-4.3-6-7.3-3.6l-151 119.4c-2.3 1.8-2.3 5.3 0 7.1l151 119.5c2.9 2.3 7.3 0.2 7.3-3.6V546h140v294H636V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v168c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V144c0-15.5-12.5-28-28-28z"></path>
      </svg>
    </span>
  );
};

export const SplitCell: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        version="1.1"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M938.2 508.4L787.3 389c-3-2.4-7.3-0.2-7.3 3.6V478H636V184h204v128c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V144c0-15.5-12.5-28-28-28H596c-15.5 0-28 12.5-28 28v736c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v128H636V546h144v85.4c0 3.8 4.4 6 7.3 3.6l150.9-119.4c2.4-1.8 2.4-5.4 0-7.2zM428 116H144c-15.5 0-28 12.5-28 28v168c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V184h204v294H244v-85.4c0-3.8-4.3-6-7.3-3.6l-151 119.4c-2.3 1.8-2.3 5.3 0 7.1l151 119.5c2.9 2.3 7.3 0.2 7.3-3.6V546h144v294H184V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v168c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V144c0-15.5-12.5-28-28-28z"></path>
      </svg>
    </span>
  );
};

export const ToggleHeaderColumn: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
        <path d="M10 10h11"></path>
        <path d="M10 3v18"></path>
        <path d="M9 3l-6 6"></path>
        <path d="M10 7l-7 7"></path>
        <path d="M10 12l-7 7"></path>
        <path d="M10 17l-4 4"></path>
      </svg>
    </span>
  );
};

export const ToggleHeaderRow: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
        <path d="M9 3l-6 6"></path>
        <path d="M14 3l-7 7"></path>
        <path d="M19 3l-7 7"></path>
        <path d="M21 6l-4 4"></path>
        <path d="M3 10h18"></path>
        <path d="M10 10v11"></path>
      </svg>
    </span>
  );
};

export const ToggleHeaderCell: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"></path>
        <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7"></path>
        <path d="M3 10h18"></path>
        <path d="M10 3v18"></path>
      </svg>
    </span>
  );
};

export const MergeOrSplit: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.273 7.73a2.51 2.51 0 0 0-3.159-.31 2.5 2.5 0 0 0-.921 1.12 2.23 2.23 0 0 0-.13.44 4.52 4.52 0 0 1-4-4 2.23 2.23 0 0 0 .44-.13 2.5 2.5 0 0 0 1.54-2.31 2.45 2.45 0 0 0-.19-1A2.48 2.48 0 0 0 5.503.19a2.45 2.45 0 0 0-1-.19 2.5 2.5 0 0 0-2.31 1.54 2.52 2.52 0 0 0 .54 2.73c.35.343.79.579 1.27.68v5.1a2.411 2.411 0 0 0-.89.37 2.5 2.5 0 1 0 3.47 3.468 2.5 2.5 0 0 0 .42-1.387 2.45 2.45 0 0 0-.19-1 2.48 2.48 0 0 0-1.81-1.49v-2.4a5.52 5.52 0 0 0 2 1.73 5.65 5.65 0 0 0 2.09.6 2.5 2.5 0 0 0 4.95-.49 2.51 2.51 0 0 0-.77-1.72zm-8.2 3.38c.276.117.512.312.68.56a1.5 1.5 0 0 1-2.08 2.08 1.55 1.55 0 0 1-.56-.68 1.49 1.49 0 0 1-.08-.86 1.49 1.49 0 0 1 1.18-1.18 1.49 1.49 0 0 1 .86.08zM4.503 4a1.5 1.5 0 0 1-1.39-.93 1.49 1.49 0 0 1-.08-.86 1.49 1.49 0 0 1 1.18-1.18 1.49 1.49 0 0 1 .86.08A1.5 1.5 0 0 1 4.503 4zm8.06 6.56a1.5 1.5 0 0 1-2.45-.49 1.49 1.49 0 0 1-.08-.86 1.49 1.49 0 0 1 1.18-1.18 1.49 1.49 0 0 1 .86.08 1.499 1.499 0 0 1 .49 2.45z"></path>
      </svg>
    </span>
  );
};

export const FixTables: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7"></path>
        <path d="M3 10h18"></path>
        <path d="M10 3v18"></path>
        <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
        <path d="M19.001 15.5v1.5"></path>
        <path d="M19.001 21v1.5"></path>
        <path d="M22.032 17.25l-1.299 .75"></path>
        <path d="M17.27 20l-1.3 .75"></path>
        <path d="M15.97 17.25l1.3 .75"></path>
        <path d="M20.733 20l1.3 .75"></path>
      </svg>
    </span>
  );
};

export const NextCell: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 5v14"></path>
        <path d="M21 12H7"></path>
        <path d="m15 18 6-6-6-6"></path>
      </svg>
    </span>
  );
};

export const PreviousCell: React.FC<IconPropsT> = (props) => {
  const { width, height, className } = props;

  return (
    <span className={className || ""}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height={height || 24}
        width={width || 24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m9 6-6 6 6 6"></path>
        <path d="M3 12h14"></path>
        <path d="M21 19V5"></path>
      </svg>
    </span>
  );
};
