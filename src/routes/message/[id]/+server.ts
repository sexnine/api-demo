import { messages } from '$lib/server/db/schema';
import { db } from '$lib/server/db'
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({params}) => {
    const id = parseInt(params.id);
    if (isNaN(id)) {
        error(400, 'ID must be a number');
    }
    let message = await db.select().from(messages).where(eq(messages.id, id));
    if (!message[0]) {
        error(404, "Message not found");
    }
    return json(message[0]);
};
