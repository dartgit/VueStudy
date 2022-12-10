<template>
  <div class="buttons-column">
    <div class="column-header">
      QUASAR
    </div>
    <div>
      <q-btn round color="white"  text-color="black"  @click="NotifyClick2">
        <q-avatar size="42px">
          <img src="https://scontent.fcgh39-1.fna.fbcdn.net/v/t1.18169-9/11074587_702535033188475_8513073536182128188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFzbXr_4rEZXMg9M-c92RQLyavowaR7X1LJq-jBpHtfUhC2VSG6MDg-IxYR97dwikgtys0h6K6sUcfvm8VZc0QV&_nc_ohc=kmqzv8OfuBcAX9TCy0y&tn=C-vexXGSJhrw6QlT&_nc_ht=scontent.fcgh39-1.fna&oh=00_AfDkh2YMMGOCf_K5nP2qMUNCS-F2FLhutmHx7oXikQapBw&oe=63AAF677">          
        </q-avatar>
      </q-btn>
    </div>    
    <div>
      <q-btn round color="white"  text-color="black"  @click="NotifyClick">
        <q-avatar size="42px">
          <img src="https://scontent.fcgh39-1.fna.fbcdn.net/v/t39.30808-6/310478933_2266637613492444_467116057370013632_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFq-iQOCVte4iboL8vRoGrnQs_U3XKm3flCz9Tdcqbd-WhKHmio--NnSiTocvU6mePuDG4KlhzvE5Y9GHP9GNqZ&_nc_ohc=Iay91UDh9rIAX8vfWE4&_nc_ht=scontent.fcgh39-1.fna&oh=00_AfAXIbUeS301w9KWph6dDAQ-4RhpHLzt4MRSJuIfEDUdZg&oe=6387F0A1">          
        </q-avatar>
      </q-btn>
    </div>      
    <div>
      <q-btn color="deep-purple" icon="repartition" glossy label="Voltar" @click="QuasarClick" />
    </div>             
  </div>      
</template>
  
  <script>
  
  import 'devextreme/data/odata/store';  
  //import DxButton from 'devextreme-vue/button';
  import { createApp } from 'vue'
  import TelaPrinc from './TelaPrinc.vue';
  import { Quasar } from 'quasar'
  import quasarUserOptions from './quasar-user-options'  
  import { useQuasar } from 'quasar'

  export default {
    components: {
      //DxButton,
    },
    setup () {
    const $q = useQuasar()

      return {
        NotifyClick() {
          $q.notify({
            message: 'Sim, Jogando Nintendo Switch',
            color: 'red',
            caption: 'Mensagem Automática'
          })
        },
        NotifyClick2() {
          $q.notify({
            message: 'Denis ta ai?',
            color: 'deep-purple',
            caption: 'Mensagem Automática'
          })
        }        
      }
    },    
    methods: {
      QuasarClick() {
        createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount('#app')
      },  
     
      onClick(e) {
        
        var btex = String;
  
        btex = e.component.option('text');
        if (btex == 'Voltar'){
          createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount('#app')
        }
        
      },
      capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      },
    },
  }
  
  </script>
  
  <style>
    .buttons-column > .column-header {
    flex-grow: 0;
    width: 150px;
    height: 35px;
    font-size: 130%;
    opacity: 0.6;
    text-align: left;
    padding-left: 15px;
  }

  .buttons-column > div {
    width: 150px;
    height: 50px;
    text-align: center;
  }
  
  .buttons-column {
    width: 150px;
    justify-content: center;
  }
  </style>