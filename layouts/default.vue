<template>
  <div id="app" class="noselect">
    <header>
      <div class="main-title">
        <nuxt-link class="main-title_link" to="/">
          <h4 class="p-0 m-0">The</h4>
          <h1 class="m33">
            Different World
          </h1>
          <p>Clean The Air You Breathe</p>
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
      <nav id="nav">
        <nuxt-link class="nav_link" to="/">Select a Car</nuxt-link> |
        <nuxt-link class="nav_link" to="/air_pollution">Air Pollution</nuxt-link> |
        <nuxt-link class="nav_link" to="/ocean_pollution">Ocean Pollution</nuxt-link> |
        <nuxt-link class="nav_link" to="/about">About</nuxt-link>
      </nav>
    </header>
    <nuxt />
    <!-- Footer -->
    <footer id="footer" class="page-footer font-small bg-info">
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https://ymmy1.github.io/portfolio/" class="text-secondary">Ymmy</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>
<style lang="scss" scoped>
.main-title {
  background: url("../assets/main.jpg") no-repeat center top/cover, linear-gradient(to right, #fff 0%, #4797C8 100%);
  height: 40vh;
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
  background: #87CEEB;
  padding: 0.5% 30%;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-around;
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
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells.svg);
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
