import {storage} from '../helpers/index'
export const headersJsonToken = () => {
  const accessToken = storage.getToken();

  return {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `bearer ${accessToken}`,
  };
};
