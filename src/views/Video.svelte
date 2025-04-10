<script>
  import { fade } from "svelte/transition";
  import DESC from "../../public/text/description";
  import { replace } from "svelte-spa-router";

  const frame = "assets/frame.png";

  function handleClickNext() {
    console.log("handleClickNext");
    replace("/conclusion");
  }
</script>

<div id="wrapper" transition:fade={{ duration: 300 }}>
  <div id="video-wrapper">
    <img id="video-frame" src={frame} alt="video" />
    <iframe
      id="video"
      src="https://www.youtube.com/embed/fv-PDzlnG1c?si=B80BKhmZ8NI63OCG&autoplay=1&mute=1&controls=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    id="next-text"
    tabindex="0"
    role="button"
    on:click|preventDefault|stopPropagation={handleClickNext}
  >
    {DESC.NEXT}
  </div>
</div>

<style>
  #wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #video-wrapper {
    position: relative;
    text-align: center;
    margin-top: calc(30svh);
  }

  #video-frame {
    width: 100%;
  }

  #video {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #next-text {
    font-size: 5vw;
    text-shadow:
      -1px 0px white,
      0px 1px white,
      1px 0px white,
      0px -1px white;
    text-align: center;
    cursor: pointer;
  }

  @media (min-width: 430px) {
    #next-text {
      font-size: 25px;
    }
  }

  @media (min-width: 430px) and (max-height: 932px) {
    #video-wrapper {
      margin-top: 311px;
    }
  }
</style>
