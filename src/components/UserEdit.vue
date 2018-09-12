<template>
    <div class="component" :class="$style.child2">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{ userAge }}</p>
        <button @click="changeAge()">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    userAge: Number
  },
  methods: {
    changeAge() {
      this.userAge = 35
      // this.$emit('ageWasChanged', this.userAge)
      eventBus.$emit('ageWasChanged', this.userAge);
    }
  }
}
</script>

<style module>
    .child2 {
        background-color: lightgreen;
    }
</style>
