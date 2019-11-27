<template>
  <div class="home">
    <my-header>
      <h1 slot="header">{{ mainmsg }}</h1>
      <p slot="subtitle">{{ titlemsg }}</p>
    </my-header>
    <section>
      <div class="box">
        <nuxt-link class="nav_link" to="/">
          <h2>Future World</h2>
        </nuxt-link>
        <p>*The web-page to make the world as free of gasoline cars as possible*</p>
        <h3>Description</h3>
        <p>The topic of my website the main problem of 21 century, the air pollution.</p>
        <p class="main">The site is built and designed to provide information about the current situation with air pollution. APIs are used to provide updated information on electric and hybrid cars for the current day. Electric cars are one of the main solutions to stop the toxic substances being thrown into the atmosphere. Electric, what I believe, is the first step for the bright healthy future for humanity. </p> 
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
.home {
  background: #fff;

  h1 {
    margin-top: 0;
    padding-top: 2%;
  }
}

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
