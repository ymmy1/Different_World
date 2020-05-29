<template>
  <div class="accordion">
    <my-header>
      <h1 slot="header">{{ mainmsg }}</h1>
      <p slot="subtitle">{{ titlemsg }}</p>
    </my-header>
    <hybrid-search />
    <div class="junk-button">
      <span> <a href="https://www.google.com/search?q=junk+car+for+cash">Junk Your Gasoline Car for Cash!</a></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.accordion {
  background: #fff;
  padding-bottom: 20px;
}

span {
   font-size: 2.7em;
   font-style: italic;
  a {
    text-decoration: none;
    color: #000;
    }
  a:hover
  {
    color: purple;
  }
}
</style>
<script>
import myHeader from '../components/MyHeader.vue';
import HybridSearch from '../components/HybridSearch.vue';


export default {
  name: 'Select_a_Car',
  components: {
    myHeader,
    HybridSearch
  },
  data() {
    return {
      mainmsg: 'Top Hybrid Cars 2020',
      titlemsg: 'Top 8 hybrid cars in the world, find the best one you would love to drive.',

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
