<template>
    <div>
      <div class="form">
        <div class="dx-fieldset">
          <div class="dx-field">
            <div class="dx-field-label">Default mode</div>
            <div class="dx-field-value">
              <DxTextBox value="John Smith"/>
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">With placeholder</div>
            <div class="dx-field-value">
              <DxTextBox placeholder="Enter full name here..."/>
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">With clear button</div>
            <div class="dx-field-value">
              <DxTextBox
                :show-clear-button="true"
                value="John Smith"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">Password mode</div>
            <div class="dx-field-value">
              <DxTextBox
                :show-clear-button="true"
                mode="password"
                placeholder="Enter password"
                value="f5lzKs0T"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">Text mask</div>
            <div class="dx-field-value">
              <DxTextBox
                :mask-rules="rules"
                mask="+1 (X00) 000-0000"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">Disabled</div>
            <div class="dx-field-value">
              <DxTextBox
                :disabled="true"
                value="John Smith"
              />
            </div>
          </div>
        </div>
        <div class="dx-fieldset">
          <div class="dx-fieldset-header">Events and API</div>
          <div class="dx-field">
            <div class="dx-field-label">Full Name</div>
            <div class="dx-field-value">
              <DxTextBox
                :show-clear-button="true"
                value="Smith"
                placeholder="Enter full name"
                value-change-event="keyup"
                @value-changed="valueChanged"
              />
            </div>
          </div>
          <div class="dx-field">
            <div class="dx-field-label">Email (read only)</div>
            <div class="dx-field-value">
              <DxTextBox
                :read-only="true"
                :hover-state-enabled="false"
                :value="emailValue"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="buttons-column">   
        <div>
          <q-btn color="deep-purple" icon="repartition" label="Voltar" @click="QuasarClick" />
        </div>
      </div>
    </div>
  </template>

<script>
  import DxTextBox from 'devextreme-vue/text-box';
  //import DxButton from 'devextreme-vue/button';
  import 'devextreme/data/odata/store';
  import { createApp } from 'vue'
  import TelaPrinc from './TelaPrinc.vue';
  import { Quasar } from 'quasar'
  import quasarUserOptions from './quasar-user-options'  
  
  export default {
    components: {
      DxTextBox,
      //DxButton,
    },
    data() {
      return {
        emailValue: 'smith@corp.com',
        rules: { X: /[02-9]/ },
      };
    },
    methods: {
      valueChanged(data) {
        this.emailValue = `${data.value.replace(/\s/g, '').toLowerCase()}@corp.com`;
      },
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
  };
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