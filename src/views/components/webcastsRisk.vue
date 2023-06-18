<template>
    <div class="webcastsRisk"></div>
</template>

<script>
export default {
    props: ['pie'],
    data() {
        return {}
    },
    methods: {
        setWebcasts() {
            let option = {
                legend: {
                    data: [
                        {name: '7', icon: 'circle'},
                        {name: '6.9', icon: 'circle'},
                        {name: '6.8', icon: 'circle'},
                        {name: '6.7', icon: 'circle'},
                        {name: '6.6',icon: 'circle'},
                        {name: '6.5',icon: 'circle'}
                    ],
                    gridIndex: 3,
                    right: "10%",
                    top: "6%",
                    itemWidth: 15,
                    itemHeight: 15,
                    textStyle: {
                        color: '#00CCFF',
                        fontSize: 15
                    }
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLine: {show: false}
                },
                yAxis: {
                    type: 'category',
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLine: {show: false},
                    axisLabel: {
                        color: '#fff',
                        backgroundColor: '#4A7AFF',
                        borderRadius: 3,
                        margin: 0,
                        padding: [1, 3, 1, 3]
                    },
                    inverse: true,
                },
                series: [
                    {
                        type: 'pie',
                        right:"10%",
                        radius: ['20%', '21%'],
                        center: ['72%', '60%'],
                        data: [{value: '1'}],
                        label: {show: false},
                        itemStyle: {
                            color: '#7D7DA2',
                        }
                    },
                    {
                        type: 'pie',
                        right:"10%",
                        radius: ['40%', '65%'],
                        roseType: 'area',
                        center: ['72%', '60%'],
                        avoidLabelOverlap: true,
                        startAngle: 180,
                        label: {
                            normal: {
                                show: true,
                                padding: [0, -30],
                                formatter: '{c} \n\n',
                                position: 'outside',
                                color: '#fff',
                                fontSize:16,
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '36',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            show: true,
                            length2: 30,
                            lineStyle: {
                              width:2
                            },
                        },
                        itemStyle: {
                            color: function (params) {
                                let corList = ["#eeda83","#d08484","#7866e0", "#77c27a","#00CCFF",'#d29be0'];
                                return corList[params.dataIndex]
                            },
                        },
                        data: this.pie
                    }
                ]
            };
            let myChart = this.$echarts(this.$el);

            myChart.clear();
            myChart.resize();
            myChart.setOption(option);
        },
    },
    mounted() {
        this.setWebcasts()
    },
}
</script>

<style lang="less" scoped>
.webcastsRisk {
    height: 100%;
  margin-left: -150px;
}
</style>
