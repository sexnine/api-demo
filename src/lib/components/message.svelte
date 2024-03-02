<script lang="ts">
    import { goto } from '$app/navigation';

    export let message = null;
    function clicked () {
        goto(`/message/${message.id}`)
    }
</script>

<div class="message" on:click={() => {clicked()}}>
    {#if message}
        <h2 class="message-author">{message.author}</h2>
        <p class="message-content">{message.content}</p>
    {:else}
        <p class="loading">loading</p>
    {/if}
</div>
