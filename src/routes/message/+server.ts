import { db } from '$lib/server/db'
import { messages } from '$lib/server/db/schema'
import { error , json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({request}) => {
    let req;
    try {
        req = await request.json();
        await db.insert(messages).values({author:req.author, content:req.content});
    }
    catch {
        error(400, "Invalid JSON");
    }
    return json({request:req});
}
