import axios from "axios";
import { Comment } from "../redux/slices/post/postSlice";

export const timeDifference = (time: number, forReader: boolean) => {
  const millisecondsTime = time * 1000;
  const diff = Date.now() - millisecondsTime;
  const timeUnitDict = forReader
    ? new Map([
        [31104000000, "year"],
        [2592000000, "month"],
        [86400000, "day"],
        [3600000, "hour"],
        [60000, "minute"],
      ])
    : new Map([
        [31104000000, "yr"],
        [2592000000, "mo"],
        [86400000, "day"],
        [3600000, "hr"],
        [60000, "min"],
      ]);

  for (let [timeUnitMilliseconds, timeUnit] of Array.from(
    timeUnitDict.entries()
  )) {
    const timeUnitCount = Math.floor(diff / timeUnitMilliseconds);

    if (timeUnitCount > 0) {
      if (forReader && timeUnitCount >= 1) {
        timeUnit += "s";
      }
      return `${timeUnitCount} ${timeUnit}`;
    }
  }

  if (forReader) {
    return `0 minutes`;
  }
  return `0 min`;
};

export const fetchCommentsHelper = async (ids: number[]) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  if (!ids) {
    return [];
  }

  try {
    const response = await Promise.all<Comment>(
      ids.map(async (id: number) => {
        const response = await axios.get(`${apiUrl}/item/comment/${id}`);
        const responseData = response.data;
        if (responseData && !responseData.dead && !responseData.deleted) {
          return responseData;
        }
      })
    );

    const data = response.filter((res) => res !== null && res !== undefined);

    return data;
  } catch {
    throw Error("Failed to fetch comments");
  }
};
