import { useQuery} from "react-query";
import { getEmployee } from "../Service/employee";

export const useFetchEmployee = ({ payload, config }) => {
  return useQuery(
    ["GET_EMPLOYEES", payload],
    () => getEmployee(payload),
    config
  );
};
