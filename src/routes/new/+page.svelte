<script lang="ts">
    import Header from "$lib/components/header.svelte"
    import { goto } from '$app/navigation';

    let nameInput = "";
    let messageInput = "";

    async function onSubmit() {
        if(nameInput && messageInput) {
            let req = {
                method:'POST',
                body: JSON.stringify({
                    author: nameInput,
                    content: messageInput
                })
            };
            await fetch("/api/message", req);
            goto("/");
        }
    }
</script>

<div class="new-message">
    <label for="name">Name:</label>
    <input id="name-input" name="name" bind:value={nameInput} type="text"/>
    <br>
    <label for="message">Message:</label>
    <input id="message-input" name="message" bind:value={messageInput} type="text"/>
    <br>
    <button id="submit-button"value="Submit" on:click={async () => {await onSubmit()}}>Submit</button>
</div>
