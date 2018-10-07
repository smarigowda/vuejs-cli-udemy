export const appendTextMixin = {
  computed: {
    appendText() {
      console.log('[appendTextMixin] mixin called...')
      return `${this.text} (${this.text.length})`;
    }
  }
}