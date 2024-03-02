<script lang="ts">
    import { goto } from '$app/navigation';

    let nameInput = "";
    let messageInput = "";

    async function onSubmit() {
        if (nameInput && messageInput) {
            await fetch("/api/message", {
                method:'POST',
                body: JSON.stringify({
                    author: nameInput,
                    content: messageInput
                })
            });

            goto("/");
        }
    }
</script>

<div class="new-message">
    <label for="name-input">Name:</label>
    <input id="name-input" name="name" bind:value={nameInput} type="text" />
    <br>
    <label for="message-input">Message:</label>
    <input id="message-input" name="message" bind:value={messageInput} type="text" />
    <br>
    <button id="submit-button" value="Submit" on:click={onSubmit}>Submit</button>
</div>
