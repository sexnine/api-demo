<script lang="ts">
    export let message = null;
</script>

<div class="message">
    {#if message}
        <h2 class="message-author">{message.author}</h2>
        <p class="message-content">{message.content}</p>
    {:else}
        <p class="loading">loading</p>
    {/if}
</div>
