<template>
  <div class="home">
    <chart/>
    <rows-edit/>
    <cell-editer v-if="cellToEdit"/>
    <table>
      <tr>
        <td>Показатель</td>
        <td>Разница %</td>
        <td v-for="date in allDates">
          {{date}}
        </td>
      </tr>
      <table-row-vue v-for="row in tableData" :key="row.id" :row="row" :rawDates="rawDates"/>
    </table>
  </div>
</template>

<script>
import TableRowVue from "../components/TableRowVue";
import CellEditer from "../components/Cell-Editer";
import RowsEdit from "../components/Rows-Edit";
import Chart from "../components/Chart";
import formatDate from '../assets/js/dateFormat'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'table-vue',
  components: {
    TableRowVue,
    CellEditer,
    RowsEdit,
    Chart
  },
  computed: {
    ...mapState([
      'tableData', 'cellToEdit'
    ]),
    rawDates () {
      let result = [];
      for (let i in this.tableData) {
        for (let j in this.tableData[i].data) {
          if (!result.includes(j)) {
            result.push(j)
          }
        }
      }
      return result
    },
    allDates () {
      return this.rawDates.map(item => formatDate(+item))
    }
  },
  methods: {
    ...mapActions([
      'setData'
    ]),
    async fetchTableData () {
      let url = './data.json';
      let response = await fetch(url);
      let tableData = {
        key: 'tableData',
        value: await response.json()
      }
      this.setData (tableData)
    }
  },
  mounted() {
    this.fetchTableData()
  }
}
</script>

<style lang="scss">
  table {
    border-collapse: collapse;
    td {
      border: 1px solid black;
      padding: 10px 15px;
    }
  }
</style>