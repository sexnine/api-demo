<script lang="ts">
    import { onMount } from "svelte";
    import MessageView from "$lib/components/message.svelte"
    import type { Message } from "$lib/types";

    let messages: Message[] | null = null;

    onMount(async () => {
        const resp = await fetch("/api/message/");
        const data = await resp.json();
        messages = data.messages;
    });
</script>


<div class="messages">
    {#if messages}
        {#each messages as message}
            <MessageView {message} />
        {/each}
    {:else}
        <p>Loading...</p>
    {/if}
</div>
