import axios, { AxiosResponse } from "axios";

export const fetchTopStories = () => {
  console.log("SERVICE: FETCHING TOP STORIES");
  return axios
    .get("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((response: AxiosResponse) => {
      // console.log("feedService - Fetch Top Stories");
      console.log("SERVICE: RETRIEVED TOP STORIES AND RETURNING TO CONTROLLER");
      return response.data;
    })
    .catch((error) => {
      console.error("feedService - Fetch Top Stories FAILED");
      console.error(error);
      throw new Error("Failed to fetch top stories");
    });
};

export const fetchNewStories = () => {
  return axios
    .get("https://hacker-news.firebaseio.com/v0/newstories.json")
    .then((response: AxiosResponse) => {
      // console.log("feedService - Fetch New Stories");
      return response.data;
    })
    .catch((error) => {
      console.error("feedService - Fetch New Stories FAILED");
      console.error(error);
      throw new Error("Failed to fetch new stories");
    });
};

export const fetchBestStories = () => {
  return axios
    .get("https://hacker-news.firebaseio.com/v0/beststories.json")
    .then((response: AxiosResponse) => {
      // console.log("feedService - Fetch Best Stories");
      return response.data;
    })
    .catch((error) => {
      console.error("feedService - Fetch Best Stories FAILED");
      console.error(error);
      throw new Error("Failed to fetch best stories");
    });
};

export const fetchAskStories = () => {
  return axios
    .get("https://hacker-news.firebaseio.com/v0/askstories.json")
    .then((response: AxiosResponse) => {
      // console.log("feedService - Fetch Ask Stories");
      return response.data;
    })
    .catch((error) => {
      console.error("feedService - Fetch Ask Stories FAILED");
      console.error(error);
      throw new Error("Failed to fetch ask stories");
    });
};

export const fetchShowStories = () => {
  return axios
    .get("https://hacker-news.firebaseio.com/v0/showstories.json")
    .then((response: AxiosResponse) => {
      // console.log("feedService - Fetch Show Stories");
      return response.data;
    })
    .catch((error) => {
      console.error("feedService - Fetch Show Stories FAILED");
      console.error(error);
      throw new Error("Failed to fetch show stories");
    });
};

export const fetchJobStories = () => {
  return axios
    .get("https://hacker-news.firebaseio.com/v0/jobstories.json")
    .then((response: AxiosResponse) => {
      // console.log("feedService - Fetch Job Stories");
      return response.data;
    })
    .catch((error) => {
      console.error("feedService - Fetch Job Stories FAILED");
      console.error(error);
      throw new Error("Failed to fetch job stories");
    });
};
