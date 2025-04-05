<script>
  import Router from "svelte-spa-router";
  import routes from "../src/routes/index.js";
</script>

<main>
  <Router {routes} />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    background: url("/assets/flowers_background.png") center no-repeat;
    background-size: cover;
  }
</style>
