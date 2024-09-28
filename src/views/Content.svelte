<script>
  import { fade } from "svelte/transition";
  import { contentPageVisible } from "../stores/pageIndexStore";
  import { giftPageVisible } from "../stores/pageIndexStore";
  import DESC from "../../public/text/description";
  import typewriter from "../utils/typewriter";

  const DEFAULT_HEIGHT_DESKTOP = 932;
  const DEFAULT_WIDTH_DESKTOP = 430;

  const note = "assets/note.png";
  const brush = "assets/brush.png";
  const character = "assets/character.png";
  const insta =
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg";
  const descriptions = [
    DESC.DESC2,
    DESC.DESC3,
    DESC.DESC4,
    DESC.DESC5,
    DESC.DESC6,
  ];

  let isTypingOver = false;
  $: descIndex = 0;
  $: desc = descriptions[descIndex];

  const image = new Image();
  image.src = note;

  function handleIntroEnd() {
    if (descIndex == 4) {
      setTimeout(() => {
        contentPageVisible.update(false);
        giftPageVisible.update(true);
      }, 500);
      return;
    }
    isTypingOver = true;
  }

  function handleClickNext() {
    console.log("handleClickNext");
    if (descIndex < 4) {
      descIndex++;
    }
    isTypingOver = false;
  }
</script>

<div id="wrapper" transition:fade={{ duration: 300 }}>
  <div id="note-img-wrapper">
    <img id="note-img" src={note} alt="note" />
    <div id="note-text-wrapper">
      {#key desc}
        <span id="note-text" on:introend={handleIntroEnd} in:typewriter
          >{desc}</span
        >
      {/key}
      {#if isTypingOver}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          id="next-text"
          tabindex="0"
          role="button"
          on:click|preventDefault|stopPropagation={handleClickNext}
          style="background: url({brush});"
        >
          {DESC.NEXT}
        </div>
      {/if}
    </div>
  </div>
  <div id="character">
    <img id="character-img" src={character} alt="character" />
  </div>
  <a id="instagram" href="https://www.instagram.com/goh_youth/" target="_blank">
    <span id="instagram-id">@goh_youth</span>
    <img id="instagram-img" src={insta} alt="instagram" />
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
    margin-top: 32vh;
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
    font-size: 5vw;
    white-space: pre-wrap;
    word-wrap: unset;
    text-align: left;
  }

  #next-text {
    align-self: flex-end;
    font-size: 5vw;
    text-shadow:
      -1px 0px white,
      0px 1px white,
      1px 0px white,
      0px -1px white;
    text-align: right;
    cursor: pointer;
  }

  #character {
    width: 100%;
  }

  #character-img {
    width: 50%;
    filter: drop-shadow(1px 1px 21px rgba(255, 255, 255, 0.75));
  }

  #instagram {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    box-sizing: border-box;
    padding-right: 10px;
    padding-bottom: 10px;
    text-decoration-line: none;
  }

  #instagram-id {
    margin-bottom: 2px;
    font-size: 20%;
    color: #b7439a;
  }

  #instagram-img {
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
