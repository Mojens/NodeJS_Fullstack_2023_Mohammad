<script>
    export let nibling;
    
</script>

<div 
class:is-girl={nibling.isGirl} 
class:is-boy={!nibling.isGirl} 
class={nibling.blackSheep || "not-a-black-sheep"}>
    {#if nibling.isGirl}
        <p>Niece: {nibling.name}</p>
    {:else}
        <p>Nephew: {nibling.name}</p>
    {/if}
</div>

<style>
    .is-girl{
        border: 3px solid pink;
    }
    .is-boy{
        border: 3px solid blue;
    }
    .medium-black-sheep {
        background-color: burlywood;
        color: white;
    }
    .ultra-black-sheep {
        background-color: brown;
        color: white;
        font-weight: bold;
    }
    .not-a-black-sheep {
        background-color: aliceblue;
        color: black;
    }
</style>