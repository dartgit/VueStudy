<template>
  <div>
    <q-form @submit="InsereNome()">
      <div class="inputdiv">
        <q-input
          ref="edtNome"
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
        @click="Sorteio()"
      />
    </div>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <LdScreen v-if="isLdScreen"></LdScreen>
          <div v-if="!isLdScreen" class="NomeSort">
            O Sorteado Foi: {{ NomeSorteado }}
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            label="Sair"
            color="primary"
            v-close-popup
            @click="ResetLD()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import LdScreen from "./LdScreen.vue";

export default {
  data() {
    return {
      NomesLista: [""],
      NomeSorteio: "teste",
      text: "",
      NomeSorteado: "",
      confirm: ref(false),
      isLdScreen: true,
    };
  },

  computed: {
    edtNome() {
      return this.$refs["edtNome"].instance;
    },
  },

  components: {
    LdScreen,
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
      this.$refs.edtNome.focus();
      //console.log(this.$refs.edtNome);
    },

    Limpar() {
      this.NomesLista.pop();
    },

    ResetLD() {
      this.isLdScreen = true;
    },

    Sorteio() {
      setTimeout(() => {
        this.isLdScreen = false;
      }, 2000);
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
