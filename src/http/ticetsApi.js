import { URL } from "./index";

export const getId = async () => {
  const { data } = await URL.get("search");
  return data;
};

export const getTicets = async (searchId) => {
  const { data } = await URL.get(`tickets`, {
    params: {
      searchId,
    },
  });

  return data;
};

// export const getcarrierPng = async (idPng) => {
//   const { data } = await carrierPng.get(`/${idPng}.png`);
//   return data;
// };
