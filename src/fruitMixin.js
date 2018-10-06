export const fruitMixin = {
  data() {
    return {
      filterText: '',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon']
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(d => {
        return d.match(this.filterText);
      })
    }
  },
  created() {
    console.log('[MIXIN] created life cycle hook');
  }
}