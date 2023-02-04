import React from "react";
import FetchAPIApp from "./Fetch API App";
import { QueryClientProvider, QueryClient } from "react-query";
const FetchapiIndex = () => {
    const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <FetchAPIApp />
      </QueryClientProvider>
    </div>
  );
};

export default FetchapiIndex;
