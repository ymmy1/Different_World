<style lang="scss" scoped>
  #accordion {
  margin-top: 2%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: baseline;

  .card {
    display: inline-block;
    width: 450px;
    margin-bottom: 2%;

    button {
      border-radius: 5px;
      padding: 5px 15px;
    }

    a {
      img {
        width: 100%;
        height: 300px;
        object-fit: contain;
      }
    }

  }
}

.modal-content {
  a {
    // display: block;
    width: 100%;
    color: #ffffff;
    text-decoration: none;

    button {
      width: 100%;
    }
  }
}
.close {
  position:absolute;
  right:-50px;
  top:0;
  z-index:999;
  font-size:2rem;
  font-weight: normal;
  color:#fff;
  opacity:1;
}
</style>
<template>
  <div id="accordion">
    <div v-for="(poster, index) in cars" :key="index" class="card">
      <div class="card-header">
        <a v-bind:href="'#' + poster.div_id" data-parent="#accordion" data-toggle="collapse">
          <img v-bind:src="poster.img_link" alt="">
          <h3>{{poster.car_name}}</h3>
          <p><span class="font-weight-bold">MSRP: </span>{{poster.msrp}}</p>
        </a>
      </div>
      <div v-bind:id="poster.div_id" class="collapse">
        <div class="card-body">
          <div>
            <p><span class="font-weight-bold">Range: </span>{{poster.range}}</p>
            <p><span class="font-weight-bold">MSRP: </span>{{poster.msrp}}</p>
            <p><span class="font-weight-bold">MPGe: </span>{{poster.mpge}}</p>
            <p><span class="font-weight-bold">Battery charge life: </span>{{poster.charge}}</p>
            <p><span class="font-weight-bold">Horsepower: </span>{{poster.horsepower}}</p>
            <p><a :href="poster.rate_1_link">{{poster.rate_1}}</a></p>
            <p><a :href="poster.rate_2_link">{{poster.rate_2}}</a></p>
            <div data-toggle="modal" v-bind:data-target="'.' + poster.div_class">
              <button class="btn-primary">Watch more>></button>
            </div>
          </div>
          <div v-bind:class="'modal fade ' + poster.div_class" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe class="embed-responsive-item" :src="poster.youtube" allowfullscreen></iframe>
                </div>
                <a :href="poster.weblink" target="_blank"><button class="btn-primary">Order from original website</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import cars from '../assets/cars/data/hCars.json';
import VueYoutube from 'vue-youtube';

Vue.use(VueYoutube)

export default {
  name: 'HybridSearch',
  data() {
    return {
      cars
    }
  },
  methods: {
    playVideo() {
      this.$refs.youtube.player.playVideo()
    },
    playing() {
      console.log('\o/ we are watching!!!')
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}

</script>
