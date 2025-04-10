<script>
  import { fade } from "svelte/transition";
  import { pop } from "svelte-spa-router";
  import { descIndex } from "../../store/store.js";

  const actressVideo = "assets/actress_video.MP4";
  const backButton = "assets/back_button.png";
  const logo = "assets/logo.png";

  let isMuted = true;
  let isPlaying = true;
  let isFullscreen = false;

  function toggleMute() {
    isMuted = !isMuted;
    const video = document.getElementById("actress-video");
    if (isMuted) {
      video.muted = true;
    } else {
      video.muted = false;
    }
  }

  function move(url) {
    console.log("move");
    window.open(url, "_blank");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="wrapper" transition:fade={{ duration: 300 }}>
  <div id="video-wrapper">
    <video id="actress-video" src={actressVideo} controls autoplay muted
    ></video>
  </div>
  <div id="button-wrapper">
    <div id="back-button">
      <img
        id="back-button-img"
        src={backButton}
        alt="back"
        on:click|preventDefault|stopPropagation={() => {
          descIndex.set(3);
          pop();
        }}
      />
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
</div>

<style>
  #wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #video-wrapper {
    text-align: center;
    margin-top: calc(35svh);
  }

  #actress-video {
    width: 95%;
    height: auto;
    max-height: 60vh;
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgb(255, 255, 255);
    background-color: white;
  }

  #button-wrapper {
    position: absolute;
    bottom: 0;
    display: flex;
    text-align: center;
  }

  #back-button {
    text-align: start;
    padding-left: 10px;
  }

  #back-button-img {
    width: calc(8svw);
    cursor: pointer;
    opacity: 70%;
  }

  #logo {
    text-align: end;
    box-sizing: border-box;
    padding-right: 10px;
    margin-bottom: 10px;
    text-decoration-line: none;
    z-index: 1;
    pointer-events: auto;
  }

  #logo-img {
    width: 10%;
  }

  @media (min-width: 430px) and (max-height: 932px) {
    #video-wrapper {
      margin-top: 311px;
    }
  }
</style>
