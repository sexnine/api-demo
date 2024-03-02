<script lang="ts">
    import { goto } from "$app/navigation";
    import type { Message } from "$lib/types";

    export let message: Message;

    function clicked () {
        goto(`/message/${message.id}`);
    }
</script>

<div
    class="message"
    on:click={clicked}
    on:keydown={(e) => e.key === "Enter" && clicked()}
    role="button"
    tabindex="0"
>
    <h2 class="message-author">{message.author}</h2>
    <p class="message-content">{message.content}</p>
</div>
