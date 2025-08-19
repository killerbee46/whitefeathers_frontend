import API from "./Api";

export const getMaterials = (data: any) => {
  return API({
    method: "GET",
    data: data,
    url: "/sql/materials",
  });
};

export const getMetalsByMaterial = (data: any) => {
  return API({
    method: "GET",
    url: `sql/metals/${data?.materialId}`,
  });
};