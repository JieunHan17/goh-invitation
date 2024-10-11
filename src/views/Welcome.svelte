<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { contentPageVisible } from "../stores/pageIndexStore";
  import DESC from "../../public/text/description";
  import typewriter from "../utils/typewriter";

  const DEFAULT_HEIGHT_DESKTOP = 932;
  const DEFAULT_WIDTH_DESKTOP = 430;

  const title = "assets/title.png";
  const envelopClosed = "assets/envelop_closed.png";
  const envelopOpen = "assets/envelop_open.png";

  let screenWidth;
  let screenHeight;
  let textVisible = false;
  let whiteBackgroundVisible = false;
  let isEnvelopOpen = false;

  function clickEnvelop() {
    console.log("click");
    isEnvelopOpen = true;
    textVisible = false;
    setTimeout(() => {
      whiteBackgroundVisible = true;
      setTimeout(() => {
        contentPageVisible.update(true);
      }, 800);
    }, 1000);
  }

  onMount(() => {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    textVisible = true;
  });
</script>

{#if whiteBackgroundVisible}
  <div id="whiteBackground" transition:fade={{ duration: 300 }}></div>
{:else}
  <div id="wrapper">
    <div id="title">
      <img id="title-img" src={title} alt="welcome" />
    </div>
    {#if isEnvelopOpen}
      <div id="envelop-open" in:fade={{ duration: 900 }}>
        <img id="envelop-open-img" src={envelopOpen} alt="envelop" />
      </div>
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        id="envelop"
        tabindex="0"
        role="button"
        on:click|preventDefault|stopPropagation={(e) => {
          clickEnvelop(e);
        }}
      >
        <img id="envelop-img" src={envelopClosed} alt="envelop" />
      </div>
    {/if}
    {#if textVisible}
      <div id="desc" in:typewriter>{DESC.DESC1}</div>
    {/if}
  </div>
{/if}

<style>
  #whiteBackground {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  #wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: top no-repeat;
    background-size: contain;
    align-items: center;
  }

  #title {
    margin-top: calc(30svh);
    background: top no-repeat;
    background-size: contain;
    text-align: center;
  }

  #title-img {
    width: 80%;
  }

  #envelop {
    width: 100%;
    background: top no-repeat;
    background-size: contain;
    text-align: center;
    animation: fly 1.5s linear infinite;
    cursor: pointer;
  }

  #envelop-img {
    width: 60%;
    filter: drop-shadow(1px 1px 21px rgba(255, 255, 255, 0.75));
  }

  #envelop-open-img {
    filter: drop-shadow(1px 1px 21px rgba(255, 255, 255, 0.75));
  }

  @keyframes fly {
    0% {
      margin-top: 0px;
    }
    25% {
      margin-top: -5px;
    }
    50% {
      margin-top: 0px;
    }
    75% {
      margin-top: 5px;
    }
    100% {
      margin-top: 0px;
    }
  }

  #envelop-open {
    width: 100%;
    margin-top: -20%;
    text-align: center;
  }

  #envelop-open-img {
    width: 60%;
  }

  #desc {
    color: grey;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
  }

  @media (min-width: 430px) and (max-height: 932px) {
    #title {
      margin-top: 311px;
    }
  }
</style>
