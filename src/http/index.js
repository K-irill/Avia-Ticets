import axios from "axios";

const URL = axios.create({
  baseURL: "https://front-test.beta.aviasales.ru/",
});

// const carrierPng = axios.create({
//   baseURL: "//pics.avs.io/99/36",
// });

export { URL };
