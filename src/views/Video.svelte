<script>
  import { fade } from "svelte/transition";
</script>

<div id="wrapper" transition:fade={{ duration: 300 }}>
  <div id="video">
    <iframe
      src="https://www.youtube.com/embed/fv-PDzlnG1c?si=B80BKhmZ8NI63OCG&autoplay=1&mute=1&controls=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</div>

<style>
  #wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #video {
    width: 100%;
    text-align: center;
    margin-top: 32vh;
  }

  @media (min-width: 430px) and (max-height: 932px) {
    #video {
      margin-top: 311px;
    }
  }
</style>
