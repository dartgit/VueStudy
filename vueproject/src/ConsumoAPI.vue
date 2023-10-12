<template>
    <div>
      <div class="itemParceiro shadow p-3 mb-5">
        <q-img
          :src="url"
          spinner-color="white"
          style="height: 200px; max-width: 500px"
        />
        Genero: {{ Genero }} <br>
        Nome: {{ Nome }} <br>
        Idade: {{ Idade }} <br>
      </div>
      <div class="justify-left2">
        <q-btn color="deep-purple" icon="api" label="API" @click="APIClick" />
      </div>        
      <div class="justify-left2">
        <q-btn color="deep-purple" icon="repartition" label="Voltar" @click="QuasarClick" />
      </div>      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref } from 'vue';
  import { createApp } from 'vue';  
  import TelaPrinc from './TelaPrinc.vue';
  import { Quasar } from 'quasar';
  import quasarUserOptions from './quasar-user-options';

  export default {
    data() {
      return {
        showModal: false
      };
    },
    setup () {
    const url = ref('https://s2.glbimg.com/M3qwmOZ-0o9hpfsT2EJDdVCRRto=/0x0:620x320/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/m/S/A850ieROGGpDNXNqxPXg/2011-11-18-wow-logo.jpg')
    const Genero = ref('Jogo')
    const Nome = ref('World of Warcraft')
    const Idade = ref('Muitos Anos')            
      return {
        url,
        Genero,
        Nome,
        Idade,
        APIClick() {
        axios
        .get("https://randomuser.me/api/")
        .then((res) => {
          //console.log(res.data)
          url.value = res.data.results[0].picture.large
          Genero.value = res.data.results[0].gender
          Nome.value = res.data.results[0].name.first
          Idade.value = res.data.results[0].dob.age                              
        })
        .catch((error) => {console.log(error)})
        }        
      }
    },    
    methods: {     
    QuasarClick() {
        createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount('#app')
      },    
  },    
  };
  </script>
  
  <style scoped>
  .itemParceiro {
    height: 280px;
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

  .justify-left2 {
    height: 50px;
    width: 200px;
    margin: 10px;
    text-align: left;
  }
  </style>