<template>
  <div class="accordion">
    <my-header>
      <h1 slot="header">{{ mainmsg }}</h1>
      <p slot="subtitle">{{ titlemsg }}</p>
    </my-header>
    <car-search />
    <div class="junk-button">
      <span>Junk Your Gasoline Car</span>
      <a href="http://www.usajunkcarremoval.com/" target="_blank"><button class="btn-danger">USA JunkRemoval.com</button></a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.junk-button {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;
  margin: 1% 0 3%;

  span {
    font-size: 2.7em;
  }

  a {
    font-size: 1.7em;

    button {
      border-radius: 5px;
      padding: 10px 15px;
    }
  }
}

</style>
<script>
import myHeader from '../components/MyHeader.vue';
import carSearch from '../components/CarSearch.vue';


export default {
  name: 'Select_a_Car',
  components: {
    myHeader,
    carSearch
  },
  data() {
    return {
      mainmsg: 'Select a Car',
      titlemsg: 'Find a 100% electric car you would love to drive',

    }
  },
  head() {
    return {
      meta: [
        { hid: 'description', name: 'description', content: 'Electric cars with price, mpg, charge, battery, horsepower and order/buy link information.' }
      ]
    }
  }
}

</script>
