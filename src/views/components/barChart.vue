<template>
    <div class="barChart"></div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
    data() {
        return {}
    },
    methods: {
        setChart() {
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 10,
                    },
                },
                legend: {
                    left: "11%",
                    top: "15%",
                    itemWidth: 7,
                    itemHeight: 7,
                    textStyle: {
                        color: '#5CB1C1',
                      fontSize: 15
                    }
                },
                grid: {
                    top: '12%',
                    bottom: '12%',
                    left: "10%",
                    right: '10%',
                    containLabel: false
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolSize: [6, 6],
                            symbolOffset: [0, 10],
                            lineStyle: {
                                color: '#122C49'
                            }
                        },
                        axisTick: {show: false},
                        axisLabel: {
                            color: '#61B9C8',
                            fontSize: 11,
                            interval: 1,
                        },
                        data: ["5.29", "5.30", "5.31", "6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7","6.8",
                        "6.9","6.10","6.11","6.12","6.13","6.14","6.15","6.16","6.17"]
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        max: 90,
                        min: 10,
                        interval: 10,
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
                        name: '(klux)',
                        nameGap: -5,
                        nameTextStyle: {
                            color: '#61B9C8',
                            fontSize: 11,
                            align: 'right',
                            padding: [0, 4, 0, 0]
                        },
                    }
                ],
                series: [
                    {
                        name: '光照强度',
                        type: 'bar',
                        itemStyle: {
                            color:{
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#50A2F6' // 0% 处的颜色
                                },
                                    {
                                        offset: 0.4, color: '#9490F9' // 40% 处的颜色
                                    }, {
                                        offset: 1, color: '#DF7DFD' // 100% 处的颜色
                                    }],
                                global: false // 缺省为 false
                            } //背景渐变色
                        },
                        barWidth: 10,
                        barCategoryGap: 10,
                        data: this.chartData
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
.barChart {
    width: 160%;
    height: 100%;
}
</style>