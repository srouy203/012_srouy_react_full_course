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
  Input,
} from "@chakra-ui/react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import GlobalFilter from "./5.1 Global Filter";
import ColumnFilter from "./5.2 Column Filter";

const FilteringTable = () => {
  const bgTable = useColorModeValue("gray.200", "RGBA(0, 0, 0, 0.48)");

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(()=>{
    return {
      Filter: ColumnFilter,
    };
  },[])

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,

    setGlobalFilter,
    state,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <Box>
      <Text fontSize="4xl" align="center">
        Filtering Table
      </Text>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      <Table {...getTableProps()}>
        <Thead bgColor={bgTable}>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>
                  {column.render("Header")} 
                  <Box>{column.canFilter ? column.render('Filter') : null}</Box>
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
      </Table>
    </Box>
  );
};

export default FilteringTable;
