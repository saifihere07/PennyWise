import { config } from "dotenv";

config({ path: ".env.local" });
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",

  dbCredentials: {
    url:process.env.DATABASE_URL
  },
};
