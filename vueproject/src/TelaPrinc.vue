<template>
  <div>
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

          <q-toolbar-title shrink class="row items-center no-wrap">
            <img
              src="@/assets/logo.png"
              style="height: 35px; max-width: 35px"
            />
            <span class="q-ml-sm">V.Space</span>
          </q-toolbar-title>

          <q-space />

          <div class="q-gutter-sm row items-center no-wrap">
            <a
              class="GNL__drawer-footer-link"
              href="javascript:void(0)"
              @click="GMapsClick()"
              >{{ lTemperatura }} - {{ lCidade }}</a
            >
            <q-btn
              round
              dense
              flat
              color="text-grey-7"
              icon="calculate"
              @click="calc = true"
            >
              <q-tooltip>Calculadora</q-tooltip>
            </q-btn>
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

            <q-btn round flat @click="TesteLabel">
              <q-avatar size="26px">
                <img src="./loginImage/Fabiano.png" />
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
            <q-item
              class="GNL__drawer-item"
              v-ripple
              v-for="link in links1"
              :key="link.text"
              clickable
              @click="sideBtn(link.text)"
            >
              <q-item-section avatar>
                <q-icon :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator inset class="q-my-sm" />

            <q-item
              class="GNL__drawer-item"
              v-ripple
              v-for="link in links3"
              :key="link.text"
              clickable
              @click="sideBtn(link.text)"
            >
              <q-item-section>
                <q-item-label
                  >{{ link.text }} <q-icon v-if="link.icon" :name="link.icon"
                /></q-item-label>
              </q-item-section>
            </q-item>

            <q-separator inset class="q-my-sm" />

            <q-item
              class="GNL__drawer-item"
              v-ripple
              v-for="link in links2"
              :key="link.text"
              clickable
              @click="sideBtn(link.text)"
            >
              <q-item-section avatar>
                <q-icon :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }}</q-item-label>
              </q-item-section>
            </q-item>

            <div class="q-mt-md">
              <div class="flex flex-center q-gutter-xs">
                <a
                  class="GNL__drawer-footer-link"
                  href="javascript:void(0)"
                  aria-label="Privacy"
                  @click="sideBtn()"
                  >Ajuda</a
                >
                <span> · </span>
                <a
                  class="GNL__drawer-footer-link"
                  href="javascript:void(0)"
                  aria-label="Terms"
                  @click="sideBtn()"
                  >Novidades</a
                >
              </div>
            </div>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <div v-if="container">
          <QuasarNotify />
        </div>
        <div v-else>
          <router-view />
          <br />
          <div class="TituloPrincipal">Bem Vindo - {{ LoginName }}</div>
          <br />
          <q-carousel animated v-model="slide" arrows navigation infinite>
            <q-carousel-slide
              name="Wow"
              img-src="https://s2.glbimg.com/M3qwmOZ-0o9hpfsT2EJDdVCRRto=/0x0:620x320/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/m/S/A850ieROGGpDNXNqxPXg/2011-11-18-wow-logo.jpg"
            />

            <q-carousel-slide
              name="Pokemon"
              img-src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_1200/ncom/software/switch/70010000043292/91e382e3e87726746dc714d3cab616a57ead6d797cff8c2f757b448534ce7cf4"
            />

            <q-carousel-slide name="spicy">
              <q-video
                class="absolute-full"
                src="https://www.youtube.com/embed/Os_heh8vPfs"
              />
            </q-carousel-slide>
          </q-carousel>
        </div>
      </q-page-container>
    </q-layout>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="primary" text-color="white" />
          <span class="q-ml-sm">Deseja Sair da Conta?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Sim"
            color="primary"
            @click="LogOutClick"
            v-close-popup
          />
          <q-btn flat label="Não" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { createApp } from "vue";
