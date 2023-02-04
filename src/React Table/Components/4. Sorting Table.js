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
} from "@chakra-ui/react";
import { useTable, useSortBy } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const SortingTable = () => {
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
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  return (
    <Box>
      <Text fontSize="4xl" align="center">
        Sorting Table
      </Text>

      <Table {...getTableProps()}>
        <Thead bgColor={bgTable}>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowUpIcon />
                      ) : (
                        <ArrowDownIcon />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </Th>
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

export default SortingTable;
