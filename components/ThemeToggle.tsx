import React from "react";
import { Button, useColorMode } from "native-base";


const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button onPress={toggleColorMode} h={10}>
      Toggle theme
    </Button>
  );
};

export default ThemeToggle;
