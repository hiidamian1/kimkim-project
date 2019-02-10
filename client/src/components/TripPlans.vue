<template>
    <div class='trip-plans-list' v-if='tripPlans.length'>
      <div v-bind:key='tripPlan.id' v-for='tripPlan in tripPlans'>
        <TripPlan v-bind:tripPlan='tripPlan' v-on:delete-trip-plan='deleteTripPlan'/>
      </div>
    </div>
</template>

<script>
import TripPlan from './TripPlan.vue';

export default {
  name: 'TripPlans',
  components: {
    TripPlan
  },
  props: [
    'tripPlans'
  ],
  methods: {
    deleteTripPlan(id) {
      this.$emit('delete-trip-plan', id);
    }
  }
}

</script>

<style scoped>
  .root-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .trip-plans-list {
    overflow-y: scroll;
    height: 48vh;
    border: 1px solid white;
  }
</style>
