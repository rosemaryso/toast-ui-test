import { setComma } from '@/utils/common.js'

export const mainPopChart01 = {
  tooltip: {
    trigger: 'item',
  },
  title: {
    text: '1Q',
    // subtext: '1분기',
    x: 'center',
    left: 'center',
    // bottom: -10,
    top: 0,
    textStyle: {
      // color: '#e0e0e0',
      fontSize: 20
    },
  },
  grid: {
    left: '1%',
    right: '2%',
    bottom: '3%',
    height: '80%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    // boundaryGap: false,
    data: ['생산대수', '지연(전월)', '지연(금월)'],
    // axisLabel: {
    //   textStyle: {
    //     color: '',
    //     fontSize: 15,
    //   },
    // },
  },
  yAxis: [
    {
      type: 'value',
    },
    {
      type: 'value',
      position: 'right',
    },
  ],
  color: ['#d9d9d9', '#92ccde', '#00768d'],
  series: [
    {
      name: '1분기',
      type: 'bar',
      barMaxWidth: 50,
      // data: [70, 40, 50],
      // itemStyle: { color: "#d9d9d9" },
      data: [
        {value:'80',itemStyle:{color:"#d9d9d9"}},
        {value:'20',itemStyle:{color:"#92ccde"}},
        {value:'10',itemStyle:{color:"#00768d"}}
      ],
      label: {
        formatter: function numFormater(e) {
          return setComma(e.value)
        },
        // position: 'inside',
        position: 'top',
        show: true,
      },
    }
  ]
}

export const mainPopChart02 = {
  tooltip: {
    trigger: 'item',
  },
  title: {
    text: '2Q',
    // subtext: '2분기',
    x: 'center',
    left: 'center',
    // bottom: -10,
    top: 0,
    textStyle: {
      // color: '#e0e0e0',
      fontSize: 20
    },
  },
  grid: {
    left: '1%',
    right: '2%',
    bottom: '3%',
    height: '80%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: ['생산대수', '지연(전월)', '지연(금월)'],
    // axisLabel: {
    //   textStyle: {
    //     color: '',
    //     fontSize: 12,
    //   },
    // },
  },
  yAxis: [
    {
      type: 'value',
    },
    {
      type: 'value',
      position: 'right',
    },
  ],
  color: ['#d9d9d9', '#92ccde', '#00768d'],
  series: [
    {
      name: '2분기',
      type: 'bar',
      barMaxWidth: 50,
      // data: [70, 40, 50],
      // itemStyle: { color: "#d9d9d9" },
      data: [
        {value:'80',itemStyle:{color:"#d9d9d9"}},
        {value:'20',itemStyle:{color:"#92ccde"}},
        {value:'10',itemStyle:{color:"#00768d"}}
      ],
      label: {
        formatter: function numFormater(e) {
          return setComma(e.value)
        },
        // position: 'inside',
        position: 'top',
        show: true,
      },
    },
  ],
}
 
export const mainPopChart03 = {
  // line 차트 옵션
  maintainAspectRatio: false,
  tooltip: {
    trigger: 'axis',
  },
  title: {
    text: '3Q',
    // subtext: '3분기',
    x: 'center',
    left: 'center',
    // bottom: -10,
    top: 0,
    textStyle: {
      // color: '#e0e0e0',
      fontSize: 20
    },
    // textVerticalAlign: null,
    // textBaseline: null // The same as textVerticalAlign.
  },
  grid: {
    left: '1%',
    right: '2%',
    bottom: '3%',
    height: '80%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    // boundaryGap: false,
    barGap: 5,
    data: ['생산대수', '지연(전월)', '지연(금월)'],
    // axisLabel: {
    //   textStyle: {
    //     color: '',
    //     fontSize: 12,
    //   },
    // },
  },
  yAxis: [
    {
      type: 'value',
    },
    {
      type: 'value',
      position: 'right',
    },
  ],
  color: ['#d9d9d9', '#92ccde', '#00768d'],
  series: [
    {
      name: 'seriesname3',
      type: 'bar',
      barMaxWidth: 50,
      // data: [70, 40, 50],
      data: [
        {value:'80',itemStyle:{color:"#d9d9d9"}},
        {value:'20',itemStyle:{color:"#92ccde"}},
        {value:'10',itemStyle:{color:"#00768d"}}
      ],
      label: {
        formatter: function numFormater(e) {
          return setComma(e.value)
        },
        position: 'top',
        show: true,
      },
    },
  ],
}

