import * as echarts from 'echarts'
function showAppGraph() {
  const portalRightSideEle = document.querySelector('.ocean-portal-body-left')
  console.log(portalRightSideEle)

  const newWidgetEle = document.createElement('div')
  // add class to new newWidgetEle
  newWidgetEle.classList.add('ocean-portal-widget')
  // append newWidgetEle to portalRightSideEle as first child
  portalRightSideEle?.insertBefore(newWidgetEle, portalRightSideEle.firstChild)
  newWidgetEle.innerHTML = `
    <div class="ocean-portal-announcement">
      <div class="gaia-argoui-widget" style="position: relative">
        <div
          class="gaia-argoui-widget-header gaia-argoui-widget-header-icon"
          style="
            background-image: url('https://static.cybozu.cn/contents/k/image/argo/uiparts/widget/information_56.png');
            background-position: left top;
            background-repeat: no-repeat;
          "
        >
          <h3 class="gaia-argoui-widget-title">App关系图</h3>
        </div>
        <div id="myfav">
        </div>
      </div>
    </div>
    `
  const myfavEle = document.querySelector('#myfav') as HTMLDivElement
  myfavEle.style.width = '100%'
  myfavEle.style.height = '680px'
  console.log(myfavEle)

  //echarts.apache.org/examples/data/asset/data/les-miserables.json
  // 基于准备好的dom，初始化echarts实例
  https: var myChart = echarts.init(myfavEle)
  // 绘制图表
  myChart.setOption({
    legend: [
      {
        data: [
          '基础信息',
          '项目基础信息',
          '市场活动',
          '客户销售管理',
          '销售订单及合同管理',
          '项目管理',
          '财务管理',
          '供应商管理',
          '系统用',
        ],
      },
    ],
    title: {
      text: '虚线：Lookup\n实线：关联记录',
      subtext: '',
      top: 'bottom',
      left: 'right',
    },
    tooltip: {},
    series: [
      {
        name: 'App关系',
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: true,
        },
        data: [
          {
            id: '1',
            name: '产品信息',
            symbolSize: 34,
            category: 0,
            url: '/k/154/',
          },
          {
            id: '2',
            name: '人员档案',
            symbolSize: 34,
            category: 0,
            url: '/k/134/',
          },
          {
            id: '3',
            name: '客户信息',
            symbolSize: 34,
            category: 0,
            url: '/k/152/',
          },
          {
            id: '4',
            name: '项目管理审批人员信息',
            symbolSize: 34,
            category: 1,
            url: '/k/211/',
          },
          {
            id: '5',
            name: '业务-产品类型',
            symbolSize: 34,
            category: 1,
            url: '/k/209/',
          },
          {
            id: '6',
            name: '项目预算科目',
            symbolSize: 34,
            category: 1,
            url: '/k/208/',
          },
          {
            id: '7',
            name: '项目类型',
            symbolSize: 34,
            category: 1,
            url: '/k/195/',
          },
          {
            id: '8',
            name: '市场活动',
            symbolSize: 34,
            category: 2,
            url: '/k/195/',
          },
          {
            id: '9',
            name: '市场活动成果',
            symbolSize: 34,
            category: 2,
            url: '/k/195/',
          },
          {
            id: '10',
            name: '市场活动合同',
            symbolSize: 34,
            category: 2,
            url: '/k/195/',
          },
          {
            id: '11',
            name: '活动费用申请',
            symbolSize: 34,
            category: 2,
            url: '/k/195/',
          },
          {
            id: '12',
            name: '市场部数据库',
            symbolSize: 34,
            category: 2,
            url: '/k/195/',
          },
          {
            id: '13',
            name: '报价管理',
            symbolSize: 34,
            category: 3,
            url: '/k/195/',
          },
          {
            id: '14',
            name: '商机项目管理',
            symbolSize: 34,
            category: 3,
            url: '/k/195/',
          },
          {
            id: '15',
            name: '拜访记录',
            symbolSize: 34,
            category: 3,
            url: '/k/195/',
          },
          {
            id: '16',
            name: '服务委派（销售）',
            symbolSize: 34,
            category: 3,
            url: '/k/195/',
          },
          {
            id: '17',
            name: '售后服务',
            symbolSize: 34,
            category: 3,
            url: '/k/195/',
          },
          {
            id: '18',
            name: '销售/部门业绩目标设定',
            symbolSize: 34,
            category: 3,
            url: '/k/195/',
          },
          {
            id: '19',
            name: '销售/部门业绩实际查看',
            symbolSize: 34,
            category: 3,
            url: '/k/195/',
          },
          {
            id: '20',
            name: '协议合同',
            symbolSize: 34,
            category: 4,
            url: '/k/195/',
          },
          {
            id: '21',
            name: '销售订单',
            symbolSize: 34,
            category: 4,
            url: '/k/195/',
          },
          {
            id: '22',
            name: '销售发票',
            symbolSize: 34,
            category: 4,
            url: '/k/195/',
          },
          {
            id: '23',
            name: '项目立项',
            symbolSize: 34,
            category: 5,
            url: '/k/195/',
          },
          {
            id: '24',
            name: '项目管理',
            symbolSize: 34,
            category: 5,
            url: '/k/195/',
          },
          {
            id: '25',
            name: '任务委派',
            symbolSize: 34,
            category: 5,
            url: '/k/195/',
          },
          {
            id: '26',
            name: '工时汇报',
            symbolSize: 34,
            category: 5,
            url: '/k/195/',
          },
          {
            id: '27',
            name: '项目总帐',
            symbolSize: 34,
            category: 6,
            url: '/k/195/',
          },
          {
            id: '28',
            name: '项目费用报销',
            symbolSize: 34,
            category: 6,
            url: '/k/195/',
          },
          {
            id: '29',
            name: '付款申请',
            symbolSize: 34,
            category: 6,
            url: '/k/195/',
          },
          {
            id: '30',
            name: '采购申请',
            symbolSize: 34,
            category: 7,
            url: '/k/195/',
          },
          {
            id: '31',
            name: '采购合同',
            symbolSize: 34,
            category: 7,
            url: '/k/195/',
          },
          {
            id: '32',
            name: '供应商档案',
            symbolSize: 34,
            category: 7,
            url: '/k/195/',
          },
          {
            id: '33',
            name: '采购发票',
            symbolSize: 34,
            category: 7,
            url: '/k/195/',
          },
          {
            id: '34',
            name: '供应商评价',
            symbolSize: 34,
            category: 7,
            url: '/k/195/',
          },
          {
            id: '35',
            name: '年表',
            symbolSize: 34,
            category: 8,
            url: '/k/195/',
          },
          {
            id: '36',
            name: '日报/工时汇报-明细',
            symbolSize: 34,
            category: 8,
            url: '/k/195/',
          },
          {
            id: '37',
            name: '项目管理-阶段拆分',
            symbolSize: 34,
            category: 8,
            url: '/k/195/',
          },
          {
            id: '38',
            name: '供应商评价-拆分',
            symbolSize: 34,
            category: 7,
            url: '/k/195/',
          },
          {
            id: '39',
            name: '周表',
            symbolSize: 34,
            category: 7,
            url: '/k/195/',
          },
        ],
        links: [
          {
            source: '3',
            target: '39',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '3',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '3',
            target: '14',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '3',
            target: '15',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '3',
            target: '21',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '8',
            target: '9',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '8',
            target: '10',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '8',
            target: '11',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '9',
            target: '8',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '9',
            target: '14',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '10',
            target: '8',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '10',
            target: '12',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '11',
            target: '8',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '13',
            target: '14',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '13',
            target: '1',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '14',
            target: '39',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '14',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '14',
            target: '3',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '14',
            target: '5',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '14',
            target: '1',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '14',
            target: '15',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '14',
            target: '16',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '14',
            target: '17',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '14',
            target: '21',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '15',
            target: '39',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '15',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '15',
            target: '3',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '15',
            target: '4',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '16',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '16',
            target: '14',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '17',
            target: '3',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '17',
            target: '14',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '18',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '18',
            target: '35',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '18',
            target: '19',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '19',
            target: '18',
            lineStyle: {
              width: 3,
              curveness: 0.15,
              type: 'solid',
            },
          },
          {
            source: '19',
            target: '21',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '20',
            target: '1',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '20',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '20',
            target: '3',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '20',
            target: '5',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '20',
            target: '14',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '20',
            target: '21',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '21',
            target: '1',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '21',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '21',
            target: '3',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '21',
            target: '5',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '21',
            target: '7',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '21',
            target: '14',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '21',
            target: '20',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '21',
            target: '39',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '21',
            target: '22',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '21',
            target: '23',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '22',
            target: '3',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '22',
            target: '21',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '23',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '23',
            target: '3',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '23',
            target: '4',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '23',
            target: '5',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '23',
            target: '6',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '23',
            target: '7',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '24',
            target: '23',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '24',
            target: '21',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '24',
            target: '23',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '24',
            target: '25',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '24',
            target: '27',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '24',
            target: '28',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '24',
            target: '29',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '24',
            target: '30',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '24',
            target: '33',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '24',
            target: '34',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '24',
            target: '36',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '25',
            target: '37',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '26',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '26',
            target: '24',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '27',
            target: '23',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '27',
            target: '28',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '27',
            target: '29',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '27',
            target: '30',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '27',
            target: '36',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '28',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '29',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '29',
            target: '23',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '29',
            target: '31',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '29',
            target: '21',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '29',
            target: '23',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '30',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '30',
            target: '6',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '30',
            target: '23',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '30',
            target: '32',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '30',
            target: '21',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '30',
            target: '23',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '30',
            target: '31',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '31',
            target: '30',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '31',
            target: '32',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '31',
            target: '33',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '31',
            target: '29',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
          {
            source: '32',
            target: '29',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '32',
            target: '30',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '32',
            target: '31',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '32',
            target: '33',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '32',
            target: '38',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '33',
            target: '31',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '34',
            target: '24',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '34',
            target: '32',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '36',
            target: '2',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '37',
            target: '24',
            lineStyle: {
              width: 3,
              curveness: 0.1,
              type: 'dotted',
            },
          },
          {
            source: '37',
            target: '25',
            lineStyle: {
              width: 3,
              curveness: 0.2,
              type: 'solid',
            },
          },
        ],
        categories: [
          {
            name: '基础信息',
            itemStyle: {
              color: '#007BFF',
            },
          },
          {
            name: '项目基础信息',
            itemStyle: {
              color: '#28A745',
            },
          },
          {
            name: '市场活动',
            itemStyle: {
              color: '#FD7E14',
            },
          },
          {
            name: '客户销售管理',
            itemStyle: {
              color: '#DC3545',
            },
          },
          {
            name: '销售订单及合同管理',
            itemStyle: {
              color: '#FFC107',
            },
          },
          {
            name: '项目管理',
            itemStyle: {
              color: '#E83E8C',
            },
          },
          {
            name: '财务管理',
            itemStyle: {
              color: '#6F42C1',
            },
          },
          {
            name: '供应商管理',
            itemStyle: {
              color: '#20C997',
            },
          },
          {
            name: '系统用',
            itemStyle: {
              color: '#6610F2',
            },
          },
        ],
        roam: true,
        label: {
          show: true,
          position: 'right',
          formatter: '{b}',
        },
        labelLayout: {
          hideOverlap: true,
        },
        scaleLimit: {
          min: 0.4,
          max: 2,
        },
        lineStyle: {
          color: 'source',
          curveness: 0.1,
        },
      },
    ],
  })

  myChart.on('click', 'series', function (params) {
    console.log(params)
    const ob = params.data as { url: string }
    if (ob.url) {
      window.open(ob.url)
    }
  })

  const spaceListEle = document.querySelector('.gaia-argoui-spacescrollinglist-list')
}

export default showAppGraph
