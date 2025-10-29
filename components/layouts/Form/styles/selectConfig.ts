import { StylesConfig, ThemeConfig, GroupBase } from "react-select";

export const customSelectTheme: ThemeConfig = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    neutral0: "#ffffff",
    primary: "var(--color-blue)",
    primary25: "var(--color-blue-light)",
    primary50: "var(--color-blue-light)",
    neutral80: "var(--color-dark-grey-dark)",
  },
});

export const customSelectStyles = <
  T extends object,
  IsMulti extends boolean = false
>(): StylesConfig<T, IsMulti, GroupBase<T>> => ({
  menu: (baseStyles) => ({
    ...baseStyles,
    border: "none",
    overflow: "hidden",
    zIndex: 99,
    minHeight: "70px",
    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",

    ".custom-select__menu-list": {
      padding: 0,

      "&.loading-active": {
        overflowY: "hidden",
      },
    },
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    cursor: "pointer",
    color: state.isSelected
      ? "var(--color-blue-light)"
      : state.isFocused
      ? "var(--color-dark-grey-dark)"
      : "var(--color-dark-grey-dark)",
  }),

  multiValue: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "60px",
    height: "24px",
    padding: "0 12px",
    backgroundColor: "var(--color-blue)",
    display: "flex",
    gap: "6px",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "max-content",
  }),

  multiValueLabel: (baseStyles) => ({
    ...baseStyles,
    color: "var(--color-blue-light)",
  }),

  multiValueRemove: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "50%",
    width: "18px",
    minWidth: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "var(--color-blue-light)",
    position: "relative",

    svg: {
      position: "absolute",
      width: "16px",
      height: "16px",
      borderRadius: "inherit",
      top: "1px",
      left: "1px",
    },

    "&:hover": {
      backgroundColor: "var(--color-blue-light)",
      color: "var(--color-dark-grey-dark)",
    },
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  input: () => ({
    marginLeft: "10px",

    "&.custom-select__input-container": {
      maxWidth: "max-content !important",
      width: "100%",
      order: 3,
    },
  }),
});
