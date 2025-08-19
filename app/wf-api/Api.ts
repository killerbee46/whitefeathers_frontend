import axioss, { AxiosError } from "axios";
// import { environment } from "Config/environment";
import { buildWebStorage, setupCache } from "axios-cache-interceptor";

import { requestLogout } from "./AuthApi";

export const baseUrl = "http://localhost:8080";
// Same object, new types.
export const axios: any = setupCache(axioss, {
    debug: console.log,
    methods: ["get"],
    // storage: buildWebStorage(window?.localStorage, "axios-cache:"),
    // storage: buildMemoryStorage(
    //   /* cloneData default=*/ false,
    //   /* cleanupInterval default=*/ false,
    //   /* maxEntries default=*/ false
    // ),
    ttl: 1000 * 60 * 5,
});
// const getToken = () => {
//     let token: any = false;
//     let auths = window?.localStorage.getItem("token") || "";

//     try {
//         token = auths;
//     } catch (error) {
//         requestLogout()
//     }
//     return token;
// };
// export const getUserId = () => {
//     let id: any = false;
//     try {
//         id = window?.localStorage.getItem("auths")
//             ? JSON.parse(window?.localStorage.getItem("auths") || "")?.id
//             : "";
//     } catch (error) {
//         console.log(error);
//     }
//     return id;
// };

// export const getTeamId = () => {
//     let id: any = false;
//     try {
//         id = JSON.parse(window?.localStorage.getItem("auths") || "")?.user?.team?.id;
//     } catch (error) {
//         console.log(error);
//     }
//     return id;
// };

// export const getUserName = () => {
//     let id: any = false;
//     try {
//         id = window?.localStorage.getItem("auths")
//             ? JSON.parse(window?.localStorage.getItem("auths") || "")?.fullname
//             : "";
//     } catch (error) {
//         console.log(error);
//     }
//     return id;
// };

// export const getRole = () => {
//     var role: any = "";
//     try {
//         role = window?.localStorage.getItem("auths")
//             ? JSON.parse(window?.localStorage.getItem("auths") || "")?.roles
//             : [];
//     } catch (error) {
//         console.log(error);
//     }
//     return role;
// };

// export const getUserDetails = () => {
//     let details: any = false;
//     try {
//         details = JSON.parse(window?.localStorage.getItem("auths") || "");
//     } catch (error) {
//         console.log(error);
//     }
//     return details;
// };


// export const getAuths = () => {
//     return JSON.parse(window?.localStorage.getItem("auths") || "") || false;
// };

const API = axios.create({
    baseURL: `${baseUrl}/api`,
});
export const MediaAPI = axios.create({
    baseURL: `${baseUrl}`,
});

// ({
//   baseURL: `${baseUrl}`,
// });

axios.interceptors.request.use(
    async (config: any) => {
        config.headers = {
            // Authorization: `Bearer ${getToken()}`,
            "Content-Type": "application/json",
        };
    },

    (error:any) => {
        Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response:any) => {
        // removeCacheOnResponse(response);
        return response;
    },
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            // window.location.reload()
            requestLogout();
        }
        return Promise.reject(error);
    }
);

export const MediaApis = axios.create({
    baseURL: baseUrl,
});

//API for media upload
MediaApis.interceptors.request.use(
    async (config: any) => {
        config.headers = {
            // Authorization: `Bearer ${getToken()}`,
            "Content-Type": "multipart/form-data",
        };
        return config;
    },
    (error:any) => {
        Promise.reject(error);
    }
);

export default API;
