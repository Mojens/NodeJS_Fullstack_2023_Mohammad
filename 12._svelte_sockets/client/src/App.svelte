<script>
    import { onMount } from "svelte";
    import { BASE_URL, myUserName } from "./stores/globalStore.js";
    import Colors from "./pages/Colors/Colors.svelte";
    import { Router, Link, Route } from "svelte-navigator";
    import Register from "./pages/Register/Register.svelte";
    import ChoosenColorsList from "./components/ChoosenColorsList/ChoosenColorsList.svelte";

    onMount(async () => {
        const response = await fetch($BASE_URL + "/users/me", {
            credentials: "include",
        });
        const data = await response.json();
        myUserName.set(data.data);
    });
</script>

{#if $myUserName}
    <h1>Hello {$myUserName}</h1>
    <Colors />
    <ChoosenColorsList />
{:else}
    <Register />
{/if}
