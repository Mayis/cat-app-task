import axios, { AxiosRequestConfig } from "axios";

export default async function request(
  method: string,
  url: string,
  body: any
): Promise<any> {
  const options: AxiosRequestConfig = {
    method,
    url,
    data: body,
    headers: {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
