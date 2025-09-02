// GUI Pages
export const LANDING_PATH = "/";
export const AUTH_PATH = "/auth";
export const SIGNOUT_PATH = "/signout";
export const LIST_PATH = "/list";

// Network
export const EXPIRED_TOKEN_TEXT = "Token is expired";
export const SUCCESS_TEXT = "Success";
export const BAD_REQUEST_TEXT =
  "Bad Request";
export const NOT_FOUND_TEXT = "Not Found";
export const SERVER_INTERNAL_ERROR_TEXT =
  "Internal Server Error";

// iAuthen
export const IAUTHEN_WRONG_USERNAME_PASSWORD_TEXT =
  "Invalid Username or Password";
export const IAUTHEN_PASSWORD_EXPIRED_TEXT =
  "Token Expired";
export const IAUTHEN_NEW_USER_TEXT =
  "New User Detected";

// Notification Config
export const DEFAULT_NOTIFICATION_CONFIG = {
  style: {
    top: 75, // px
  },
  duration: 5, // second
};

// Storages
export const STORAGE_KEY_TOKEN = "tkn";
export const STORAGE_KEY_EMPLOYEE_INFO = "emi";
export const STORAGE_KEY_IS_EXISING_USER = "eusr";
export const COOKIES_OPTIONS = { expires: 15 / 24 / 60 }; // 15 Minutes