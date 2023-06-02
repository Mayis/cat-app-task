import axios, { AxiosRequestConfig } from "axios";

export default async function request(
  method: string,
  url: string
): Promise<any> {
  const options: AxiosRequestConfig = {
    method,
    url,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
