<template>
  <div>
    <q-form>
      <div class="inputdiv">
        <q-btn color="deep-purple" :label="LabelVif" @click="ClickVif" />
      </div>

      <div class="inputdiv">
        <q-input
          v-if="vif"
          ref="edtNome"
          rounded
          outlined
          clearable
          label="Digite para gerar QRCode..."
          v-model="text"
        />
      </div>
      <div class="q-pa-md q-gutter-sm">
        <qrcode-vue :value="text" :size="size" level="H" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";

export default {
  data() {
    return {
      text: "",
      size: 300,
      LabelVif: "Esconder Digitação",
      vif: ref(true),
    };
  },
  methods: {
    ClickVif() {
      if (this.vif == true) {
        this.vif = false;
        this.LabelVif = "Mostrar Digitação";
      } else {
        this.vif = true;
        this.LabelVif = "Esconder Digitação";
      }
    },
  },
  components: {
    QrcodeVue,
  },
};
</script>

<style>
.inputdiv {
  width: 300px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
}

.NomeSort {
  font-size: 400%;
  font-style: oblique;
  color: rgb(83, 65, 182);
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
}
</style>
