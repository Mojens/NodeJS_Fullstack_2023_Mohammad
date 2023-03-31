<script>
    import Nibling from "../Nibling/Nibling.svelte";

    export let name;
    export let niblings = [];

    let cookies = ["🍪", "🍪", "🍪", "🍪", "🍪"];

    function handleShowLove(message) {
        console.log(message);
    }

    function askForAllowance(message) {
        console.log(message);
    }

    function onEatCookie(nibling) {
        if (cookies.length === 0) {
            console.log("awwww, there is no more cookies left my child");
        } else {
            cookies.pop();
            cookies = [...cookies];
            console.log("Have a cookie my child 🍪");
            nibling.cookies.push("🍪");
        }
    }
</script>

<h2>
    {name}
</h2>
<p>
    Cookie Jar:
    {#each cookies as cookie}
        {cookie}
    {/each}
</p>

{#each niblings as nibling (nibling.id)}
    <Nibling
        {nibling}
        onShowLove={handleShowLove} piblingName={name}
        askForAllowance = {askForAllowance} 
        onEatCookie = {onEatCookie} nibling={nibling}
    />
{/each}
