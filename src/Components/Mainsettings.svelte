<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  import { plugins } from "../config";
  //--------------------------------------------------------
  function handlePlugins(index, toggle) {
    if (!toggle) {
      $plugins[index].enabledByDefault = true;
    } else {
      $plugins[index].enabledByDefault = false;
    }
  }
  //---------------------------------------------------------
  let toggleOriginal = false;
  function handelOriginal() {
    toggleOriginal = !toggleOriginal;
    dispatch("original", toggleOriginal);
  }
</script>

<main>
  <div class="main">
    <div class="settings">
      <section class="global">
        <h1 class="settings-sub-heading">Global settings</h1>
        <label class="setting-item-toggle">
          <input
            type="checkbox"
            name="original"
            on:click={handelOriginal}
            bind:checked={toggleOriginal}
          />
          <span class="material-switch">
            <span class="track" />
            <span class="handle" />
          </span>
          Show original
        </label>
      </section>
      <h1 class="settings-sub-heading">Features</h1>
      <div class="settings-scroller">
        <section class="plugins">
          {#each $plugins as plugin, i}
            <label class="setting-item-toggle">
              <input
                on:click={handlePlugins(i, plugin.enabledByDefault)}
                type="checkbox"
                name={plugin.id}
                bind:checked={plugin.enabledByDefault}
              />
              <span class="material-switch">
                <span class="track" />
                <span class="handle" />
              </span>
              {plugin.name}
            </label>
          {/each}
        </section>
      </div>
    </div>
  </div>
</main>

<style>
  .main {
    background: #fafafa;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 350px;
  }
  .settings-scroller {
    height: 500px;
    flex-flow: column wrap;
    overflow: auto;
  }
  .plugins {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .setting-item-toggle {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .settings-sub-heading {
    color: #333;
    font-size: 1.2rem;
    padding: 14px;
  }
  .setting-item-toggle input[type="checkbox"] {
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }

  /* switch  */
  .material-switch {
    display: block;
    width: 37px;
    height: 14px;
    position: relative;
  }
  .material-switch .track {
    border-radius: 19px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1px;
    right: 1px;
    background-color: rgba(0, 0, 0, 0.26);
    overflow: hidden;
    transform: translateZ(0);
  }
  .material-switch .track::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #9fa8da;
    opacity: 0;
    transition: opacity 0.15s ease-out;
    transform: translateZ(0);
  }
  .material-switch .handle {
    position: absolute;
    top: -3px;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: #fafafa;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5), inset 0 0 0 2px transparent;
    overflow: hidden;
    box-sizing: border-box;
    transition: transform 0.15s ease-out;
    transform: translateZ(0);
  }
  .material-switch .handle::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #3f51b5;
    opacity: 0;
    transition: opacity 0.15s ease-out;
    transform: translateZ(0);
  }
  :checked + .material-switch .track::before {
    opacity: 1;
  }
  :checked + .material-switch .handle {
    transform: translate3d(17px, 0, 0);
  }
  :checked + .material-switch .handle::before {
    opacity: 1;
  }
</style>
