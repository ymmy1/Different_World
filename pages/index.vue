<template>
  <section>
    <my-header>
      <h1 slot="header">{{ mainmsg }}</h1>
    </my-header>
    <div id="body">
      <img src="https://climate.nasa.gov/system/content_pages/main_images/1309_globaltemps_agency_comparison_2018.gif" alt="">
      <div class="paragraphs">
        <p class="upper">
          Temperature data showing rapid warming in the past few decades, the latest data going up to 2018. According to NASA data, 2016 was the warmest year since 1880, continuing a long-term trend of rising global temperatures. The 10 warmest years in the 139-year record all have occurred since 2005, with the five warmest years being the five most recent years. Credit: NASA's Earth Observatory.
        </p>
        <p class="bottom">
          Multiple studies published in peer-reviewed scientific journals1 show that 97 percent or more of actively publishing climate scientists agree*: Climate-warming trends over the past century are extremely likely due to human activities. In addition, most of the leading scientific organizations worldwide have issued public statements endorsing this position. The following is a partial list of these organizations, along with links to their published statements and a selection of related resources.
        </p>
        <a href="#gallery" class="explore">Explore ↓</a>
      </div>
      <hr>
    </div>
    <div class="bg">
      <h1 slot="header">{{ mainmsg2 }}</h1>
      <p slot="subtitle">{{ titlemsg2 }}</p>
      <div id="gallery">
        <div class="post">
          <a href="https://climate.nasa.gov/images-of-change?id=702#702-hurricane-dorian-devastates-northern-bahamas">
            <img alt="Images of Change" src="https://climate.nasa.gov/system/feature_items/images/9_images_of_change.jpg">
            <div class="text_overlay">
              <h2 class="media_feature_title">
                Images of Change
              </h2>
            </div>
          </a>
        </div>
        <div class="post">
          <a href="https://climate.nasa.gov/earth-apps/">
            <img alt="Climate Mobile Apps" src="https://climate.nasa.gov/system/feature_items/images/26_climate_mobile_apps.jpg">
            <div class="text_overlay">
              <h2 class="media_feature_title">
                Climate Mobile Apps
              </h2>
            </div>
          </a>
        </div>
        <div class="post">
          <a href="https://climate.nasa.gov/interactives/climate-time-machine">
            <img alt="Climate Time Machine" src="https://climate.nasa.gov/system/feature_items/images/27_climate_time_machine.jpg">
            <div class="text_overlay">
              <h2 class="media_feature_title">
                Climate Time Machine
              </h2>
            </div>
          </a>
        </div>
        <div class="post">
          <a href="https://climate.nasa.gov/interactives/global-ice-viewer"> <img alt="Global Ice Viewer" src="https://climate.nasa.gov/system/feature_items/images/28_global_ice_viewer.jpg">
            <div class="text_overlay">
              <h2 class="media_feature_title">
                Global Ice Viewer
              </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// Importing components
import myHeader from '../components/MyHeader.vue';

export default {
  name: 'Main',
  data() {
    // returning data
    return {
      mainmsg2: 'Explore',
      titlemsg2: 'Interactives, galleries and apps',
      mainmsg: "Scientific Consensus: Earth's Climate is Warming"
    }
  },
  //Naming components
  components: {
    myHeader
  },
  head() {
    return {
      meta: [
        { hid: 'description', name: 'description', content: 'Information about air pollution, how much air pollution comes from cars and movie trailer about air pollution' }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
#body {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 5%;
  height: auto;

  img {
    border: 1px solid grey;
    margin-bottom: 3%;
    max-width: 700px;
    width: 100%;
  }

  .paragraphs {
    max-width: 800px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 5%;

    .upper {
      font-weight: bold;
      margin-bottom: 6%;
    }
  }
}

.bg {
  background-color: #E9EEF4;
  padding: 4% 0 7% 0;

  h1 {
    font-size: 3em;
    font-weight: bold;
  }

  p {
    font-style: italic;
    color: grey;
    font-size: 1.4em;
  }
}

.explore {
  background: #E9EEF4;
  border: 4px solid #a3b6d1;
  border-radius: 10px;
  width: 280px;
  margin: 0 auto;
  font-weight: bold;
  text-decoration: none;
  font-size: 50px;
}


#gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2% 0;

}

a {
  text-decoration: none;
}

.post {
  max-width: 370px;
  width: 100%;
  height: 554px;
  overflow: hidden;
  padding-top: 2%;


  img {
    transition: all .2s ease-in-out;
    width: 100%;
    border: 1px solid grey;
  }
}

.post:hover {
  opacity: 0.7;

  img {
    transform: scale(1.1);
  }
}

.text_overlay {
  position: relative;
  top: -100px;
  color: white;

  h1 {
    font-size: 2.3em;
  }
}

</style>
