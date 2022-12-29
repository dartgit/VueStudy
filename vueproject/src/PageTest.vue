<template>
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Confirm" color="primary" @click="confirm = true" />
  
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
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
          <q-btn round color="blue" text-color="black" label="7" @click="btnC('/')"></q-btn>
          <q-btn round color="blue" text-color="black" label="8" @click="btnC('/')"></q-btn>
          <q-btn round color="blue" text-color="black" label="9" @click="btnC('/')"></q-btn>
          <q-btn round color="orange" text-color="black" label="*" @click="btnC('/')"></q-btn>
        </div>        
        <div class="q-pa-md q-gutter-sm">
          <q-btn round color="blue" text-color="black" label="4"  @click="btnC('/')"></q-btn>
          <q-btn round color="blue" text-color="black" label="5"  @click="btnC('/')"></q-btn>
          <q-btn round color="blue" text-color="black" label="6"  @click="btnC('/')"></q-btn>
          <q-btn round color="orange" text-color="black" label="-"  @click="btnC('/')"></q-btn>
        </div>       
        <div class="q-pa-md q-gutter-sm">
          <q-btn round color="blue" text-color="black" label="1"  @click="btnC('/')"></q-btn>
          <q-btn round color="blue" text-color="black" label="2"  @click="btnC('/')"></q-btn>
          <q-btn round color="blue" text-color="black" label="3"  @click="btnC('/')"></q-btn>
          <q-btn round color="orange" text-color="black" label="+"  @click="btnC('/')"></q-btn>
        </div>                        
        <div class="q-pa-md q-gutter-sm">
          <q-btn round color="blue" text-color="black" label=""></q-btn>          
          <q-btn round color="blue" text-color="black" label="0"  @click="btnC('/')"></q-btn>
          <q-btn round color="blue" text-color="black" label=","  @click="btnC('/')"></q-btn>
          <q-btn round color="orange" text-color="black" label="="  @click="btnC('/')"></q-btn>
        </div>                                
      </div> 
          </q-card-section>
  
          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        alert: ref(false),
        confirm: ref(false),
        prompt: ref(false),
  
        address: ref('')
      }
    }
  }
  </script>
  