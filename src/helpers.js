export const checkUser = () => {
  const result = localStorage.getItem("token");
  const token = JSON.parse(result);
  if (token) {
    return true;
  } else {
    return false;
  }
};
