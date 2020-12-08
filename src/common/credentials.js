require("dotenv").config();

export const CLIENT_ID = process.env.CLIENT_ID;
export const CLIENT_SECRET = process.env.CLIENT_SECRET;
export const REDIRECT_URIS =
  process.env.NODE_ENV === "production"
    ? "/auth/sign-in-callback"
    : "http://localhost:8000/auth/sign-in-callback";
export const JWT_SECRET = process.env.JWT_SECRET;

export const FITBIT_CLIENT_ID = process.env.FITBIT_CLIENT_ID;
export const FITBIT_CLIENT_SECRET = process.env.FITBIT_CLIENT_SECRET;
