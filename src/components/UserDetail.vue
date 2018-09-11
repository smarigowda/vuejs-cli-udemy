<template>
    <div class="component child1">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ name }} and {{ switchName() }}</p>
    </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String
      }
    },
    methods: {
      switchName() {
        return this.name.toUpperCase()
      }
    }
  }
</script>

<style scope>
    div.child1 {
        background-color: lightcoral;
    }
</style>
