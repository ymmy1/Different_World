<template>
  <div class="accordion">
    <my-header>
      <h1 slot="header">{{ mainmsg }}</h1>
      <p slot="subtitle">{{ titlemsg }}</p>
    </my-header>
    <car-search />
    <div class="junk-button">
      <span>Junk Your Gasoline Car</span>
      <a href="https://theclunkerjunker.com/" target="_blank"><button class="btn-danger">THE ClunkerJunker.com</button></a>
      <span class="betterdeal">Or find a better deal on:</span>
      <a href="https://www.google.com/search?source=hp&ei=tN_HXeWGOrHJ5gLwg7L4CA&q=junk+car+for+cash&oq=junk+car+for+cash&gs_l=psy-ab.3..0l2j0i22i30l8.922.2948..3015...0.0..0.144.1998.0j16......0....1..gws-wiz.dgK-McHvyF4&ved=0ahUKEwjlsPupsd_lAhWxpFkKHfCBDI8Q4dUDCAY&uact=5" target="_blank"><button class="btn-info">Google.com</button></a>
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

  .betterdeal {
    font-size: 1.7em;
    font-style: italic;
    margin-top: 0.5%;
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
      mainmsg: '2020 Top of 12 electric cars in the world',
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
