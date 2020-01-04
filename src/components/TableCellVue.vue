<template>
    <td @click="chooseCell" class="tooltip-wrapper">
        <div class="tooltip">нажми чтобы редактировать</div>
        {{cell}}
    </td>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "TableCellVue",
        props: {
            cell: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            },
            rowId: {
                type: Number,
                required: true
            },
            rowTitle: {
                type: String,
                required: true
            }
        },
        methods: {
            ...mapActions([
                'setData'
            ]),
            chooseCell () {
                let value = {
                    key: 'cellToEdit',
                    value: {
                        date: +this.date,
                        value: this.cell,
                        rowId: this.rowId,
                        rowTitle: this.rowTitle
                    }
                }
                this.setData (value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    td {
        display: table-cell;
    }
</style>