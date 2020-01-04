<template>
    <tr v-if="!rowsToHide.includes(row.id)">
        <td @click="selectToGraff" class="click-cell tooltip-wrapper">
            <div class="tooltip">нажми чтобы увидеть график</div>
            {{row.title}}
        </td>
        <td>{{difference}}</td>
        <table-cell-vue
                v-for="value in rawDates"
                :cell="row.data[value]"
                :date="value"
                :rowId="row.id"
                :rowTitle="row.title"
                :key="value"
        />
    </tr>
</template>

<script>
    import TableCellVue from "./TableCellVue";
    import { mapState, mapActions } from "vuex";
    export default {
        name: "TableRowVue",
        components: {
            TableCellVue
        },
        props: {
            row: {
                type: Object,
                required: true
            },
            rawDates: {
                type: Array,
                required: true
            }
        },
        methods: {
            ...mapActions([
                'setData'
            ]),
            selectToGraff() {
                let item = {
                    key: 'dataForGraff',
                    value: this.row
                }
                this.setData(item)
            }
        },
        computed: {
            ...mapState([
                'rowsToHide'
                ]),
            latsDates () {
                let dates = Object.keys(this.row.data).slice(0, 2);
                return {
                    first: dates[0],
                    second: dates[1]
                }
            },
            difference () {
                let firstDate = +this.latsDates.first
                let secondDate = +this.latsDates.second
                let a = +this.row.data[firstDate];
                let b = +this.row.data[secondDate];
                let avg = (a + b) / 2;
                let diff = a - b;
                return ((diff / avg) * 100).toFixed(1);
            }
        }
    }
</script>

<style scoped>
    tr, td {
        border: 1px solid black;
    }
    .click-cell {
        cursor: pointer;
    }
</style>