export const mainPopChart04 = {
  tooltip: {
    trigger: 'item',
  },
  title: {
    text: '4Q',
    // subtext: '4분기',
    x: 'center',
    left: 'center',
    // bottom: -10,
    top: 0,
    textStyle: {
      // color: '#e0e0e0',
      fontSize: 20
    },
  },
  grid: {
    left: '1%',
    right: '2%',
    bottom: '3%',
    height: '80%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    // boundaryGap: false,
    data: ['생산대수', '지연(전월)', '지연(금월)'],
    // axisLabel: {
    //   textStyle: {
    //     color: '',
    //     fontSize: 12,
    //   },
    // },
  },
  yAxis: [
    {
      type: 'value',
    },
    {
      type: 'value',
      position: 'right',
    },
  ],
  color: ['#d9d9d9', '#92ccde', '#00768d'],
  series: [
    {
      name: '4분기',
      type: 'bar',
      barMaxWidth: 50,
      // data: [70, 40, 50],
      // itemStyle: { color: "#d9d9d9" },
      data: [
        {value:'80',itemStyle:{color:"#d9d9d9"}},
        {value:'20',itemStyle:{color:"#92ccde"}},
        {value:'10',itemStyle:{color:"#00768d"}}
      ],
      label: {
        formatter: function numFormater(e) {
          return setComma(e.value)
        },
        // position: 'inside',
        position: 'top',
        show: true,
      },
    },
  ],
}

