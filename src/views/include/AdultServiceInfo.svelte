<script>
  import { fade } from "svelte/transition";
  import { pop } from "svelte-spa-router";

  const adultServiceInfo = "assets/adult_service_info.png";
  const backButton = "assets/back_button.png";
  const logo = "assets/logo.png";

  function move(url) {
    console.log("move");
    window.open(url, "_blank");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="wrapper" transition:fade={{ duration: 300 }}>
  <div id="adult-service-info-wrapper">
    <img id="adult-service-info-img" src={adultServiceInfo} alt="대예배 정보" />
  </div>
  <div id="button-wrapper">
    <div id="back-button">
      <img
        id="back-button-img"
        src={backButton}
        alt="back"
        on:click|preventDefault|stopPropagation={() => {
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

  #adult-service-info-wrapper {
    text-align: center;
    margin-top: calc(30svh);
  }

  #adult-service-info-img {
    width: 95%;
    filter: drop-shadow(1px 1px 21px rgba(255, 255, 255, 0.75));
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
    #adult-service-info-wrapper {
      margin-top: 311px;
    }
  }
</style>
