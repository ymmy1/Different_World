<template>
  <div id="app" class="noselect">
    <header>
      <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
        </video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3">Future World</h1>
              <p class="lead mb-0">Clean the air you breathe</p>
            </div>
          </div>
      </div>
    </header>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <button aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbar" data-toggle="collapse" type="button">
	      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ml-auto mt-2">
          <li class="nav-item"><nuxt-link class="nav-link" to="/">Main Page</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" to="/electric_cars">Electric Cars</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" to="/hybrid_cars">Hybrid Cars</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" to="/about">About</nuxt-link></li>
        </ul>
      </div>
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
* 
{
  box-sizing: border-box;
}

header {
  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

@media (pointer: coarse) and (hover: none) {
  header {
    background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
  }
  header video {
    display: none;
  }
}
.main-title {
  position: fixed;
  height: 90vh;
  background: #120E10;
  position: relative;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;

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


#footer {
  background: #222;
  color: #fff;
}
</style>

