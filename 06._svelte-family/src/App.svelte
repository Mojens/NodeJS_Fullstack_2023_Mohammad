<script>
  import Home from "./components/Home/Home.svelte";
  import Pibling from "./components/Pibling/Pibling.svelte";

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
