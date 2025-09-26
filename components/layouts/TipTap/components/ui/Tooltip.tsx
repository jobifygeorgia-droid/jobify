type TooltipT = {
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipT> = ({ children }) => {
  return (
    <span className="absolute w-max bg-white px-3 py-1 text-sm -top-2 -translate-y-1/2 shadow-lg rounded-md border border-gray-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-full after:border-[6px] after:border-transparent after:border-t-white tracking-wider opacity-0 group-hover/tiptap:opacity-100 group-hover/tiptap:-translate-y-full transition-all duration-200 capitalize text-colors-app-dark-primary">
      {children}
    </span>
  );
};

export default Tooltip;
