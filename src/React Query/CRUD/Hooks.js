import axios from "axios";
import { useMutation, useQueryClient, useQuery } from "react-query";

const fetch_teachers = () => {
  return axios.get(`${process.env.REACT_APP_API_SERVER}/teachers`);
};

const add_teacher = (data) => {
  return axios.post("http://localhost:3000/teachers", data);
};

const delete_teacher = (id) => {
  return axios.delete(`http://localhost:3000/teachers/${id}`);
}

const fetch_teacher_detail = (id) => {
  return axios.get(`http://localhost:3000/teachers/${id}`);
}

const edit_teacher = ( {id, editData }) => {
  return axios.put(`http://localhost:3000/teachers/${id}`, editData);
};

export const FetchTeacherData = () => {
  return useQuery("teacher", fetch_teachers);
};

export const AddTeacherData = () => {
  const queryClient = useQueryClient()
  return useMutation(add_teacher, 
    {
      onSuccess: () => {
        queryClient.invalidateQueries("teacher");
      },
  });
};

export const DeleteTeacherData = () => {
  const queryClient = useQueryClient();
  return useMutation(delete_teacher,
    {
      onSuccess: ()=> {
        queryClient.invalidateQueries('teacher');
      }
    })
}

export const FetchTeacherDetail = (id) => {
  return useQuery(['teacherDetail',id], ()=>fetch_teacher_detail(id))
}


export const EditTeacherDetail = () => {
  const queryClient = useQueryClient();
  return useMutation(edit_teacher,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('teacher');
      }
    }

    )
  }