<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let toggle = false;
  function handleToggle() {
    toggle = !toggle;
    dispatch("toggle", { toggle });
  }
</script>

<main>
  <div class="toolbar">
    <label class="material-tab">
      <button on:click={handleToggle} disabled={!toggle}>Image</button>
    </label>
    <label class="material-tab">
      <button on:click={handleToggle} disabled={toggle}>Markup</button>
    </label>
  </div>
</main>

<style>
  .toolbar {
    background-color: #3f51b5;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .material-tab button {
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    width: 150px;
    height: 40px;
  }
</style>
