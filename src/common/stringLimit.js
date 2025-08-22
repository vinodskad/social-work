// utils/stringUtils.js
export const limitString = (str, limit = 20) => {
  if (!str) return "";
  return str.length > limit ? str.slice(0, limit) + "..." : str;
};
