<script>
  import { fade } from "svelte/transition";
  import { push } from "svelte-spa-router";

  const logo = "assets/logo.png";
  const heartButton = "assets/heart_button.png";
  const heartButtonPressed = "assets/heart_button_pressed.png";

  let isPressed = false;

  function handleIntroEnd() {
    console.log("end");
    setTimeout(() => {
      push("/home");
    }, 3000);
  }

  function move(url) {
    console.log("move");
    window.open(url, "_blank");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="wrapper" transition:fade={{ duration: 300 }}>
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
  <div id="msg-wrapper" class="hi-melody-regular">
    <!-- prettier-ignore -->
    <span
      id="msg"
      on:introend={handleIntroEnd}
      transition:fade={{ duration: 1500 }}
      >안녕하세요! 봄 기운이 완연한 요즘이네요

      저에게 너무 소중한 당신을
      GoH 청년부 봄 블레싱데이에
      초대하고 싶습니다 :)</span
    >
  </div>
  <div id="heart-button-wrapper">
    {#if isPressed}
      <img id="heart-button-pressed" src={heartButtonPressed} alt="button" />
    {:else}
      <img
        id="heart-button"
        src={heartButton}
        alt="button"
        on:click|preventDefault|stopPropagation={() => {
          isPressed = true;
          push("/home");
        }}
      />
    {/if}
  </div>
</div>

<style>
  #wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #logo {
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    box-sizing: border-box;
    text-decoration-line: none;
    z-index: 1; /* Ensure it's on top */
    pointer-events: auto;
  }

  #logo-img {
    height: calc(5svh);
  }

  #msg-wrapper {
    color: grey;
    font-size: calc(3svh);
    text-align: center;
    margin-top: calc(30svh);
    box-sizing: border-box;
  }

  #msg {
    white-space: pre-line;
    background-color: #ffffff80;
  }

  #heart-button-wrapper {
    margin-top: calc(5svh);
    text-align: center;
  }

  #heart-button,
  #heart-button-pressed {
    height: calc(10svh);
    cursor: pointer;
  }
</style>
