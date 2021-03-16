<template class="bg-gray-200">
<main>
  <div id="app" class="bg-gray-300">
      <px-header />
    <router-view class="container px-5 sm:px-20 py-20 " />
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-on:click="toggleModal">Show Modal</button>
        
        <modal 
            class="bg-red-300"
            v-show="showModal"
            v-on:close="toggleModal"
            v-bind:title="title">
            
            <template v-slot:body>
                <p class="text-gray-700 text-base">Aquí está mi primer slot</p>
            </template>

        </modal>
      <div class="c">
        <Login></Login>
      </div>
       



  </div>
  </main>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

  import modal from './components/modal.vue';
  import PxHeader from "@/components/PxHeader";
  import Login from './components/Login'
export default {
  name: 'App',
  components: {
    // HelloWorld
    modal,
    PxHeader,
    Login
  },
   data (){
        return{
            title: 'hola a todos',
            showModal: false,
        }

    },
    methods:{
        toggleModal(){
            this.showModal =!this.showModal
        }
    }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#app {
    /* padding: 20px; */
    text-align: center;
  }
  
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  
  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    text-align: left;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }
  
  footer {
    text-align: right;
  }
</style>
