<template>
    <div v-if="cellToEdit">
        <span>строка: {{cellToEdit.rowTitle}}; </span>
        <span>дата: {{getDateForEditingCell}}; </span>
        <input v-model="cellToEdit.value" type="number"/>
        <button @click="changeValue">Изменить</button>
    </div>
</template>

<script>
    import { mapState, mapActions} from "vuex";
    import formatDate from '../assets/js/dateFormat'
    export default {
        name: "Cell-Editer",
        computed: {
            ...mapState([
                'cellToEdit'
            ]),
            getDateForEditingCell () {
                return formatDate(this.cellToEdit.date)
            }
        },
        methods: {
            ...mapActions([
                'editSelectedCell'
            ]),
            changeValue () {
                let val = {
                    rowId: this.cellToEdit.rowId,
                    date: this.cellToEdit.date,
                    value: this.cellToEdit.value
                }
                this.editSelectedCell (val)
            }
        }
    }
</script>

<style scoped>

</style>