<template>
  <div>
    <div class="Side">
      {{ lTemperatura }} - {{ lCidade }}
      <q-img
        :src="LoginImg"
        spinner-color="white"
        style="height: 35px; max-width: 35px"
      />
      {{ LoginName }}
      <q-btn rounded size="sm" color="red" icon="logout" @click="LogOut" />
    </div>
    <div class="buttons-demo">
      <div class="buttons">
        <div>
          <div class="buttons-column">
            <div class="column-header">Jogos</div>
            <div>
              <DxButton
                :width="120"
                text="WoW"
                type="normal"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Pokemon"
                type="normal"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Genshinn"
                type="normal"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
          </div>
          <div class="buttons-column">
            <div class="column-header">Stream's</div>
            <div>
              <DxButton
                :width="120"
                text="Twitch"
                type="success"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Facebook"
                type="success"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Youtube"
                type="success"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="buttons-column">
            <div class="column-header">Estudo</div>
            <div>
              <DxButton
                :width="120"
                text="Quasar"
                type="default"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Vue"
                type="default"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
          </div>
          <div class="buttons-column">
            <div class="column-header">Filmes</div>
            <div>
              <DxButton
                :width="120"
                text="Netflix"
                type="danger"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="Prime"
                type="danger"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              <DxButton
                :width="120"
                text="HBO Max"
                type="danger"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
          </div>
          <div class="buttons-column">
            <div class="column-header">Teste de Notify</div>
            <div>
              <DxButton
                :width="120"
                text="Notify"
                type="normal"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
            <div>
              Tela Denis
              <DxButton
                :width="120"
                text="Tela"
                type="normal"
                styling-mode="contained"
                @click="onClick($event)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="buttons-column">
        <div class="q-pa-md q-gutter-sm">
          <q-btn color="deep-purple" label="Calculadora" @click="QuasarClick" />

          <q-btn color="deep-purple" icon="calculate" @click="calc = true" />
          <q-dialog v-model="calc" persistent>
            <q-card>
              <q-card-section>
                <CalcComp />
              </q-card-section>
              <q-card-actions align="right" width="50">
                <q-btn
                  flat
                  label="Cancel"
                  color="primary"
                  @click="btnC('C')"
                  v-close-popup
                />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <!--<q-btn color="deep-purple" disable label="Teste" @click="TesteClick"/> -->
          <q-btn color="deep-purple" label="Teste" @click="TesteClick" />
          <q-btn color="deep-purple" label="Teste2" @click="TesteClick2" />
          <q-btn color="deep-purple" label="Teste3" @click="TesteClick3" />
          <q-btn color="deep-purple" label="Teste Login" @click="TesteLabel" />
          <q-btn
            color="deep-purple"
            icon="repartition"
            label="Voltar"
            @click="VoltarClick"
          />
        </div>
      </div>
    </div>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="primary" text-color="white" />
          <span class="q-ml-sm">Deseja abrir a Tela Teste4</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Sim"
            color="primary"
            @click="TesteClick4"
            v-close-popup
          />
          <q-btn flat label="Não" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
//import DxActionSheet from 'devextreme-vue/action-sheet';
//import DxSwitch from 'devextreme-vue/switch';
import DxButton from "devextreme-vue/button";
import notify from "devextreme/ui/notify";
import { createApp } from "vue";
import QuasarNotify from "./QuasarNotify.vue";
import GridDev from "./GridDev.vue";
import FrameTest from "./FrameTest.vue";
import CalcQuasar from "./CalcQuasar.vue";
import CalcComp from "./CalcComp.vue";
import CarouselQuasar from "./CarouselQuasar.vue";
import CarouselDevX from "./CarouselDevX.vue";
import ConsumoAPI from "./ConsumoAPI.vue";
import TelaPrinc from "./TelaPrinc.vue";
import App from "./LoginForm.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import { ref } from "vue";
import createStore from "./store";
import axios from "axios";

