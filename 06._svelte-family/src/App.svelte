<script>
  import { onMount } from "svelte";

  import { BASE_URL } from "./store/urlDomain.js";

  import Home from "./components/Home/Home.svelte";
  import Pibling from "./components/Pibling/Pibling.svelte";

  onMount(async () => {
    const registerURL = `${$BASE_URL}/gotham/batman?hobby=Catching the Joker`
    const response = await fetch(registerURL,{
      credentials: 'include'
    });
    const batmanRegisteredMessage = await response.json();
    console.log(batmanRegisteredMessage);


    const registeredResponse = await fetch(`${$BASE_URL}/gotham`);
    const registeredResponseMessage = await registeredResponse.json();
    console.log(registeredResponseMessage);
  });

  const piblings = ["John", "Mark"];
  const niblings = [
    {
      id: 1,
      name: "Ann",
      isGirl: true,
      amountOfMoney: 0,
      cookies: [],
    },
    {
      id: 2,
      name: "Amelie",
      isGirl: true,
      blackSheep: "medium-black-sheep",
      amountOfMoney: 0,
      cookies: [],
    },
    {
      id: 3,
      name: "Peter",
      blackSheep: "ultra-black-sheep",
      amountOfMoney: 0,
      cookies: [],
    },
  ];
</script>

<Home>
  <h3>This is the home of the svelte familiy</h3>
  <Pibling name={piblings[0]} {niblings} />
  <Pibling name={piblings[1]} {niblings} />
</Home>
