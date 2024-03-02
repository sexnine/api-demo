<script lang="ts">
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import Message from "$lib/components/message.svelte"

    let id: number = -1;
    let message = null;
    onMount(async () => {
        id = parseInt($page.params.id);
          if (isNaN(id)) {
            error(400, "ID must be a number");
          }
        const resp = await fetch(`/api/message/${id}`);
        message = await resp.json();
    })
</script>

<div>
    {#if message}
        <Message {message}/>
    {:else}
        <p>loading</p>
    {/if}

</div>
