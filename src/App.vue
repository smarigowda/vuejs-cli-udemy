<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <button @click="selectedComponent = 'appQuote'">Qoute</button>
               <button @click="selectedComponent = 'appAuthor'">Author</button>
               <button @click="selectedComponent = 'appNew'">New</button>
               <hr>
               <p>{{ selectedComponent }}</p>
               <component :is="selectedComponent">
                   <div>Default Component</div>
               </component>
               <!-- <app-quote>
                   <h1 slot="title">{{ quoteTitle }}</h1>
                   <p>A wonderful Quote</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue'
    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote !',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>

</style>
