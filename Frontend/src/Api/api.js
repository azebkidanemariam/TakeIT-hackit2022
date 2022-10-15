import axios from "axios";

/* const APIUser = axios.create({ baseURL: `http://localhost:3000/users` }); */

export const GetAllUsers = () => {
  try {
  } catch (error) {}
  axios.get("http://localhost:3000/users").then(function (resp) {
    console.log(response);
  });

  return response;
};
