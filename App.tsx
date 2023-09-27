import { NativeBaseProvider, Box, Button, useColorMode } from "native-base";
import { useFonts } from "expo-font";
import { theme } from "./themes";
import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";

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
        <Header />
      </Box>
    </NativeBaseProvider>
  );
}
