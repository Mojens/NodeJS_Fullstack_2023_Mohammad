<script>
    import { colorsList } from "../../stores/globalStore.js";
</script>

<div>
    {#each $colorsList as colorPick}
        <ul>
            <li>
                <div style="background-color: {colorPick.color};">
                    {colorPick.username} choose: {colorPick.color}
                </div>
            </li>
        </ul>
    {/each}
</div>
