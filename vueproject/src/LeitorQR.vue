<template>
  <div>
    <div class="QRframe">
      <qrcode-stream @camera-on="onCameraOn" v-if="!destroyed">
        <div class="loading-indicator" v-if="loading">Loading...</div>
      </qrcode-stream>
    </div>
    <div class="QRframe">
      <q-btn rounded icon="update" color="primary" @click="reload">
        <q-tooltip>Editar</q-tooltip>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  components: { QrcodeStream },

  data() {
    return {
      loading: true,
      destroyed: false,
    };
  },

  methods: {
    onCameraOn() {
      this.loading = false;
    },

    async reload() {
      this.destroyed = true;
      await this.$nextTick();
      this.destroyed = false;
      this.loading = true;
    },
  },
};
</script>

<style scoped>
button {
  margin-bottom: 20px;
}

.loading-indicator {
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
}

.QRframe {
  height: 500px;
  width: 750px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
}
</style>
