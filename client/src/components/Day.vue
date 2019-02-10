<template>
  <div class='day'>
    <h3>{{day.title}}</h3>
    <div class='description'>
      {{day.description}}
    </div>
    <div class='links'>
      <router-link v-bind:to="{name: 'editDay', params: {id: day.tripId, dayId: day.id}}">Edit</router-link>|
      <a href v-on:click='deleteDay'>Delete</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Day',
  props: [
    'day'
  ],
  methods: {
    deleteDay(e) {
      e.preventDefault();

      this.$emit('delete-day', this.day.id);
    }
  }
}
</script>

<style scoped>
  .day {
    width: 100%;
    border: 1px solid white;
    padding: 5px 15px;
    font-weight: normal;
    background-color: none;
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