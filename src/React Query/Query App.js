import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/2. Navbar";
import StudentPages from "./components/3. Student pages";
import Home from "./components/1. Home";
import FetchData from "./components/4. Fetch Data";
import TransformData from "./components/5. Transform Data";
import StudentDetail from "./components/6. Student Detail";
import ParallelQueries from "./components/7. Parallel Queries";
import DynamicParallelQueries from "./components/8. Dynamic Parallel Queries";
import DependentQueries from "./components/9. Dependent queries";
import PaginatedQueries from "./components/10. Paginated Queries";
import InfiniteQueries from "./components/11. Infinite Queries";
import { ChakraProvider } from "@chakra-ui/react";
import MutationEdit from "./components/12. Mutation Edit";
import Crud from "./CRUD/Crud";
import Edit from "./CRUD/Edit";

const queryClient = new QueryClient();
const QueryApp = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/student" element={<StudentPages />} />
              <Route path="/fetchdatastudent" element={<FetchData />} />
              <Route path="/tranformation" element={<TransformData />} />
              <Route path="/fetchdatastudent/:id" element={<StudentDetail />} />
              <Route path="/parallel" element={<ParallelQueries />} />
              <Route
                path="/dynamicparallel"
                element={<DynamicParallelQueries stuIds={[2, 4, 5]} />}
              />
              <Route
                path="/dependentqueries"
                element={<DependentQueries userId="leangsrouyang@gmail.com" />}
              />
              <Route path="/paginated-queries" element={<PaginatedQueries />} />
              <Route path="/infinite-queries" element={<InfiniteQueries />} />
              <Route path="/mutation-edit/:id" element={<MutationEdit />} />
              <Route path="/crud-query" element={<Crud />} />
              <Route path="/edit-teacher/:id" element={<Edit />} />
            </Routes>
          </AnimatePresence>
        </Router>

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default QueryApp;
