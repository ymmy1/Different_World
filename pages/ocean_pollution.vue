<template>
  <div class="gird">
    <section class="text-center">
      <my-header>
        <h1 slot="header">{{ mainmsg }}</h1>
        <p slot="subtitle">{{ titlemsg }}</p>
      </my-header>
    </section>
    <section class=" pt-2 pb-2">
      <div class="video col-12">
        <video class="img-thumbnail img-fluid" poster="https://cdn11.bigcommerce.com/s-amir6jyttl/stencil/42b33470-abc3-0137-77ed-0242ac11000d/e/c89d89c0-607f-0137-5425-0242ac110007/img/desktopHeroVideo.jpg" id="homeVideoLoop" playsinline="" autoplay="" muted="" loop="">
          <source id="mp4" type="video/mp4" data-mobile-path="https://firebasestorage.googleapis.com/v0/b/ocean-bc.appspot.com/o/4ocean%20homepage%20video%20(mobile).mp4?alt=media&amp;token=f8ce3c10-92bd-4321-bdd1-e06bf655d6d2" data-desktop-path="https://firebasestorage.googleapis.com/v0/b/ocean-bc.appspot.com/o/4ocean%20homepage%20video%20(desktop).mp4?alt=media&amp;token=b21294bf-77ee-469f-ba63-e09fbce97049" src="https://firebasestorage.googleapis.com/v0/b/ocean-bc.appspot.com/o/4ocean%20homepage%20video%20(desktop).mp4?alt=media&amp;token=b21294bf-77ee-469f-ba63-e09fbce97049">
        </video>
        <button class="btn-primary mt-3"><a class="p-5" href="https://4ocean.com/">Go to 4Ocean.com</a></button>
      </div>
    </section>
    <hr>
    <section class="row pt-4 pb-2">
      <div class="center-text text-left col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12 col-12">
        <h3>Plastic pollution</h3>
        <p>
          Plastic pollution seeps into the ocean through run-off and even purposeful dumping. The amount of plastic in the Atlantic Ocean has tripled since the 1960s. The garbage patch floating in the Pacific Ocean, almost 620,000 square miles—twice the size of Texas—is a powerful image of our plastic problem.
        </p>
        <p>
          A huge culprit is single-use plastics, used once before tossed into the trash or directly into the ocean. These single-use items are accidentally consumed by many marine mammals. Plastic bags resemble jellyfish, a common food for sea turtles, while some seabirds eat plastic because it releases a chemical that makes it smell like its natural food. Discarded fishing nets drift for years, ensnaring fish and mammals.
        </p>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
        <img class="img-thumbnail img-fluid" src="../assets/ocean/fish.jpg" alt="">
      </div>
    </section>
    <hr>
    <section class="movie-poster row pt-2 pb-5">
      <div class="feed col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
        <img class="movie-img img-thumbnail img-fluid" src="../assets/ocean/movie.jpg" alt="">
        <button type="button" class="btn btn-primary mt-3" data-toggle="modal" data-target=".bd-example-modal-lg">Watch Trailer</button>
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <!--Body-->
              <div class="modal-body mb-0 p-0">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6zrn4-FfbXw" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-text text-left col-xl-8 col-lg-8 col-md-6 col-sm-12 col-xs-12 col-12">
        <h3>Storyline</h3>
        <p>A PLASTIC OCEAN begins when journalist Craig Leeson, searching for the elusive blue whale, discovers plastic waste in what should be pristine ocean. In this adventure documentary, Craig teams up with free diver Tanya Streeter and an international team of scientists and researchers, and they travel to twenty locations around the world over the next four years to explore the fragile state of our oceans, uncover alarming truths about plastic pollution, and reveal working solutions that can be put into immediate effect</p>
      </div>
    </section>
  </div>
</template>
<script>
import myHeader from '../components/MyHeader.vue';

export default {
  name: 'ocean pollution',
  data() {
    return {
      mainmsg: 'Ocean Pollution',
      titlemsg: 'source: 4ocean, National Geographic, YouTube',
    }
  },
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
