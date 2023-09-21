import { NativeBaseProvider, Box, Button, useColorMode } from "native-base";
import { useFonts } from "expo-font";
import { theme } from "./themes";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  useFonts({
    "Plus-Jakarta-Sans": require("./assets/fonts/PlusJakartaSans.ttf"),
    "Plus-Jakarta-Sans-Italic": require("./assets/fonts/PlusJakartaSans-Italic.ttf"),
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Box
        flex={1}
        _dark={{ bgColor: "bg.dark" }}
        _light={{ bgColor: "bg.light" }}
      >
        <Box _dark={{ bgColor: "bg.darkGrey" }} _light={{ bgColor: "white" }}>
          <ThemeToggle />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
