<template>
  <div class="buttons-columnq">
    <div class="column-headerq">Calculadora</div>
  </div>
  <div class="buttons-row">
    <div>
      <q-input rounded outlined v-model="text" />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        round
        color="orange"
        text-color="black"
        label="C"
        @click="btnC('C')"
      ></q-btn>
      <q-btn
        round
        color="orange"
        text-color="black"
        label="B"
        @click="btnC('B')"
      ></q-btn>
      <q-btn
        round
        color="orange"
        text-color="black"
        label="%"
        @click="btnC('%')"
      ></q-btn>
      <q-btn
        round
        color="orange"
        text-color="black"
        label="/"
        @click="btnC('/')"
      ></q-btn>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        round
        color="blue"
        text-color="black"
        label="7"
        @click="btnC('7')"
      ></q-btn>
      <q-btn
        round
        color="blue"
        text-color="black"
        label="8"
        @click="btnC('8')"
      ></q-btn>
      <q-btn
        round
        color="blue"
        text-color="black"
        label="9"
        @click="btnC('9')"
      ></q-btn>
      <q-btn
        round
        color="orange"
        text-color="black"
        label="*"
        @click="btnC('*')"
      ></q-btn>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        round
        color="blue"
        text-color="black"
        label="4"
        @click="btnC('4')"
      ></q-btn>
      <q-btn
        round
        color="blue"
        text-color="black"
        label="5"
        @click="btnC('5')"
      ></q-btn>
      <q-btn
        round
        color="blue"
        text-color="black"
        label="6"
        @click="btnC('6')"
      ></q-btn>
      <q-btn
        round
        color="orange"
        text-color="black"
        label="-"
        @click="btnC('-')"
      ></q-btn>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        round
        color="blue"
        text-color="black"
        label="1"
        @click="btnC('1')"
      ></q-btn>
      <q-btn
        round
        color="blue"
        text-color="black"
        label="2"
        @click="btnC('2')"
      ></q-btn>
      <q-btn
        round
        color="blue"
        text-color="black"
        label="3"
        @click="btnC('3')"
      ></q-btn>
      <q-btn
        round
        color="orange"
        text-color="black"
        label="+"
        @click="btnC('+')"
      ></q-btn>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn round color="blue" text-color="black" label=""></q-btn>
      <q-btn
        round
        color="blue"
        text-color="black"
        label="0"
        @click="btnC('0')"
      ></q-btn>
      <q-btn
        round
        color="blue"
        text-color="black"
        label="."
        @click="btnC('.')"
      ></q-btn>
      <q-btn
        round
        color="orange"
        text-color="black"
        label="="
        @click="btnC('=')"
      ></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    //DxButton,
  },

  data() {
    return {
      C: "",
      text: "",
    };
  },

  methods: {
    btnC(C) {
      if (C == "C") {
        this.text = "";
        this.cond = "";
        this.sinal = "";
      } else if (
        C == "/" ||
        C == "*" ||
        C == "-" ||
        (C == "+" && this.text != "")
      ) {
        this.cond = this.text;
        this.sinal = C;
        this.text = "";
      } else if (C == "%") {
        this.text = parseFloat(this.text) / 100;
      } else if (C == "=" && this.text != "") {
        if (this.sinal == "/") this.text = this.cond / this.text;
        if (this.sinal == "*") this.text = this.cond * this.text;
        if (this.sinal == "-") this.text = this.cond - this.text;
        if (this.sinal == "+")
          this.text = parseFloat(this.cond) + parseFloat(this.text);

        this.cond = "";
        this.sinal = "";
      } else if (C == "B") {
        this.text = this.text.substring(0, this.text.length - 1);
        console.log(C, this.text);
      } else {
        this.text += C;
        console.log(C, this.text);
      }
    },

    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
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
