  <template>
  <section>
    <my-header>
      <h1 slot="header">{{ mainmsg }}</h1>
      <p slot="subtitle">{{ titlemsg }} <a href='https://climate.nasa.gov/climate_resource_center/interactives/quizzes' target='_blank'>Take a quiz</a></p>
    </my-header>
    <div class="article">
      <div class="text"> 
        <h4>Carbon Dioxide</h4>
        <p>
          Carbon dioxide (CO2) is an important heat-trapping (greenhouse) gas, which is released through 
          human activities such as deforestation and burning fossil fuels, as well as natural processes such as respiration and volcanic eruptions. 
          The first graph shows atmospheric CO2 levels measured at Mauna Loa Observatory, Hawaii, in recent years, 
          with average seasonal cycle removed. The second graph shows CO2 levels during the last three glacial cycles, as reconstructed from ice cores.
          <br><br>
          The time series below shows global distribution and variation of the concentration of mid-tropospheric carbon dioxide in parts per million (ppm). 
          The overall color of the map shifts toward the red with advancing time due to the annual increase of CO2.
        </p>
        <div class="img">
          <img src="../static/assets/index/co2_left.gif" alt="">
        </div>
      </div>
      <div class="video">
        
        <div class="img">
          <img src="../static/assets/index/CO2.png" alt="">
        </div>

        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src="../assets/510_arctic_sea_ice_1979-2016_10s.mp4" type="video/mp4">
        </video>
        
      </div>
    </div>
    <span class="please"> Please explore links that lead to Electric&nbsp;Cars&nbsp;/&nbsp;Hybrid&nbsp;Cars as a one of the sollutions of reducing the co2 in the air.</span>
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
      mainmsg: "Earth's Climate is Warming",
      titlemsg: "How well do you know our Planet?"
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

section
{
  background: #fff;
}

.article
{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  max-width: 1400px;
  margin: auto;
  padding: 30px 15px;

  .img
  {
    min-width: 300px;
    max-width: 600px;
  }
  .video
  {
    min-width: 300px;
    max-width: 600px;

    img
    {
      width: 100%;
      border: 5px solid grey;
      margin-bottom: 50px;
    }

    video
    {
      border: 5px solid grey;
      width: 100%;
    }
  }
  .text
  {
    min-width: 300px;
    max-width: 600px;
    text-align: left;

    img
    {
      border: 5px solid grey;
      width: 100%;
      margin-bottom: 15px;
    }
  }
}
.please
{
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  min-width: 300px;
  max-width: 900px;
  font-size: max(30px, 15px);
  // font-size: 2rem;
  display: block;
  color: rgb(219, 51, 51);
  padding-bottom: 20px;
  margin: auto;
}
#body {
  
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 5%;
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
