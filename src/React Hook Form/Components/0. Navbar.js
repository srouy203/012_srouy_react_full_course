import React, { useState } from "react";
import {
  Text,
  Box,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [menu, setMenu] = useState([
    {
      menuName: "Home",
      link: "/",
    },
    {
      menuName: "Basic Form",
      link: "/basic-form",
    },
    {
      menuName: "Handle Error",
      link: "/register-fields",
    },
    // {
    //   menuName: "Error Message",
    //   link: "/error-message",
    // },
    {
      menuName: "Schema Validation",
      link: "/schema-validation",
    },
    {
      menuName: "Modal Form",
      link: "/modal-form",
    },
  ]);

  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("RGBA(0, 0, 0, 0.92)", "whitealpha");
  return (
    <Box>
      <Box
        w="20vw"
        d="flex"
        h="100vh"
        color="white"
        float="left"
        pl="20px"
        position="fixed">
        <Text
          align="center"
          mr="70px"
          mt='10px'
          fontSize="2xl"
          fontWeight="bold"
          color={color}>
          React Hook Form
        </Text>

        <Button
          onClick={() => toggleColorMode()}
          float="right"
          mt="-35px"
          mr="20px"
          bg="blackAlpha.500">
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>

        {menu.map((val, index) => {
          return (
            <Box
              key={index}
              h="45px"
              padding="8px"
              _hover={{ bg: "RGBA(0, 0, 0, 0.16)" }}
              borderRadius="10px"
              mr="20px"
              transition="0.2s">
              <Link to={val.link}>
                <Text fontSize="17px" color={color}>
                  {val.menuName}
                </Text>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Navbar;
