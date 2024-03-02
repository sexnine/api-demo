import { messages as messagesTable } from "$lib/server/db/schema";
import { db } from "$lib/server/db";
import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { eq } from "drizzle-orm";

export const GET: RequestHandler = async ({ params }) => {
    const id = parseInt(params.id);
    if (isNaN(id)) {
        error(400, "ID must be a number");
    }

    const messages = await db
        .select()
        .from(messagesTable)
        .where(eq(messagesTable.id, id));

    const message = messages[0];
    if (message) {
        error(404, "Message not found");
    }

    return json(message);
};
l