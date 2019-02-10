<template>
  <div>
    <form @submit='addTripPlan'>
      <input v-model='title' class='top' type='text' placeholder='Title' required>
      <input v-model='summary' type='text' placeholder='Summary' required>
      <input type='submit' value='Add Trip Plan'>
    </form>
    <router-link to='/' tag='button'>View Trip Plans</router-link>
  </div>
</template>

<script>
import tripPlanService from '../tripPlanService.js';

export default {
  name: 'NewTripPlan',
  data() {
    return {
      title: '',
      summary: ''
    }
  },
  methods: {
    async addTripPlan(e) {
      try {
        e.preventDefault();

        await tripPlanService.addTripPlan(this.title, this.summary);
        alert('added');
        
        this.title = '';
        this.summary = '';
      } catch(err) {
        this.error = err.message;
      }
    }
  }
}
</script>

<style scoped>
  form {
    background-color: rgba(20%, 20%, 20%, .5);
    padding: 20px;
    text-align: center;
    border: 1px solid white;
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