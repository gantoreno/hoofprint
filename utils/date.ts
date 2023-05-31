export const getFormattedDate = () => {
  return new Date()
    .toISOString()
    .replace("T", " ")
    .replace(/\.(.*)$/, "");
};
