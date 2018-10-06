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
    import { fruitMixin } from './fruitMixin.js';

    export default {
      mixins: [ fruitMixin ],
      data() {
        return {
          text: 'Hello there !',
        }
      },
      filters: {
        toUppercase(value) {
          return value.toUpperCase();
        }
      },
      created() {
        console.log('[List] created life cycle hook');
      }
    }
</script>

<style>
</style>