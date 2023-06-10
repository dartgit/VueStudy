<template>
    <div>
      <div @click="showModal = true" class="itemParceiro shadow p-3 mb-5">
        <img src="./assets/logo.png" alt="logo" />
        <span>Nome Parceiro</span>
      </div>
  
      <transition name="modal">
        <TesteT4 v-if="showModal" :showModal="showModal"/>
      </transition>
      <div class="row justify-left">
        <q-btn color="deep-purple" icon="repartition" label="Voltar" @click="QuasarClick" />
      </div>      
    </div>
  </template>
  
  <script>
  import TesteT4 from './PageTest4.vue'

  export default {
    data() {
      return {
        showModal: false
      };
    },
    components:{
      TesteT4  
    }
  };
  </script>
  
  <style scoped>
  .itemParceiro {
    height: 250px;
    width: 200px;
    margin: 10px;
    text-align: center;
  }
  .itemParceiro img {
    height: 100px;
    width: 180px;
  }
  
  .modal-enter-active, .modal-leave-active {
    transition: opacity .5s;
  }
  .modal-enter, .modal-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }
  </style>