<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                  <option value="fade" >Fade</option>
                  <option value="slide">Slide</option>
                </select>
                <hr>
                <button class="btn btn-primary" @click="setButtonText()">{{ buttonText }}</button>
                <hr>
                <transition :name="alertAnimation">
                  <div class="alert alert-info" v-show="show">This is some info message</div>
                </transition>
                <transition name="slide" type="animation" appear>
                  <div class="alert alert-info" v-if="show">This is some info message</div>
                </transition>

                <transition
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
                  <div class="alert alert-info" v-if="show">This is some info message</div>
                </transition>

                <transition name="fade" mode="out-in">
                  <div class="alert alert-info" v-if="show" key="info">This is some message</div>
                  <div class="alert alert-warning" v-else key="warning">This is some message</div>
                </transition>
                <!-- <app-success-alert></app-success-alert> -->
                <!-- <app-danger-alert></app-danger-alert> -->
                <button @click="toggleSelectedComponent" class="btn btn-primary">Toggle Dynamic Component</button>
                <br/>
                <br/>
                <transition name="fade" mode="out-in">
                  <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button @click="addItem" class="btn btn-primary">Add Item</button>
                <br/>
                <br/>
                <ul class="list-group">
                  <li class="list-group-item"
                      v-for="(number, index) in numbers"
                      :key="number"
                      @click="removeItem(index)">{{ number }}</li>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script>
    import SuccessAlert from './SuccessAlert.vue';
    import DangerAlert from './DangerAlert';
    export default {
        data() {
            return {
               show: true,
               buttonText: 'Show Alert!',
               alertAnimation: 'fade',
               selectedComponent: 'app-danger-alert',
               numbers: [1, 2, 3, 4, 5],
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
          },
          toggleSelectedComponent() {
            if(this.selectedComponent === 'app-danger-alert') {
              this.selectedComponent = 'app-success-alert'
            } else {
              this.selectedComponent = 'app-danger-alert'
            }
          },
          addItem() {
            const pos = Math.floor(Math.random() * this.numbers.length);
            this.numbers.splice(pos, 0, this.numbers.length + 1);
          },
          removeItem(index) {
            this.numbers.splice(index, 1);
          }

        },
        components: {
          'app-success-alert': SuccessAlert,
          'app-danger-alert': DangerAlert,
        }
    }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave {
    /* opacity is already 1, nothing here */
  }

  .fade-leave-active {
    transition: opacity .5s;
    opacity: 0;
  }

  .slide-enter {

  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px)
    }

    to {
      transform: translateY(0)
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0)
    }

    to {
      transform: translateY(20px)
    }
  }

</style>
