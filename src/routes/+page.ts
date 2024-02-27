import type {PageLoad} from './$types';

type Message = {
    id: number;
    author: string;
    content: string;
}

export const load: PageLoad = async () => {
    const res = await fetch("https://swapi.dev/api/people/1/");
    const messages = await res.json();
    return {messages}
}
