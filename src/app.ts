import * as echarts from 'echarts'

const app = () => {
  console.log('monkey jumping on kintone portal.')
  kintone.events.on('portal.show', () => {
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
    myfavEle.style.height = '440px'
    console.log(myfavEle)

    //echarts.apache.org/examples/data/asset/data/les-miserables.json
    // 基于准备好的dom，初始化echarts实例
    https: var myChart = echarts.init(myfavEle)
    // 绘制图表
    myChart.setOption({
      legend: [
        {
          data: ['B', 'C', 'A'],
        },
      ],
      title: {
        text: 'Les Miserables',
        subtext: 'Circular layout',
        top: 'bottom',
        left: 'right',
      },
      tooltip: {},
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'circular',
          force: {
            gravity: 0.01,
            repulsion: 800,
          },
          circular: {
            rotateLabel: true,
          },
          data: [
            {
              id: '1',
              name: '人员档案',
              symbolSize: 34,
              category: 0,
              url: '/k/154/',
            },
            {
              id: '2',
              name: '客户信息',
              symbolSize: 34,
              category: 0,
              url: '/k/134/',
            },
            {
              id: '4',
              name: '商机项目管理',
              symbolSize: 34,
              category: 1,
              url: '/k/152/',
            },
            {
              id: '5',
              name: '拜访记录',
              symbolSize: 34,
              category: 1,
              url: '/k/211/',
            },
            {
              id: '7',
              name: '售后服务',
              symbolSize: 34,
              category: 1,
              url: '/k/209/',
            },
            {
              id: '8',
              name: '销售订单',
              symbolSize: 58,
              category: 1,
              url: '/k/208/',
            },
            {
              id: '6',
              name: '任务委派',
              symbolSize: 34,
              category: 2,
              url: '/k/195/',
            },
          ],
          links: [
            {
              source: '2',
              target: '4',
              lineStyle: {
                width: 3,
                curveness: 0.1,
                cap: 'butt',
                color: '#4f1621',
              },
            },
            {
              source: '2',
              target: '5',
              lineStyle: {
                width: 3,
                curveness: 0.1,
                cap: 'butt',
                color: '#981621',
              },
            },
            {
              source: '2',
              target: '8',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'round',
              },
            },
            {
              source: '2',
              target: '7',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'round',
              },
            },
            {
              source: '4',
              target: '1',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'round',
              },
            },
            {
              source: '4',
              target: '5',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'round',
              },
            },
            {
              source: '4',
              target: '6',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'round',
              },
            },
            {
              source: '4',
              target: '7',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'round',
              },
            },
            {
              source: '4',
              target: '8',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'round',
              },
            },
            {
              source: '5',
              target: '1',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'round',
              },
            },
            {
              source: '5',
              target: '4',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'bevel',
              },
            },
            {
              source: '5',
              target: '2',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'round',
              },
            },
            {
              source: '6',
              target: '1',
              lineStyle: {
                width: 3,
                curveness: 0.2,
                cap: 'round',
              },
            },
            {
              source: '7',
              target: '1',
              lineStyle: {
                width: 3,
                curveness: 1,
                cap: 'round',
              },
            },
          ],
          categories: [
            {
              name: 'A',
              itemStyle: {
                color: '#F5BD42',
              },
            },
            {
              name: 'B',
              itemStyle: {
                color: '#42DDF5',
              },
            },
            {
              name: 'C',
              itemStyle: {
                color: '#6097A0',
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
            curveness: 0.3,
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
    console.log(spaceListEle)
  })
}

export default app
