<script>
    import { refrigeratorMessages } from "../../store/refrigeratorMessages.js";

    function eraseRefrigeratorMessages() {
        refrigeratorMessages.set([]);
    }

</script>

<p>--------------------------------</p>
<p>|
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Welcome 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
<p>--------------------------------</p>



<h5>{$refrigeratorMessages}</h5>
<button on:click={eraseRefrigeratorMessages}>Erase Messages</button>


<slot>

</slot>