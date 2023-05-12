<script>
    import { listen } from "svelte/internal";
    import { BASE_URL, myUserName } from "../../stores/globalStore.js";
    let username = "";

    async function handleRegistration() {
        const response = await fetch($BASE_URL + "/register", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ username }),
        });
        myUserName.set(username);
    }
</script>

<h1>PLEASE Register</h1>
<input type="text" bind:value={username} placeholder="username" />
<button on:click={handleRegistration}>Register now</button>
