<template>
  <div class="accordion">
    <my-header>
      <h1 slot="header">{{ mainmsg }}</h1>
      <p slot="subtitle">{{ titlemsg }}</p>
    </my-header>
    <car-search />
  </div>
</template>
<style>
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
  }
}

</script>
