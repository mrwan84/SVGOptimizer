<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import logo from "../photo/auto.png";
  const dispatch = createEventDispatcher();

  //-------------------SAVE-----------------------
  export let OptimizedSvg = `<svg xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
  function handleSave() {
    const d = new Date();
    //-------------------------------------------
    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);

    const blob = new Blob([OptimizedSvg], {
      type: "text/plain",
    });

    link.href = URL.createObjectURL(blob);
    link.download = `${d.toLocaleDateString()}-${d.toLocaleTimeString()}_MARWAN.svg`;
    link.click();
  }
  //--------------------------------------------
  let input;
  function handleLoad() {
    input.click();
  }
  onMount(() => {
    const form = document.createElement("form");
    form.style.display = "none";
    document.body.appendChild(form);
    input = document.createElement("input");
    input.type = "file";

    //----LOAD-------------------------
    input.addEventListener("change", (event) => {
      const file = input.files[0];
      // title.value = file.name.split(".")[0];
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        async (event) => {
          const contents = event.target.result;
          const svg = await new DOMParser().parseFromString(
            contents,
            "image/svg+xml"
          );
          dispatch("loadSvgFlie", { svg });
        },
        false
      );
      reader.readAsText(file);
      form.reset();
    });
    form.appendChild(input);
  });
</script>

<main>
  <div class="menu">
    <div class="title-text">
      <h1>SVG Optimizer</h1>
    </div>
    <div class="menu-button">
      <button class="menu-item" type="button" on:click={handleLoad}>
        <svg viewBox="0 0 24 24"
          ><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" /></svg
        >
        <span class="menu-item-text">Open SVG</span>
      </button>
      <input type="file" class="load-file-input" accept=".svg" />

      <button class="menu-item" type="button" on:click={handleSave}>
        <svg viewBox="0 0 24 24"
          ><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg
        >
        <span class="menu-item-text">Save SVG</span>
      </button>
    </div>
    <div>
      <a href="https://www.youtube.com/c/automationset"
        ><img src={logo} alt="automationset" />
      </a>
    </div>

    <p>Powered by <a href="https://github.com/svg/svgo">SVGO</a></p>
  </div>
</main>

<style>
  .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 350px;
    height: 600px;
    background-color: #fff;
    box-shadow: 3px 0 16px rgba(0, 0, 0, 0.4);
  }
  .menu-button {
    display: flex;
    padding: 5px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .menu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    font-weight: bold;
    font-size: 2rem;
    padding: 0 16px;
    width: 85%;
    min-height: 50px;
  }
  .title-text {
    padding-left: 20px;
  }
  .load-file-input {
    display: none;
  }
  .menu p {
    margin: auto;
  }
  svg {
    height: 3rem;
  }
  img {
    width: 350px;
    /* transform: scale(1.9); */
    margin: 0;
  }
</style>
