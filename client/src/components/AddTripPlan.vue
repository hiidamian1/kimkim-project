<template>
  <router-link to='trip-plans/new' tag='button'>
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
    border: 1px solid black;
    margin-bottom: 50px;
    cursor: pointer;
  }
</style>