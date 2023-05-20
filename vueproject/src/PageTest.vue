<template>
  <div>
    <div class="widget-container">
      <DxGallery
        id="gallery"
        :data-source="dataSource"
        :loop="loop"
        :slideshow-delay="slideshowDelay"
        :show-nav-buttons="showNavButtons"
        :show-indicator="showIndicator"
        :height="300"
      />
    </div>
    <div class="options">
      <div class="caption">Options</div>
      <div class="option">
        <DxCheckBox
          v-model:value="loop"
          text="Loop mode"
        />
      </div>
      <div class="option">
        <DxCheckBox
          value="true"
          text="Slide show"
          @value-changed="setSlideshowDelay"
        />
      </div>
      <div class="option">
        <DxCheckBox
          v-model:value="showNavButtons"
          text="Navigation buttons"
        />
      </div>
      <div class="option">
        <DxCheckBox
          v-model:value="showIndicator"
          text="Indicator"
        />
        <div>
          <q-btn color="deep-purple" icon="repartition" label="Voltar" @click="QuasarClick" />
        </div>        
      </div>
    </div>
  </div>
</template>
<script>
import DxCheckBox from 'devextreme-vue/check-box';
import DxGallery from 'devextreme-vue/gallery';
import { gallery } from './data.js';
import { createApp } from 'vue'
import TelaPrinc from './TelaPrinc.vue';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options' 

export default {
  components: {
    DxCheckBox,
    DxGallery,
  },
  data() {
    return {
      dataSource: gallery,
      loop: true,
      slideshowDelay: 2000,
      showNavButtons: true,
      showIndicator: true,
    };
  },
  methods: {
    setSlideshowDelay(e) {
      this.slideshowDelay = e.value ? 2000 : 0;
    },
    QuasarClick() {
        createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount('#app')
      },    
  },
};
</script>

<style>
.widget-container {
    margin-right: 240px;
  }
  
  #gallery {
    margin: auto;
    max-width: 450px;
  }
  
  .options {
    padding: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 180px;
    top: 0;
    background-color: rgba(191, 191, 191, 0.15);
  }
  
  .caption {
    font-size: 18px;
    font-weight: 500;
  }
  
  .option {
    margin-top: 10px;
  }
</style>