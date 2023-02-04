import React, { useState } from "react";
import { useFetchEmployee } from "./hooks/employee";

const FetchAPIApp = () => {
  const [debouncedText, setDebouncedText] = useState("");
  const [filter, setFilter] = useState({
    searchText: "",
    com: "",
  });

  const employeeFectch = useFetchEmployee({
    payload: {
      page: 1,
      rowsPerPage: 100,
      searchText: debouncedText,
      companyId: filter?.com?.value,
    },
    config: {
      staleTime: Infinity,
    },
  });
  console.log(employeeFectch.status);
  return (
    <div>
      <h1>FetchAPIApp</h1>
    </div>
  );
};

export default FetchAPIApp;
