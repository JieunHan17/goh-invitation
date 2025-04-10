<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import DESC from "../../public/text/description";
  import typewriter from "../utils/typewriter";
  import { replace, push } from "svelte-spa-router";
  import { descIndex } from "../store/store";

  const note = "assets/note.png";
  const character = "assets/character.png";
  const insta =
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg";
  const button = "assets/video_button.png";
  const logo = "assets/logo.png";
  const descriptions = [
    DESC.DESC2,
    DESC.DESC3,
    DESC.DESC4,
    DESC.DESC5,
    DESC.DESC6,
    DESC.DESC7,
  ];

  let completed = false;
  let isTypingOver = false;
  let isVisible = false;
  $: currentDescIndex = $descIndex;
  $: desc = descriptions[currentDescIndex];
  $: keyArray = [completed, desc];

  const image = new Image();
  image.src = note;

  function handleIntroEnd() {
    if (currentDescIndex == descriptions.length - 1) {
      setTimeout(() => {
        replace("/gift");
      }, 500);
      return;
    }
    isTypingOver = true;
  }

  function handleClickNext() {
    console.log("handleClickNext");
    if (currentDescIndex < descriptions.length - 1) {
      currentDescIndex += 1;
    }
    completed = false;
    isTypingOver = false;
    isVisible = currentDescIndex == 4 ? true : false;
    console.log("isVisible: ", isVisible);
  }

  function handleClickScreen() {
    completed = true;
  }

  function move(url) {
    console.log("move");
    window.open(url, "_blank");
  }

  onMount(() => {
    console.log("descIndex: ", $descIndex);
  });
</script>

<svelte:head>
  <link rel="preload" as="image" href="assets/video_button.png" />
</svelte:head>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  id="wrapper"
  transition:fade={{ duration: 300 }}
  on:click|preventDefault|stopPropagation={() => {
    handleClickScreen();
  }}
>
  <div id="note-img-wrapper">
    <img id="note-img" src={note} alt="note" />
    <div id="note-text-wrapper">
      {#key keyArray}
        <span
          id="note-text"
          on:introend={handleIntroEnd}
          in:typewriter={{ completed: completed }}>{desc}</span
        >
      {/key}
      {#if isTypingOver}
        <div id="btn-text-wrapper">
          {#if currentDescIndex == 3}
            <div id="button" in:fade={{ duration: 1000 }}>
              <img
                id="button-img"
                src={button}
                alt="영상보기"
                on:click|preventDefault|stopPropagation={() => {
                  push("/include/actressvideo");
                }}
              />
            </div>
          {:else}
            <a
              id="instagram"
              on:click|preventDefault|stopPropagation={() => {
                move("https://www.instagram.com/goh_youth/");
              }}
              href="https://www.instagram.com/goh_youth/"
              target="_blank"
              style="visibility: {isVisible ? 'visible' : 'hidden'}"
              in:fade={{ duration: 1000 }}
            >
              <img id="instagram-img" src={insta} alt="instagram" />
            </a>
          {/if}

          <div
            id="next-text"
            tabindex="0"
            role="button"
            on:click|preventDefault|stopPropagation={handleClickNext}
          >
            {DESC.NEXT}
          </div>
        </div>
      {/if}
    </div>
  </div>
  <div id="character">
    <img id="character-img" src={character} alt="character" />
  </div>
  <a
    id="logo"
    on:click|preventDefault|stopPropagation={() => {
      move("http://www.joodasan.org");
    }}
    href="http://www.joodasan.org"
    target="_blank"
    rel="external"
  >
    <img id="logo-img" src={logo} alt="logo" />
  </a>
</div>

<style>
  #wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #note-img-wrapper {
    position: relative;
    text-align: center;
    margin-top: calc(30svh);
  }

  #note-img {
    width: 95%;
  }

  #note-text-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    padding: 10vw;
    top: 5%;
    box-sizing: border-box;
    justify-content: space-between;
  }

  #note-text {
    color: grey;
    font-weight: normal;
    font-size: 5.5vw;
    white-space: pre-wrap;
    word-wrap: unset;
    text-align: left;
  }

  #btn-text-wrapper {
    align-self: flex-end;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #button,
  #instagram {
    flex: 2;
    width: 100%;
    text-align: start;
  }

  #button-img {
    width: 35%;
    cursor: pointer;
  }

  #instagram-img {
    width: 12%;
    cursor: pointer;
  }

  #next-text {
    font-size: 5.5vw;
    text-shadow:
      -1px 0px white,
      0px 1px white,
      1px 0px white,
      0px -1px white;
    text-align: end;
    cursor: pointer;
  }

  #character {
    width: 100%;
  }

  #character-img {
    width: 40%;
    filter: drop-shadow(1px 1px 21px rgba(255, 255, 255, 0.75));
  }

  #logo {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    box-sizing: border-box;
    padding-right: 10px;
    margin-bottom: 10px;
    text-decoration-line: none;
    z-index: 1; /* Ensure it's on top */
    pointer-events: auto;
  }

  #logo-img {
    width: 10%;
  }

  @media (min-width: 430px) {
    #note-text-wrapper {
      padding: 40px;
    }

    #note-text {
      font-size: 25px;
    }

    #next-text {
      font-size: 25px;
    }
  }

  @media (min-width: 430px) and (max-height: 932px) {
    #note-img-wrapper {
      margin-top: 311px;
    }
  }
</style>
