<template>
    <div class="buttons-demo">
      <div class="buttons">
        <div>
          <div class="buttons-column">
            <div class="column-header">
              Jogos
            </div>
            <div>
              <DxButton
                :width="120"
                text="WoW"
                type="normal"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Pokemon"
                type="normal"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Genshinnnmnmn"
                type="normal"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
          </div>
          <div class="buttons-column">
            <div class="column-header">
              Stream's
            </div>
            <div>
              <DxButton
                :width="120"
                text="Twitch"
                type="success"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Facebook"
                type="success"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Youtube"
                type="success"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="buttons-column">
            <div class="column-header">
              Estudo
            </div>
            <div>
              <DxButton
                :width="120"
                text="DevExtreme"
                type="default"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Quasar"
                type="default"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Vue"
                type="default"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
          </div>
          <div class="buttons-column">
            <div class="column-header">
              Filmes
            </div>
            <div>
              <DxButton
                :width="120"
                text="Netflix"
                type="danger"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Prime"
                type="danger"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="HBO Max"
                type="danger"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
          </div>
          <div class="buttons-column">
            <div class="column-header">
              Teste de Notify
            </div>
            <div>
              <DxButton
                :width="120"
                text="Notify"
                type="normal"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              Tela Denis
              <DxButton
                :width="120"
                text="Tela"
                type="normal"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
          </div>        
        </div>
      </div>
      <div class="buttons-column">   
        <div>
          <q-btn color="deep-purple" label="Tela" text="Tela" @click="QuasarClick" />
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  //import DxActionSheet from 'devextreme-vue/action-sheet';
  //import DxSwitch from 'devextreme-vue/switch';
  import DxButton from 'devextreme-vue/button';
  import notify from 'devextreme/ui/notify';
  import { createApp } from 'vue'
  import ExpQuasar from './ExpQuasar.vue'
  import ExpDevX from './ExpDevX.vue'
  import GridDev from './GridDev.vue'
  import TelaDenis from './TelaDenis.vue';
  import { Quasar } from 'quasar'
  import quasarUserOptions from './quasar-user-options'
  
  
  export default {
    components: {
      //DxActionSheet,
      //DxSwitch,
      DxButton,
    },
    methods: {
      QuasarClick() {
        createApp(TelaDenis).use(Quasar, quasarUserOptions).mount('#app')
      },

      onClick(e) {
        
        var btex = String;
         
        btex = e.component.option('text');
        if (btex == 'WoW'){ 
          window.location.href = 'https://worldofwarcraft.com/pt-br/';
        }
        else if(btex == 'Pokemon'){
          window.location.href = 'https://www.ligapokemon.com.br/?view=home';
        }
        else if(btex == 'Genshin'){
          window.location.href = 'https://genshin.mihoyo.com/pt/home';
        }
        else if(btex == 'Twitch'){
          window.location.href = 'https://www.twitch.tv/directory';
        }
        else if(btex == 'Facebook'){
          window.location.href = 'https://www.facebook.com/gaming/feed/';
        }            
        else if(btex == 'Youtube'){
          window.location.href = 'https://www.youtube.com/gaming';
        }     
        else if(btex == 'DevExtreme'){
          createApp(ExpDevX).use(Quasar, quasarUserOptions).mount('#app')
          //createApp(ExpDevX).mount('#app')
          //window.location.href = 'https://js.devexpress.com';
        }
        else if(btex == 'Quasar'){
          createApp(ExpQuasar).use(Quasar, quasarUserOptions).mount('#app')
          //createApp(ExpQuasar).mount('#app')
          //window.location.href = 'https://quasar.dev';
        }
        else if(btex == 'Vue'){
          createApp(GridDev).use(Quasar, quasarUserOptions).mount('#app')
          //createApp(GridDev).mount('#app')
          //window.location.href = 'https://vuejs.org';
        }
        else if(btex == 'Netflix'){
          window.location.href = 'https://www.netflix.com';
        }
        else if(btex == 'Prime'){
          window.location.href = 'https://www.primevideo.com/storefront/home/ref=atv_nb_logo';
        }
        else if(btex == 'HBO Max'){
          window.location.href = 'https://www.hbomax.com';
        }   
        else if(btex == 'Notify'){
          notify('Denis ta ai?');
        }                         
        else if(btex == 'Tela'){
          createApp(TelaDenis).use(Quasar, quasarUserOptions).mount('#app')
          //createApp(TelaDenis).mount('#app')
        }                                        
        else {
          notify('Não possui link disponivel!');
        }
        
      },
      capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      },
    },
  };
  </script>
  
  <style scoped>
  #app {
    align-self: center;
  }
  
  .demo-container {
    display: flex;
    justify-content: center;
    height: 450px;
  }
  
  .buttons-demo {
    width: 600px;
    align-self: center;
  }
  
  .buttons-column > .column-header {
    flex-grow: 0;
    width: 150px;
    height: 35px;
    font-size: 130%;
    opacity: 0.6;
    text-align: left;
    padding-left: 15px;
  }
  
  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .buttons > div {
    width: 300px;
    flex-wrap: nowrap;
    display: flex;
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
