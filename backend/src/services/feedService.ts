import axios, { AxiosResponse } from "axios";

export const fetchTopStories = () => {
  return axios
    .get("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((response: AxiosResponse) => {
      // console.log("feedService - Fetch Top Stories");
      return response.data;
    })
    .catch((error) => {
      console.error("feedService - Fetch Top Stories FAILED");
      console.error(error);
      throw new Error("Failed to fetch top stories");
    });
};