// dasboard 메인팝업 야드별 바차트 mainpopChartYard01
export const mainPopChartYard01 = {
  // toolbox: {
  //   feature: {
  //     dataView: { show: true, readOnly: false },
  //     restore: { show: true },
  //     saveAsImage: { show: true }
  //   }
  // },
  tooltip: {
    // trigger: 'item',
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    },
    // formatter: function (params) {
    //   return `[${params.data.name}]
    //   생산대수:${params.data.value}
    //   10일초과:${params.data.value}
    //   20일초과:${params.data.value}
    //   30일초과:${params.data.value}`
    // },
    // // formatter: function (params) {
    // //   return `※상세건수<br />
    // //            [50이하] : ${setComma(params.data.value)}건<br />
    // //            [60] : ${setComma(params.data.value1)}건<br />
    // //            [70] : ${setComma(params.data.value2)}건<br />
    // //            [80] : ${setComma(params.data.value3)}건<br />
    // //            [90이상] : ${setComma(params.data.value4)}건<br />`
    // // }
    //   // formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
    //     backgroundColor: '#F6F8FC',
    //     borderColor: '#8C8D8E',
    //     borderWidth: 1,
    //     borderRadius: 4,
    //     rich: {
    //       a: {
    //         color: '#6E7079',
    //         lineHeight: 22,
    //         align: 'center'
    //       },
    //       hr: {
    //         borderColor: '#8C8D8E',
    //         width: '100%',
    //         borderWidth: 1,
    //         height: 0
    //       },
    //       b: {
    //         color: '#4C5058',
    //         fontSize: 14,
    //         fontWeight: 'bold',
    //         lineHeight: 33
    //       },
    //       per: {
    //         color: '#fff',
    //         backgroundColor: '#4C5058',
    //         padding: [3, 4],
    //         borderRadius: 4
    //       }
    //     }
    // formatter: '{b}<br/>[{c}건]<br/>({d}%)',
    //[컬러] a name(생산대수), b axis(생산대수), c data, 
    //[b]
    //a: c
    // name: '[이전]10일초과',
    //   type: 'bar',
    //   stack: 'total',
    //   label: {show: true},
    //   emphasis: {focus: 'series'},
    //   // data: [0, 10, 0]
    // formatter: function numFormater(e) {
    //   return e
    // },
    // formatter: function (params, ticket, callback) {
    //     // $.get('detail?name=' + params.name, function (content) {
    //     //     callback(ticket, toHTML(content));
    //     // });
    //     return params.componentType
    //         // `[{b}]<br />
    //         //  {a0}: {c0}<br />
    //         //  {a1}: {c1}<br />
    //         //  {a2}: {c2}<br />
    //         //  {a3}: {c3}<br />`
    // }
    formatter: `[{b}]<br />
        {a0}: {c0}<br />
        {a1}: {c1}<br />
        {a2}: {c2}<br />
        {a3}: {c3}<br />
        {a4}: {c4}<br />
        {a5}: {c5}<br />
        {a6}: {c6}<br />`
    // formatter: `[b]
    //             a0: c0<br />
    //             a1: c1<br />
    //             a2: c2<br />
    //             a3: c3<br />
    //             a4: c4<br />
    //             {a0}:{b0}:{c0}:{d0}:{e0}<br />
    //             {a1}:{b1}:{c1}:{d1}:{e1}<br />
    //             {a2}:{b2}:{c2}:{d2}:{e2}<br />
    //             {a3}:{b3}:{c3}:{d3}:{e3}<br />
    //             {a4}:{b4}:{c4}:{d4}:{e4}<br />
    //             {a5}:{b5}:{c5}:{d5}:{e5}<br />
    //             {a6}:{b6}:{c6}:{d6}:{e6}<br />
    //             {a7}:{b7}:{c7}:{d7}:{e7}`
    // formatter: function (params) {
    //   return `111${params.name}222
    //   333${params.data}444
    //   555${params.value}666
    //   `
    // },
  },
  legend: {
    show: false,
    // data: ["생산대수", "10일초과", "20일초과", "30일초과"]
  },
  title: {
    text: 'HHI',
    // subtext: 'HHI',
    x: 'center',
    left: 'center',
    // bottom: -20
    textStyle: {
      // color: '#e0e0e0',
      fontSize: 30,
      fontFamily: 'HD Hyundai'
    },
  },
  grid: {
    left: '1%',
    right: '2%',
    bottom: '3%',
    // height: '80%',
    containLabel: true,
  },
  // xAxis: [
  //     {
  //     type: 'category',
  //     data: ['HHI']
  //     }
  // ],
  xAxis: {
    type: 'category',
    // boundaryGap: false,
    data: ['생산대수', '[이전]', '[현재]'],
    // axisLabel: {
    //   textStyle: {
    //     color: '',
    //     fontSize: 12,
    //   },
    // },
  },
  yAxis: [
    {
      type: 'value',
      position: 'center',
    },
  ],
  // color: ['#d9d9d9', '#92ccde', '#00768d'],
  series: [
    {
      name: '생산대수',
      type: 'bar',
      stack: 'total',
      label: {show: true},
      emphasis: {focus: 'series'},
      // data: [70]
      data: [
        {value:'70',itemStyle:{color:"#d9d9d9"}},
      ],
    },
    {
      name: '[이전]10일초과',
      type: 'bar',
      stack: 'total',
      label: {show: true},
      emphasis: {focus: 'series'},
      // data: [0, 10, 0]
      data: [
        {value:'0',itemStyle:{color:"#92ccde"}},
        {value:'10',itemStyle:{color:"#92ccde"}},
        {value:'0',itemStyle:{color:"#92ccde"}}
      ],
    },
    {
      name: '[이전]20일초과',
      type: 'bar',
      stack: 'total',
      label: {show: true},
      emphasis: {focus: 'series'},
      // data: [0, 10, 0]
      data: [
        {value:'0',itemStyle:{color:"#fed571"}},
        {value:'20',itemStyle:{color:"#fed571"}},
        {value:'0',itemStyle:{color:"#fed571"}}
      ],
    },
    {
      name: '[이전]30일초과',
      type: 'bar',
      stack: 'total',
      label: {show: true},
      emphasis: {focus: 'series'},
      // data: [0, 10, 0]
      data: [
        {value:'0',itemStyle:{color:"#ff6699"}},
        {value:'30',itemStyle:{color:"#ff6699"}},
        {value:'0',itemStyle:{color:"#ff6699"}}
      ],
    },
    {
      name: '[현재]10일초과',
      type: 'bar',
      stack: 'total',
      label: {show: true},
      emphasis: {focus: 'series'},
      // data: [0, 18, 15]
      data: [
        {value:'0',itemStyle:{color:"#92ccde"}},
        {value:'0',itemStyle:{color:"#92ccde"}},
        {value:'11',itemStyle:{color:"#92ccde"}}
      ],
    },
    {
      name: '[현재]20일초과',
      type: 'bar',
      stack: 'total',
      label: {show: true},
      emphasis: {focus: 'series'},
      // data: [0, 18, 15]
      data: [
        {value:'0',itemStyle:{color:"#fed571"}},
        {value:'0',itemStyle:{color:"#fed571"}},
        {value:'21',itemStyle:{color:"#fed571"}}
      ],
    },
    {
      name: '[현재]30일초과',
      type: 'bar',
      stack: 'total',
      label: {show: true},
      emphasis: {focus: 'series'},
      // data: [0, 18, 15]
      data: [
        {value:'0',itemStyle:{color:"#ff6699"}},
        {value:'0',itemStyle:{color:"#ff6699"}},
        {value:'31',itemStyle:{color:"#ff6699"}}
      ],
    },
  ]
}


