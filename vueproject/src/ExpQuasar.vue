<template>
  <div>
    <div class="buttons-columnqn">
      <div class="column-headerqn">
        QUASAR
      </div>
    </div>
    <div class="buttons-rowqn">
      <div>
        <q-btn round color="white"  text-color="black"  @click="NotifyClick2">
          <q-avatar size="100px">
            <img src="https://scontent.fcgh21-1.fna.fbcdn.net/v/t1.18169-9/11074587_702535033188475_8513073536182128188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFzbXr_4rEZXMg9M-c92RQLyavowaR7X1LJq-jBpHtfUhC2VSG6MDg-IxYR97dwikgtys0h6K6sUcfvm8VZc0QV&_nc_ohc=jHq484OkZoMAX-VxAuo&_nc_ht=scontent.fcgh21-1.fna&oh=00_AfBqvn21UInHiQbisVRZ7t_7-s_aw3CRGU0coNNvYECBoA&oe=64B26A37">          
          </q-avatar>
        </q-btn>
      </div>    
      <div>
        <q-btn round color="white" text-color="black"  @click="NotifyClick">
          <q-avatar size="100px">
            <img src="https://scontent.fcgh21-1.fna.fbcdn.net/v/t39.30808-6/310478933_2266637613492444_467116057370013632_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFq-iQOCVte4iboL8vRoGrnQs_U3XKm3flCz9Tdcqbd-WhKHmio--NnSiTocvU6mePuDG4KlhzvE5Y9GHP9GNqZ&_nc_ohc=vWGE8J7E4JgAX-mNPRX&_nc_ht=scontent.fcgh21-1.fna&oh=00_AfBYPMsAzVbQsiXqeqK6nd_DPtM9XyxAv6g5JSF5m_2tLw&oe=6490EE21">          
          </q-avatar>
        </q-btn>
      </div>      
      <div>
        <q-btn round color="white" text-color="black"  @click="NotifyClick3">
          <q-avatar size="100px">
            <img src="https://scontent.fcgh39-1.fna.fbcdn.net/v/t1.18169-9/28059400_2013382172283676_9053847063793895573_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF-gp60X2a20PI9o1MtiFtTA-1irk79VLID7WKuTv1UsrcFCCoCXfcSosZeZLlM7wpRorh1w_yXa6kVDkSc39bS&_nc_ohc=P23xdhtJ34UAX8GMU2I&_nc_ht=scontent.fcgh39-1.fna&oh=00_AfD_APRwbtnVtCTjPDdpPGgO7DeVYX-wML1QMTDS6iAucg&oe=63BC7659">          
          </q-avatar>
        </q-btn>
      </div>        
      <div>
        <q-btn color="deep-purple" icon="repartition" glossy label="Voltar" @click="QuasarClick" />
      </div>             
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
        },
        NotifyClick3() {
          $q.notify({
            message: 'Tio eu tenho Shiny! E to procurando a Tartaruga',
            color: 'pink',
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
    .buttons-columnqn > .column-headerqn {
    width: 150px;
    height: 50px;
    text-align: center;
    padding-left: 15px;
    color : rgb(71, 2, 71);
  }

  .buttons-columnqn > div {
    width: 150px;
    height: 50px;
    text-align: center;
  }
  
  .buttons-columnqn {
    width: 150px;
    height: 50px;
    font-size: 30px;
    padding-left: 1px;    
    justify-content: center;
  }
  
  .buttons-rowqn > .row-header {
    flex-grow: 0;
    width: 150px;
    height: 50px;
    font-size: 130%;
    opacity: 0.6;
    text-align: left;
    padding-left: 15px;
  }  

  .buttons-rowqn > div {
    width: 150px;
    height: 110px;
    text-align: center;
  }  

  .buttons-rowqn {
    width: 150px;
    height: 300px;
    padding-left: 20px;        
    justify-content: center;    
  }
  </style>