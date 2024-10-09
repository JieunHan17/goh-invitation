<script>
  import { fade } from "svelte/transition";
  import { giftPageVisible, videoPageVisible } from "../stores/pageIndexStore";
  const giftClosed = "assets/gift_closed.png";
  const giftOpen = "assets/gift_open.png";

  let whiteBackgroundVisible = false;
  let isGiftOpen = false;

  function clickGift() {
    console.log("click gift");
    isGiftOpen = true;
    setTimeout(() => {
      whiteBackgroundVisible = true;
      setTimeout(() => {
        giftPageVisible.update(false);
        videoPageVisible.update(true);
      }, 800);
    }, 1000);
  }
</script>

{#if whiteBackgroundVisible}
  <div id="whiteBackground" transition:fade={{ duration: 300 }}></div>
{:else}
  <div id="wrapper" transition:fade={{ duration: 300 }}>
    {#if isGiftOpen}
      <div id="gift-open" in:fade={{ duration: 900 }}>
        <img id="gift-open-img" src={giftOpen} alt="gift" />
      </div>
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        id="gift"
        transition:fade={{ duration: 300 }}
        tabindex="0"
        role="button"
        on:click|preventDefault|stopPropagation={(e) => {
          clickGift(e);
        }}
      >
        <img id="gift-img" src={giftClosed} alt="gift" />
      </div>
    {/if}
  </div>
{/if}

<style>
  #whiteBackground {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  #wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #gift,
  #gift-open {
    position: relative;
    text-align: center;
    margin-top: calc(30svh);
    cursor: pointer;
  }

  #gift-img {
    height: calc(35svh);
  }

  #gift-open-img {
    width: 90%;
  }

  @media (min-width: 430px) and (max-height: 932px) {
    #gift {
      margin-top: 298px;
    }
  }
</style>
