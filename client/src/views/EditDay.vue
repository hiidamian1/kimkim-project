<template>
  <div>
    <form @submit='editDay'>
      <label for='title'>Title</label>
      <input v-model='title' id='title' class='top' type='text' placeholder='Title' required>
      
      <label for='description'>Description</label>
      <input v-model='description' id='description' type='text' placeholder='Description' required>
            
      <div class='center'>
        <input type='submit' value='Save Edits'>
      </div>
    </form>
    <router-link v-bind:to="{name: 'edit', params: {id: this.id}}" tag='button'>View Trip Plan</router-link>
  </div>
</template>

<script>
import dayService from '../dayService.js';

export default {
  name: 'EditDay',
  data() {
    return {
      id: -1,
      dayId: -1,
      title: '',
      description: '',
    }
  },
  methods: {
    async editDay(e) {
      try {
        e.preventDefault();

        await dayService.editDay(this.dayId, this.title, this.description);
      } catch(err) {
        this.error = err.message;
      }
    }
  },
  async created() {
    console.log("edit day");
    this.dayId = this.$route.params.dayId;
    this.id = this.$route.params.id;
    console.log(`tripId: ${this.dayId}`);
    console.log(`id: ${this.id}`)
    const day = await dayService.getDay(this.dayId);

    this.title = day.title;
    this.description = day.description;

    console.log(day);
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