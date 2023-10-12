<template>
  <div>
    <CalcComp />
    <div>
      <div class="buttons-row">
        <q-btn
          color="deep-purple"
          icon="repartition"
          glossy
          label="Voltar"
          @click="QuasarClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createApp } from "vue";
import TelaPrinc from "./TelaPrinc.vue";
import { Quasar } from "quasar";
import CalcComp from "./CalcComp.vue";
import quasarUserOptions from "./quasar-user-options";

export default {
  components: {
    CalcComp,
  },

  methods: {
    QuasarClick() {
      createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount("#app");
    },
  },
};
</script>

<style>
.buttons-columnq > .column-headerq {
  width: 360px;
  height: 50px;
  text-align: center;
  padding-left: 15px;
  color: rgb(71, 2, 71);
}

.buttons-columnq > div {
  width: 360px;
  height: 50px;
  text-align: center;
}

.buttons-columnq {
  width: 360px;
  height: 50px;
  font-size: 30px;
  padding-left: 1px;
  justify-content: center;
  text-align: center;
}

.buttons-row > .row-header {
  flex-grow: 0;
  width: 360px;
  height: 50px;
  font-size: 130%;
  opacity: 0.6;
  text-align: left;
  padding-left: 15px;
}

.buttons-row > div {
  width: 360px;
  height: 65px;
  text-align: center;
}

.buttons-row {
  width: 360px;
  height: 400px;
  justify-content: center;
}
</style>
