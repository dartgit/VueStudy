<template>
    <div>
      <div class="buttons-columnq">
        <div class="column-headerq">
          Calculadora
        </div>
      </div>
      <div class="buttons-row">
        <div>
          <q-input rounded outlined v-model="text"/>
        </div>    
        <div class="q-pa-md q-gutter-sm">
          <q-btn round color="orange" text-color="black" label="C" @click="btnC('C')"></q-btn>
          <q-btn round color="orange" text-color="black" label="B" @click="btnC('B')"></q-btn>
          <q-btn round color="orange" text-color="black" label='/' @click="btnC('%')"></q-btn>
          <q-btn round color="orange" text-color="black" label="/" @click="btnC('/')"></q-btn>
        </div>      
        <div class="q-pa-md q-gutter-sm">
          <q-btn round color="blue" text-color="black" label="7" @click="btnC('7')"></q-btn>
          <q-btn round color="blue" text-color="black" label="8" @click="btnC('8')"></q-btn>
          <q-btn round color="blue" text-color="black" label="9" @click="btnC('9')"></q-btn>
          <q-btn round color="orange" text-color="black" label="*" @click="btnC('/')"></q-btn>
        </div>        
        <div class="q-pa-md q-gutter-sm">
          <q-btn round color="blue" text-color="black" label="4"  @click="btnC('4')"></q-btn>
          <q-btn round color="blue" text-color="black" label="5"  @click="btnC('5')"></q-btn>
          <q-btn round color="blue" text-color="black" label="6"  @click="btnC('6')"></q-btn>
          <q-btn round color="orange" text-color="black" label="-"  @click="btnC('/')"></q-btn>
        </div>       
        <div class="q-pa-md q-gutter-sm">
          <q-btn round color="blue" text-color="black" label="1"  @click="btnC('1')"></q-btn>
          <q-btn round color="blue" text-color="black" label="2"  @click="btnC('2')"></q-btn>
          <q-btn round color="blue" text-color="black" label="3"  @click="btnC('3')"></q-btn>
          <q-btn round color="orange" text-color="black" label="+"  @click="btnC('/')"></q-btn>
        </div>                        
        <div class="q-pa-md q-gutter-sm">
          <q-btn round color="blue" text-color="black" label=""></q-btn>          
          <q-btn round color="blue" text-color="black" label="0"  @click="btnC('0')"></q-btn>
          <q-btn round color="blue" text-color="black" label=","  @click="btnC('/')"></q-btn>
          <q-btn round color="orange" text-color="black" label="="  @click="btnC('/')"></q-btn>
        </div>                                
      </div>      
      <div>
        <div class="buttons-row">
          <q-btn color="deep-purple" icon="repartition" glossy label="Voltar" @click="QuasarClick"/>
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

  
    export default {
      components: {
        //DxButton,
      },
      
      data () { 
        return{
          C: "",
          text: ""
        }
      },
    
      methods: {
        QuasarClick() {
          createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount('#app')
        }, 

        btnC(C) {
            this.text+=C
            console.log(C, this.text);
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
      .buttons-columnq > .column-headerq {
      width: 360px;
      height: 50px;
      text-align: center;
      padding-left: 15px;
      color : rgb(71, 2, 71);
    }
  
    .buttons-columnq > div {
      width: 360px;
      height: 50px;
      text-align: center;
    }
    
    .buttons-columnq {
      width: 360px;
      height: 50px;
      font-size: 30px;
      padding-left: 1px;    
      justify-content: center;
      text-align: center;
    }
    
    .buttons-row > .row-header {
      flex-grow: 0;
      width: 360px;
      height: 50px;
      font-size: 130%;
      opacity: 0.6;
      text-align: left;
      padding-left: 15px;
    }  
  
    .buttons-row > div {
      width: 360px;
      height: 65px;
      text-align: center;
    }  
  
    .buttons-row {
      width: 360px;
      height: 400px;     
      justify-content: center;    
    }
    </style>