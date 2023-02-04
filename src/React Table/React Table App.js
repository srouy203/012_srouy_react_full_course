import React from "react";
import BasicTable from "./Components/3. Basic Table";
import { ChakraProvider, Box, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/1. Home";
import theme from "./Dark Mode/Theme";
import Navbar from "./Components/2. Navbar";
import SortingTable from "./Components/4. Sorting Table";
import FilteringTable from "./Components/5. Filtering Table";
import PaginationTable from "./Components/6. Pagination Table";
import SelectingRows from "./Components/7. Selecting rows";
import ColumnOrder from "./Components/8. Column Order";
import HideColumn from "./Components/9. Hide Column";
import StickyTable from "./Components/10. Sticky table";
import ExportFileMergeColumn from "./Components/ExportFileMergeColumn";
import UploadMultiImages from "./Components/UploadMultiImages";

const ReactTableApp = () => {

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Navbar/>

        <Box w="78.9vw" float="right">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic-table" element={<BasicTable />} />
            <Route path="/sorting-table" element={<SortingTable/>}/>
            <Route path="/filtering-table" element={<FilteringTable/>}/>
            <Route path="/pagination-table" element={<PaginationTable/>}/>
            <Route path="/selecting-rows" element={<SelectingRows/>}/>
            <Route path="/column-order" element={<ColumnOrder/>}/>
            <Route path='/hide-column' element={<HideColumn/>}/>
            <Route path="/sticky-table" element={<StickyTable/>}/>
            <Route path="/exportfile" element={<ExportFileMergeColumn/>}/>
            <Route path="/uploadmultiimages" element={<UploadMultiImages/>}/>
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default ReactTableApp;
