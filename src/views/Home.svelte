<script>
  import { push } from "svelte-spa-router";
  import { fade } from "svelte/transition";

  const logo = "assets/logo.png";
  const information = "assets/information.png";
  const community = "assets/community.png";
  const message = "assets/message.png";

  function move(url) {
    console.log("move");
    window.open(url, "_blank");
  }
</script>

<div id="wrapper">
  <a
    id="logo"
    on:click|preventDefault|stopPropagation={() => {
      move("http://www.joodasan.org");
    }}
    href="http://www.joodasan.org"
    target="_blank"
    rel="external"
  >
    <img
      id="logo-img"
      src={logo}
      alt="logo"
      transition:fade={{ duration: 300 }}
    />
  </a>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    id="information"
    on:click|preventDefault|stopPropagation={() => {
      push("/info");
    }}
  >
    <img
      id="information-img"
      src={information}
      alt="information"
      transition:fade={{ duration: 300 }}
    />
  </div>
  <a
    id="community"
    on:click|preventDefault|stopPropagation={() => {
      move("https://www.instagram.com/goh_youth/");
    }}
    href="https://www.instagram.com/goh_youth/"
    target="_blank"
    rel="external"
  >
    <img
      id="community-img"
      src={community}
      alt="community"
      transition:fade={{ duration: 300 }}
    />
  </a>
  <a
    id="message"
    on:click|preventDefault|stopPropagation={() => {
      move(
        "https://www.youtube.com/embed/fv-PDzlnG1c?si=B80BKhmZ8NI63OCG&autoplay=1&mute=1&controls=1"
      );
    }}
    href="https://www.youtube.com/embed/fv-PDzlnG1c?si=B80BKhmZ8NI63OCG&autoplay=1&mute=1&controls=1"
    target="_blank"
    rel="external"
  >
    <img
      id="message-img"
      src={message}
      alt="message"
      transition:fade={{ duration: 300 }}
    />
  </a>
</div>

<style>
  #wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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

  #information {
    margin-top: calc(10svh);
    margin-left: calc(10svw);
  }

  #information-img {
    height: calc(25svh);
  }

  #community {
    margin-left: calc(50svw);
    transform: rotate(15deg);
  }

  #community-img {
    height: calc(25svh);
  }

  #message {
    margin-left: calc(20svw);
    transform: rotate(-15deg);
  }

  #message-img {
    height: calc(25svh);
  }

  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
    75% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0);
    }
  }
</style>
