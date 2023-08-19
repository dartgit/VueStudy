<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <!--<q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">-->
        <q-toolbar-title shrink class="row items-center no-wrap">
          <!--<img src="https://scontent.fcgh21-1.fna.fbcdn.net/v/t1.18169-9/11074587_702535033188475_8513073536182128188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFzbXr_4rEZXMg9M-c92RQLyavowaR7X1LJq-jBpHtfUhC2VSG6MDg-IxYR97dwikgtys0h6K6sUcfvm8VZc0QV&_nc_ohc=jHq484OkZoMAX-VxAuo&_nc_ht=scontent.fcgh21-1.fna&oh=00_AfBqvn21UInHiQbisVRZ7t_7-s_aw3CRGU0coNNvYECBoA&oe=64B26A37"
          style="height: 35px; max-width: 35px">
          <img src="https://scontent.fcgh21-1.fna.fbcdn.net/v/t39.30808-6/310478933_2266637613492444_467116057370013632_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFq-iQOCVte4iboL8vRoGrnQs_U3XKm3flCz9Tdcqbd-WhKHmio--NnSiTocvU6mePuDG4KlhzvE5Y9GHP9GNqZ&_nc_ohc=vWGE8J7E4JgAX-mNPRX&_nc_ht=scontent.fcgh21-1.fna&oh=00_AfBYPMsAzVbQsiXqeqK6nd_DPtM9XyxAv6g5JSF5m_2tLw&oe=6490EE21"
          style="height: 35px; max-width: 35px">-->
          <img src="./assets/logo.png"
          style="height: 35px; max-width: 35px">          
          <span class="q-ml-sm">V.Space</span>
        </q-toolbar-title>

        <q-space />

        <!--
        <q-input class="GNL__toolbar-input" outlined dense v-model="search" color="bg-grey-7 shadow-1" placeholder="Search for topics, locations & sources">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
          <template v-slot:append>
            <q-btn
              flat
              dense
              round
              aria-label="Menu"
              icon="arrow_drop_down"
            >
              <q-menu anchor="bottom end" self="top end">
                <div class="q-pa-md" style="width: 400px">
                  <div class="text-body2 text-grey q-mb-md">
                    Narrow your search results
                  </div>

                  <div class="row items-center">
                    <div class="col-3 text-subtitle2 text-grey">
                      Exact phrase
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="exactPhrase" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">
                      Has words
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="hasWords" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">
                      Exclude words
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="excludeWords" />
                    </div>

                    <div class="col-3 text-subtitle2 text-grey">
                      Website
                    </div>
                    <div class="col-9 q-pl-md">
                      <q-input dense v-model="byWebsite" />
                    </div>

                    <div class="col-12 q-pt-lg row justify-end">
                      <q-btn flat dense no-caps color="grey-7" size="md" style="min-width: 68px;" label="Search" v-close-popup />
                      <q-btn flat dense no-caps color="grey-7" size="md" style="min-width: 68px;" @click="onClear" label="Clear" v-close-popup />
                    </div>
                  </div>
                </div>
              </q-menu>
            </q-btn>
          </template>
        </q-input>

        <q-space />
        -->

        <div class="q-gutter-sm row items-center no-wrap">
          <span class="q-ml-sm">{{ lTemperatura }} - {{ lCidade }}</span>
          <!--<q-btn v-if="$q.screen.gt.sm" round dense flat color="text-grey-7" icon="calculate" @click="calc = true">-->
          <q-btn round dense flat color="text-grey-7" icon="calculate" @click="calc = true">
            <q-tooltip>Calculadora</q-tooltip>
          </q-btn>
          <q-dialog v-model="calc" persistent>
              <q-card>
                <q-card-section>
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
                      <q-btn round color="orange" text-color="black" label='%' @click="btnC('%')"></q-btn>
                      <q-btn round color="orange" text-color="black" label="/" @click="btnC('/')"></q-btn>
                    </div>      
                    <div class="q-pa-md q-gutter-sm">
                      <q-btn round color="blue" text-color="black" label="7" @click="btnC('7')"></q-btn>
                      <q-btn round color="blue" text-color="black" label="8" @click="btnC('8')"></q-btn>
                      <q-btn round color="blue" text-color="black" label="9" @click="btnC('9')"></q-btn>
                      <q-btn round color="orange" text-color="black" label="*" @click="btnC('*')"></q-btn>
                    </div>        
                    <div class="q-pa-md q-gutter-sm">
                      <q-btn round color="blue" text-color="black" label="4"  @click="btnC('4')"></q-btn>
                      <q-btn round color="blue" text-color="black" label="5"  @click="btnC('5')"></q-btn>
                      <q-btn round color="blue" text-color="black" label="6"  @click="btnC('6')"></q-btn>
                      <q-btn round color="orange" text-color="black" label="-"  @click="btnC('-')"></q-btn>
                    </div>       
                    <div class="q-pa-md q-gutter-sm">
                      <q-btn round color="blue" text-color="black" label="1"  @click="btnC('1')"></q-btn>
                      <q-btn round color="blue" text-color="black" label="2"  @click="btnC('2')"></q-btn>
                      <q-btn round color="blue" text-color="black" label="3"  @click="btnC('3')"></q-btn>
                      <q-btn round color="orange" text-color="black" label="+"  @click="btnC('+')"></q-btn>
                    </div>                        
                    <div class="q-pa-md q-gutter-sm">
                      <q-btn round color="blue" text-color="black" label=""></q-btn>          
                      <q-btn round color="blue" text-color="black" label="0"  @click="btnC('0')"></q-btn>
                      <q-btn round color="blue" text-color="black" label="."  @click="btnC('.')"></q-btn>
                      <q-btn round color="orange" text-color="black" label="="  @click="btnC('=')"></q-btn>
                    </div>                                
                  </div>                    
              </q-card-section>
              <q-card-actions align="right" width="50">
                <q-btn flat label="Cancel" color="primary" @click="btnC('C')" v-close-popup />
              </q-card-actions>    
            </q-card>
          </q-dialog>

          <!--<q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              3
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>-->
          
          <q-btn round flat @click="TesteLabel">
            <q-avatar size="26px">
              <img src="./loginImage/Fabiano.png">
            </q-avatar>
            <q-tooltip>{{ LoginName }}</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item class="GNL__drawer-item" v-ripple v-for="link in links1" :key="link.text" clickable @click="sideBtn(link.text)">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item class="GNL__drawer-item" v-ripple v-for="link in links3" :key="link.text" clickable @click="sideBtn(link.text)">
            <q-item-section>
              <q-item-label>{{ link.text }} <q-icon v-if="link.icon" :name="link.icon" /></q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <q-item class="GNL__drawer-item" v-ripple v-for="link in links2" :key="link.text" clickable @click="sideBtn(link.text)">
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>          

          <div class="q-mt-md">
            <div class="flex flex-center q-gutter-xs">
              <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="Privacy" @click="sideBtn()">Ajuda</a>
              <span> · </span>
              <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="Terms" @click="sideBtn()">Novidades</a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
      <br>
      <div class="TituloPrincipal">Bem Vindo - {{ LoginName }}</div>
      <br>
        <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        >
        <q-carousel-slide name="Wow"
          img-src="https://s2.glbimg.com/M3qwmOZ-0o9hpfsT2EJDdVCRRto=/0x0:620x320/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/m/S/A850ieROGGpDNXNqxPXg/2011-11-18-wow-logo.jpg" />
  
          <q-carousel-slide name="Pokemon"
          img-src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/software/switch/70010000043292/91e382e3e87726746dc714d3cab616a57ead6d797cff8c2f757b448534ce7cf4" />
  
          <q-carousel-slide name="spicy">
            <q-video
              class="absolute-full"
              src="https://www.youtube.com/embed/Os_heh8vPfs"
            />
          </q-carousel-slide>
        </q-carousel>
      
        <!--
          <iframe src=TelaPrinc width="1870" height="860">...</iframe>
        -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
