export const sortByDate = (arr) => {
  const copy = [...arr];
  copy.sort((a, b) => b.date - a.date);
  return copy;
};
