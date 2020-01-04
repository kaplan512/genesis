<template>
    <div v-if="dataForGraff" class="small">
        <line-chart :chart-data="dataToRender"></line-chart>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    import LineChart from '../assets/js/LineChart'
    import formatDate from '../assets/js/dateFormat'
    export default {
        name: "Chart",
        components: {
            LineChart
        },
        computed: {
            ...mapState([
                'dataForGraff'
            ]),
            labels () {
                return Object.keys(this.dataForGraff.data).map(item => formatDate(+item)).reverse()
            },
            dataToGraff () {
                let result = []
                for (let i in Object.keys(this.dataForGraff.data)) {
                    result.unshift(this.dataForGraff.data[Object.keys(this.dataForGraff.data)[i]])
                }
                return result
            },
            dataToRender () {
                return {
                    labels: this.labels,
                    datasets: [
                        {
                            label: this.dataForGraff.title,
                            data: this.dataToGraff
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .small {
        max-width: 600px;
        margin:  150px auto;
    }
</style>