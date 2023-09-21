import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    bg: {
      light: "#F4F7FD",
      dark: "#20212C",
      darkGrey: "#2B2C37", 
    },
    primary: {
      50: "#EAE6F4",
      100: "#D1C6E5",
      200: "#B3A5D6",
      300: "#937EC6",
      400: "#7663B8",
      500: "#644EAF",
      600: "#635FC7",
      700: "#554BA3",
      800: "#46387F",
      900: "#31255A",
    },
    borders: {
      light: "#E4EBFA",
      dark: "#3E3F4E",
    }
  },
  fonts: {
    heading: "Plus-Jakarta-Sans",
    body: "Plus-Jakarta-Sans",
    mono: "Plus-Jakarta-Sans",
  },
  components: {
    Box: {
      baseStyle: {},
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
