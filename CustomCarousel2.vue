<template>
  <div style="border: 1px solid; height: 100%">
    <!-- <div class="d-flex">
      <v-checkbox label="체크박스테스트"></v-checkbox>
      <v-btn @click="startStop" title="일시정지">{{state.startStopText}}</v-btn>
    </div> -->
    <v-carousel
      :cycle="state.cycleValue"
      interval="12000"
      show-arrows-on-hover
      hide-delimiters
      height="auto"
      @change="carChange"
    >
      <!-- 1번째 -->
      <v-carousel-item height="auto" min-height="430" max-height="auto" :key="1">
        <div class="customCard" style="align-items: center; display: flex; height: 53px; padding: 0% 1%;">
        <fieldset class="checkGroup" style="width: 140px; height: 45px;">
          <legend>배포일자</legend>
          <v-combobox
            :items="conData1"
            v-model="defaultData1"
            :menu-props="{auto:true}"
            return-object
            :item-text="conData1.text"
            :item-value="conData1.value"
            @change="changeVal1($event)"
          />
        </fieldset>
        <fieldset class="checkGroup" style="width: 270px; height: 45px;">
          <legend>납기일기준</legend>
          <v-radio-group inline v-model="dategbn" @change="changeDategbn($event)" row>
            <v-radio id="dategbnA" label="계약납기일" value="A"></v-radio>
            <v-radio id="dategbnB" label="관리납기일" value="B"></v-radio>
          </v-radio-group>
        </fieldset>
        <v-btn color="primary" @click="getSearchData" class="" style="margin: 2px 2px 2px 2px;" title="조회">조회</v-btn>
        </div>
        <div class="mx-n1 no-gutters" style="height: 100%; display:flex;">
          <div style="display: flex; height: 100%; width: 100%;">
            <custom-grid @getGrid="getEvent2" gridName="dashGrid04" :gridOpt="state.grid[0]" :getGridData="state.gridData01" ></custom-grid>
          </div>
        </div>
      </v-carousel-item>

      <!-- 2번째 barchart,piechart -->
      <v-carousel-item height="auto" min-height="730" max-height="auto" :key="2">
        <div style="align-items: center; display: flex; height: 53px; padding: 0% 1%;">
        <fieldset class="checkGroup" style="width: 140px; height: 45px;">
          <legend>이전버전</legend>
          <v-combobox
            :items="conDataPrev"
            v-model="prevData"
            :menu-props="{auto:true}"
            return-object
            :item-text="conDataPrev.text"
            :item-value="conDataPrev.value"
            @change="changePreData($event)"
          />
        </fieldset>
        <fieldset class="checkGroup" style="width: 140px; height: 45px;">
          <legend>현재버전</legend>
          <v-combobox
            :items="conDataCurr"
            v-model="currData"
            :menu-props="{auto:true}"
            return-object
            :item-text="conDataCurr.text"
            :item-value="conDataCurr.value"
            @change="changeCurrData($event)"
          />
        </fieldset>
        <v-btn color="primary" @click="getSearchDataChart" class="" style="margin: 2px 2px 2px 2px;" title="조회">조회</v-btn>
        <fieldset class="checkGroup" style="width: 270px; height: 45px;">
          <legend>납기일기준</legend>
          <v-radio-group inline v-model="dategbn" @change="changeDategbn($event)" row>
            <v-radio id="dategbnA" label="계약납기일" value="A"></v-radio>
            <v-radio id="dategbnB" label="관리납기일" value="B"></v-radio>
          </v-radio-group>
        </fieldset>
        </div>
        <fieldset style="width: 100%; height: 40%; ">
          <legend>생산대수 및 납기지연</legend>
          <div class="mx-n1 no-gutters" style="height: 100%; display:flex;">
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: auto">
              <custom-echart :chartOpt="state.chart[0]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 250px">
              <custom-echart :chartOpt="state.chart[1]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 250px">
              <custom-echart :chartOpt="state.chart[2]" style="height:100%;"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 250px">
              <custom-echart :chartOpt="state.chart[3]"></custom-echart>
            </div>
          </div>
        </fieldset>
        <fieldset style="width: 100%; height: 50%;">
          <legend>조건별 납기지연 비율</legend>
          <div class="mx-n1 no-gutters" style="height: 100%; display:flex;">
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: auto">
              <custom-echart :chartOpt="state.chartPie[0]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: auto">
              <custom-echart :chartOpt="state.chartPie[1]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: auto">
              <custom-echart :chartOpt="state.chartPie[2]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: auto">
              <custom-echart :chartOpt="state.chartPie[3]"></custom-echart>
            </div>
          </div>
        </fieldset>
      </v-carousel-item>

      <!-- 3번째 barchart -->
      <v-carousel-item height="auto" min-height="530" max-height="860" :key="3">
        <div style="align-items: center; display: flex; height: 53px; padding: 0% 1%;">
        <fieldset class="checkGroup" style="width: 140px; height: 45px;">
          <legend>이전버전</legend>
          <v-combobox
            :items="conDataPrev"
            v-model="prevData"
            :menu-props="{auto:true}"
            return-object
            :item-text="conDataPrev.text"
            :item-value="conDataPrev.value"
            @change="changePreData($event)"
          />
        </fieldset>
        <fieldset class="checkGroup" style="width: 140px; height: 45px;">
          <legend>현재버전</legend>
          <v-combobox
            :items="conDataCurr"
            v-model="currData"
            :menu-props="{auto:true}"
            return-object
            :item-text="conDataCurr.text"
            :item-value="conDataCurr.value"
            @change="changeCurrData($event)"
          />
        </fieldset>
        <v-btn color="primary" @click="getSearchDataChart" class="" style="margin: 2px 2px 2px 2px;" title="조회">조회</v-btn>
        <fieldset class="checkGroup" style="width: 270px; height: 45px;">
          <legend>납기일기준</legend>
          <v-radio-group inline v-model="dategbn" @change="changeDategbn($event)" row>
            <v-radio id="dategbnA" label="계약납기일" value="A"></v-radio>
            <v-radio id="dategbnB" label="관리납기일" value="B"></v-radio>
          </v-radio-group>
        </fieldset>
        </div>
        <fieldset style="width: 100%; height: 40%; ">
          <legend>[야드별] 생산대수 및 납기지연(연간)</legend>
          <div class="mx-n1 no-gutters" style="height: 100%; display:flex;">
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[4]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[5]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[6]"></custom-echart>
            </div>
          </div>
          <div class="mx-n1 no-gutters" style="height: 100%; display:flex;">
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[4]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[5]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[6]"></custom-echart>
            </div>
          </div>
          <div class="mx-n1 no-gutters" style="height: 100%; display:flex;">
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[7]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[4]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[5]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[6]"></custom-echart>
            </div>
          </div>
        </fieldset>
      </v-carousel-item>

      <!-- 4번째 barchart -->
      <v-carousel-item height="auto" min-height="530" max-height="860" :key="4">
        <div style="align-items: center; display: flex; height: 53px; padding: 0% 1%;">
        <fieldset class="checkGroup" style="width: 140px; height: 45px;">
          <legend>이전버전</legend>
          <v-combobox
            :items="conDataPrev"
            v-model="prevData"
            :menu-props="{auto:true}"
            return-object
            :item-text="conDataPrev.text"
            :item-value="conDataPrev.value"
            @change="changePreData($event)"
          />
        </fieldset>
        <fieldset class="checkGroup" style="width: 140px; height: 45px;">
          <legend>현재버전</legend>
          <v-combobox
            :items="conDataCurr"
            v-model="currData"
            :menu-props="{auto:true}"
            return-object
            :item-text="conDataCurr.text"
            :item-value="conDataCurr.value"
            @change="changeCurrData($event)"
          />
        </fieldset>
        <v-btn color="primary" @click="getSearchDataChart" class="" style="margin: 2px 2px 2px 2px;" title="조회">조회</v-btn>
        <fieldset class="checkGroup" style="width: 270px; height: 45px;">
          <legend>납기일기준</legend>
          <v-radio-group inline v-model="dategbn" @change="changeDategbn($event)" row>
            <v-radio id="dategbnA" label="계약납기일" value="A"></v-radio>
            <v-radio id="dategbnB" label="관리납기일" value="B"></v-radio>
          </v-radio-group>
        </fieldset>
        </div>
        <fieldset style="width: 100%; height: 40%; ">
          <legend>[공장별] 생산대수 및 납기지연(연간)</legend>
          <div class="mx-n1 no-gutters" style="height: 100%; display:flex;">
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[4]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[5]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[6]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[7]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[4]"></custom-echart>
            </div>
          </div>
        </fieldset>
        <fieldset style="width: 100%; height: 40%; ">
          <legend>[보어별] 생산대수 및 납기지연(연간)</legend>
          <div class="mx-n1 no-gutters" style="height: 100%; display:flex;">
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[4]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[5]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[6]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[7]"></custom-echart>
            </div>
            <div class="sideContent" style="flex-basis:25%;  max-width:25%; height: 190px">
              <custom-echart :chartOpt="state.chart[4]"></custom-echart>
            </div>
          </div>
        </fieldset>
      </v-carousel-item>

      <mainOpeningPopDetail
        v-if="state.popupDetailVal"
        :titleNM="'납기지연 세부현황'"
        :popupVal="state.popupDetailVal"
        :param="state.setParam2"
        @input="state.popupDetailVal = $event"
      />
      <!-- <mainOpeningPopDetail v-if="state.popupDetailVal" :titleNM="'납기지연 세부현황'" :popupVal="state.popupDetailVal" @input="state.popupDetailVal = $event" /> -->
    </v-carousel>
  </div>
