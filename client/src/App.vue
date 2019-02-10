<template>
  <div id='app' class='root'>
    <div class='pages'>
      <Header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>


<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial;
  }

  html, body {
    height: 100%;
  }

  .root {
    background-image: url('./assets/sarawak.jpg');
    background-size: cover;
    height: 1000px;
  }

  .pages {
    padding: 20px 120px
  }

</style>
