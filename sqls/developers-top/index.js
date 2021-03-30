// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('developers-top-div'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'develops-top'
    },
    tooltip: {},
    legend: {
        data:['销量2']
    },
    xAxis: {
        data: ["衬衫2","羊毛衫2","雪纺衫2","裤子2","高跟鞋2","袜子2"]
    },
    yAxis: {},
    series: [{
        name: '销量2',
        type: 'bar',
        data: [10, 20, 30, 40, 50, 60]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);