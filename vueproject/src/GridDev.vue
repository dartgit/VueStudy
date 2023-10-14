<template>
  <div class="CentralizaGrid">
    <DxDataGrid
      id="gridContainer"
      :data-source="employees"
      key-expr="ID"
      :show-borders="true"
    >
      <DxColumn
        :width="100"
        :allow-sorting="false"
        data-field="Picture"
        caption="Foto"
        cell-template="cellTemplate"
      />
      <DxColumn :width="70" data-field="Prefix" caption="Titulo" />
      <DxColumn data-field="FirstName" caption="Nome" />
      <DxColumn data-field="LastName" caption="Sobrenome" />
      <DxColumn data-field="Position" caption="Cargo" />
      <DxColumn
        data-field="BirthDate"
        caption="Data de Nascimento"
        data-type="date"
      />
      <DxColumn data-field="HireDate" caption="Contratação" data-type="date" />
      <template #cellTemplate="{ data }">
        <img :src="data.value" />
      </template>
    </DxDataGrid>
  </div>
</template>

<script>
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
import { employees } from "./dadosgrid.js";

export default {
  components: {
    DxDataGrid,
    DxColumn,
  },

  data() {
    return {
      employees,
    };
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
  margin-left: auto;
  margin-right: auto;
}

img {
  height: 100px;
  display: block;
}
</style>
