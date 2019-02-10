<template>
  <div class='tripPlan'>
    <h3>{{tripPlan.title}}</h3>
    <div class='summary'>
      {{tripPlan.summary}}
    </div>
    <div class='links'>
      <router-link v-bind:to="{name: 'edit', params: {id: tripPlan.id}}">Edit</router-link>|
      <a href v-on:click='deleteTripPlan'>Delete</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TripPlan',
  props: [
    'tripPlan'
  ],
  methods: {
    deleteTripPlan(e) {
      e.preventDefault();

      this.$emit('delete-trip-plan', this.tripPlan.id);
    }
  }
}
</script>

<style scoped>
  .tripPlan {
    width: 100%;
    border: 1px solid white;
    padding: 5px 15px;
    font-weight: normal;
    background-color: rgba(20%, 20%, 20%, .5);
    color: white;
    text-align: center;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color:white;
  }
</style>