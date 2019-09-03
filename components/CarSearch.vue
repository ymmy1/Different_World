<style lang="scss" scoped>
#accordion {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: baseline;

  .card {
    display: inline-block;
    width: 23%;

    a {
      img {
        width: 100%;
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
            <p><span class="font-weight-bold">Battery: </span>{{poster.battery}}</p>
            <p><a :href="poster.rate_1_link">{{poster.rate_1}}</a></p>
            <p><a :href="poster.rate_2_link">{{poster.rate_2}}</a></p>
            <div data-toggle="modal" v-bind:data-target="'.' + poster.div_class">
              <button class="btn-primary">Watch more>></button>
            </div>
          </div>
          <div v-bind:class="'modal fade ' + poster.div_class" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <iframe :src="poster.youtube" allowfullscreen height="500px"></iframe>
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
import cars from '../assets/cars/data/eCars.json';

export default {
  name: 'CarSearch',
  data() {
    return {
      cars
    }
  }
}

</script>
