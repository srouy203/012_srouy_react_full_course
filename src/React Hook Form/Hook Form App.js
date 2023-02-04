import React from "react";
import { ChakraProvider, Box, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/0. Navbar";
import BasicForm from "./Components/1. Basic Form";
import HandleError from "./Components/2. Handle Error";
import theme from '../React Table/Dark Mode/Theme'
import ErrorMessagee from "./Components/3. Error Message";
import SchemaValidation from './Components/4. Schema Validation'
import ModalForm from "./Components/5. Modal Form";

const HookFormApp = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Navbar />

        <Box w="78.9vw" float="right">
          <Routes>
            <Route path="/basic-form" element={<BasicForm />} />
            <Route path="/register-fields" element={<HandleError />} />
            <Route path="/error-message" element={<ErrorMessagee/>}/>
            <Route path="/schema-validation" element={<SchemaValidation/>}/>
            <Route path="/modal-form" element={<ModalForm/>}/>
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default HookFormApp;


