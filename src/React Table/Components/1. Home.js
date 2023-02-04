import React from "react";
import { Text, useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Text fontSize="4xl" align="center">
        {colorMode === 'light' ? 'Light' : 'Dark'}
      </Text>
      
    </div>
  );
};

export default Home;
