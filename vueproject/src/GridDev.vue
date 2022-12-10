<template>
    <div>
      <DxDataGrid
        :data-source="dataSource"
        :remote-operations="false"
        :allow-column-reordering="true"
        :row-alternation-enabled="true"
        :show-borders="true"
        @content-ready="onContentReady"
      >
        <DxColumn
          :group-index="0"
          data-field="Product"
        />
        <DxColumn
          data-field="Amount"
          caption="Sale Amount"
          data-type="number"
          format="currency"
          alignment="right"
        />
        <DxColumn
          :allow-grouping="false"
          data-field="Discount"
          caption="Discount %"
          data-type="number"
          format="percent"
          alignment="right"
          cell-template="discountCellTemplate"
          css-class="bullet"
        />
        <DxColumn
          data-field="SaleDate"
          data-type="date"
        />
        <DxColumn
          data-field="Region"
          data-type="string"
        />
        <DxColumn
          data-field="Sector"
          data-type="string"
        />
        <DxColumn
          data-field="Channel"
          data-type="string"
        />
        <DxColumn
          :width="150"
          data-field="Customer"
          data-type="string"
        />
    
        <DxGroupPanel :visible="true"/>
        <DxSearchPanel
          :visible="true"
          :highlight-case-sensitive="true"
        />
        <DxGrouping :auto-expand-all="false"/>
        <DxPager
          :allowed-page-sizes="pageSizes"
          :show-page-size-selector="true"
        />
        <DxPaging :page-size="10"/>
        <template #discountCellTemplate="{ data: cellData }">
          <DiscountCell :cell-data="cellData"/>
        </template>
      </DxDataGrid>
      
      <div class="buttons-column">   
        <div>
          <q-btn color="deep-purple" icon="repartition" label="Voltar" @click="QuasarClick" />
        </div>
      </div>
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
    } from 'devextreme-vue/data-grid';
    
    //import DxButton from 'devextreme-vue/button';
    import DataSource from 'devextreme/data/data_source';
    import 'devextreme/data/odata/store';
    import { createApp } from 'vue'
    import TelaPrinc from './TelaPrinc.vue';
    import { Quasar } from 'quasar'
    import quasarUserOptions from './quasar-user-options'  
    import DiscountCell from './DiscountCell.vue';
    
    let collapsed = false;
    
    
    export default {
      components: {
        DxDataGrid,
        DxColumn,
        DxGrouping,
        DxGroupPanel,
        DxPager,
        DxPaging,
        DxSearchPanel,
        DiscountCell,
        //DxButton,
      },
      data() {
        return {
          dataSource: new DataSource({
            store: {
              type: 'odata',
              url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
              key: 'Id',
              beforeSend(request) {
                request.params.startDate = '2020-05-10';
                request.params.endDate = '2020-05-15';
              },
            },
          }),
          pageSizes: [10, 25, 50, 100],
          onContentReady(e) {
            if (!collapsed) {
              e.component.expandRow(['EnviroCare']);
              collapsed = true;
            }
          },
        };
      },
      methods: {
        QuasarClick() {
          createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount('#app')
        },          
        onClick(e) {
          
          var btex = String;
    
          btex = e.component.option('text');
          if (btex == 'Voltar'){
           
            createApp(TelaPrinc).use(Quasar, quasarUserOptions).mount('#app')
          }
          
        },
        capitalize(text) {
          return text.charAt(0).toUpperCase() + text.slice(1);
        },
      },
    };
</script>

<style>
.buttons-column > .column-header {
flex-grow: 0;
width: 150px;
height: 35px;
font-size: 130%;
opacity: 0.6;
text-align: left;
padding-left: 15px;
}

.buttons-column > div {
width: 150px;
height: 50px;
text-align: center;
}

.buttons-column {
width: 150px;
justify-content: center;
}
</style>