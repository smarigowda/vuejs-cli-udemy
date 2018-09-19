<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectAComponent('app-blue', 'Blue Rectangle...')">Load Blue Template</button>
                <button class="btn btn-success" @click="selectAComponent('app-green', 'Green Rectangle...')">Load Green Template</button>
                <button class="btn btn-danger" @click="selectAComponent('app-red', 'Red Rectangle...')">Load Red Template</button>
                <hr>
                <div v-if="selectedComponent">
                    <component :is="selectedComponent">
                        <template>{{ content }}</template>
                    </component>
                </div>
                <!-- <app-blue></app-blue>
                <app-green></app-green>
                <app-red></app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedComponent: null,
                content: null
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            selectAComponent(component, content) {
                this.selectedComponent = component;
                this.content = content;
            }
        }
    }
</script>

<style>
</style>
