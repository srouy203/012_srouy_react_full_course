import { useQuery } from "react-query";
import axios from "axios";
// import {request} from '../utills/axios-utills.js'


const fetching_data = () => {
  return axios.get("http://localhost:3000/students");
    // return request({url: '/students'});
};

export const useFetchStudentData = (onSuccess, onError) => {
  return useQuery("student", fetching_data, {
    onSuccess,
    onError,
  });
};
