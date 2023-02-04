import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { useAsyncDebounce } from "react-table";

// const ColumnFilter = ({column}) => {
//   const {filterValue, setFilter} = column;

//   return (
//     <>
//       <Input
//         htmlSize={5}
//         width="auto"
//         placeholder="Search"
//         value={filterValue || ""}
//         onChange={e=>setFilter(e.target.value)}
//       />
//     </>
//   );
// };

// export default ColumnFilter;

const ColumnFilter = ({ column }) => {
  const {filterValue, setFilter} = column;

  const [value, setValue] = useState(filterValue);

  const onChange = useAsyncDebounce((val) => {
    setFilter(val || undefined);
  }, 500);

  return (
    <>
      <Input
        htmlSize={5}
        width="auto"
        placeholder="Search"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </>
  );
};

export default ColumnFilter;
