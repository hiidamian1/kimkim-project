<template>
  <div>
    <form @submit='addDay'>
      <input v-model='title' class='top' type='text' placeholder='Title' required>
      <input v-model='description' type='text' placeholder='Description' required>
      <input type='submit' value='Add Day'>
    </form>
    <router-link v-bind:to="{name: 'edit', params: {id: this.$route.params.tripId}}" tag='button'>View Trip Plan</router-link>
  </div>
</template>

<script>
import dayService from '../dayService.js';

export default {
  name: 'NewDay',
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addDay(e) {
      try {
        e.preventDefault();

        await dayService.addDay(this.$route.params.tripId, this.title, this.description);
        alert('added');
        
        this.title = '';
        this.description = '';
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