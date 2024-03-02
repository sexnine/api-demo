import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
    schema: "./src/lib/server/db/schema.ts",
    driver: "turso",
    dbCredentials: {
        url: process.env.SECRET_DB_URL,
        authToken: process.env.SECRET_DB_TOKEN,
    },
});
