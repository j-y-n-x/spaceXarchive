import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "primary",
  primaryShade: 6,
  fontFamily: "Outfit, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  fontSizes: {
    xs: "0.76rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "1.8rem",
  },
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
  },
  shadows: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
  },
  headings: {
    fontFamily: "Outfit, sans-serif",
    sizes: {
      h1: { fontSize: "2.1rem", fontWeight: 700 },
      h2: { fontSize: "1.9rem", fontWeight: "2.5rem" },
      h3: { fontSize: "1.75rem", fontWeight: "2.5rem" },
      h4: { fontSize: "1.5rem", fontWeight: 500 },
      h5: { fontSize: "1.2rem", fontWeight: 500 },
    },
  },
  components: {
    TextInput: {
      styles: {
        label: { fontSize: "1rem", color: "#DCE7FCFF" },
        input: {
          borderRadius: "2rem !important",
          backgroundColor: "#DCE7FCFF",
        },
      },
    },
    Select: {
      styles: {
        label: { fontSize: "1rem", color: "#DCE7FCFF" },
        input: {
          borderRadius: "2rem !important",
          backgroundColor: "#DCE7FCFF",
        },
      },
    },
    BackgroundImage: {
      styles: {
        root: {
          img: { filter: "blur(12px)" },
        },
      },
    },
    header: {
      styles: {
        root: { backgroundColor: "#FFFFFF" },
      },
    },
  },
  colors: {
    primary: [
      "#E0F7F1",
      "#B9EFE0",
      "#8CE7CD",
      "#61DFBB",
      "#35D7A8",
      "#1FCB95",
      "#17A87D",
      "#128464",
      "#0D604B",
    ],
    secondary: [
      "#F3E8FF",
      "#E1D0FA",
      "#C9A8F2",
      "#AF7CE9",
      "#934FE0",
      "#7A30D4",
      "#6225A9",
      "#4A1C7D",
      "#321352",
    ],
    success: [
      "#E9FFF2",
      "#C6F8DC",
      "#A0F0C5",
      "#7AE7AE",
      "#54DF98",
      "#2FD781",
      "#25AE68",
      "#1B854F",
      "#115C36",
    ],
    warning: [
      "#FFF8E1",
      "#FFECB3",
      "#FFD180",
      "#FFB74D",
      "#FFA726",
      "#FF9800",
      "#FB8C00",
      "#EF6C00",
      "#E65100",
    ],
    error: [
      "#FFEDEE",
      "#FFD3D6",
      "#FFA8AD",
      "#FF7D85",
      "#FF525C",
      "#FF2633",
      "#D91F2A",
      "#B31922",
      "#8C121A",
    ],
    neutral: [
      "#F7F8FA",
      "#E1E3E8",
      "#C3C6CF",
      "#A6A9B4",
      "#898C9A",
      "#6D707E",
      "#505362",
      "#3A3D49",
      "#252731",
    ],
    shades: ["#FFFFFF", "#000000"],
  },
};
