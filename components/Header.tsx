import React from "react";
import { Box, HStack, Heading } from "native-base";
import ThemeToggle from "./ThemeToggle";

type Props = {};

function Header({}: Props) {
  return (
    <HStack
      _dark={{ bgColor: "bg.darkGrey" }}
      _light={{ bgColor: "white" }}
			py="2"
			px="4"
    >
      <Heading size="md">Platform Launch</Heading>
      <ThemeToggle />
    </HStack>
  );
}

export default Header;
