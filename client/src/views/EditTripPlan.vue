<template>
  <div>
    <form @submit='editTripPlan'>
      <label for='title'>Title</label>
      <input v-model='title' id='title' class='top' type='text' placeholder='Title' required>
      
      <label for='summary'>Summary</label>
      <input v-model='summary' id='summary' type='text' placeholder='Summary' required>
      
      <Days v-bind:days='days'/>
      
      <div class='center'>
        <input type='submit' value='Save Edits'>
      </div>
    </form>
    <router-link to='/' tag='button'>View Trip Plans</router-link>
  </div>
</template>

<script>
import tripPlanService from '../tripPlanService.js';
//import dayService from '../dayService.js';

export default {
  name: 'EditTripPlan',
  components: {
    Days
  },
  data() {
    return {
      id: -1,
      title: '',
      summary: '',
      days: []
    }
  },
  methods: {
    async editTripPlan(e) {
      try {
        e.preventDefault();

        await tripPlanService.editTripPlan(this.id, this.title, this.summary, this.days);
      } catch(err) {
        this.error = err.message;
      }
    }
  },
  async created() {
    this.id = this.$route.params.id;
    const tripPlan = await tripPlanService.getTripPlan(this.id);

    this.title = tripPlan.title;
    this.summary = tripPlan.summary;

    console.log(tripPlan);
  }
}
</script>

<style scoped>
  form {
    background-color: rgba(20%, 20%, 20%, .5);
    padding: 20px;
    border: 1px solid white;
  }

  .center {
    text-align: center;
  }

  input[type=text] {
    width: 100%;
    padding: 10px;
    display: inline-block;
  }

  .top {
    margin-bottom: 20px;
  }

  input[type=submit] {
    color: white;
    border: 1px solid white;
    background: none;
    font-size: 30px;
    padding: 5px;
    margin-top: 20px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background: rgba(255, 255, 255, .5);

  }

  label {
    text-align: right;
    font-size:20px;
    color:white;
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    text-align: center;
    padding: 10px;
    font-weight: normal;
    font-size:36px;
    border: 1px solid white;
    background-color: rgba(20%, 20%, 20%, .5);
    color: white;
    margin-top: 50px;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(255, 255, 255, .5);
  }
</style>