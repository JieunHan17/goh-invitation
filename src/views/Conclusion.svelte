<script>
  const character = "assets/character2.png";
</script>

<div id="wrapper">
  <div id="conclusion-text">읽어주셔서 감사합니다! 좋은 하루 보내세요~!</div>
  <div id="character">
    <img id="character-img" src={character} alt="character" />
  </div>
</div>

<style>
  #wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #conclusion-text {
    margin-top: calc(35svh);
    font-size: clamp(1rem, 5vw, 2rem);
    text-shadow:
      -1px 0px white,
      0px 1px white,
      1px 0px white,
      0px -1px white;
    text-align: center;
    cursor: pointer;
  }

  #character {
    width: 100%;
    text-align: center;
  }

  #character-img {
    width: 50%;
    filter: drop-shadow(1px 1px 21px rgba(255, 255, 255, 0.75));
  }

  @media (min-width: 430px) and (max-height: 932px) {
    #conclusion-text {
      margin-top: 311px;
    }
  }
</style>
