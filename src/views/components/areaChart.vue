<template>
    <div class="area"></div>
</template>

<script>
export default {
    name: "areaChart",
    props: ['config'],
    data() {
      return {
        selectRangeDate: [
          [5, 29], [5, 30], [5, 31], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6],
          [6, 7], [6, 8], [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14], [6, 15], [6, 16], [6, 17],[6,18]
        ]
      }
    },
    methods: {
        setSeriesData() {
            let arr = [];
            this.config.data.forEach((item,index)=> {
                let obj = {
                    name: item.name,
                    type: 'line',
                    smooth: true,
                    symbol: "none",
                    areaStyle: {
                        opacity: 1,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: item.color[0] // 0% 处的颜色
                            },
                                {
                                    offset: 0.4, color: item.color[0] // 40% 处的颜色
                                }, {
                                    offset: 1, color: item.color[1] // 100% 处的颜色
                                }],
                            global: false // 缺省为 false
                        }
                    },
                    lineStyle: {
                        width: 0,
                    },
                    itemStyle: {
                        color: item.color[0]
                    },
                  data: item.data,
                  yAxisIndex: index
                }
                arr.push(obj)
            })
            return arr;
        },
        setChart() {
            let option = {
                title: {
                    show: !!this.config.title,
                    text: this.config.title,
                    textStyle: {
                        color: this.config.color,
                        fontSize: 12,
                        fontWeight: 'normal'
                    },
                    top: '12%',
                    left: '38%'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    backgroundColor: '#11367a',
                    textStyle: {
                        color: '#6dd0e3',
                        fontSize: 12,
                    },

                    formatter: function (params) {
                        let str = params[0].name;
                        params.forEach(item=> {
                            str += `<br> ${item.seriesName}: ${item.value}`
                        })
                        return str
                    }
                },
                legend:
                    {
                        top: this.config.title?'23%': '11%',
                        left: 'center',
                        itemWidth: 7,
                        itemHeight:7,
                        textStyle: {
                            color: this.config.color,
                            fontSize: 14
                        },
                    },
                grid:
                    {
                        top: this.config.title?'40%': '14%',
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true
                    },
                xAxis:
                  {
                    type: 'category',
                    boundaryGap: false,
                    axisLabel: {
                        color: this.config.color,
                        fontSize: 12,
                        align: 'center',
                      interval:2,
                      showMaxLabel: true,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#1a3c58',
                            width: 2,
                        }
                    },
                    axisTick: {
                      show: false,
                      interval:2},
                    data: this.selectRangeDate.map(date => `${date[0]}/${date[1]}`)
                  },
                yAxis: [
                  {
                    type: 'value',
                    min: 60,
                    max: 72,
                    axisLine: {
                      show: true,
                      lineStyle: {
                        color: '#1a3c58'
                      }
                    },
                    axisLabel: {
                      color: this.config.color,
                      fontSize: 11,
                      showMaxLabel: false,
                    },
                    axisTick: {
                      length: 3
                    },
                    name: this.config.name[0],
                    nameGap: -5,
                    nameTextStyle: {
                      color: this.config.color,
                      fontSize: 9,
                      align: 'right'
                    },
                    splitLine: {show: false}
                  },
                  {
                    type: 'value',
                    min: 18,
                    max: 32,
                    axisLine: {
                      show: true,
                      lineStyle: {
                        color: '#1a3c58'
                      }
                    },
                    axisTick: {
                      length: 3
                    },
                    axisLabel: {
                      color: this.config.color,
                      fontSize: 11,
                      showMaxLabel: false,
                    },
                    name: this.config.name[1],
                    nameTextStyle: {
                      color: this.config.color,
                      fontSize: 9,
                      align: 'left'
                    },
                    nameGap: -5,
                    splitLine: {show: false}
                  },
                ],
                series: this.setSeriesData()
            };
            if (this.selectRangeDate.length > 7) {
                option.xAxis.axisLabel.interval = 3;
                option.xAxis.axisLabel.showMaxLabel = false;
                option.xAxis.axisLabel.align = 'left';
            }
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize(
                {
                    width: 420,
                    height: 370
                }
            )
            myChart.setOption(option);
        }
    },
    mounted() {
        this.setChart();
    }
}
</script>

<style lang="less" scoped>
.area {
    height: 100%;
}
</style>