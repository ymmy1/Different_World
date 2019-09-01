<template>
  <div id="accordion">
    <div v-for="(poster, index) in cars" :key="index" class="card">
      <div class="card-header">
        <a v-bind:href="'#' + poster.div_id" data-parent="#accordion" data-toggle="collapse">
          <img v-bind:src="poster.img_link" alt="">
        </a>
      </div>
      <div v-bind:id="poster.div_id" class="collapse">
        <div class="card-body">
          <h3 class="display-4" data-toggle="modal" v-bind:data-target="'.' + poster.div_class">{{poster.movie_name}}</h3>
          <div v-bind:class="'modal fade ' + poster.div_class" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                {{poster.modal_line_1}}<br>
                {{poster.modal_line_2}}<br>
                {{poster.modal_line_3}}<br>
                {{poster.modal_line_4}}<br>
                {{poster.modal_line_5}}<br>
                {{poster.modal_line_6}}<br>
                {{poster.modal_line_7}}<br>
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
<style lang="scss" scoped>
#accordion {
  display: inline-block;
  display: flex;
  justify-content: space-around;
  padding: 0 0 2%;
  align-items: baseline;

  img {
    width: 400px;
    height: 550px;
    object-fit: cover;
  }

  .card-body {
    padding: 0;
  }

  // Styling modal button
  h3 {
    padding: 2% 0;
    font-weight: bold;
    margin: 0;
    cursor: pointer;
    text-align: center;
    font-size: 2.3em;
    transition: 0.5s;

    &:hover {
      background: lightblue;
      color: white;
    }
  }
}

.modal-content {
  font-size: 2em;
  padding: 5% 10%;
}

</style>
