<template>
  <div>
    <GoogleMap
      api-key="{{APIKEY}}"
      :center="{ lat: -23.631399, lng: -46.479774 }"
      :zoom="12"
      style="width: 100%; height: 500px"
    >
      <Marker
        :options="{
          position: { lat: -23.631399, lng: -46.479774 },
          label: 'C',
          title: 'Casa',
          color: '#C726E8',
        }"
      />
    </GoogleMap>
    <br />
    <q-btn
      color="deep-purple"
      icon="repartition"
      label="Voltar"
      @click="VoltarClick"
    />
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
import { createApp, onMounted } from "vue";
import TelaPrinc from "./TelaPrinc.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

export default {
  components: {
    GoogleMap,
    Marker,
  },

  setup() {
    onMounted(() => {});
  },

  methods: {
    VoltarClick() {
      createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount("#app");
    },
  },
};
</script>
