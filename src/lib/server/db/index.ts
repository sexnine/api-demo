import * as schema from "./schema";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { SECRET_DB_TOKEN, SECRET_DB_URL } from "$env/static/private";

const sqlite = createClient({
    url: SECRET_DB_URL,
    authToken: SECRET_DB_TOKEN,
});
export const db = drizzle(sqlite, { schema });
