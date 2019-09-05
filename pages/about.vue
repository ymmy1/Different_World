<template>
  <div class="home">
    <my-header>
      <h1 slot="header">{{ mainmsg }}</h1>
      <p slot="subtitle">{{ titlemsg }}</p>
    </my-header>
    <section>
      <div class="box">
        <nuxt-link class="nav_link" to="/">
          <h2>Different World</h2>
        </nuxt-link>
        <p>*The web-page to make the world that you live in cleaner!*</p>
        <h3>Description</h3>
        <p>The topic of my website is air & ocean pollution.</p>
        <p class="main">* The API I would love to use isto use 4-5 different car companies and gather information about their electric car price, so people could search the electric car by their budget and switch their gas car to an electric one.The main idea is to show people the current situation of these two, include some informationabout global warming and how plastic destroys nature.Why do I want to build this website?
          * I honestly think electric cars are the future, and the pollution is something that we better to take care of as soon as possible. By doing web development, it brings me joy if I could actually help to save the planet by coding.</p> 
        <p>Designed with the enthusiast in mind</p>
        <h3>Licensing</h3>
        <p>No Licensing</p>
      </div>
    </section>
  </div>
</template>
<script>
import myHeader from '../components/MyHeader.vue';

export default {
  name: 'about',
  components: {
    myHeader
  },
  data() {
    // returning data
    return {
      mainmsg: 'About Page',
      titlemsg: 'The main idea and purpose of this website'
    }
  },
  head() {
    return {
      meta: [
        { hid: 'description', name: 'description', content: 'Information about the different world we can make together.' }
      ]
    }
  }
}

</script>
<style lang="scss" scoped>
.box {
  width: 40%;
  margin: 2% auto 4%;
  background: #eeeeee;
  padding: 2%;
  -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.75);
}

</style>
