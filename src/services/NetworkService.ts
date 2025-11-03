import axios from "axios";
import { BaseUrl } from "../utils/Config";

export const apiRequest = async (
  endPoint: string,
  method: string,
  data?: any
) => {
  //  console.log('globalThis.authToken', globalThis.authToken)
  const isFormData = data instanceof FormData;

  const headers: any = {
    Authorization: "Bearer " + globalThis.authToken,
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  const response = await axios({
    url: `${BaseUrl}${endPoint}`,
    method: method,
    headers: headers,
    data: data,
  });

  return response;
};
