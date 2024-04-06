<template>
  <div>
    <q-form>
      <div class="inputdiv">
        <q-btn color="deep-purple" :label="LabelVif" @click="ClickVif" />
      </div>
      <div class="inputdiv" v-if="vif">
        <div class="q-gutter-md row items-start">
          <q-input
            ref="edtNome"
            rounded
            outlined
            clearable
            style="width: 300px"
            label="Digite para gerar QRCode..."
            v-model="text"
          />
          <q-btn
            icon="content_copy"
            style="height: 55px"
            color="green"
            @click="BtnCopy(text)"
          />
        </div>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <qrcode-vue ref="QrCodeCopiando" :value="text" :size="size" level="H" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";
import { useQuasar } from "quasar";

export default {
  data() {
    return {
      text: "",
      size: 300,
      LabelVif: "Esconder Digitação",
      vif: ref(true),
    };
  },

  setup() {
    const $q = useQuasar();

    function NotifyClick() {
      $q.notify({
        message: "Texto Copiado!",
        color: "green",
      });
    }

    return {
      NotifyClick,
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
    BtnCopy() {
      this.$refs.edtNome.select();
      //this.$refs.QrCodeCopiando;
      document.execCommand("copy");
      //console.log(this.$refs.QrCodeCopiando);
      //console.log(this.$refs.edtNome);
      this.NotifyClick();
    },
  },
  components: {
    QrcodeVue,
  },
};
</script>

<style>
.inputdiv {
  width: 500px;
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
