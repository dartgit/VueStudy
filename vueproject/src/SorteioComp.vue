<template>
  <div>
    <q-form @submit="InsereNome()">
      <div class="inputdiv">
        <q-input
          rounded
          outlined
          clearable
          label="Inserir Nome"
          v-model="text"
        />
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn rounded type="submit" icon="save" color="green" />
        <q-btn rounded icon="delete" color="red" @click="Limpar()" />
      </div>
    </q-form>
    <div class="inputdiv">
      <q-input
        rounded
        outlined
        :readonly="true"
        type="textarea"
        v-model="NomesLista"
      />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        rounded
        icon="star_rate"
        label="Sortear"
        color="blue"
        :loading="progress[2].loading"
        :percentage="progress[2].percentage"
        @click="Sorteio()"
      />
    </div>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <div class="NomeSort">O Sorteado Foi: {{ NomeSorteado }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Sair" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";

export default {
  data() {
    return {
      NomesLista: [""],
      NomeSorteio: "teste",
      text: "",
      NomeSorteado: "",
      confirm: ref(false),
    };
  },

  setup() {
    const progress = ref([
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
    ]);

    const intervals = [null, null, null];

    function Sorteio2(id) {
      progress.value[id].loading = true;
      progress.value[id].percentage = 0;

      intervals[id] = setInterval(() => {
        progress.value[id].percentage += Math.floor(Math.random() * 8 + 50);
        if (progress.value[id].percentage >= 100) {
          clearInterval(intervals[id]);
          progress.value[id].loading = false;
        }
      }, 700);
    }

    onBeforeUnmount(() => {
      intervals.forEach((val) => {
        clearInterval(val);
      });
    });

    return {
      progress,
      Sorteio2,
    };
  },

  methods: {
    InsereNome() {
      if (this.NomesLista[0] == "") {
        this.NomesLista[0] = this.text;
      } else {
        if (this.text != "") {
          this.NomesLista.push(this.text);
        }
      }
      this.text = "";
    },

    Limpar() {
      this.NomesLista.pop();
    },

    Sorteio() {
      this.NomeSorteado =
        this.NomesLista[Math.ceil(Math.random() * this.NomesLista.length - 1)];
      this.confirm = true;
    },
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
