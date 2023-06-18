<template>
    <div class="singleAreaChart"></div>
</template>

<script>
export default {
    props: ['tem'],
    data() {
        return {
          selectRangeDate: [
            [5, 29], [5, 30], [5, 31], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6],
            [6, 7], [6, 8], [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14], [6, 15], [6, 16], [6, 17]
          ]
        }
    },
    methods: {
        setData(type) {
            let arr = [];
            switch (type) {
                case 's' :
                    for (let i = 0; i < this.selectRangeDate.length; i++) {
                        arr.push((Math.random() * 250).toFixed(0))
                    }
                    break;

                default:
                    break;
            }

            return arr;
        },
        setChart() {
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                },
                grid: {
                    top: '12%',
                    bottom: '12%',
                    left: '5%',
                    right: '5%',
                },
                legend: {
                    right: '5%',
                    top: '10%',
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#5CB1C1',
                        fontSize: 15
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        color: '#61B9C8',
                        fontSize: 12,
                    },
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolSize: [6, 6],
                        symbolOffset: [0, 5],
                        lineStyle: {
                            color: '#122C49'
                        }
                    },
                    axisTick: {
                        color: '#122C49',
                        inside: true
                    },
                    z: 2,
                    data: this.selectRangeDate.map(date => `${date[0]}/${date[1]}`)
                },
                yAxis:
                    {
                        type: 'value',
                        min: 20,
                        max: 31,
                        splitNumber: 7,
                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolSize: [6, 6],
                            lineStyle: {
                                color: '#122C49'
                            }
                        },
                        axisLabel: {
                            color: '#61B9C8',
                            showMaxLabel: false,
                            fontSize: 12
                        },
                        splitLine: {
                            show: false,
                        },
                        name: '(℃)',
                        nameGap: -10,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 9,
                            align: 'right',
                            padding: [0, 6, 0, 0]
                        },
                    },

                series: [{
                    name: '温度',
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    data: this.tem,
                    lineStyle: {
                        width: 1,
                        color:{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#B21356' // 0% 处的颜色
                            },
                                {
                                    offset: 0.5, color: '#B21356' // 40% 处的颜色
                                }, {
                                    offset: 1, color: '#F59111' // 100% 处的颜色
                                }],
                            global: false // 缺省为 false
                        } //背景渐变色
                    },
                    itemStyle: {
                        color: 'rgb(212,37,43)'
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#A41B68' // 0% 处的颜色
                            },
                                {
                                    offset: 0.5, color: 'rgba(112,20,82,1)' // 40% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(112,20,82,0)' // 100% 处的颜色
                                }],
                            global: false // 缺省为 false
                        }, //背景渐变色
                        origin: 'start'
                    }
                },
                ]
            };
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize()

            myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart()
    },
}
</script>

<style lang="less" scoped>
.singleAreaChart {
    width: 145%;
    height: 100%;
}
</style>