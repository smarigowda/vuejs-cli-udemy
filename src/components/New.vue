<template>
  <div>
    <h3>New Component</h3>
    <p>New Quote</p>
    <button @click="counter++">INCREMENT</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    }
  },
  destroyed() {
    console.log('New Component: Destroyed !');
  },
  activated() {
    console.log('New Comp: Activated');
  },
  deactivated() {
    console.log('New Comp: De Activated');
  }
}
</script>

<style scoped>
</style>

