<template>
  <div>
    <div class="buttons-columnqn">
      <div class="column-headerqn">
        QUASAR
        <q-toggle
          v-model="ativo"
          checked-icon="check"
          color="green"
          unchecked-icon="clear"
        />
        <q-btn color="pink" :label="LabelVif" @click="ClickVif" />
      </div>
    </div>
    <div class="buttons-rowqn">
      <div>
        <q-btn
          :disable="!ativo"
          round
          color="white"
          text-color="black"
          @click="NotifyClick2"
        >
          <q-avatar size="100px">
            <img src=".\loginImage\Fabiano.png" />
          </q-avatar>
        </q-btn>
      </div>
      <div>
        <q-btn
          :disable="!ativo"
          round
          color="white"
          text-color="black"
          @click="NotifyClick"
        >
          <q-avatar size="100px">
            <img src=".\loginImage\Denis.png" />
          </q-avatar>
        </q-btn>
      </div>
      <div v-if="vif">
        <q-btn
          :disable="!ativo"
          round
          color="white"
          text-color="black"
          @click="NotifyClick3"
        >
          <q-avatar size="100px">
            <img src=".\loginImage\Isabelle.png" />
          </q-avatar>
        </q-btn>
      </div>
      <div>
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
import { createApp, ref } from "vue";
import TelaPrinc from "./TelaPrinc.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import { useQuasar } from "quasar";

export default {
  data() {
    return {
      LabelVif: "Mostrar",
      vif: ref(false),
    };
  },
  setup() {
    const $q = useQuasar();

    return {
      ativo: ref(false),

      NotifyClick() {
        $q.notify({
          message: "Sim, Jogando Nintendo Switch",
          color: "red",
          caption: "Mensagem Automática",
        });
      },
      NotifyClick2() {
        $q.notify({
          message: "Denis ta ai?",
          color: "deep-purple",
          caption: "Mensagem Automática",
        });
      },
      NotifyClick3() {
        $q.notify({
          message: "Tio eu tenho Shiny! E to procurando a Tartaruga",
          color: "pink",
          caption: "Mensagem Automática",
        });
      },
    };
  },
  methods: {
    ClickVif() {
      if (this.vif == true) {
        this.vif = false;
        this.LabelVif = "Mostrar";
      } else {
        this.vif = true;
        this.LabelVif = "Esconder";
      }
    },

    QuasarClick() {
      createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount("#app");
    },
  },
};
</script>

<style>
.buttons-columnqn > .column-headerqn {
  width: 300px;
  height: 50px;
  text-align: center;
  padding-left: 15px;
  color: rgb(71, 2, 71);
}

.buttons-columnqn > div {
  width: 150px;
  height: 50px;
  text-align: center;
}

.buttons-columnqn {
  width: 150px;
  height: 50px;
  font-size: 30px;
  padding-left: 1px;
  justify-content: center;
}

.buttons-rowqn > .row-header {
  flex-grow: 0;
  width: 150px;
  height: 50px;
  font-size: 130%;
  opacity: 0.6;
  text-align: left;
  padding-left: 15px;
}

.buttons-rowqn > div {
  width: 150px;
  height: 110px;
  text-align: center;
}

.buttons-rowqn {
  width: 150px;
  height: 300px;
  padding-left: 20px;
  justify-content: center;
}
</style>
