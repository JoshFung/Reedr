import axios, { AxiosResponse } from "axios";

export const fetchItemById = (id: string) => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((response: AxiosResponse) => {
      console.log("itemService - Fetch Item by Id");
      return response.data;
    })
    .catch((error) => {
      console.error("itemService - Fetch Item by Id FAILED");
      console.error(error);
      throw new Error("Failed to fetch item by id");
    });
};
