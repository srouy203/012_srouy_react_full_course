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
  useColorModeValue,
} from "@chakra-ui/react";
import { useTable, useRowSelect } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { CheckBox } from "./7.1 Check Box";

const SelectingRows = () => {
  const bgTable = useColorModeValue("gray.200", "RGBA(0, 0, 0, 0.48)");

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    selectedFlatRows,
    rows
  } = useTable(
    {
      columns,
      data,
    },
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => {
              <CheckBox {...getToggleAllRowsSelectedProps()} />;
            },
            Cell: ({ row }) => (
              <CheckBox {...row.getToggleRowSelectedProps()} />
            )
          },
          ...columns,
        ];
      });
    }
  );

  const firstPageRows = rows.slice(0,10)
  return (
    <Box>
      <Text fontSize="4xl" align="center" mb="20px">
        Selecting Rows Table
      </Text>

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
          {firstPageRows.map((row) => {
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
      {JSON.stringify(
        {
          selectedFlatRows: selectedFlatRows.map((row) => row.original),
        },
        null,
        2
      )}
    </Box>
  );
};

export default SelectingRows;
