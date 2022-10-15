import axios from "axios";

/* const APIUser = axios.create({ baseURL: `http://localhost:3000/users` }); */

export function GetAllUsers() {
  console.log("get all users");
  try {
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response.data[0]);
      // console.log(response.data.email);
      // console.log(response.dataid);
    });
  } catch (error) {}

  // return response;
}

export function GetAllImages() {
  console.log("get all images");
  try {
    axios.get("http://localhost:3000/images").then((response) => {
      console.log(response.data);
      // console.log(response.data.email);
      // console.log(response.dataid);
    });
  } catch (error) {
    console.log(error);
  }

  // return response;
}
