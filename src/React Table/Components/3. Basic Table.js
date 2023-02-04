import React, { useMemo } from "react";
import {
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Box,
  Tfoot,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS, GROUP_HEADER } from "./columns";
// import XLSX from "xlsx";
import * as XLSX from "xlsx/xlsx.mjs";
const BasicTable = () => {
  const bgTable = useColorModeValue("gray.200", "RGBA(0, 0, 0, 0.48)");

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({
    columns,
    data,
  });

  const handleOnExport = () => {
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");

    XLSX.writeFile(wb, "MyFile.xlsx");
  }

  return (
    <Box>
      <Text fontSize="4xl" align="center">
        Basic Table
      </Text>
      <Button colorScheme="red" mb="5px" onClick={handleOnExport}>Export</Button>
      <Table {...getTableProps()}>
        <Thead bgColor={bgTable}>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
              ))}
            </Tr>
          ))}
        </Thead>

        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>

        <Tfoot bg="green.200">
          {footerGroups.map((footerGroup) => (
            <Tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <Td {...column.getFooterProps()}>{column.render("Footer")}</Td>
              ))}
            </Tr>
          ))}
        </Tfoot>
      </Table>
    </Box>
  );
};

export default BasicTable;
