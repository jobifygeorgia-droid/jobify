import { StylesConfig, ThemeConfig, GroupBase } from "react-select";

export const customSelectTheme: ThemeConfig = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "var(--color-blue)",
    primary25: "var(--color-blue-light)",
    primary50: "var(--color-blue-light)",
    neutral0: "#ffffff",
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
    zIndex: 9,
    boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",

    ".custom-select__menu-list": {
      padding: 0,
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
    padding: "2px 12px",
    backgroundColor: "var(--color-blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  multiValueLabel: (baseStyles) => ({
    ...baseStyles,
    color: "var(--color-blue-light)",
  }),
  multiValueRemove: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "var(--color-blue-light)",

    "&:hover": {
      backgroundColor: "var(--color-blue-light)",
      color: "var(--color-dark-grey-dark)",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
});
