"use strict";

//var myChart = echarts.init(document.getElementById("main"));
function negtive() {
  var option = {
    title: {
      text: '',
      textStyle: {
        align: 'center',
        color: '#fff',
        fontSize: 20
      },
      top: '1%',
      left: 'center'
    },
    color: ["#315C94", "#497FB6", "#6F8FCF", "#7AA0BB", "#9FBEDD"],
    backgroundColor: 'rgba(105, 105, 105, 0.5)',
    textStyle: {
      color: '#fff'
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          type: 'dashed',
          width: 2,
          color: '#4B941A'
        },
        animation: true
      }
    },
    legend: {
      show: false,
      data: ['a', 'b', 'c', 'd', 'e', 'f'],
      left: 'right'
    },
    grid: {
      show: false
    },
    yAxis: {
      data: ['少', '基本不变', '多'],
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#555']
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: ['white']
        }
      }
    },
    xAxis: {
      data: ['焦虑', '担心', '抑郁', '恐慌', '孤独', '紧张', '悲伤', '愤慨'],
      axisLine: {
        show: true,
        lineStyle: {
          color: 'white'
        }
      }
    },
    series: [{
      name: 'a',
      type: 'scatter',
      symbol: 'circle',
      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
      symbolSize: function symbolSize(data) {
        return Math.sqrt(data[2]) * 1;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function formatter(param) {
            return param.data[2];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          color: 'red'
        }
      },
      data: [['焦虑', '少', 820], ['担心', '少', 680], ['抑郁', '少', 1090], ['恐慌', '少', 930], ['孤独', '少', 1250], ['紧张', '少', 890], ['悲伤', '少', 900], ['愤慨', '少', 870]]
    }, {
      name: 'c',
      type: 'scatter',
      symbol: 'circle',
      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
      symbolSize: function symbolSize(data) {
        return Math.sqrt(data[2]) * 1;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function formatter(param) {
            return param.data[2];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          color: '#FFFF00'
        }
      },
      data: [['焦虑', '基本不变', 4270], ['担心', '基本不变', 2820], ['抑郁', '基本不变', 7080], ['恐慌', '基本不变', 4980], ['孤独', '基本不变', 6360], ['紧张', '基本不变', 5170], ['悲伤', '基本不变', 5550], ['愤慨', '基本不变', 4530]]
    }, {
      name: 'd',
      type: 'scatter',
      symbol: 'circle',
      //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
      symbolSize: function symbolSize(data) {
        return Math.sqrt(data[2]) * 1;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function formatter(param) {
            return param.data[2];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          color: '#00FFFF'
        }
      },
      data: [['焦虑', '多', 4910], ['担心', '多', 6500], ['抑郁', '多', 1820], ['恐慌', '多', 4090], ['孤独', '多', 2390], ['紧张', '多', 4940], ['悲伤', '多', 3550], ['愤慨', '多', 4700]]
    }]
  };
  myChart_Panel2_2.setOption(option);
}