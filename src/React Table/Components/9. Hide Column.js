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
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { CheckBox } from "@mui/icons-material";

const HideColumn = () => {
  const bgTable = useColorModeValue("gray.200", "RGBA(0, 0, 0, 0.48)");

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,

    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable({
    columns,
    data,
  });
  return (
    <Box>
      <Text fontSize="4xl" align="center">
        Basic Table
      </Text>
      <Box>
        <CheckBox {...getToggleHideAllColumnsProps()} /> Toggle All
      </Box>
      {allColumns.map((column) => (
        <div key={column.id}>
          <label>
            <input type="checkbox" {...column.getToggleHiddenProps()} />
            {column.Header}
          </label>
        </div>
      ))}

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

export default HideColumn;
