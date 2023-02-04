import { Button } from "@chakra-ui/react";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "ID",
    accessor: "id",
    disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "FirstName",
    accessor: "first_name",
    sticky: "left",
  },
  {
    Header: "Last Name",
    Footer: "LastName",
    accessor: "last_name",
  },
  {
    Header: "Gender",
    Footer: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Date",
    Footer: "Data",
    accessor: "date",
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Action",
    Cell: ({row})=>(
      <div>
        <Button colorScheme='teal'
          onClick={()=>console.log(row.original.first_name)}
        >
          Edit
        </Button>
      </div>
    ),
  }
];


//group header
export const GROUP_HEADER = [
  {
    Header: "Id",
    Footer: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "FirstName",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "LastName",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Gender",
        Footer: "Gender",
        accessor: "gender",
      },
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Date",
        Footer: "Data",
        accessor: "date",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
    ],
  },
];
