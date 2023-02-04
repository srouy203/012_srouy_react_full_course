import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { request } from "../utills/axios-utills";
import axios from "axios";

const add_data = (data) => {
  // return axios.post('http://localhost:3000/students', data);
  return request({ url: "/students", method: "post", data: data });
};

const delete_data = (id) => {
  return request({ url: `/students/${id}`, method: "delete" });
  // return axios.delete(`http://localhost:3000/students/${id}`);
};

const edit_data = ({ id, data }) => {
  // return request({ url: `/students/${id}`, method: "put", data: data });
  return axios.put(`http://localhost:3000/students/${id}`, data);
};

//Input
export const useAddStudent = () => {
  const queryClient = useQueryClient();

  return useMutation(add_data, {
    //1. query invalidation

    onSuccess: () => {
      queryClient.invalidateQueries("student");
    },

    //2. handle Mutation Response

    // onSuccess: (data)=>{
    //     queryClient.setQueriesData('student', (oldQueryData) =>{
    //         return{
    //             ...oldQueryData,
    //             data: [...oldQueryData.data, data.data],
    //         }
    //     })
    // }

    //Optimistic Updates

    // onMutate: async (newStu) => {
    //     await queryClient.cancelMutations("student")
    //     const previosStudent = queryClient.getQueryData("student")
    //     queryClient.setQueryData("student", (oldQueryData)=>{
    //         return{
    //             ...oldQueryData,
    //             data: [
    //                 ...oldQueryData.data,
    //                 {id: oldQueryData?.data?.length + 1, ...newStu}
    //             ],
    //         }
    //     })
    //     return{
    //         previosStudent,
    //     }
    // },
    // onError: (_error, _student, context) => {
    //     queryClient.setQueriesData('student', context.previosStudent)
    // },
    // onSettled: () => {
    //     queryClient.invalidateQueries('student');
    // },
  });
};

//Delete
export const useDeleteStudent = () => {
  const queryClient = useQueryClient();

  return useMutation(delete_data, {
    onSuccess: () => {
      queryClient.invalidateQueries("student");
    },
  });
};

//Update
export const useEditStudent = () => {
  const queryClient = useQueryClient();

  return useMutation(edit_data, {
    onSuccess: () => {
      queryClient.invalidateQueries("student");
    },
  });
};
