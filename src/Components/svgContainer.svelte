<script>
  export let stageForSvg = "";
  export let viewBox = "0 0 600 400";
</script>

<main>
  <span class="content">
    <svg width="700" height="400" {viewBox}>
      {@html stageForSvg}
    </svg>
  </span>
</main>

<style>
</style>
