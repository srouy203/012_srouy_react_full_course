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
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTable, useColumnOrder } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const ColumnOrder = () => {
  const bgTable = useColorModeValue("gray.200", "RGBA(0, 0, 0, 0.48)");

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
    setColumnOrder,
  } = useTable(
    {
      columns,
      data,
    },
    useColumnOrder
  );

  const orderColumn = () => {
    setColumnOrder([
      "id",
      "first-name",
      "last-name",
      "country",
      "gender",
      "email",
      "date",
    ]);
  };
  return (
    <Box>
      <Text fontSize="4xl" align="center">
        Order Column
      </Text>
      <Button mb="10px" onClick={orderColumn}>
        Order Column
      </Button>

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
      </Table>
    </Box>
  );
};

export default ColumnOrder;
