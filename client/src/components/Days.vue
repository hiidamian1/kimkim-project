<template>
  <div v-if='days.length'>
		<div v-bind:key='day.id' v-for='day in days'>
			<Day v-bind:day='day' v-on:delete-day='deleteDay'/>
		</div>
	</div>
</template>

<script>
import Day from './Day.vue';

export default {
  name: 'Days',
  components: {
    Day
  },
  props: [
    'days'
  ],
  methods: {
    deleteDay(id) {
      this.$emit('delete-day', id);
    }
  }
}
</script>

<style scoped>

</style>
