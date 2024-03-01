<script lang="ts">
    import { onMount } from "svelte";
    import Header from "$lib/components/header.svelte"
    import Message from "$lib/components/message.svelte"

    let messages = null
    onMount(async () => {
        const resp = await fetch("/api/message/");
        messages = await resp.json();
    })
</script>

<Header/>

{#if messages}
    {#each messages.messages as message, i}
        <Message {message}/>
    {/each}
{:else}
    <p>loading</p>
{/if}