//import { fasEarthAmericas, fasFlask, fasEarthAsia } from '@quasar/extras/fontawesome-v6'
import { createApp } from 'vue'; 
import TestePrinc from './TestePrinc.vue';
import ExpQuasar from './ExpQuasar.vue'
import ExpDevX from './ExpDevX.vue'
import GridDev from './GridDev.vue'
import TelaDenis from './TelaDenis.vue'
import CalcQuasar from './CalcQuasar.vue'
import TesteT from './PageTest.vue'  
import TesteT2 from './PageTest2.vue'  
import TesteT3 from './PageTest3.vue'
import App from './LoginForm.vue' 
import { Quasar } from 'quasar';
import { useQuasar } from 'quasar'
import quasarUserOptions from './quasar-user-options';
import createStore  from './store'
import axios from 'axios'

export default {
  name: 'FormPringLayout',

  data () { 
        return{
          lBtn: "",
          text: "",
          cond: "",
          cond2:"",
          sinal:"",
          LoginName: "Denis",
          LoginImg: "https://s2.glbimg.com/M3qwmOZ-0o9hpfsT2EJDdVCRRto=/0x0:620x320/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/m/S/A850ieROGGpDNXNqxPXg/2011-11-18-wow-logo.jpg",
          lTemperatura: "0 ºC",
          lCidade: "Cidade"          
        }
    },   

  setup () {
    const leftDrawerOpen = ref(false)
    const search = ref('')
    const showAdvanced = ref(false)
    const showDateOptions = ref(false)
    const exactPhrase = ref('')
    const hasWords = ref('')
    const excludeWords = ref('')
    const byWebsite = ref('')
    const byDate = ref('Any time')
    const $q = useQuasar()

    function onClear () {
      exactPhrase.value = ''
      hasWords.value = ''
      excludeWords.value = ''
      byWebsite.value = ''
      byDate.value = 'Any time'
    }

    function changeDate (option) {
      byDate.value = option
      showDateOptions.value = false
    }

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      slide: ref('Wow'),
      leftDrawerOpen,
      search,
      showAdvanced,
      showDateOptions,
      exactPhrase,
      hasWords,
      excludeWords,
      byWebsite,
      byDate,
      calc: ref(false),
      confirm: ref(false),

      links1: [
        { icon: 'web', text: 'DevExtreme' },
        { icon: 'web', text: 'Quasar' },
        { icon: 'web', text: 'Grid' },
        { icon: 'domain', text: 'Frame' },        
        { icon: 'calculate', text: 'Calculadora' },  
        { icon: 'memory', text: 'Teste Principal' },
        { icon: 'memory', text: 'Teste' },
        { icon: 'memory', text: 'Teste2' },                
        { icon: 'memory', text: 'Teste3' },                               
        //{ icon: 'star_border', text: 'Favourites' },
        //{ icon: 'search', text: 'Saved searches' }
      ],
      links2: [
        //{ icon: 'flag', text: 'Canada' },
        //{ icon: fasEarthAmericas, text: 'World' },
        //{ icon: fasEarthAsia, text: 'Asia' },
        //{ icon: 'place', text: 'Local' },
        //{ icon: 'domain', text: 'Business' },                      
        //{ icon: 'person', text: 'Mudar Login' },        
        { icon: 'logout', text: 'Log-Out' }
      ],
      links3: [
        { icon: 'open_in_new', text: 'World os Warcraft' },
        { icon: 'open_in_new', text: 'Pokemon' },
        { icon: 'open_in_new', text: 'Genshin' },
        { icon: 'open_in_new', text: 'Twitch' },
        { icon: 'open_in_new', text: 'Facebook' },
        { icon: 'open_in_new', text: 'Youtube' },
        { icon: 'local_movies', text: 'Netflix' },        
        { icon: 'local_movies', text: 'Prime' },
        { icon: 'local_movies', text: 'HBO Max' }                
      ],

      onClear,
      changeDate,
      toggleLeftDrawer,

      sideBtn(lBtn) {
      if (lBtn == "Teste Principal") {
        createApp(TestePrinc).use(Quasar, quasarUserOptions).mount('#app')
      }   
      else if(lBtn == 'Teste'){
        createApp(TesteT).use(Quasar, quasarUserOptions).mount('#app')
      } 
      else if(lBtn == 'Teste2'){
        createApp(TesteT2).use(Quasar, quasarUserOptions).mount('#app')
      }
      else if(lBtn == 'Teste3'){
        createApp(TesteT3).use(Quasar, quasarUserOptions).mount('#app')
      }
      else if(lBtn == 'Log-Out'){
        createApp(App).use(createStore).use(Quasar, quasarUserOptions).mount('#app')
      }
      else if(lBtn == 'DevExtreme'){
        createApp(ExpDevX).use(Quasar, quasarUserOptions).mount('#app')
      } 
      else if(lBtn == 'Quasar'){
        createApp(ExpQuasar).use(Quasar, quasarUserOptions).mount('#app')
      }
      else if(lBtn == 'Grid'){
        createApp(GridDev).use(Quasar, quasarUserOptions).mount('#app')
      }
      else if(lBtn == 'Frame'){
        createApp(TelaDenis).use(Quasar, quasarUserOptions).mount('#app')
      }
      else if(lBtn == 'Calculadora'){
        createApp(CalcQuasar).use(Quasar, quasarUserOptions).mount('#app')
      }                       
      else if (lBtn == 'World os Warcraft'){ 
        window.location.href = 'https://worldofwarcraft.com/pt-br/';
      }
      else if(lBtn == 'Pokemon'){
        window.location.href = 'https://www.ligapokemon.com.br/?view=home';
      }
      else if(lBtn == 'Genshin'){
        window.location.href = 'https://genshin.mihoyo.com/pt/home';
      }
      else if(lBtn == 'Twitch'){
        window.location.href = 'https://www.twitch.tv/directory';
      }
      else if(lBtn == 'Facebook'){
        window.location.href = 'https://www.facebook.com/gaming/feed/';
      }            
      else if(lBtn == 'Youtube'){
        window.location.href = 'https://www.youtube.com/gaming';
      } 
      else {
        $q.notify({
            message: 'Função em Desenvolvimento',
            color: 'deep-purple'
          })
      }
      
    },      
    }
  },

  created () {
    this.LoginName = createStore.state.LoginN;
    this.LoginImg  = createStore.state.LoginI;
    axios
    .get("https://api.openweathermap.org/data/2.5/weather?lat=-23.631399&lon=-46.479774&appid=3150e15d344504e944355284f3832664")
      .then((res) => {
        //console.log(res.data)
        this.lTemperatura = (res.data.main.temp - 273.15)+" ºC"
        this.lTemperatura = this.lTemperatura.replace(".",",")
        this.lTemperatura = this.lTemperatura.substring(0,2)
        this.lTemperatura = this.lTemperatura+"ºC"
        this.lCidade = res.data.name
      })
      .catch((error) => {console.log(error)})
  },  

  methods: {    
    QuasarClick() {
      createApp(TestePrinc).use(Quasar, quasarUserOptions).mount('#app')
    },

    onSubmit (evt) {
      console.log('@submit - do something here', evt)
      evt.target.submit()
    },
   
    TesteLabel() {
      if (this.LoginName == "Denis R.") {
          createStore.commit('alterLogin', 'Fabiano V.');
          createStore.commit('alterLoginI','./loginImage/Fabiano.png');          
          console.log(this.LoginImg);          
          this.LoginName = createStore.state.LoginN;//'Fabiano';
          this.LoginImg  = createStore.state.LoginI;
          console.log(this.LoginImg);          
        } else {
          createStore.commit('alterLogin', 'Denis R.');
          createStore.commit('alterLoginI','./loginImage/Denis.png');  
          console.log(this.LoginImg);
          this.LoginName = createStore.state.LoginN;//'Denis';
          this.LoginImg  = createStore.state.LoginI;
          console.log(this.LoginImg);          
        }  
    },

    btnC(C) {
        if (C == "C") {
          this.text='';
          this.cond='';
          this.sinal='';
        }else if (C == "/" || C == "*"  || C == "-"  || C == "+" && this.text!="") {
          this.cond=this.text;
          this.sinal=C;
          this.text='';
        }else if (C == "=" && this.text!="") {
          if (this.sinal == "/")
            this.text=this.cond/this.text;
          if (this.sinal == "*")
            this.text=this.cond*this.text;            
          if (this.sinal == "-")
            this.text=this.cond-this.text;
          if (this.sinal == "+")
            this.text=parseFloat(this.cond)+parseFloat(this.text); 
            
          this.cond='';
          this.sinal='';          
        }else{
          this.text+=C;
          console.log(C, this.text);
        }
      },    
  }
}
</script>

<style lang="sass">
.GNL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 55%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      .q-icon
        color: #5f6368

    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>