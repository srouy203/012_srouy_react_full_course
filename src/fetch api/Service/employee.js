import { API_URL } from "../constants/app";
import { headersJsonToken } from "./requestHeaders";

export const getEmployee = async (payload) => {
  let res = await fetch(`${API_URL}/employee/list`, {
    method: "POST",
    headers: headersJsonToken(),
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      let ComData = [];
      data.body.data.forEach((data, i) => {
        ComData.push({
          n: i + 1,
          id: data.id,
          code: data.employeeCode,
          company: { value: data.companyId, label: data.companyName },
          nameEn: data.nameEn,
          nameKh: data.nameKh,
          position: data.position,
          email: data.email,
          status: data.employeeStatus,
          date: data.startWorkingDate,
          image: data.photo,
          tel: data.telephone.replace(
            /(\d{3})(\d{2})(\d{3})(\d{3})/,
            "$1 $2 $3 $4"
          ), // give space between number
          workPhone: data.workPhone,
          uuid: data.uuid,
          social: data.employeeSocialResponses.map((data) => data.url),
        });
      });
      return ComData;
    });
  return res;
};
