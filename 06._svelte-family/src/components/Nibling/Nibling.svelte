<script>

    export let nibling;
    export let onShowLove;
    // Function reference to the parent component's function
    export let piblingName;
    
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
<button on:click={() => onShowLove(`Hey ${piblingName}. It's me ${nibling.name}, and I love you.`)}>
    Show love
</button>

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