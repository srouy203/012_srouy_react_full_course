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
  Input,
  Select,
} from "@chakra-ui/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const PaginationTable = () => {
  const bgTable = useColorModeValue("gray.200", "RGBA(0, 0, 0, 0.48)");

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,

    state,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    pageOptions,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <Box>
      <Text fontSize="4xl" align="center" mb="20px">
        Pagination Table
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
          {page.map((row) => {
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

      <Box mt="20px" mb="50px">
        {/* -------------Show current page -------------- */}
        Page {pageIndex + 1} of {pageOptions.length} | Go to:
        <Input
          htmlSize={2}
          width="auto"
          size="sm"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const pageNum = e.target.value ? Number(e.target.value - 1) : 0;
            gotoPage(pageNum);
          }}
        />
        {/* -------------setPageSize -------*/}
        Show Page:
        <Select
          w="110px"
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}>
          {[10, 20, 30, 40, 50].map((val) => {
            return (
              <option key={val} value={val}>
                show {val}
              </option>
            );
          })}
        </Select>
        {/* ------------Button next previous and goto ------------*/}
        <Button
          leftIcon={<ArrowLeftIcon />}
          ml="300px"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}></Button>
        <Button
          leftIcon={<ArrowBackIcon />}
          ml="10px"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}>
          Previos
        </Button>
        <Button
          rightIcon={<ArrowRightIcon />}
          float="right"
          mr="200px"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}></Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          float="right"
          mr="10px"
          onClick={() => nextPage()}
          disabled={!canNextPage}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PaginationTable;