import TestePrinc from "./TestePrinc.vue";
import GMaps from "./GoogleMapLoader.vue";
import QuasarNotify from "./QuasarNotify.vue";
import GridDev from "./GridDev.vue";
import FrameTest from "./FrameTest.vue";
import CalcComp from "./CalcComp.vue";
import CarouselQuasar from "./CarouselQuasar.vue";
import CarouselDevX from "./CarouselDevX.vue";
import ConsumoAPI from "./ConsumoAPI.vue";
import App from "./LoginForm.vue";
import { Quasar } from "quasar";
import { useQuasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import createStore from "./store";
import axios from "axios";

export default {
  name: "FormPringLayout",
  components: {
    CalcComp,
    QuasarNotify,
  },

  data() {
    return {
      lBtn: "",
      text: "",
      cond: "",
      cond2: "",
      sinal: "",
      LoginName: "Denis",
      LoginImg:
        "https://s2.glbimg.com/M3qwmOZ-0o9hpfsT2EJDdVCRRto=/0x0:620x320/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/m/S/A850ieROGGpDNXNqxPXg/2011-11-18-wow-logo.jpg",
      lTemperatura: "0ºC",
      lCidade: "Cidade",
    };
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");
    const showAdvanced = ref(false);
    const showDateOptions = ref(false);
    const exactPhrase = ref("");
    const hasWords = ref("");
    const excludeWords = ref("");
    const byWebsite = ref("");
    const byDate = ref("Any time");
    const $q = useQuasar();

    function onClear() {
      exactPhrase.value = "";
      hasWords.value = "";
      excludeWords.value = "";
      byWebsite.value = "";
      byDate.value = "Any time";
    }

    function changeDate(option) {
      byDate.value = option;
      showDateOptions.value = false;
    }

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      slide: ref("Wow"),
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
      container: ref(false),

      links1: [
        { icon: "home", text: "Inicio" },
        { icon: "web", text: "Quasar Notify" },
        { icon: "web", text: "Grid DevX" },
        { icon: "domain", text: "Frame Teste" },
        { icon: "api", text: "Consumo API" },
        { icon: "memory", text: "Carousel DevX" },
        { icon: "memory", text: "Carousel Quasar" },
        { icon: "memory", text: "Teste Principal" },
        { icon: "arrow_forward", text: "Teste Container" },
      ],
      links2: [{ icon: "logout", text: "Log-Out" }],
      links3: [
        { icon: "open_in_new", text: "World os Warcraft" },
        { icon: "open_in_new", text: "Pokemon" },
        { icon: "open_in_new", text: "Genshin" },
        { icon: "open_in_new", text: "Twitch" },
        { icon: "open_in_new", text: "Facebook" },
        { icon: "open_in_new", text: "Youtube" },
        { icon: "local_movies", text: "Netflix" },
        { icon: "local_movies", text: "Prime" },
        { icon: "local_movies", text: "HBO Max" },
      ],

      onClear,
      changeDate,
      toggleLeftDrawer,

      sideBtn(lBtn) {
        if (lBtn == "Teste Principal") {
          createApp(TestePrinc).use(Quasar, quasarUserOptions).mount("#app");
        } else if (lBtn == "Carousel Quasar") {
          createApp(CarouselQuasar)
            .use(Quasar, quasarUserOptions)
            .mount("#app");
        } else if (lBtn == "Carousel DevX") {
          createApp(CarouselDevX).use(Quasar, quasarUserOptions).mount("#app");
        } else if (lBtn == "Consumo API") {
          createApp(ConsumoAPI).use(Quasar, quasarUserOptions).mount("#app");
        } else if (lBtn == "Log-Out") {
          this.confirm = true;
        } else if (lBtn == "Quasar Notify") {
          createApp(QuasarNotify).use(Quasar, quasarUserOptions).mount("#app");
        } else if (lBtn == "Grid DevX") {
          createApp(GridDev).use(Quasar, quasarUserOptions).mount("#app");
        } else if (lBtn == "Frame Teste") {
          createApp(FrameTest).use(Quasar, quasarUserOptions).mount("#app");
        } else if (lBtn == "Teste Container") {
          this.container = true;
        } else if (lBtn == "Inicio") {
          this.container = false;
        } else if (lBtn == "World os Warcraft") {
          window.location.href = "https://worldofwarcraft.com/pt-br/";
        } else if (lBtn == "Pokemon") {
          window.location.href = "https://www.ligapokemon.com.br/?view=home";
        } else if (lBtn == "Genshin") {
          window.location.href = "https://genshin.mihoyo.com/pt/home";
        } else if (lBtn == "Twitch") {
          window.location.href = "https://www.twitch.tv/directory";
        } else if (lBtn == "Facebook") {
          window.location.href = "https://www.facebook.com/gaming/feed/";
        } else if (lBtn == "Youtube") {
          window.location.href = "https://www.youtube.com/gaming";
        } else {
          $q.notify({
            message: "Função em Desenvolvimento",
            color: "deep-purple",
          });
        }
      },
    };
  },

  created() {
    this.LoginName = createStore.state.LoginN;
    this.LoginImg = createStore.state.LoginI;
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=-23.631399&lon=-46.479774&appid={{APIKEY}}"
      )
      .then((res) => {
        //console.log(res.data)
        this.lTemperatura = res.data.main.temp - 273.15 + " ºC";
        this.lTemperatura = this.lTemperatura.replace(".", ",");
        this.lTemperatura = this.lTemperatura.substring(0, 2);
        this.lTemperatura = this.lTemperatura + "ºC";
        this.lCidade = res.data.name;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    QuasarClick() {
      createApp(TestePrinc).use(Quasar, quasarUserOptions).mount("#app");
    },

    LogOutClick() {
      createApp(App)
        .use(createStore)
        .use(Quasar, quasarUserOptions)
        .mount("#app");
    },

    GMapsClick() {
      createApp(GMaps)
        .use(createStore)
        .use(Quasar, quasarUserOptions)
        .mount("#app");
    },

    onSubmit(evt) {
      console.log("@submit - do something here", evt);
      evt.target.submit();
    },

    TesteLabel() {
      if (this.LoginName == "Denis R.") {
        createStore.commit("alterLogin", "Fabiano V.");
        createStore.commit("alterLoginI", "./loginImage/Fabiano.png");
        console.log(this.LoginImg);
        this.LoginName = createStore.state.LoginN; //'Fabiano';
        this.LoginImg = createStore.state.LoginI;
        console.log(this.LoginImg);
      } else {
        createStore.commit("alterLogin", "Denis R.");
        createStore.commit("alterLoginI", "./loginImage/Denis.png");
        console.log(this.LoginImg);
        this.LoginName = createStore.state.LoginN; //'Denis';
        this.LoginImg = createStore.state.LoginI;
        console.log(this.LoginImg);
      }
    },
  },
};
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
