// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('activity-repo-top-div'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'activity-repo-top'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [50, 40, 30, 20, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);