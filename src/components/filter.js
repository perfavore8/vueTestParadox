export const filter = (arr, str) => {
  const result = [];
  arr.forEach((item) => {
    let fullString = item.title + " " + item.name;
    const splitString = fullString.split(" ").map((val) => val.toUpperCase());
    splitString.forEach((val) => {
      if (val.includes(str.toUpperCase())) result.push(item.id);
    });
  });
  return result;
};
