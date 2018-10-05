<template>
        <div>
              <h1>Filters & Mixins</h1>
              <input type="text" v-model="filterText"/>
              <ul>
                <li v-for="fruit in filteredFruits">{{ fruit }}</li>
              </ul>
        </div>
</template>

<script>
    export default {
      data() {
        return {
          text: 'Hello there !',
          filterText: '',
          fruits: ['Apple', 'Banana', 'Mango', 'Melon']
        }
      },
      filters: {
        toUppercase(value) {
          return value.toUpperCase();
        }
      },
      computed: {
        filteredFruits() {
          return this.fruits.filter(d => {
            return d.match(this.filterText);
          })
        }
      }
    }
</script>

<style>
</style>