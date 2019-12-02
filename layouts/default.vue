<template>
  <div id="app" class="noselect">
    <header>
      <video autoplay muted loop id="myVideo">
        <source src="../assets/bg-video.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
      <a href="https://www.youtube.com/watch?v=m-PJmmvyP10" target="_blank">
        <div class="main-title">
          <nuxt-link class="main-title_link" to="/">
            <div class="logo-text">
              <h4 class="p-0 m-0">The</h4>
              <h1 class="m33">
                Future World
              </h1>
              <p>Clean The Air You Breathe</p>
            </div>
            <div class="bird-container bird-container--one">
              <div class="bird bird--one"></div>
            </div>
            <div class="bird-container bird-container--two">
              <div class="bird bird--two"></div>
            </div>
            <div class="bird-container bird-container--three">
              <div class="bird bird--three"></div>
            </div>
            <div class="bird-container bird-container--four">
              <div class="bird bird--four"></div>
            </div>
          </nuxt-link>
        </div>
      </a>
    </header>
    <nav id="nav">
      <nuxt-link class="nav_link" to="/">Electric Cars</nuxt-link> |
      <nuxt-link class="nav_link" to="/hybrid_cars">Hybrid Cars</nuxt-link> |
      <nuxt-link class="nav_link" to="/air_pollution">Air Pollution</nuxt-link> |
      <nuxt-link class="nav_link" to="/about">About</nuxt-link>
    </nav>
    <nuxt />
    <!-- Footer -->
    <footer id="footer" class="page-footer font-small">
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">© 2019 Copyright:
        <a href="https://ymmy1.github.io/portfolio/" class="text-secondary">Ymmy1</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

#myVideo {
  position: absolute;
  top: 0;
  left: 0;
  height: 60vh;
  width: 100%;
  overflow: hidden;
  z-index: -5;
  object-fit: cover;
}

.main-title {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  overflow: hidden;

  &_link {
    color: #000000;
    text-decoration: none;
  }

  .logo-text {
    position: static;
    background: rgba(232, 236, 241, 0.4);
    width: 500px;
    padding: 2% 0;
    border-top: 15px rgba(232, 236, 241, 1) solid;
    border-bottom: 15px rgba(232, 236, 241, 1) solid;
    // border-radius: 50%;
    // border: 5px solid rgba(232, 236, 241, 0.8);

    p {
      font-style: italic;
      font-weight: bold;
    }

    &:hover {
      background: rgba(255, 215, 0, 0.4);
      transform: ease;
      transition: 1s;
    }
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;

}

#nav {
  background: #222;
  padding: 0.5% 30%;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-around;
  z-index: -5;
}

.nav_link {
  color: white;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: gold;
  }
}

.noselect {
  -webkit-user-select: none;
  /* Chrome all / Safari all */
  -moz-user-select: none;
  /* Firefox all */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Likely future */
}

//Birds start

.bird {
  background-image: url("../assets/bird-cells.svg");
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  will-change: background-position;

  animation-name: fly-cycle;
  animation-timing-function: steps(10);
  animation-iteration-count: infinite;

  &--one {
    animation-duration: 1s;
    animation-delay: -0.5s;
  }

  &--two {
    animation-duration: 0.9s;
    animation-delay: -0.75s;
  }

  &--three {
    animation-duration: 1.25s;
    animation-delay: -0.25s;
  }

  &--four {
    animation-duration: 1.1s;
    animation-delay: -0.5s;
  }

}

.bird-container {
  position: absolute;
  top: 20%;
  left: -10%;
  transform: scale(0) translateX(-10vw);
  will-change: transform;

  animation-name: fly-right-one;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &--one {
    animation-duration: 15s;
    animation-delay: 0;
  }

  &--two {
    animation-duration: 16s;
    animation-delay: 1s;
  }

  &--three {
    animation-duration: 14.6s;
    animation-delay: 9.5s;
  }

  &--four {
    animation-duration: 16s;
    animation-delay: 10.25s;
  }

}

@keyframes fly-cycle {

  100% {
    background-position: -900px 0;
  }

}

@keyframes fly-right-one {

  0% {
    transform: scale(0.3) translateX(-10vw);
  }

  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }

  20% {
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }

  30% {
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }

  40% {
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }

  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.6);
  }

  60% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }

  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }

}

@keyframes fly-right-two {

  0% {
    transform: translateY(-2vh) translateX(-10vw) scale(0.5);
  }

  10% {
    transform: translateY(0vh) translateX(10vw) scale(0.4);
  }

  20% {
    transform: translateY(-4vh) translateX(30vw) scale(0.6);
  }

  30% {
    transform: translateY(1vh) translateX(50vw) scale(0.45);
  }

  40% {
    transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
  }

  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.45);
  }

  51% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }

  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }

}

#footer {
  background: #222;
  color: #fff;
}

// Birds Finish

</style>
<script>
export default {
  // data() {
  //   if (process.client) {
  //     // Wrap every letter in a span
  //     var textWrapper = document.querySelector('.ml3');
  //     textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  //     anime.timeline({ loop: true })
  //       .add({
  //         targets: '.ml3 .letter',
  //         opacity: [0, 1],
  //         easing: "easeInOutQuad",
  //         duration: 2250,
  //         delay: (el, i) => 150 * (i + 1)
  //       }).add({
  //         targets: '.ml3',
  //         opacity: 0,
  //         duration: 1000,
  //         easing: "easeOutExpo",
  //         delay: 1000
  //       });
  //   }
  // }

};

</script>
