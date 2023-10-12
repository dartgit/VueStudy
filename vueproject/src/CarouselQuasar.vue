<template>
    <div class="q-pa-md q-gutter-sm">
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
  
  
      <div class="row justify-left">
        <q-btn color="deep-purple" icon="repartition" label="Voltar" @click="QuasarClick" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { createApp } from 'vue'  
  import TelaPrinc from './TelaPrinc.vue';
  import { Quasar } from 'quasar'
  import quasarUserOptions from './quasar-user-options' 
  
  export default {
    setup () {
      return {
        slide: ref('Wow')
      }
    },
    methods: {
    QuasarClick() {
        createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount('#app')
      },    
  },    
  };
  </script>
  