export default {
  name: "app",
  components: {
    DxButton,
    CalcComp,
  },

  data() {
    return {
      C: "",
      text: "",
      cond: "",
      cond2: "",
      sinal: "",
      LoginName: "Denis",
      LoginImg:
        "https://s2.glbimg.com/M3qwmOZ-0o9hpfsT2EJDdVCRRto=/0x0:620x320/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/m/S/A850ieROGGpDNXNqxPXg/2011-11-18-wow-logo.jpg",
      lTemperatura: "0 ºC",
      lCidade: "Cidade",
    };
  },

  setup() {
    return {
      calc: ref(false),
      confirm: ref(false),
    };
  },

  created() {
    this.LoginName = createStore.state.LoginN;
    this.LoginImg = createStore.state.LoginI;
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=-23.631399&lon=-46.479774&appid={APIKEY}}"
      )
      .then((res) => {
        //console.log(res.data)
        this.lTemperatura = res.data.main.temp - 273.15 + " ºC";
        this.lTemperatura = this.lTemperatura.replace(".", ",");
        this.lTemperatura = this.lTemperatura.substring(0, 5);
        this.lTemperatura = this.lTemperatura + " ºC";
        this.lCidade = res.data.name;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    QuasarClick() {
      createApp(CalcQuasar).use(Quasar, quasarUserOptions).mount("#app");
    },
    TesteClick() {
      createApp(CarouselQuasar).use(Quasar, quasarUserOptions).mount("#app");
    },
    TesteClick2() {
      createApp(CarouselDevX).use(Quasar, quasarUserOptions).mount("#app");
    },
    TesteClick3() {
      createApp(ConsumoAPI).use(Quasar, quasarUserOptions).mount("#app");
    },
    VoltarClick() {
      createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount("#app");
    },
    LogOut() {
      createApp(App)
        .use(createStore)
        .use(Quasar, quasarUserOptions)
        .mount("#app");
    },
    TesteLabel() {
      if (this.LoginName == "Denis R.") {
        createStore.commit("alterLogin", "Fabiano V.");
        createStore.commit(
          "alterLoginI",
          "https://scontent.fcgh21-1.fna.fbcdn.net/v/t1.18169-9/11074587_702535033188475_8513073536182128188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFzbXr_4rEZXMg9M-c92RQLyavowaR7X1LJq-jBpHtfUhC2VSG6MDg-IxYR97dwikgtys0h6K6sUcfvm8VZc0QV&_nc_ohc=jHq484OkZoMAX-VxAuo&_nc_ht=scontent.fcgh21-1.fna&oh=00_AfBqvn21UInHiQbisVRZ7t_7-s_aw3CRGU0coNNvYECBoA&oe=64B26A37"
        );
        this.LoginName = createStore.state.LoginN; //'Fabiano';
        this.LoginImg = createStore.state.LoginI;
      } else {
        createStore.commit("alterLogin", "Denis R.");
        createStore.commit(
          "alterLoginI",
          "https://scontent.fcgh21-1.fna.fbcdn.net/v/t39.30808-6/310478933_2266637613492444_467116057370013632_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFq-iQOCVte4iboL8vRoGrnQs_U3XKm3flCz9Tdcqbd-WhKHmio--NnSiTocvU6mePuDG4KlhzvE5Y9GHP9GNqZ&_nc_ohc=veG-hRRXNh4AX8BLaa-&_nc_ht=scontent.fcgh21-1.fna&oh=00_AfDJZOD7lrwbC8WVif5-JTxF5209zQnn6FgkEi0g_VmRIQ&oe=64A4B4A1"
        );
        this.LoginName = createStore.state.LoginN; //'Denis';
        this.LoginImg = createStore.state.LoginI;
      }
    },

    onClick(e) {
      var btex = String;

      btex = e.component.option("text");
      if (btex == "WoW") {
        window.location.href = "https://worldofwarcraft.com/pt-br/";
      } else if (btex == "Pokemon") {
        window.location.href = "https://www.ligapokemon.com.br/?view=home";
      } else if (btex == "Genshin") {
        window.location.href = "https://genshin.mihoyo.com/pt/home";
      } else if (btex == "Twitch") {
        window.location.href = "https://www.twitch.tv/directory";
      } else if (btex == "Facebook") {
        window.location.href = "https://www.facebook.com/gaming/feed/";
      } else if (btex == "Youtube") {
        window.location.href = "https://www.youtube.com/gaming";
      } else if (btex == "Quasar") {
        createApp(QuasarNotify).use(Quasar, quasarUserOptions).mount("#app");
      } else if (btex == "Vue") {
        createApp(GridDev).use(Quasar, quasarUserOptions).mount("#app");
      } else if (btex == "Netflix") {
        window.location.href = "https://www.netflix.com";
      } else if (btex == "Prime") {
        window.location.href =
          "https://www.primevideo.com/storefront/home/ref=atv_nb_logo";
      } else if (btex == "HBO Max") {
        window.location.href = "https://www.hbomax.com";
      } else if (btex == "Notify") {
        notify("Denis ta ai?");
      } else if (btex == "Tela") {
        createApp(FrameTest).use(Quasar, quasarUserOptions).mount("#app");
      } else {
        notify("Não possui link disponivel!");
      }
    },
    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
  },
};
</script>

<style scoped>
#app {
  align-self: center;
}

.demo-container {
  display: flex;
  justify-content: center;
  height: 450px;
}

.buttons-demo {
  width: 600px;
  align-self: center;
}

.buttons-column > .column-header {
  flex-grow: 0;
  width: 150px;
  height: 35px;
  font-size: 130%;
  opacity: 0.6;
  text-align: left;
  padding-left: 15px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.buttons > div {
  width: 300px;
  flex-wrap: nowrap;
  display: flex;
}

.buttons-column > div {
  width: 150px;
  height: 50px;
  text-align: center;
}

.buttons-column {
  width: 150px;
  justify-content: center;
}

.Side {
  background: rgb(109, 48, 138);
  flex-grow: 0;
  height: 40px;
  font-size: 160%;
  color: black;
  opacity: 0.8;
  text-align: right;
  padding-right: 15px;
}
</style>
