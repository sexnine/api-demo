<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import MessageView from "$lib/components/message.svelte"
    import type { Message } from "$lib/types";

    let id: number = -1;
    let message: Message | null = null;

    onMount(async () => {
        id = parseInt($page.params.id);

        const resp = await fetch(`/api/message/${id}`);
        message = await resp.json();
    })
</script>

<div>
    {#if message}
        <MessageView {message}/>
    {:else}
        <p>loading</p>
    {/if}
</div>
