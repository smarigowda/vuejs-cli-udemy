<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="setButtonText()">{{ buttonText }}</button>
                <hr>
                <transition name="fade">
                  <div class="alert alert-info" v-if="show">This is some info message</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               show: false,
               buttonText: 'Show Alert!'
            }
        },
        methods: {
          setButtonText() {
            this.show = !this.show
            if (this.buttonText === 'Show Alert!') {
              this.buttonText = 'Hide Alert!';
            } else {
              this.buttonText = 'Show Alert!';
            }
          }
        }
    }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    /* opacity is already 1, nothing here */
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
