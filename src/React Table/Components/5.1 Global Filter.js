import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { useAsyncDebounce } from "react-table";

// const GlobalFilter = ({ filter, setFilter }) => {
//   return (
//     <>
//         <Input
//           htmlSize={20}
//           width="auto"
//           placeholder="Global Filter"
//           mb="20px"
//           value={filter || ""}
//           onChange={e=>setFilter(e.target.value)}
//         />
//     </>
//   );
// };

// export default GlobalFilter;

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((val) => {
    setFilter(val || undefined);
  }, 500);

  return (
    <>
      <Input
        htmlSize={20}
        width="auto"
        placeholder="Global Filter"
        mb="20px"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
      />
    </>
  );
};

export default GlobalFilter;