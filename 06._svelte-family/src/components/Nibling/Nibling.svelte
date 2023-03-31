<script>
    import { refrigeratorMessages } from "../../store/refrigeratorMessages.js";

    export let nibling;
    export let onShowLove;
    // Function reference to the parent component's function
    export let piblingName;
    export let askForAllowance;
    export let onEatCookie;

    let refrigeratorMessage = "";

    function writeRefrigeratorMessage() {
        // $refrigeratorMessages.push(refrigeratorMessage);
        // refrigeratorMessages.set($refrigeratorMessages)
        refrigeratorMessages.update(currentMessages => {
            currentMessages.push(refrigeratorMessage)
            return currentMessages;
        });
        console.log(refrigeratorMessage);
        refrigeratorMessage = "";

    }
</script>

<div
    class:is-girl={nibling.isGirl}
    class:is-boy={!nibling.isGirl}
    class={nibling.blackSheep || "not-a-black-sheep"}
>
    {#if nibling.isGirl}
        <p>Niece: {nibling.name}</p>
    {:else}
        <p>Nephew: {nibling.name}</p>
    {/if}
</div>
<p>{nibling.cookies}</p>

<button
    on:click={() =>
        onShowLove(
            `Hey ${piblingName}. It's me ${nibling.name}, and I love you.`
        )}
>
    Show love
</button>
<button
    on:click={() =>
        askForAllowance(
            `Hey ${piblingName}. It's me ${nibling.name}, can i get some money?.`
        )}
>
    Ask for allowance
</button>

<button on:click={() => onEatCookie()}>Eat a cookie</button>

<p>There are {$refrigeratorMessages.length} messages on the fridge.</p>


<input bind:value={refrigeratorMessage}>
<button on:click={writeRefrigeratorMessage}>Write a message on the fridge</button>

<style>
    .is-girl {
        border: 3px solid pink;
    }
    .is-boy {
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
