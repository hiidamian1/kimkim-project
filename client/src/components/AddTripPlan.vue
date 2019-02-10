<template>
  <router-link v-bind:to="{name: 'new'}" tag='button'>
      Add Trip Plan
  </router-link> 
</template>

<script>
export default {
  name: 'AddTripPlan'
}
</script>

<style scoped>
  button {
    width: 100%;
    text-align: center;
    padding: 10px;
    font-weight: normal;
    font-size:36px;
    background-color: rgba(20%, 20%, 20%, .5);
    color: white;
    border: 1px solid white;
    margin-bottom: 50px;
    cursor: pointer;
  }
</style>