</template>
<script>
import {
  ref,
  watch,
  onMounted,
  nextTick,
  onActivated
} from '@vue/composition-api'
import { isEmpty } from '@/utils/common.js'

import {
  getMainPopData,
  getMainPoPChart1,
  getMainPoPChart2,
  getMainPoPCon1, 
  getMainPoPCon2
} from '@/api/requestApi.js'

import { searchBis7, searchBis12 } from '@/api/businessApi.js'

import CustomGrid from '@/components/CustomGrid.vue'
import CustomEchart from '@/components/CustomEchart.vue'

import { mainPopGrid01 } from '@/components/dashBoard/gridOpt/mainPopGridOpt.js'
import {
  mainPopChart01,
  mainPopChart02,
  mainPopChart03,
  mainPopChart04,
  mainPopChartYard01,
  mainPopChartYard02,
  mainPopChart06,
  mainPopChart07,
  mainPopChart08
} from '@/components/dashBoard/chartOpt/mainPopChartOpt.js'
import {
  mainPopChartPie01,
  mainPopChartPie02,
  mainPopChartPie03,
  mainPopChartPie04
} from '@/components/dashBoard/chartOpt/mainPopChartPieOpt.js'

import mainOpeningPopDetail from './dashBoard/mainOpeningPopDetail.vue'
import { startgbn } from '@/components/dashBoard/mainOpeningPop2.vue'

