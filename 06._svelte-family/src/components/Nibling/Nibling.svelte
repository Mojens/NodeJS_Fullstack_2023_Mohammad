<script>
    export let nibling;
</script>

{#if nibling.isGirl}
    <p>Niece: {nibling.name}</p>
{:else}
    <p>Nephew: {nibling.name}</p>
{/if}
