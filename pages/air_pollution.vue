<template>
  <div id="images">
    <section class=" text-center">
      <my-header>
        <h1 slot="header">{{ mainmsg }}</h1>
        <p slot="subtitle">{{ titlemsg }}</p>
      </my-header>
    </section>
    <section class=" pt-2 pb-2">
      <div class="video col-12">
        <video class="vjs-tech" playsinline="playsinline" id="videoPlayer_html5_api" tabindex="-1" preload="auto" poster="https://pmdvod.nationalgeographic.com/NG_Video/92/459/nw-seo-cli005-climate-101-air-pollution-thumb-final.jpg" src="http://pmdvod.nationalgeographic.com/NG_Video/92/459/climate-101-air-pollution-v06.mp4" controls autoplay muted></video>
        <button class="btn-primary mt-3"><a class="p-5" href="https://www.cooleffect.org/">www.Cooleffect.org</a></button>
      </div>
    </section>
    <hr>
    <section class="row pt-4 pb-2">
      <div class="center-text text-left col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12 col-12">
        <h3>How much air pollution comes from cars?</h3>
        <p>
          You see it every time that smoke billows from your car's exhaust pipe, so there's no denying that vehicles are major contributors to air pollution. Air pollution refers to the presence of foreign substances in the air that don’t belong there, or excessive amounts of certain impurities that wouldn't harm us otherwise. When cars burn gasoline, they emit pollutants. Gasoline fumes escape into the air even when we pump gasoline into our fuel tanks.
        </p>
        <p>There are four major pollutants that come from cars:
          <a href="https://auto.howstuffworks.com/air-pollution-from-cars.htm">Read More >></a>
        </p>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
        <img class="img-thumbnail img-fluid" src="../assets/air/cars.jpg" alt="">
      </div>
    </section>
    <hr>
    <section class="movie-poster row pt-2 pb-5">
      <div class="feed col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
        <img class="movie-img img-thumbnail img-fluid" src="../assets/air/movie.jpg" alt="">
        <button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target=".bd-example-modal-lg">Watch Trailer</button>
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <!--Body-->
              <div class="modal-body mb-0 p-0">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Bu6SE5TYrCM" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-text text-left col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12 col-12">
        <h3>Storyline</h3>
        <p>The idea to document Gore's efforts came from producer Laurie David, who saw his presentation at a town hall meeting on global warming, which coincided with the opening of The Day After Tomorrow. Laurie David was so inspired by his slide show that she, with producer Lawrence Bender, met with Guggenheim to adapt the presentation into a film. Premiering at the 2006 Sundance Film Festival and opening in New York City and Los Angeles on May 24, 2006, the documentary was a critical and commercial success, winning two Academy Awards for Best Documentary Feature and Best Original Song.[4] The film grossed $24 million in the U.S. and $26 million at the international box office, becoming the eleventh highest grossing documentary film to date in the United States.[5]</p>
      </div>
    </section>
  </div>
</template>
<script>
// Importing components
import myHeader from '../components/MyHeader.vue';

export default {
  name: 'Air Pollution',
  data() {
    // returning data
    return {
      mainmsg: 'Air Pollution',
      titlemsg: 'Air pollution blog.(sources: NASA, Wikipedia)'
    }
  },
  //Naming components
  components: {
    myHeader
  }
}

</script>
<style lang="scss" scoped>
.row {
  width: 70%;
  margin: 0 auto;

  .center-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

  }
}

.video {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;

  .btn-primary {
    a {
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.2em;
    }
  }
}

video {
  width: 70%;
}

.movie-poster {
  width: 50%;
}

</style>
