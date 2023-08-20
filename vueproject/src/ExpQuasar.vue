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
            <img src=".\loginImage\Fabiano.png">          
          </q-avatar>
        </q-btn>
      </div>    
      <div>
        <q-btn round color="white" text-color="black"  @click="NotifyClick">
          <q-avatar size="100px">
            <img src=".\loginImage\Denis.png">          
          </q-avatar>
        </q-btn>
      </div>      
      <div>
        <q-btn round color="white" text-color="black"  @click="NotifyClick3">
          <q-avatar size="100px">
            <img src=".\loginImage\Isabelle.png">          
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