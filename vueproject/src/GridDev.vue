<template>
  <div class="CentralizaGrid">
    <div class="q-gutter-y-md column">
      <q-select
        rounded
        outlined
        clearable
        v-model="txtTitulo"
        :options="TituloOpt"
        label="Titulo"
      />
      <q-input rounded outlined clearable label="Nome" v-model="txtNome" />
      <q-input
        rounded
        outlined
        clearable
        label="Sobrenome"
        v-model="txtSNome"
      />
      <q-input rounded outlined clearable label="Cargo" v-model="txtCargo" />
      <q-select
        rounded
        outlined
        clearable
        v-model="dtNasc"
        label="Data de Nascimento"
      >
        <q-popup-proxy
          @before-show="updateProxy"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="dtNasc" minimal>
            <div class="row items-center justify-end q-gutter-sm">
              <q-btn label="Cancel" color="primary" flat v-close-popup />
              <q-btn
                label="OK"
                color="primary"
                flat
                @click="save"
                v-close-popup
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-select>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        rounded
        icon="add"
        color="secondary"
        @click="TesteGrid()"
        v-if="(mostrar = false)"
      >
        <q-tooltip>Inserir</q-tooltip>
      </q-btn>
      <q-btn rounded icon="update" color="primary" @click="EditarGrid()">
        <q-tooltip>Editar</q-tooltip>
      </q-btn>
      <q-btn rounded icon="delete" color="red" @click="Limpar()">
        <q-tooltip>Excluir</q-tooltip>
      </q-btn>
      <q-btn
        rounded
        type="submit"
        icon="save"
        color="green"
        @click="InsereNome()"
      >
        <q-tooltip>Gravar</q-tooltip>
      </q-btn>
      <q-btn rounded icon="cancel" color="amber" @click="Cancelar()">
        <q-tooltip>Cancelar</q-tooltip>
      </q-btn>
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
      @selection-changed="onSelectionChanged"
    >
      <DxSelection mode="multiple" />
      <DxExport :enabled="true" :allow-export-selected-data="true" />
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
      acaoSalvar: "Inserir",
      txtNome: "",
      txtSNome: "",
      txtTitulo: "",
      TituloOpt: ["Sr.", "Sra."],
      txtCargo: "",
      dtNasc: ref(""),
      reconstruir: ref(true),
      lineSelected: {},
    };
  },

  methods: {
    InsereNome() {
      if (this.txtNome != "") {
        let NC = {
          ID: this.employees.length,
          FirstName: this.txtNome,
          LastName: this.txtSNome,
          Prefix: this.txtTitulo,
          Position: this.txtCargo,
          BirthDate: this.dtNasc,
          Notes: "",
          Address: "",
        };
        if (this.acaoSalvar == "Inserir") {
          this.employees.push(NC);
        } else {
          this.employees[this.employees.indexOf(this.lineSelected)] = NC;
        }

        //console.log(this.employees);
      }

      this.txtNome = "";
      this.txtSNome = "";
      this.txtTitulo = "";
      this.txtCargo = "";
      this.dtNasc = "";
      this.reconstruir = false;
      setTimeout(() => {
        this.reconstruir = true;
      }, 1);
      this.acaoSalvar = "Inserir";
      //this.$refs.gridContainer.selectionChanged();
      //console.log(this.$refs.gridContainer);
    },
    Limpar() {
      this.acaoSalvar = "Inserir";
      //this.employees.pop();
      this.employees.splice(this.employees.indexOf(this.lineSelected), 1);
      this.reconstruir = false;
      setTimeout(() => {
        this.reconstruir = true;
      }, 1);
      this.txtNome = "";
      this.txtSNome = "";
      this.txtTitulo = "";
      this.txtCargo = "";
      this.dtNasc = "";
    },

    Cancelar() {
      this.acaoSalvar = "Inserir";
      this.txtNome = "";
      this.txtSNome = "";
      this.txtTitulo = "";
      this.txtCargo = "";
      this.dtNasc = "";
    },

    TesteGrid() {
      console.log(this.employees);
      console.log(this.employees.indexOf(this.lineSelected));
      console.log(this.lineSelected);
    },

    EditarGrid() {
      this.acaoSalvar = "Editar";
      this.txtNome = this.lineSelected.FirstName;
      this.txtSNome = this.lineSelected.LastName;
      this.txtTitulo = this.lineSelected.Prefix;
      this.txtCargo = this.lineSelected.Position;
      this.dtNasc = this.lineSelected.BirthDate;
    },

    onSelectionChanged({ selectedRowsData }) {
      this.lineSelected = selectedRowsData[0];
      //console.log(this.lineSelected);
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
