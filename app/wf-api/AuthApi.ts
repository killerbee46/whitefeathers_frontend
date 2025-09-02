'use client'
import API from "./Api";

export const requestLogin = (data: any) => {
  return API({
    method: "POST",
    data: data,
    url: "/auth/login",
  });
};

export const requestRegister = (data: any) => {
  return API({
    method: "POST",
    data: data,
    url: "/auth/register",
  });
};

export const storeLogin = (data:any) => {
  localStorage.setItem('user',JSON.stringify(data?.data?.user))
  localStorage.setItem("token",data?.data?.token);
  localStorage.setItem("loggedIn",'true');
}

// export const getToken = () => {
//   const token = localStorage.getItem('token') || ""
//   return token
// }

// export const localUser = () => {
//   const temp = localStorage.getItem('user') || "{}"
//   const user = JSON.parse(temp)
//   return user
// }

export const requestLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("loggedIn");
  localStorage.removeItem('user')
  window.location.href = "/";
};
