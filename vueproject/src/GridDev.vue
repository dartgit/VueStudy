<template>
  <div class="CentralizaGrid">
    <div>
      <q-input rounded outlined clearable label="Nome" v-model="txtNome" />
      <q-input
        rounded
        outlined
        clearable
        label="Sobrenome"
        v-model="txtSNome"
      />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        rounded
        type="submit"
        icon="save"
        color="green"
        @click="InsereNome()"
      />
      <q-btn rounded icon="delete" color="red" @click="Limpar()" />
    </div>

    <DxDataGrid
      v-if="reconstruir"
      id="gridContainer"
      ref="gridContainer"
      :data-source="employees"
      :allow-column-reordering="true"
      :show-column-lines="true"
      :show-row-lines="true"
      :show-borders="true"
      :row-alternation-enabled="true"
      key-expr="ID"
      @exporting="onExporting"
    >
      <DxSelection mode="multiple" />
      <DxExport :enabled="true" :allow-export-selected-data="true" />
      <DxColumn
        :width="100"
        :allow-sorting="false"
        data-field="Picture"
        caption="Foto"
        cell-template="cellTemplate"
      />
      <DxColumn :width="120" data-field="Prefix" caption="Titulo" />
      <DxColumn :width="120" data-field="FirstName" caption="Nome" />
      <DxColumn :width="120" data-field="LastName" caption="Sobrenome" />
      <DxColumn :width="120" data-field="Position" caption="Cargo" />
      <DxColumn
        :width="150"
        data-field="BirthDate"
        caption="Data de Nascimento"
        data-type="date"
      />
      <DxColumn
        :width="100"
        data-field="HireDate"
        caption="Contratação"
        data-type="date"
      />
      <template #cellTemplate="{ data }">
        <img :src="data.value" />
      </template>
      <DxGroupPanel :visible="true" :caption="'Arraste aqui'" />
      <DxSearchPanel :visible="true" :highlight-case-sensitive="true" />
      <DxGrouping :auto-expand-all="false" />
      <DxPager
        :allowed-page-sizes="pageSizes"
        :show-page-size-selector="true"
      />
      <DxPaging :page-size="10" />
    </DxDataGrid>
  </div>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxGrouping,
  DxGroupPanel,
  DxPager,
  DxPaging,
  DxSearchPanel,
  DxExport,
  DxSelection,
} from "devextreme-vue/data-grid";
import { employees } from "./dadosgrid.js";
//import { jsPDF } from "jspdf";
//import { exportDataGrid } from "devextreme/pdf_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";
import { exportDataGrid } from "devextreme/excel_exporter";
import { ref } from "vue";

export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxGrouping,
    DxGroupPanel,
    DxPager,
    DxPaging,
    DxSearchPanel,
    DxExport,
    DxSelection,
  },

  computed: {
    gridContainer() {
      return this.$refs["gridContainer"].instance;
    },
  },

  setup() {
    /*const onExporting = (e) => {
      const doc = new jsPDF();
      const lastPoint = { x: 0, y: 0 };

      exportDataGridPDF({
        jsPDFDocument: doc,
        component: e.component,
        topLeft: { x: 1, y: 15 },
        columnWidths: [30, 20, 30, 15, 22, 22, 20, 20],
        customDrawCell({ rect }) {
          if (lastPoint.x < rect.x + rect.w) {
            lastPoint.x = rect.x + rect.w;
          }
          if (lastPoint.y < rect.y + rect.h) {
            lastPoint.y = rect.y + rect.h;
          }
        },
      }).then(() => {
        const header = "Dados Grid DevX";
        const pageWidth = doc.internal.pageSize.getWidth();
        doc.setFontSize(15);
        const headerWidth = doc.getTextDimensions(header).w;
        doc.text(header, (pageWidth - headerWidth) / 2, 20);

        const footer = "Teste do vueproject";
        doc.setFontSize(9);
        doc.setTextColor("#cccccc");
        const footerWidth = doc.getTextDimensions(footer).w;
        doc.text(footer, lastPoint.x - footerWidth, lastPoint.y + 5);

        doc.save("TesteExpGrid.pdf");
      });
    };*/

    const onExporting = (e) => {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet("CountriesPopulation");

      exportDataGrid({
        component: e.component,
        worksheet,
        topLeftCell: { row: 4, column: 1 },
      })
        .then((cellRange) => {
          // header
          const headerRow = worksheet.getRow(2);
          headerRow.height = 30;
          worksheet.mergeCells(2, 1, 2, 8);

          headerRow.getCell(1).value = "Dados Grid DevX";
          headerRow.getCell(1).font = { name: "Segoe UI Light", size: 22 };
          headerRow.getCell(1).alignment = { horizontal: "center" };

          // footer
          const footerRowIndex = cellRange.to.row + 2;
          const footerRow = worksheet.getRow(footerRowIndex);
          worksheet.mergeCells(footerRowIndex, 1, footerRowIndex, 8);

          footerRow.getCell(1).value = "Teste do vueproject";
          footerRow.getCell(1).font = {
            color: { argb: "BFBFBF" },
            italic: true,
          };
          footerRow.getCell(1).alignment = { horizontal: "right" };
        })
        .then(() => {
          workbook.xlsx.writeBuffer().then((buffer) => {
            saveAs(
              new Blob([buffer], { type: "application/octet-stream" }),
              "TesteExpGrid.xlsx"
            );
          });
        });

      e.cancel = true;
    };

    return {
      onExporting,
    };
  },

  data() {
    return {
      employees,
      txtNome: "",
      txtSNome: "",
      reconstruir: ref(true),
    };
  },

  methods: {
    InsereNome() {
      if (this.txtNome != "") {
        let NC = {
          ID: this.employees.length,
          FirstName: this.txtNome,
          LastName: this.txtSNome,
          Prefix: "",
          Position: "",
          Picture: "",
          BirthDate: "",
          HireDate: "",
          Notes: "",
          Address: "",
        };
        this.employees.push(NC);
        //console.log(this.NomesTeste);
      }

      this.txtNome = "";
      this.txtSNome = "";
      this.reconstruir = false;
      setTimeout(() => {
        this.reconstruir = true;
      }, 1);

      //this.$refs.gridContainer.selectionChanged();
      //console.log(this.$refs.gridContainer);
    },
    Limpar() {
      this.employees.pop();
      this.reconstruir = false;
      setTimeout(() => {
        this.reconstruir = true;
      }, 1);
    },
  },
};
</script>

<style>
#gridContainer {
  height: 440px;
}

.CentralizaGrid {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 750px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

.grid {
  background-color: aqua;
}

img {
  height: 100px;
  display: block;
}
</style>
