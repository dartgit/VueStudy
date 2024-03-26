<template>
  <div>
    <q-form>
      <div class="inputdiv">
        <q-input
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
import QrcodeVue from "qrcode.vue";

export default {
  data() {
    return {
      text: "",
      size: 300,
    };
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
