'use client'
import API from "./Api";

export const sqlCalculatePrice = (data: any) => {
  return API({
    method: "POST",
    data: data,
    url: "/sql/calculate-price",
  });
};