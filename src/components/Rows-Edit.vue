<template>
    <div>
        <div>Скрыть строки:</div>
        <label v-for="item in allRows"
               :key="item.id"
        >
            {{item.title}}
            <input type="checkbox"
                   @input="setRowsToHide(item.id)"
            />
        </label>
    </div>
</template>

<script>
    import { mapState, mapActions} from "vuex";
    export default {
        name: "RowsEdit",
        computed: {
            ...mapState([
                'tableData', 'rowsToHide'
            ]),
            allRows () {
                return this.tableData.map((item) => {
                    let result = {
                        id: item.id,
                        title: item.title
                    };
                    return result;
                });
            }
        },
        methods: {
            ...mapActions([
                'setRowsToHide'
            ])
        }
    }
</script>

<style scoped>

</style>