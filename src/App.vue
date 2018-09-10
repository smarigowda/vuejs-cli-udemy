<template>
    <div class="container">
      <myapp-header/>
        <hr>
        <div class="row">
          <myapp-servers/>
          <myapp-server-details/>
        </div>
        <hr>
      <myapp-footer/>
    </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';
  import Servers from './components/Server/Servers.vue'
  import ServerDetails from './components/Server/ServerDetails.vue';
  export default {
    components: {
      'myapp-header': Header,
      'myapp-footer': Footer,
      'myapp-servers': Servers,
      'myapp-server-details': ServerDetails,
    }
  }
</script>

<style>
</style>