// dasboard 메인팝업 야드별 바차트 mainpopChartYard02
export const mainPopChartYard02 = {
  tooltip: {
    // trigger: 'item',
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: {
    show: false,
    // data: ["생산대수", "10일초과", "20일초과", "30일초과"]
  },
  title: {
    text: 'HHI',
    // subtext: 'HHI',
    x: 'center',
    left: 'center',
    // bottom: -20
    textStyle: {
      // color: '#e0e0e0',
      fontSize: 30,
      fontFamily: 'HD Hyundai'
    },
  },
  grid: {
    left: '1%',
    right: '2%',
    bottom: '3%',
    // height: '80%',
    containLabel: true,
  },
  xAxis: {
    type: 'item',
    data: ['생산대수', '[이전]', '[현재]']
    // boundaryGap: false,
    // axisLabel: {
    //   textStyle: {
    //     color: '',
    //     fontSize: 12,
    //   },
    // },
  },
  yAxis: [
    {
      type: 'value',
      // position: 'center',
    },
  ],
  // color: ['#d9d9d9', '#92ccde', '#00768d'],
  series: [
    {
      name: '생산대수',
      type: 'bar',
      stack: '생산대수',
      label: {show: true},
      emphasis: {focus: 'series'},
      // data: [70]
      data: [{value:'70',itemStyle:{color:"#228dee"}}]
    },
    {
    name: '[이전]',
    type: 'bar',
    // stack: 'total',
    label: {show: true},
    emphasis: {focus: 'series'},
    data: [0, 40, 50, 60]
    // data: [
    //   {value:'80',itemStyle:{color:"#228dee"}},
    //   {value:'40',itemStyle:{color:"#09bbff"}},
    //   {value:'50',itemStyle:{color:"#24eaf4"}},
    //   {value:'60',itemStyle:{color:"#27efb8"}}
    // ],
    },
    // {
    // name: '[현재]',
    // type: 'bar',
    // stack: '[현재]',
    // label: {show: true},
    // emphasis: {focus: 'series'},
    // // data: [20, 30, 0, 30, 10, 20, 30]
    // data: [
    //   {value:'0',itemStyle:{color:"#228dee"}},
    //   {value:'10',itemStyle:{color:"#09bbff"}},
    //   {value:'20',itemStyle:{color:"#24eaf4"}},
    //   {value:'30',itemStyle:{color:"#27efb8"}}
    // ],
    // },
  ]
}

export const mainPopChart06 = {
  tooltip: {
      trigger: 'item',
      axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
  },
  legend: {
    data: ["생산대수", "10일초과", "20일초과", "30일초과"]
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  yAxis : {
      type: 'value'
  },
  xAxis: {
      type: 'category',
      data: ['생산대수', '[이전]', '[현재]'],
  },
  series: [
      {
      name: '생산대수',
      type: 'bar',
      stack: 'total',
      label: {
          show: true
      },
      emphasis: {
          focus: 'series'
      },
      data: [70, 0, 0]
      },
      {
      name: '[이전]10일초과',
      type: 'bar',
      stack: 'total',
      label: {
          show: true
      },
      emphasis: {
          focus: 'series'
      },
      data: [0, 10, 0]
      },
      {
        name: '[이전]20일초과',
        type: 'bar',
        stack: 'total',
        label: {
            show: true
        },
        emphasis: {
            focus: 'series'
        },
        data: [0, 20, 0]
      },
      {
        name: '[이전]30일초과',
        type: 'bar',
        stack: 'total',
        label: {
            show: true
        },
        emphasis: {
            focus: 'series'
        },
        data: [0, 30, 0]
      },
      {
        name: '[현재]10일초과',
        type: 'bar',
        stack: 'total',
        label: {
            show: true
        },
        emphasis: {
            focus: 'series'
        },
        data: [0, 0, 10]
      },
      {
        name: '[현재]20일초과',
        type: 'bar',
        stack: 'total',
        label: {
            show: true
        },
        emphasis: {
            focus: 'series'
        },
        data: [0, 0, 20]
      },
      {
        name: '[현재]30일초과',
        type: 'bar',
        stack: 'total',
        label: {
            show: true
        },
        emphasis: {
            focus: 'series'
        },
        data: [0, 0, 30]
      },
  ]
  };

  export const mainPopChart07 = {
      tooltip: {
          trigger: 'axis',
          axisPointer: {
          type: 'shadow'
          }
      },
      legend: {show: false},
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
        type: 'category',
        // boundaryGap: false,
        // data: ['생산대수', '[이전]', '[현재]'],
        data: ['생산대수 [이전] [현재]'],
        axisLabel: {
          textStyle: {
            color: '',
            fontSize: 12,
            formatter: function (params) {
              return `${params}건1`
            },
          },
          formatter: function (params) {
            return `${params}`
          },
        },
      },
      // xAxis: [
      //   {
      //     type: 'category',
      //     data: ['HHI']
      //   }
      // ],
      yAxis: [
          {
          type: 'value'
          }
      ],
      series: [
          {
          name: '생산대수',
          type: 'bar',
          label: {show: true},
          stack: '생산대수',
          emphasis: {
              focus: 'series'
          },
          data: [70]
          },
          {
          name: '[이전]생산대수',
          type: 'bar',
          label: {show: true},
          stack: '[이전]',
          emphasis: {
              focus: 'series'
          },
          data: []
          },
          {
          name: '[이전]10일초과',
          type: 'bar',
          label: {show: true},
          stack: '[이전]',
          emphasis: {
              focus: 'series'
          },
          data: [8]
          },
          {
          name: '[이전]20일초과',
          type: 'bar',
          label: {show: true},
          stack: '[이전]',
          emphasis: {
              focus: 'series'
          },
          data: [10]
          },
          {
          name: '[이전]30일초과',
          type: 'bar',
          label: {show: true},
          stack: '[이전]',
          emphasis: {
              focus: 'series'
          },
          data: [12]
          },
          {
          name: '[현재]생산대수',
          type: 'bar',
          label: {show: true},
          stack: '[현재]',
          emphasis: {
              focus: 'series'
          },
          data: []
          },
          {
          name: '[현재]10일초과',
          type: 'bar',
          label: {show: true},
          stack: '[현재]',
          emphasis: {
              focus: 'series'
          },
          data: [15]
          },
          {
          name: '[현재]20일초과',
          type: 'bar',
          label: {show: true},
          stack: '[현재]',
          emphasis: {
              focus: 'series'
          },
          data: [16]
          },
          {
          name: '[현재]30일초과',
          type: 'bar',
          label: {show: true},
          stack: '[현재]',
          emphasis: {
              focus: 'series'
          },
          data: [17]
          }
      ]
      };

      export const mainPopChart08 = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
              type: 'shadow'
              }
          },
          legend: {show: false},
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          // xAxis: {
          //   type: 'category',
          //   // boundaryGap: false,
          //   data: ['생산대수', '[이전]', '[현재]'],
          //   // axisLabel: {
          //   //   textStyle: {
          //   //     color: '',
          //   //     fontSize: 12,
          //   //   },
          //   // },
          // },
          xAxis: [
              {
              type: 'category',
              data: ['생산대수', '[이전]', '[현재]'],
              }
          ],
          yAxis: [
              {
              type: 'value'
              }
          ],
          series: [
              {
              name: '생산대수',
              type: 'bar',
              label: {
                  show: true
              },
              stack: '생산대수',
              emphasis: {
                  focus: 'series'
              },
              data: [70]
              },
              {
              name: '생산대수SUM',
              type: 'bar',
              legend:{show: false},
              label: {
                  show: true,
                  position: 'top'
              },
              stack: '생산대수',
              emphasis: {
                  focus: 'series'
              },
              data: [0]
              },
              {
              name: '10일이하',
              type: 'bar',
              label: {show: true},
              stack: '지연전월',
              emphasis: {
                  focus: 'series'
              },
              data: [3]
              },
              {
              name: '10일초과',
              type: 'bar',
              label: {show: true},
              stack: '지연전월',
              emphasis: {
                  focus: 'series'
              },
              data: [8]
              },
              {
              name: '20일초과',
              type: 'bar',
              label: {show: true},
              stack: '지연전월',
              emphasis: {
                  focus: 'series'
              },
              data: [10]
              },
              {
              name: '30일초과',
              type: 'bar',
              label: {show: true},
              stack: '지연전월',
              emphasis: {
                  focus: 'series'
              },
              data: [10]
              },
              {
              name: '10일이하',
              type: 'bar',
              label: {show: true},
              stack: '지연금월',
              emphasis: {
                  focus: 'series'
              },
              data: [10]
              },
              {
              name: '10일초과',
              type: 'bar',
              label: {show: true},
              stack: '지연금월',
              emphasis: {
                  focus: 'series'
              },
              data: [15]
              },
              {
              name: '20일초과',
              type: 'bar',
              label: {show: true},
              stack: '지연금월',
              emphasis: {
                  focus: 'series'
              },
              data: [20]
              },
              {
              name: '30일초과',
              type: 'bar',
              label: {show: true},
              stack: '지연금월',
              emphasis: {
                  focus: 'series'
              },
              data: [23]
              }
          ]
          }
