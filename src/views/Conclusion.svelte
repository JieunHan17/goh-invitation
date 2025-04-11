<script>
  import { fade } from "svelte/transition";
  import DESC from "../../public/text/description";
  import { push } from "svelte-spa-router";

  const character = "assets/character2.png";
  const sparkle = "assets/sparkle.png";
  const adultService = "assets/adult_service_button.png";
  const youthService = "assets/youth_service_button.png";

  let styles = [
    { size: "25%", loc: { top: "50%", left: "10%" }, align: "start" },
    { size: "27%", loc: { top: "30%", left: "0%" }, align: "end" },
    { size: "30%", loc: { top: "70%", left: "-10%" }, align: "center" },
  ];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="wrapper" transition:fade={{ duration: 300 }}>
  <div id="conclusion-wrapper">
    <div id="conclusion-text-wrapper" in:fade={{ duration: 1000 }}>
      <span id="conclusion-text">{DESC.DESC8}</span>
    </div>
    <div id="character">
      <img id="character-img" src={character} alt="character" />
    </div>
  </div>
  <div id="service-wrapper">
    <div id="adult-service">
      <img
        id="adult-service-img"
        src={adultService}
        alt="대예배"
        on:click|preventDefault|stopPropagation={() => {
          console.log("click to adult service info");
          push("/include/adultservice");
        }}
      />
    </div>
    <div id="youth-service">
      <img
        id="youth-service-img"
        src={youthService}
        alt="청년부 예배"
        on:click|preventDefault|stopPropagation={() => {
          push("/include/youthservice");
        }}
      />
    </div>
  </div>
  {#each styles as style}
    <span
      class="sparkle"
      style="top: {style.loc.top}; left: {style.loc
        .left}; text-align: {style.align}"
    >
      <img
        class="sparkle-img"
        src={sparkle}
        alt="sparkle"
        style="width: {style.size}"
      />
    </span>
  {/each}
</div>

<style>
  #wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  #conclusion-wrapper {
    position: absolute;
    width: 100%;
    margin-top: calc(35svh);
  }

  #conclusion-text-wrapper {
    font-size: clamp(1rem, 5vw, 2rem);
    color: grey;
    white-space: pre-wrap;
    word-wrap: unset;
    text-align: center;
    cursor: pointer;
  }

  #conclusion-text {
    background-color: #ffffff80;
  }

  #character {
    width: 100%;
    text-align: center;
  }

  #character-img {
    width: 50%;
    filter: drop-shadow(1px 1px 21px rgba(255, 255, 255, 0.75));
  }

  #service-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  #youth-service {
    margin-top: calc(1svh);
  }

  #adult-service-img,
  #youth-service-img {
    height: calc(7svh);
    cursor: pointer;
  }

  .sparkle {
    position: absolute;
  }

  .sparkle-img {
    transform-origin: center center;
    animation: twinkle 1.5s linear infinite;
  }

  @keyframes twinkle {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (min-width: 431px) {
    #conclusion-text-wrapper {
      font-size: 25px;
    }
  }

  @media (min-width: 431px) and (max-height: 933px) {
    #conclusion-wrapper {
      margin-top: 311px;
    }

    #adult-service-img,
    #youth-service-img {
      width: 100%;
    }
  }
</style>
