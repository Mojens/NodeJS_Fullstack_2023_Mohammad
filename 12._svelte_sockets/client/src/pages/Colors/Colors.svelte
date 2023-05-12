<script>
    import io from "socket.io-client";
    import { colorsList, myUserName } from "../../stores/globalStore.js";

    const socket = io("http://localhost:8080/");

    let colorCode = "#000000";
  
    function handleColorChoosen() {
      socket.emit("chosen color", ({ color: colorCode, username: $myUserName }));
    }

    socket.on("a new color just dropped",(data) => {
        colorsList.update(list => {
        list.push({
            color: data.color,
            username: data.username
        });
        return list;
      })
    })

  </script>
  
  <input type="color" bind:value={colorCode} />
  <button on:click={handleColorChoosen}>Sender Color</button>
  