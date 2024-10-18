<script>
  import { fade } from "svelte/transition";
  import DESC from "../../public/text/description";

  const character = "assets/character2.png";
  const sparkle = "assets/sparkle.png";

  let styles = [
    { size: "25%", loc: { top: "50%", left: "10%" }, align: "start" },
    { size: "27%", loc: { top: "35%", left: "0%" }, align: "end" },
    { size: "30%", loc: { top: "70%", left: "-10%" }, align: "center" },
  ];
</script>

<div id="wrapper" transition:fade={{ duration: 300 }}>
  <div id="conclusion-wrapper">
    <div id="conclusion-text" in:fade={{ duration: 1000 }}>{DESC.DESC7}</div>
    <div id="character">
      <img id="character-img" src={character} alt="character" />
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

  #conclusion-text {
    font-size: clamp(1rem, 5vw, 2rem);
    color: grey;
    white-space: pre-wrap;
    word-wrap: unset;
    text-align: center;
    cursor: pointer;
  }

  #character {
    width: 100%;
    text-align: center;
  }

  #character-img {
    width: 50%;
    filter: drop-shadow(1px 1px 21px rgba(255, 255, 255, 0.75));
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

  @media (min-width: 430px) and (max-height: 932px) {
    #conclusion-text {
      margin-top: 311px;
    }
  }
</style>
