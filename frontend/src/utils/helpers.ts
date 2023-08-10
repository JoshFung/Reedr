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
