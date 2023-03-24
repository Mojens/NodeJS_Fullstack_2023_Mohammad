<script>
    import Bird from "./Bird.svelte";

    const birds = ["Pigeon", "Crow", "Robin", "Eagle", "Owl"];
    const birdEmoji = ["🕊️", "🐦", "🐤", "🦅", "🦉"];

    let birdIndex = 0;
    let favoriteBird = birds[birdIndex];
    let favoriteEmoji = birdEmoji[birdIndex];

    function changeFavoriteBird() {
        birdIndex = (birdIndex + 1) % birds.length;
        favoriteBird = birds[birdIndex];
        favoriteEmoji = birdEmoji[birdIndex];
    }
</script>

<div on:click={changeFavoriteBird} on:keydown={changeFavoriteBird}>
    <h2>Your favorite bird</h2>

    <Bird name={favoriteBird} emoji={favoriteEmoji} />
</div>

<h2>All Birds that i know of</h2>
{#each birds as bird}
    <Bird name={bird} emoji={birdEmoji[birds.indexOf(bird)]} />
{/each}


<style>
    div,
    h2 {
        user-select: none;
    }
</style>
