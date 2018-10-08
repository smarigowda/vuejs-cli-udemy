<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="setButtonText()">{{ buttonText }}</button>
                <hr>
                <div class="alert alert-info" v-if="show">This is some info message</div>
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

</style>
