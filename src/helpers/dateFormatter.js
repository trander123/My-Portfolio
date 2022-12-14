export const dateFormatter = (timestamp) => {
  const date = new Date(timestamp);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  return `${month}/${day}/${year}`;
};
