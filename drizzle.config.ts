import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: "./src/lib/server/db/schema.ts",
    driver: "better-sqlite",
    dbCredentials: {
        url: 'sqlite.db',
    },
})
