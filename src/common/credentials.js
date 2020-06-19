if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

export const CLIENT_ID = process.env.CLIENT_ID;
export const CLIENT_SECRET = process.env.CLIENT_SECRET;
export const REDIRECT_URIS = "http://localhost:8000/sign-in-callback";
export const JWT_SECRET = process.env.JWT_SECRET;
