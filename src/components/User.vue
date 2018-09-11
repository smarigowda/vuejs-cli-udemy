<template>
    <div class="component parent">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name</button>
        <p>Name: {{ name }}</p>
        <p>Age: {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                  :name="name"
                  :resetFn="resetName"
                  @resetNameEvent="name = $event"
                  :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                  :userAge="age"
                  @ageWasChanged="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
          return {
            name: 'Santosh',
            age: 40
          }
        },
        methods: {
          changeName() {
            this.name = 'Roopa'
          },
          resetName() {
            this.name = 'Swara...'
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scope>
    div.parent {
        background-color: lightblue;
    }
</style>
