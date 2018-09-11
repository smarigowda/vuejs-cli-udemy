<template>
    <div class="component child1">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ name }} and {{ switchName() }}</p>
        <button @click="resetName">Reset Name, Event Emitter</button>
        <button @click="resetFn()">Reset Name, Callback Function</button>
    </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        // required: true,
        default: 'Sukruthi'
      },
      resetFn: {
        type: Function
      }
    },
    methods: {
      switchName() {
        return this.name.toUpperCase()
      },
      resetName() {
        this.name = 'Lingaraju'
        this.$emit('resetNameEvent', 'Lingaraju')
      }
    }
  }
</script>

<style scope>
    div.child1 {
        background-color: lightcoral;
    }
</style>
