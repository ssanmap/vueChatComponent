<template>
 <div class="modal-mask">
        <div class="modal-wrapper bg-blue-300">
          <div class="modal-container bg-red-300">
            <h3 class="font-bold text-xl mb-2">{{ title }}</h3>
            <div>
                <slot name="body"></slot>
            </div>
            <footer>
              <button v-on:click="toggleButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    msg: String
  },

    data(){
        return{
            title:'hola'
        }
    },

    methods:{
        toggleButton(){
            this.$emit('close')
    
        }

    }
}
</script>

<style>
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