<script>
  import { pop } from "svelte-spa-router";
  import { fade } from "svelte/transition";

  const logo = "assets/logo.png";
  const btn = "assets/button.png";

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
  <div id="info-wrapper">
    <div id="back-wrapper">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        id="back-text"
        class="gowun-batang-bold"
        on:click|preventDefault|stopPropagation={() => {
          pop();
        }}
      >
        &lt;
      </span>
    </div>
    <div id="date-wrapper">
      <span id="date" class="gowun-batang-bold"> Date </span>
      <span id="date-text" class="gowun-batang-regular">
        2025년 4월 27일 (일)
      </span>
    </div>
    <div id="time-wrapper">
      <span id="time" class="gowun-batang-bold"> Time </span>
      <span id="time-text" class="gowun-batang-regular"> 오후 2시 30분 </span>
    </div>
    <div id="place-wrapper">
      <span id="place" class="gowun-batang-bold"> Place </span>
      <span id="place-text" class="gowun-batang-regular">
        주다산교회 3층 블레싱홀
      </span>
    </div>
    <div id="map-wrapper">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        id="button"
        src={btn}
        alt="button"
        on:click|preventDefault|stopPropagation={() => {
          move("https://map.naver.com/p/entry/place/11700774?c=15.00,0,0,0,dh");
        }}
      />
    </div>
  </div>
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

  #back-wrapper {
    margin-top: 8%;
  }

  #back-text {
    font-size: calc(8svw);
    color: #000000;
  }

  #info-wrapper {
    width: calc(80svw);
    height: calc(45svh);
    margin-top: calc(20svh);
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    padding-left: 10%;
    padding-right: 10%;
    background-color: #ffffff90;
    border-radius: 20%;
  }

  #date-wrapper {
    margin-top: 5%;
  }

  #time-wrapper,
  #place-wrapper {
    margin-top: 8%;
  }

  #map-wrapper {
    text-align: center;
  }

  #date,
  #time,
  #place {
    font-size: calc(3svh);
    color: #000000;
    margin-right: 1px;
  }

  #date-text,
  #time-text,
  #place-text {
    font-size: calc(2.5svh);
  }

  #button {
    height: calc(20svh);
    cursor: pointer;
  }
</style>
