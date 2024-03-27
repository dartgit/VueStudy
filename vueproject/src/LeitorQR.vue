<template>
  <div>
    <div class="QRToogle">
      Ativar Câmera
      <q-toggle
        v-model="destroyed"
        checked-icon="check"
        color="green"
        unchecked-icon="clear"
        @click="reload"
      />
    </div>
    <div class="QRframe">
      <qrcode-stream
        :track="trackFunctionSelected.value"
        :formats="selectedBarcodeFormats"
        @camera-on="onCameraOn"
        @detect="onDetect"
        v-if="destroyed"
      >
        <div class="loading-indicator" v-if="loading">Loading...</div>
      </qrcode-stream>
    </div>
    <div class="inputdiv">
      <q-input
        rounded
        outlined
        :readonly="true"
        type="textarea"
        v-model="result"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  components: { QrcodeStream },

  data() {
    return {
      loading: true,
      destroyed: false,
      result: ref(""),
    };
  },

  methods: {
    onCameraOn() {
      this.loading = false;
    },

    async reload() {
      if (this.destroyed == false) {
        this.destroyed = true;
        await this.$nextTick();
        this.destroyed = false;
        this.loading = true;
      } else {
        this.destroyed = false;
        await this.$nextTick();
        this.destroyed = true;
        this.loading = true;
      }
    },

    onDetect(detectedCodes) {
      this.result = JSON.stringify(detectedCodes.map((code) => code.rawValue));
    },
  },

  setup() {
    //const result = ref("");

    //function onDetect(detectedCodes) {
    //  result.value = JSON.stringify(detectedCodes.map((code) => code.rawValue));
    //  console.log(result.value);
    //  return result;
    //}

    function paintOutline(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const [firstPoint, ...otherPoints] = detectedCode.cornerPoints;

        ctx.strokeStyle = "red";

        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const { x, y } of otherPoints) {
          ctx.lineTo(x, y);
        }
        ctx.lineTo(firstPoint.x, firstPoint.y);
        ctx.closePath();
        ctx.stroke();
      }
    }

    function paintBoundingBox(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const {
          boundingBox: { x, y, width, height },
        } = detectedCode;

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#007bff";
        ctx.strokeRect(x, y, width, height);
      }
    }

    function paintCenterText(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const { boundingBox, rawValue } = detectedCode;

        const centerX = boundingBox.x + boundingBox.width / 2;
        const centerY = boundingBox.y + boundingBox.height / 2;

        const fontSize = Math.max(
          12,
          (50 * boundingBox.width) / ctx.canvas.width
        );

        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.textAlign = "center";

        ctx.lineWidth = 3;
        ctx.strokeStyle = "#35495e";
        ctx.strokeText(detectedCode.rawValue, centerX, centerY);

        ctx.fillStyle = "#5cb984";
        ctx.fillText(rawValue, centerX, centerY);
      }
    }

    const trackFunctionOptions = [
      { text: "nothing (default)", value: undefined },
      { text: "outline", value: paintOutline },
      { text: "centered text", value: paintCenterText },
      { text: "bounding box", value: paintBoundingBox },
    ];

    const trackFunctionSelected = ref(trackFunctionOptions[1]);

    /*** barcode formats ***/

    const barcodeFormats = ref({
      aztec: true,
      code_128: true,
      code_39: true,
      code_93: true,
      codabar: true,
      databar: true,
      databar_expanded: true,
      data_matrix: true,
      dx_film_edge: true,
      ean_13: true,
      ean_8: true,
      itf: true,
      maxi_code: true,
      micro_qr_code: true,
      pdf417: true,
      qr_code: true,
      rm_qr_code: true,
      upc_a: true,
      upc_e: true,
      linear_codes: true,
      matrix_codes: true,
    });

    const selectedBarcodeFormats = computed(() => {
      return Object.keys(barcodeFormats.value).filter(
        (format) => barcodeFormats.value[format]
      );
    });

    return {
      trackFunctionSelected,
      selectedBarcodeFormats,
      //onDetect,
    };
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

.QRToogle {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
}

.inputdiv {
  width: 300px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
}
</style>
