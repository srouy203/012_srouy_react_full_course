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
      menuName: "Basic Table",
      link: "/basic-table",
    },
    {
      menuName: "Sorting Table",
      link: "/sorting-table",
    },
    {
      menuName: "Filtering Table",
      link: "/filtering-table",
    },
    {
      menuName: "Pagination Table",
      link: "/pagination-table",
    },
    {
      menuName: "Selecting Rows",
      link: "/selecting-rows",
    },
    {
      menuName: "Column Order",
      link: "/column-order",
    },
    {
      menuName: "Hide Column",
      link: "/hide-column",
    },
    {
      menuName: "Sticky Table",
      link: "/sticky-table",
    },
    {
      menuName: "Export File Merge Colum",
      link: "/exportfile",
    },
    {
      menuName: "Upload Multiple Images",
      link: "/uploadmultiimages",
    },
  ]);

  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("RGBA(0, 0, 0, 0.92)", "whitealpha");
  const bg = useColorMode("", "");
  return (
    <Box>
      <Box
        w="20vw"
        d="flex"
        h="100vh"
        color="white"
        float="left"
        pl="20px"
        position="fixed"
        bg="white"
        boxShadow="lg"
        rounded='md'
        >
        <Text
          align="center"
          mr="70px"
          fontSize="4xl"
          fontWeight="bold"
          color={color}>
          React Table
        </Text>

        <Button
          onClick={() => toggleColorMode()}
          float="right"
          mt="-45px"
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
