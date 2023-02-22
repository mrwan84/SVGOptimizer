<script>
  import { optimize } from "svgo/dist/svgo.browser.js";
  import { plugins } from "./config";
  import MainMenu from "./Components/MainMenu.svelte";
  import Toolbar from "./Components/Toolbar.svelte";
  import Mainsettings from "./Components/Mainsettings.svelte";
  import SvgContainer from "./Components/svgContainer.svelte";
  import CodeContainer from "./Components/codeContainer.svelte";
  let stageForSvg = ``;
  let stageForcode = ``;
  let svGcode;
  let OptimizedSvg;
  let viewBox = "0 0 600 400";
  let myPlugins = [];
  //--------------------Update Plugins array------------------
  $: {
    myPlugins = [];
    $plugins.forEach((el, i) => {
      if (el.enabledByDefault) {
        myPlugins = [...myPlugins, el.id];
      }
    });
    handleOptimize(myPlugins);
  }
  //-----------------------LOAD------------------------------
  let toggle = false;
  function handleLoadSvgFile(event) {
    stageForSvg = event.detail.svg.documentElement.innerHTML;
    svGcode = event.detail.svg.documentElement.outerHTML;
    viewBox = event.detail.svg.documentElement.getAttribute("viewBox");
    handleOptimize(myPlugins);
  }
  //------------------------Optimize---------------------------------------
  function handleOptimize(plugins) {
    if (svGcode) {
      const result = optimize(svGcode, {
        multipass: true,
        js2svg: {
          pretty: true,
          indent: 2,
        },
        plugins,
      });
      OptimizedSvg = result.data;
    }
  }
  //----------------Show Original-----------------
  function handleToggle(event) {
    toggle = event.detail.toggle;
  }
  let toggleOriginal = false;
  function handleOriginal(event) {
    toggleOriginal = event.detail;
  }
  $: if (!toggleOriginal) {
    stageForcode = OptimizedSvg;
  } else {
    stageForcode = svGcode;
  }
</script>

<main>
  <div class="app">
    <Toolbar on:toggle={handleToggle} />
    <div class="app-output">
      <div class="mainMenu">
        <MainMenu {OptimizedSvg} on:loadSvgFlie={handleLoadSvgFile} />
      </div>
      <div class="container">
        {#if toggle}
          <div class="codeContainer"><CodeContainer {stageForcode} /></div>
        {:else}
          <div class="svgContainer">
            <SvgContainer {stageForSvg} {viewBox} />
          </div>
        {/if}
      </div>

      <div class="main">
        <Mainsettings on:original={handleOriginal} />
      </div>
    </div>
  </div>
</main>

<style>
  .app {
    display: flex;
    flex-direction: column;
    font-family: Arial;
  }
  .app-output {
    display: flex;
    justify-content: space-between;
  }
  .container {
    margin: auto;
  }
</style>