export default {
  name: 'CustomCarousel2',
  components: {
    CustomGrid,
    CustomEchart,
    mainOpeningPopDetail
  },
  props: {
    title: String,
    cardHeight: String,
    moverleave: Boolean,
    chartOpt2: Object,
    getParam: Object,
    startgbn: String
  },
  computed: {},
  setup(props) {
    const state = ref({
      gridE2: '',
      // gridE3: '',
      grid: [mainPopGrid01],
      gridData01: {},
      chart: [mainPopChart01, mainPopChart02, mainPopChart03, mainPopChart04,mainPopChartYard01,mainPopChartYard02,mainPopChart06,mainPopChart07,mainPopChart08],
      chartPie: [
        mainPopChartPie01,
        mainPopChartPie02,
        mainPopChartPie03,
        mainPopChartPie04
      ],
      cycleValue: true, // true 기본값 임시로 일시정지  false 해놓음
      startStopText: '일시정지',
      popupDetailVal: false,
      setParam: '',
      setParam2: {}
    })

    const conData1 = ref([])
    const defaultData1 = ref([])
    
    const conDataPrev = ref([])
    const prevData = ref([])
    
    const conDataCurr = ref([])
    const currData = ref([])

    const dategbn = ref('B')
    const startgbn = ref('A')

    const paramData = ref({
      in_std_date: '',
      in_prev_date: '',
      in_curr_date: '',
      in_date_gbn: ''
    })

    const getProps = ref(props)
    // carousel 화면 전환시 값 조회
    const carChange = e => {
      if (e === 0) {
        paramData.value = {
          in_std_date: defaultData1.value[0],
          in_date_gbn: dategbn.value
        }
        getSearchData(paramData)
      } else if (e === 1) {
        getSearchDataChart(
          getProps.value.getParam.in_prev_date,
          getProps.value.getParam.in_curr_date
        )
      }
    }

    getMainPoPCon1().then((res) => {
      conData1.value = []
      conDataPrev.value = []
      conDataCurr.value = []
      const result = []
      const rs = res.rs
      if (rs.length > 0) {
        rs.forEach((element, index) => {
          result.push({
            value: element.vyymm,
            text: element.vyymm
          })

          if (index === rs.length - 1) {
            defaultData1.value[0] = rs[0].vyymm
            prevData.value[0] = rs[1].vyymm
            currData.value[0] = rs[0].vyymm
            paramData.value = {
              in_std_date: defaultData1.value[0],
              in_prev_date: prevData.value[0],
              in_curr_date: currData.value[0],
              in_date_gbn: dategbn.value
            }
          }
        })
        conData1.value = result
        conDataPrev.value = result
        conDataCurr.value = result
      }
      // setConData(defaultData1.value[0])
    })

    onMounted(() => {
      getSearchData()
    })

    // 조회 조건 변경시 조회 처리 change event랑 중복인거 같아서 일단 주석
    watch(
      () => defaultData1.value[0],
      value => {
        console.log('in_std_date==value ', value)
        paramData.value = {
          in_std_date: defaultData1.value[0],
          // in_prev_date: prevData.value[0],
          // in_curr_date: currData.value[0]
          in_date_gbn: dategbn.value
        }
        getSearchData(paramData)
      }
    )

    watch(
      () => dategbn.value,
      value => {
        console.log('dategbn==value ', value)
        paramData.value = {
          in_std_date: defaultData1.value[0],
          // in_prev_date: prevData.value[0],
          // in_curr_date: currData.value[0]
          in_date_gbn: dategbn.value
        }
        getSearchData(paramData)
      }
    )

    // 조회 조건 변경시 조회 처리
    watch(() => getProps.value.getParam.in_std_date, value => {
      console.log('value ', value)
      getSearchData(value)
    })

    watch(() => getProps.value.getParam.in_curr_date, value => {
        console.log('valueChart==in_curr_date==value ', value)
        getSearchDataChart(value)
      }
    )

    // 재생 일시정지
    watch(() => getProps.value.getParam.runStopBtn, value => {
      console.log('getProps.value.getParam.runStopBtn ', value)
      // state.value.cycleValue = value
      startStop(value)
    })

    const getEvent2 = e => {
      state.value.gridE2 = e
      state.value.gridE2.setBodyHeight(350)
      // setColWidth(state.value.grid[0], state.value.gridE2)
      // cel 더블클릭 팝업 호출
      e.on('dblclick', evt => {
        
        if (
          evt.targetType === 'cell' &&
          !evt.columnName.includes('yard_group') &&
          !evt.columnName.includes('yard_name') &&
          !evt.columnName.includes('sum_dlay_pt') &&
          !evt.columnName.includes('content')
        ) {
          const getRow = state.value.gridE2.getRow(evt.rowKey)
          
          state.value.setParam2 = {
            std_date: defaultData1.value[0],
            selyard: getRow.yard_name,
            selcolumn: evt.columnName,
            selstddate: '202401',
            getRow: getRow,
            dategbn: dategbn
          }
          state.value.popupDetailVal = true
          
        }
      })
      nextTick(() => {
        // state.value.gridE2.setBodyHeight(260)
      })
    }

    // const getEvent3 = (e) => {
    //   state.value.gridE3 = e
    //   state.value.gridE3.setBodyHeight(180)
    //   setColWidth(state.value.grid[1], state.value.gridE3)
    // }

    // 그리드데이터 조회
    const getSearchData = data => {
      const param = {
        in_std_date: defaultData1.value[0],
        in_date_gbn: dategbn.value
      }
      console.log('getSearchData param ', param)
      getMainPopData(param).then(res => {
        let rs = res.rs
        const listData = []
        console.log('getMainPopData res ', res)
        if (rs.length > 0) {
          rs = rs
            .filter(x => x.yard_group !== '합계')
            .concat(rs.filter(x => x.yard_group === '합계'))

          rs.forEach(element => {
            for (const j in element) {
              // if (!j.toString().includes('yard_group') && !j.toString().includes('yard_name') && !j.toString().includes('content')) {
              //   state.value.gridE2.addCellClassName(element.rowKey, j.toString(), 'cellB')
              // }
              console.log('element', element)
              console.log('j', j)

            if (j.toString().includes('yard_name') && element.yard_name.includes('소계')) {
              if (element.yard_name === '그룹사소계') {
                element.yard_name = '소계'
                element.yard_group = '그룹사'
              }
              if (element.yard_name === '국내타사소계') {
                element.yard_name = '소계'
                element.yard_group = '국내타사'
              }
              if (element.yard_name === '해외소계') {
                element.yard_name = '소계'
                element.yard_group = '해외'
                // element.pop()
                // element.splice(j,1)
                // element.remove()
                // element.splice(j,1)
                // rs.splice(1,1)
                // rs.push()
              }
            } else if (j.toString().includes('yard_name') && element.yard_name.includes('합계')) {
              if (element.yard_name === '합계') {
                element.yard_name = '합계'
                element.yard_group = ''
              }
            }

            // state.value.gridE.addCellClassName(element.rowKey, j, 'setOrdColorSKS')

            // listData.forEach((element, index) => {
            //   // 누계를 제외한 계 값
            //   if (element.gubun1 !== '누계') {
            //     let sum = 0
            //     for (const con in element) {
            //       if (con.includes('_amt')) {
            //         sum = Number(sum) + Number(element[con])
            //       }
            //     }
            //     element.sub_bfo = sum
            //   }
            // })

              // state.value.gridE2.addCellClassName(
              //   element.rowKey,
              //   j.toString(),
              //   'cellB'
              // )

            }
            // rs.push(element)
          })
        }
        state.value.gridE2.resetData(rs)

        const gridData = state.value.gridE2.getData()
        // grid 색 변경.
        gridData.forEach((row) => {
          console.log('state.value.gridE2 row', row)
          // for (const j in row) {
          //   console.log('state.value.gridE2 row.rowKey', row.rowKey)
          //   console.log('state.value.gridE2 j', j)
          //       state.value.gridE2.addCellClassName(row.rowKey, j, 'setOrdColor02')
          //   }
          // state.value.gridE2.addRowClassName(row.rowKey, 'setOrdColor02')
          if (row.yard_name === '소계') {
            state.value.gridE2.addRowClassName(row.rowKey, 'setSumColor02')
          } else if (row.yard_name === '합계' ) {
            state.value.gridE2.addRowClassName(row.rowKey, 'setSumColor03')
            // state.value.gridE2.addCellClassName(row.rowKey, j, 'setSumColor01')
          }

          // // popup 컬럼 색,마우스 포인트 변경.
          // for (const j in row) {
          //   if (j === 'b' || j === 'c' || j === 'e' || j === 'g') {
          //     state.value.gridE.addCellClassName(row.rowKey, j, 'cellB')
          //   }
          // }

        })

        const setHeader = {
          year: defaultData1.value[0].substr(0, 4) + '년 전체'
          // year: data.substr(0, 4) + '년 전체'
        }
        state.value.gridE2.setColumnHeaders(setHeader)
        
      })

    }

    // chart 데이터 조회
    const getSearchDataChart = () => {
      const today = new Date()
      console.log('today', today)
      console.log('getSearchDataChart prevData.value[0] ', prevData.value[0])
      console.log('getSearchDataChart currData.value[0]', currData.value[0])
      console.log('getSearchDataChart dategbn.value', dategbn.value)
      const param = {
        in_prev_date: prevData.value[0],
        in_curr_date: currData.value[0],
        in_date_gbn: dategbn.value
      }
      console.log('getSearchDataChart param ', param)
      // const param1 = {
      //   in_yyyy:
      //     process.env.NODE_ENV === 'development' ? '2021' : today.getFullYear(),
      //   in_date_gbn: 'B'
      // }

      // state.value.chart[0].xAxis.axisLabel.textStyle.fontSize = 11

      getMainPoPChart1(param, false).then(res => {
        const curOut = res.rs
        let rs = res.rs

        console.log('getMainPoPChart1 res ', res)
        // console.log('getMainPoPChart1 res ', res.rs)

        const serData01 = []
        const serData02 = []
        const serData03 = []
        const serData04 = []

        var nCnt = 0

        curOut.forEach(element => {
          nCnt++
          console.log(' nCnt ', nCnt)
          // console.log(' element.quarter ', element.quarter)
          // console.log(' element.total_cnt ', element.total_cnt)
          // console.log(' element.prev_cnt ', element.prev_cnt)
          // console.log(' element.curr_cnt ', element.curr_cnt)

          if (element.quarter === '1Q') {
            // {value:'80',itemStyle:{color:"#d9d9d9"}},
            // {value:'7',itemStyle:{color:"#92ccde"}},
            // {value:'3',itemStyle:{color:"#00768d"}}
            // serData01.push("{value:'" + element.total_cnt + "',itemStyle:{color:#d9d9d9}},")
            // serData01.push("{value:'" + element.prev_cnt + "',itemStyle:{color:#92ccde}},")
            // serData01.push("{value:'" + element.curr_cnt + "',itemStyle:{color:#00768d}}")
            serData01.push(element.total_cnt)
            serData01.push(element.prev_cnt)
            serData01.push(element.curr_cnt)
          } else if (element.quarter === '2Q') {
            serData02.push(element.total_cnt)
            serData02.push(element.prev_cnt)
            serData02.push(element.curr_cnt)
          } else if (element.quarter === '3Q') {
            serData03.push(element.total_cnt)
            serData03.push(element.prev_cnt)
            serData03.push(element.curr_cnt)
          } else if (element.quarter === '4Q') {
            serData04.push(element.total_cnt)
            serData04.push(element.prev_cnt)
            serData04.push(element.curr_cnt)
          }
          // serData01.push(element.total_cnt)
          // serData02.push(element.prev_cnt)
          // serData03.push(element.curr_cnt)

          // if (nCnt === 1) {
          //   // serData01.push(element.quarter)
          //   serData01.push(element.total_cnt)
          //   serData01.push(element.prev_cnt)
          //   serData01.push(element.curr_cnt)
          // } else if (nCnt === 2) {
          //   // serData02.push(element.quarter)
          //   serData02.push(element.total_cnt)
          //   serData02.push(element.prev_cnt)
          //   serData02.push(element.curr_cnt)
          // } else if (nCnt === 3) {
          //   // serData03.push(element.quarter)
          //   serData03.push(element.total_cnt)
          //   serData03.push(element.prev_cnt)
          //   serData03.push(element.curr_cnt)
          // } else if (nCnt === 4) {
          //   // serData04.push(element.quarter)
          //   serData04.push(element.total_cnt)
          //   serData04.push(element.prev_cnt)
          //   serData04.push(element.curr_cnt)
          // }
        })

        console.log(' serData01 ', serData01)
        console.log(' serData02 ', serData02)
        console.log(' serData03 ', serData03)
        console.log(' serData04 ', serData04)

        console.log(
          ' state.value.chart[0].series[0].data ',
          state.value.chart[0].series[0].data
        )
        console.log(
          ' state.value.chart[1].series[0].data ',
          state.value.chart[1].series[0].data
        )
        console.log(
          ' state.value.chart[2].series[0].data ',
          state.value.chart[2].series[0].data
        )
        console.log(
          ' state.value.chart[3].series[0].data ',
          state.value.chart[3].series[0].data
        )

        // state.value.chart[0].series[0].data = serData01
        // state.value.chart[1].series[0].data = serData02
        // state.value.chart[2].series[0].data = serData03
        // state.value.chart[3].series[0].data = serData04

        // console.log(' state.value.chart[0].series[0].data ', state.value.chart[0].series[0].data)
        // console.log(' state.value.chart[1].series[0].data ', state.value.chart[1].series[0].data)
        // console.log(' state.value.chart[2].series[0].data ', state.value.chart[2].series[0].data)
        // console.log(' state.value.chart[3].series[0].data ', state.value.chart[3].series[0].data)

        // state.value.chartPie[0].series[0].data = serData01
        // state.value.chartPie[1].series[0].data = serData02
        // state.value.chartPie[2].series[0].data = serData03
        // state.value.chartPie[3].series[0].data = serData04

        // console.log(' state.value.chartPie[0].series[0].data ', state.value.chartPie[0].series[0].data)
        // console.log(' state.value.chartPie[1].series[0].data ', state.value.chartPie[1].series[0].data)
        // console.log(' state.value.chartPie[2].series[0].data ', state.value.chartPie[2].series[0].data)
        // console.log(' state.value.chartPie[3].series[0].data ', state.value.chartPie[3].series[0].data)

        state.value.chart[0].xAxis.axisLabel.textStyle.fontSize = 12

        // console.log('serData01[0]', serData01[0])
        // console.log('serData01[1]', serData01[1])
        // console.log('serData01[2]', serData01[2])
        state.value.chart[0].series[0].data = [
          { value: serData01[0], itemStyle: { color: '#d9d9d9' } },
          { value: serData01[1], itemStyle: { color: '#92ccde' } },
          { value: serData01[2], itemStyle: { color: '#00768d' } }
        ]
        state.value.chart[1].series[0].data = [
          { value: serData02[0], itemStyle: { color: '#d9d9d9' } },
          { value: serData02[1], itemStyle: { color: '#92ccde' } },
          { value: serData02[2], itemStyle: { color: '#00768d' } }
        ]
        state.value.chart[2].series[0].data = [
          { value: serData03[0], itemStyle: { color: '#d9d9d9' } },
          { value: serData03[1], itemStyle: { color: '#92ccde' } },
          { value: serData03[2], itemStyle: { color: '#00768d' } }
        ]
        state.value.chart[3].series[0].data = [
          { value: serData04[0], itemStyle: { color: '#d9d9d9' } },
          { value: serData04[1], itemStyle: { color: '#92ccde' } },
          { value: serData04[2], itemStyle: { color: '#00768d' } }
        ]
      })

      getMainPoPChart2(param, false).then(res => {
        // const curOut = res.rs
        const curOut1 = res.rs1
        const curOut2 = res.rs2
        const curOut3 = res.rs3
        const curOut4 = res.rs4

        console.log('getMainPoPChart2 res ', res)
        console.log('getMainPoPChart2 res.rs1 ', res.rs1)

        const serData01 = []
        const serData02 = []
        const serData03 = []
        const serData04 = []

        var nCnt = 0

        curOut1.forEach(element => {
          nCnt++
          console.log(' nCnt ', nCnt)
          console.log(' element ', element)
          console.log(' element.code ', element.code)
          console.log(' element.dely_cnt ', element.dely_cnt)
          serData01.push({name: element.code, value: element.dely_cnt})
          // if (element.code === '50이하') {
          //   serData01.push("{name: '" + element.code + "', value:'" + element.dely_cnt + "'")
          // } else if (element.code === '60') {
          //   serData01.push("{name: '" + element.code + "', value:'" + element.dely_cnt + "'")
          // } else if (element.code === '70') {
          //   serData01.push("{name: '" + element.code + "', value:'" + element.dely_cnt + "'")
          // } else if (element.code === '80') {
          //   serData01.push("{name: '" + element.code + "', value:'" + element.dely_cnt + "'")
          // } else if (element.code === '90이상') {
          //   serData01.push("{name: '" + element.code + "', value:'" + element.dely_cnt + "'")
          // } else {
          //   serData01.push("{name: '" + element.code + "', value:'" + element.dely_cnt + "'")
          // }
        })

        res.rs2.forEach(element => {
          nCnt++
          console.log(' nCnt ', nCnt)
          console.log(' element ', element)
          console.log(' element.code ', element.code)
          console.log(' element.dely_cnt ', element.dely_cnt)
          serData02.push({name: element.code, value: element.dely_cnt})
        })

        res.rs3.forEach(element => {
          nCnt++
          console.log(' nCnt ', nCnt)
          console.log(' element ', element)
          console.log(' element.code ', element.code)
          console.log(' element.dely_cnt ', element.dely_cnt)
          serData03.push({name: element.code, value: element.dely_cnt})
        })

        res.rs4.forEach(element => {
          nCnt++
          console.log(' nCnt ', nCnt)
          console.log(' element ', element)
          console.log(' element.code ', element.code)
          console.log(' element.dely_cnt ', element.dely_cnt)
          serData04.push({name: element.code, value: element.dely_cnt})
        })

        // console.log('state.value.chartPie[0].series[0].data ', state.value.chartPie[0].series[0].data)
        // state.value.chartPie[0].series[0].data = [{ name: "test01", value: "123"}]
        // console.log('state.value.chartPie[0].series[0].data ', state.value.chartPie[0].series[0].data)

        console.log(' serData01 ', serData01)
        console.log(' serData02 ', serData02)
        console.log(' serData03 ', serData03)
        console.log(' serData04 ', serData04)

        // console.log(' state.value.chartPie[0].series[0].data ', state.value.chartPie[0].series[0].data)
        // console.log(' state.value.chartPie[1].series[0].data ', state.value.chartPie[1].series[0].data)
        // console.log(' state.value.chartPie[2].series[0].data ', state.value.chartPie[2].series[0].data)
        // console.log(' state.value.chartPie[3].series[0].data ', state.value.chartPie[3].series[0].data)

        state.value.chartPie[0].series[0].data = serData01
        state.value.chartPie[1].series[0].data = serData02
        state.value.chartPie[2].series[0].data = serData03
        state.value.chartPie[3].series[0].data = serData04

        // console.log('serData01[0]', serData01[0])
        // console.log('serData01[1]', serData01[1])
        // console.log('serData01[2]', serData01[2])

      })
    }

    const startStop = e => {
      // 슬라이드 자동으로 전환되며 조회처리 시작 / 정지
      state.value.cycleValue = !state.value.cycleValue
      if (state.value.startStopText === '일시정지') {
        state.value.startStopText = '재생'
      } else if (state.value.startStopText === '재생') {
        state.value.startStopText = '일시정지'
      }
    }

    const changeVal1 = (e) => {
      console.log('changeVal1', e)
      conData1.value[0] = e.value
      defaultData1.value[0] = e.value

      paramData.value = {
        in_std_date: e.value,
        in_date_gbn: dategbn.value
      }
      console.log('changeVal1.paramData', paramData)
      // getSearchData(defaultData1.value[0], dategbn.value)
      getSearchData(paramData)
    }

    const changePreData = (e) => {
      console.log('changePreData', e)
      prevData.value[0] = e.value
      paramData.value = {
        in_prev_date: e.value
      }
    }

    const changecurrData = (e) => {
      console.log('changecurrData', e)
      currData.value[0] = e.value
      paramData.value = {
        in_curr_date: e.value
      }
    }

    const changeDategbn = (e) => {
      console.log('changeDategbn', e)
      console.log('1.dategbn.value', dategbn.value)
      console.log('1.defaultData1.value[0]', defaultData1.value[0])
      dategbn.value = e
      // conData1.value[0] = e.value
      // defaultData1.value[0] = e.value
      // console.log('1.paramData', paramData)
      paramData.value = {
        in_std_date: defaultData1.value[0],
        in_date_gbn: dategbn.value
      }
      console.log('2.paramData', paramData)
      console.log('2.defaultData1.value[0]', defaultData1.value[0])
      console.log('2.dategbn.value', dategbn.value)
      // getSearchData(defaultData1.value[0], dategbn.value)
      getSearchData(paramData)
    }

    return {
      carChange,
      state,
      getSearchData,
      getEvent2,
      getProps,
      getSearchDataChart,
      startStop,
      paramData,
      conData1,
      conDataPrev,
      conDataCurr,
      defaultData1,
      prevData,
      currData,
      dategbn: 'B',
      changeVal1,
      changePreData,
      changecurrData,
      changeDategbn,
      dategbn,
      startgbn
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';
.theme--dark {
  .con-text {
    color: map-get($material-dark, 'con-text') !important;
  }
}
.customCard {
  height: 100%;
  border-width: 1px;
  border-color: black;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
}
.chartContain {
  width: inherit;
  height: 90%;
}
.checkGroup{
    padding: 0px 1% 0.2% 1%;
    margin: 2px 0px 12px 8px;
    position: relative;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    border-radius: 5px;
}
</style>
