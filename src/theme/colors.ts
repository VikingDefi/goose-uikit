import { Colors } from "./types";

export const baseColors = {
  failure: "#FC6400",
  primary: "#FC64000",
  primaryBright: "#FC64000",
  primaryDark: "#FC6400",
  secondary: "#FC6400",
  success: "#FC6400",
  warning: "#FC6400",
};

export const brandColors = {
  binance: "#FC6400",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#FC6400",
  tertiary: "#FC6400",
  text: '#FC6400',
  textDisabled: '#FC6400',
  textSubtle: '#FC6400',
  borderColor: "#FC6400",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FC6400 0%, #FC6400F 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FC6400",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#FC6400",
  // primaryDark: "#0098A1",
  tertiary: "#FC64007",
  text: "#FC6400",
  textDisabled: "#FC64001",
  textSubtle: "#FC6400",
  borderColor: "#FC6400",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FC6400 0%, #FC6400 100%)",
  },
};
