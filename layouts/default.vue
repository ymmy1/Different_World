<template>
  <div id="app" class="noselect">
    <header>
      <div class="main-title">
        <nuxt-link class="main-title_link" to="/">
          <h1 class="m33">
            Different World
          </h1>
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
  background: skyblue;
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

</style>
<script>
export default {
  data() {
    if (process.client) {
      // Wrap every letter in a span
      var textWrapper = document.querySelector('.ml3');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({ loop: true })
        .add({
          targets: '.ml3 .letter',
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 2250,
          delay: (el, i) => 150 * (i + 1)
        }).add({
          targets: '.ml3',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  }

};

</script>
