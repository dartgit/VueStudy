<template>
    <div class="lgin">
      <q-form @submit="startComputing(2)" class="screen-1">
        <div class="email">
          <label for="email">E-mail</label>
          <div class="sec-2">
            <q-input rounded outlined v-model="emailtxt" filled type="emailtxt" placeholder="E-mail@mail.com">
              <template v-slot:prepend>
                <q-icon name="mail"/>
              </template>
            </q-input>
          </div>
        </div>
        <div class="password">
          <label for="password">Password</label>
          <div class="sec-2">
            <q-input rounded outlined v-model="password" filled :type="isPwd ? 'password' : 'text'"  placeholder="****************">
              <template v-slot:prepend>
                <q-icon name="password"/>
              </template>         
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
            </q-input>
          </div>
        </div>
        <!--type="submit"-->
        <q-btn
          class="login"
          type="submit"
          :loading="progress[2].loading"
          :percentage="progress[2].percentage"
          label="Login"
        /> 
      </q-form>           
    </div>
    </template>
    
    <script>
      import { createApp } from 'vue'
      import TelaPrinc from './TelaPrinc.vue';
      import { Quasar } from 'quasar'
      import quasarUserOptions from './quasar-user-options'    
      import { ref, onBeforeUnmount } from 'vue'
      import { useQuasar } from 'quasar' 
      import createStore  from './store'
      
    export default {
      setup () {
        const $q = useQuasar()
    
        const progress = ref([
          { loading: false, percentage: 0 },
          { loading: false, percentage: 0 },
          { loading: false, percentage: 0 }
        ])
    
        const intervals = [ null, null, null ]
    
        function startComputing (id) {
          console.log('teste');
          if (this.emailtxt==''){
            $q.notify({
                message: 'Informe um e-mail!',
                color: 'red'
              })
          }else if (this.password==''){
            $q.notify({
                message: 'Informe uma senha!',
                color: 'red'
              })
          } else {
          progress.value[ id ].loading = true
          progress.value[ id ].percentage = 0

          intervals[ id ] = setInterval(() => {
            progress.value[ id ].percentage += Math.floor(Math.random() * 8 + 10)
            if (progress.value[ id ].percentage >= 100) {
              clearInterval(intervals[ id ])
              progress.value[ id ].loading = false
              if (this.emailtxt=='fvzanqueta@hotmail.com' && this.password=='123987456'){
                createStore.commit('alterLogin', 'Fabiano V.');
                createStore.commit('alterLoginI','https://scontent.fcgh21-1.fna.fbcdn.net/v/t1.18169-9/11074587_702535033188475_8513073536182128188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFzbXr_4rEZXMg9M-c92RQLyavowaR7X1LJq-jBpHtfUhC2VSG6MDg-IxYR97dwikgtys0h6K6sUcfvm8VZc0QV&_nc_ohc=jHq484OkZoMAX-VxAuo&_nc_ht=scontent.fcgh21-1.fna&oh=00_AfBqvn21UInHiQbisVRZ7t_7-s_aw3CRGU0coNNvYECBoA&oe=64B26A37');
                $q.notify({
                message: 'Bem-Vindo '+createStore.state.LoginN,
                color: 'green'});
                createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount('#app')
              } else if (this.emailtxt=='dennis.rds@hotmail.com' && this.password=='123987456'){
                createStore.commit('alterLogin', 'Denis R.');
                createStore.commit('alterLoginI','https://scontent.fcgh21-1.fna.fbcdn.net/v/t39.30808-6/310478933_2266637613492444_467116057370013632_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFq-iQOCVte4iboL8vRoGrnQs_U3XKm3flCz9Tdcqbd-WhKHmio--NnSiTocvU6mePuDG4KlhzvE5Y9GHP9GNqZ&_nc_ohc=veG-hRRXNh4AX8BLaa-&_nc_ht=scontent.fcgh21-1.fna&oh=00_AfDJZOD7lrwbC8WVif5-JTxF5209zQnn6FgkEi0g_VmRIQ&oe=64A4B4A1');
                $q.notify({
                message: 'Bem-Vindo '+createStore.state.LoginN,
                color: 'green'});                
                createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount('#app')                
              } else {
                $q.notify({
                message: 'E-mail ou senha invalida!',
                color: 'red'
              })
              }
            }
          }, 700)}
        }
    
        onBeforeUnmount(() => {
          intervals.forEach(val => {
            clearInterval(val)
          })
        })
    
        return {
          progress,
          startComputing,
          password: ref(''),
          isPwd: ref(true),
          emailtxt: ref('')      
        }
      }
    }
    </script>
    
    <style>  
      .lgin {
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        overflow-y: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #dde5f4;
        height: 100vh;
      }
      
      .screen-1 {
        background: #f1f7fe;
        padding: 2em;
        display: flex;
        flex-direction: column;
        border-radius: 30px;
        box-shadow: 0 0 2em #e6e9f9;
        gap: 2em;
      }
      .screen-1 .logo {
        margin-top: -3em;
      }
      .screen-1 .email {
        background: white;
        box-shadow: 0 0 2em #e6e9f9;
        padding: 1em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        border-radius: 20px;
        color: #4d4d4d;
      }
      .screen-1 .email input {
        outline: none;
        border: none;
      }
      .screen-1 .email input::-moz-placeholder {
        color: black;
        font-size: 0.9em;
      }
      .screen-1 .email input:-ms-input-placeholder {
        color: black;
        font-size: 0.9em;
      }
      .screen-1 .email input::placeholder {
        color: black;
        font-size: 0.9em;
      }
      .screen-1 .email ion-icon {
        color: #4d4d4d;
        margin-bottom: -0.2em;
      }
      .screen-1 .password {
        background: white;
        box-shadow: 0 0 2em #e6e9f9;
        padding: 1em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        border-radius: 20px;
        color: #4d4d4d;
      }
      .screen-1 .password input {
        outline: none;
        border: none;
      }
      .screen-1 .password input::-moz-placeholder {
        color: black;
        font-size: 0.9em;
      }
      .screen-1 .password input:-ms-input-placeholder {
        color: black;
        font-size: 0.9em;
      }
      .screen-1 .password input::placeholder {
        color: black;
        font-size: 0.9em;
      }
      .screen-1 .password ion-icon {
        color: #4d4d4d;
        margin-bottom: -0.2em;
      }
      .screen-1 .password .show-hide {
        margin-right: -5em;
      }
      .screen-1 .login {
        padding: 1em;
        background: #3e4684;
        color: white;
        border: none;
        border-radius: 30px;
        font-weight: 600;
      }
      .screen-1 .footer {
        display: flex;
        font-size: 0.7em;
        color: #5e5e5e;
        gap: 14em;
      }
      .screen-1 .footer span {
        cursor: pointer;
      }
      
      button {
        cursor: pointer;
      }
    </style>  