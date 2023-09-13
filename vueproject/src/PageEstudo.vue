<template>
  <div class="botaoConfirmacao">TESTE DO LABEL</div>
  <div>{{ LabelPrinc }}</div>
  <div>
    <q-btn
      color="blue"
      icon="warning"
      rounded
      label="Teste"
      @click="Teste"
    ></q-btn>
    <q-btn class="botaoCancelar" label="blabla" @click="Teste2"></q-btn>
  </div>
  <br /><br /><br /><br /><br /><br />
  <div>
    <div>
      <q-input
        class="Texto"
        rounded
        outlined
        v-model="text"
        label="Calculadora"
      />
    </div>
    <div class="PainelLinhaBotao">
      <div class="q-pa-md q-gutter-sm">
        <q-btn round color="secondary" label="CE" />
        <q-btn round color="secondary" label="C" />
        <q-btn round color="secondary" label="%" />
        <q-btn round color="secondary" label="/" />
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn round color="secondary" label="9" />
        <q-btn round color="secondary" label="8" />
        <q-btn round color="secondary" label="7" />
        <q-btn round color="secondary" label="+" />
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn round color="secondary" label="6" />
        <q-btn round color="secondary" label="5" />
        <q-btn round color="secondary" label="4" />
        <q-btn round color="secondary" label="-" />
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn round color="secondary" label="3" />
        <q-btn round color="secondary" label="2" />
        <q-btn round color="secondary" label="1" />
        <q-btn round color="secondary" label="*" />
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn round color="secondary" label="" />
        <q-btn round color="secondary" label="0" />
        <q-btn round color="secondary" label="," />
        <q-btn round color="secondary" label="=" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LabelPrinc: "OLA JONES",
    };
  },

  methods: {
    Teste() {
      if (this.LabelPrinc == "OLA JONES") {
        this.LabelPrinc = "OLA PABLO";
      } else {
        this.LabelPrinc = "OLA JONES";
      }
    },
    Teste2() {
      if (this.LabelPrinc == "OLA Fabiano") {
        this.LabelPrinc = "OLA Ronaldo";
      } else {
        this.LabelPrinc = "OLA Fabiano";
      }
    },
  },
};
</script>

<style>
.botaoConfirmacao {
  background-color: blue;
  color: rgb(8, 240, 20);
  width: 600px;
  font-size: 300%;
}

.botaoCancelar {
  color: rgb(240, 8, 8);
}

.Texto {
  background-color: white;
  width: 300px;
  padding-left: 10px;
}

.PainelLinhaBotao {
  padding-left: 35px;
}
</style>
