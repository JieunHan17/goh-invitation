<script>
  import Router from "svelte-spa-router";
  import routes from "../src/routes/index.js";
</script>

<main>
  <Router {routes} />
</main>

<style>
  /* 모바일 우선 개발 */
  main {
    width: 100%;
    height: 100%;
    background: url("/assets/flowers_background.png") center no-repeat;
    background-size: cover;
  }

  /* 데스크탑에 최적화된 예외 CSS 코드*/
  @media (min-width: 430px) and (max-height: 932px) {
    main {
      width: 430px;
      height: 932px;
    }
  }

  @media (min-width: 430px) and (min-height: 932px) {
    main {
      width: 430px;
      height: 100%;
    }
  }
</style>
