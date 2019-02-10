<template>
    <div class='home'>
      <AddTripPlan/>
      <TripPlans v-bind:tripPlans='tripPlans' v-on:delete-trip-plan='deleteTripPlan'/>
    </div>
</template>

<script>
import Header from '../components/Header';
import TripPlans from '../components/TripPlans';
import AddTripPlan from '../components/AddTripPlan';
import tripPlanService from '../tripPlanService.js';

export default {
  name: 'HomePage',
  components: {
    TripPlans,
    AddTripPlan
  },
  data() {
    return {
      tripPlans: []
    }
  },
  methods: {
    async deleteTripPlan(id) {
      try {
        await tripPlanService.deleteTripPlan(id);
        this.tripPlans = await tripPlanService.getTripPlans();
      } catch(err) {
        this.error = err.message;
      }
    }
  },
  async created() {
    try {
      this.tripPlans = await tripPlanService.getTripPlans();
    } catch(err) {
      this.error = err.message;
    }
  }
}
</script>

<style scoped>

</style>
