<template>
  <div id="box">
      <div class="header">
             <div class="bg_header">
                <div class="header_nav fl t_title">
                    赤龙湖国家湿地公园智慧生态监测管理平台
                </div> 
            </div>
      </div>
      <div class="content">
          <!-- 左部分 -->
           <div class="left">
              <!-- 左上 -->
                <div class="left-top left_div">
                    <div class="t_line_box">
                        <i class="t_l_line"></i> 
                        <i class="l_t_line"></i> 
                    </div> 
                    <!--右上边框-->
                    <div class="t_line_box">
                        <i class="t_r_line"></i> 
                        <i class="r_t_line"></i> 
                    </div> 
                    <!--左下边框-->
                    <div class="t_line_box">
                        <i class="l_b_line"></i> 
                        <i class="b_l_line"></i> 
                    </div> 
                    <!--右下边框-->
                    <div class="t_line_box">
                        <i class="r_b_line"></i> 
                        <i class="b_r_line"></i> 
                    </div> 
                    <div class="main_title">
                        <img src="./img/t_5.png" alt="">
                        生态系统价值
                    </div>
                    <div id="WaterEn" class="chart"></div>
                </div>
              <!-- 左下 --> 
                <div class="left-bottom left_div">
                        <div class="t_line_box">
                            <i class="t_l_line"></i> 
                            <i class="l_t_line"></i> 
                        </div> 
                        <!--右上边框-->
                        <div class="t_line_box">
                            <i class="t_r_line"></i> 
                            <i class="r_t_line"></i> 
                        </div> 
                        <!--左下边框-->
                        <div class="t_line_box">
                            <i class="l_b_line"></i> 
                            <i class="b_l_line"></i> 
                        </div> 
                        <!--右下边框-->
                        <div class="t_line_box">
                            <i class="r_b_line"></i> 
                            <i class="b_r_line"></i> 
                        </div> 
                        <div class="main_title">
                            <img src="./img/t_4.png" alt="">
                            环境空气
                        </div>
                         <div id="airEn" class="chart"></div>
                </div>
          </div>
          <!-- 中间 -->
          <div class="center">
              <div class="center-text">
                    <div class="t_line_box">
                        <i class="t_l_line"></i> 
                        <i class="l_t_line"></i> 
                    </div> 
                    <!--右上边框-->
                    <div class="t_line_box">
                        <i class="t_r_line"></i> 
                        <i class="r_t_line"></i> 
                    </div> 
                    <!--左下边框-->
                    <div class="t_line_box">
                        <i class="l_b_line"></i> 
                        <i class="b_l_line"></i> 
                    </div> 
                    <!--右下边框-->
                    <div class="t_line_box">
                        <i class="r_b_line"></i> 
                        <i class="b_r_line"></i> 
                    </div> 
                    <div class="main_title">
                        <img src="./img/t_3.png" alt="">
                        赤龙湖地图
                    </div>
                    <div id="cesiumS"></div>
              </div>
          </div>
          <!-- 右部分 -->
          <div class="left">
                <!-- 右上 -->
                <div class="left-top left_div">
                    <div class="t_line_box">
                        <i class="t_l_line"></i> 
                        <i class="l_t_line"></i> 
                    </div> 
                    <!--右上边框-->
                    <div class="t_line_box">
                        <i class="t_r_line"></i> 
                        <i class="r_t_line"></i> 
                    </div> 
                    <!--左下边框-->
                    <div class="t_line_box">
                        <i class="l_b_line"></i> 
                        <i class="b_l_line"></i> 
                    </div> 
                    <!--右下边框-->
                    <div class="t_line_box">
                        <i class="r_b_line"></i> 
                        <i class="b_r_line"></i> 
                    </div> 
                    <div class="main_title">
                        <img src="./img/t_7.png" alt="">
                        气象
                    </div>
                </div>
                <!-- 右下 --> 
                <div class="left-bottom left_div">
                    <div class="t_line_box">
                        <i class="t_l_line"></i> 
                        <i class="l_t_line"></i> 
                    </div> 
                    <!--右上边框-->
                    <div class="t_line_box">
                        <i class="t_r_line"></i> 
                        <i class="r_t_line"></i> 
                    </div> 
                    <!--左下边框-->
                    <div class="t_line_box">
                        <i class="l_b_line"></i> 
                        <i class="b_l_line"></i> 
                    </div> 
                    <!--右下边框-->
                    <div class="t_line_box">
                        <i class="r_b_line"></i> 
                        <i class="b_r_line"></i> 
                    </div> 
                    <div class="main_title">
                        <img src="./img/t_1.png" alt="">
                        水环境质量
                    </div>
                    <div class="wateCss">
                        <ul>
                            <li v-for="(title,index) in items" :key="index" @click="wateBtn(index)" :class="wateId == index ?'active':'' ">
                                <span>{{title}}</span>
                            </li>
                        </ul>
                        <wateData :wateId=wateId />
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import wateData from '../wateData/wataData.vue'
  export default {
      data(){
          return{
            //   生态环境数据
            wcologyData:{
                xData:['物质生产', '净化环境', '气候调节', '大气组分调节', '水源涵养', '保持土壤', '生物多样性维持','释氧','休闲旅游','教育科研'],
                yData: [100, 101, 102,103,104,105,106,107,108,109]
            },
            items:['水质类别指标','营养状态评价指标','监测指标'],
            wateId:0
          }
      },
      components:{wateData},
      mounted(){
          this.ecology('WaterEn')
          this.Init()
          this.ponlyline('airEn')
         // this.cake('wateData')
      },
      methods:{
        //   柱线图
          ecology(id){
              var myEcharts = this.$echarts.init(document.getElementById(id))
             var option = {
                xAxis: {
                    type: 'category',
                    data: this.wcologyData.xData,
                    axisLabel:{
                        color:'#fff',
                        interval:0,
                        rotate:45
                    }
                },
                yAxis: {
                    name:'(万元)',
                    nameTextStyle:{
                        color:"#fff"
                    },
                    type: 'value',
                     axisLabel:{
                        color:'#fff',
                        interval:0,
                    } 
                },
                series: [{
                    data: this.wcologyData.yData,
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(220, 220, 220, 0.8)'
                    }
                }],
                tooltip:{
                    trigger:"axis"
                }
            };
            myEcharts.setOption(option)
          },
        //   折线图
        ponlyline(id){
            var myEachar = this.$echarts.init(document.getElementById(id))
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                color:['#2db7f5','#ff6600'],
                legend: {
                    top:16,
                    data: ['SO2', 'NO2'],
                    textStyle:{
                        color:"#fff"
                    },
                },
                textStyle:{
                    color:"#fff"
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'SO2(μg/m³)',
                        min: 0,
                        max: 6,
                        interval: 1,
                        axisLabel: {
                            //formatter: '{value}(μg/m³)'
                            color:"#fff"
                        }
                    },
                    {
                        type: 'value',
                        name: 'NO2(μg/m³)',
                        min: 0,
                        max: 120,
                        interval: 20,
                        axisLabel: {
                            //formatter: '{value}(μg/m³)'
                            color:"#fff"
                        }
                    }
                ],
                series: [
                    {
                        name: 'SO2',
                        type: 'line',
                        data: [2.0,1.9,1.0,1.0,1.0,1.0,1.0,1.2,2.0,2.5,3.0,3.0,3.0,2.8,2.6,2.3,2.6,]
                    },
                    {
                        name: 'NO2',
                        type: 'line',
                        yAxisIndex: 1,
                        data: [65.0,83.1,100.2,108.4,106.9,104.4,102.1,102.2,98.4,94.9,91.9,88.2,86.4,86.5,82.5,82.2,]
                    }
                ]
            };
            myEachar.setOption(option)
        },
        //   饼状图
        cake(id){
            var myEchart = this.$echarts.init(document.getElementById(id))
           // myEchart.setOption(option)
        },
        //   地图数据
        Init(){
            var viewer = new Cesium.Viewer('cesiumS',{
            selectionIndicator: false,
            homeButton: false,//主页按钮，默认true
            // scene3DOnly: true, // 每个几何实例仅以3D渲染以节省GPU内存
            animation: false, //动画控制，默认true
            baseLayerPicker: false, //是否显示图层选择控件
            geocoder: false,//地名查找,默认true
            timeline: false,//时间线,默认true
            credits:false,
            navigationHelpButton: false,//导航帮助说明,默认true
            sceneModePicker: false,//是否显示投影方式控件
            infoBox: false,//点击要素之后显示的信息,默认true
            fullscreenButton: false,//全屏按钮,默认显示true
            navigationInstructionsInitiallyVisible: false,
            mapMode2D: Cesium.MapMode2D.INFINITE_SCROLL,
            imageryProvider:new Cesium.WebMapTileServiceImageryProvider({
              url: "http://{s}.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=d7648495378ad7ebe74327207dfc09a8",
              layer: "tdtBasicLayer",
              style: "default",
              maximumLevel:18,
              //format: "image/jpeg",
              tileMatrixSetID: "GoogleMapsCompatible",
              subdomains:["t0","t1","t2","t3","t4","t5","t6","t7"]
              })
            })
        },
        // 水质数据转换
        wateBtn(id){
            this.wateId = id
        }
      }
  }
</script>

<style lang="less" scoped>
#box{
    width: 100%;
    height: auto;
    color:#333;
    background-image: url(./img/true.png);
     background-size: 100% 100%;
    .header{
        width: 100%;
        height: 80px;
        padding:0 20px;
        min-width: 1366px;
        .bg_header{
            width: 100%;
            height: 80px;
            background: url(./img/title.png) no-repeat;
            background-size: 100% 100%;
            .t_title{
                width: 100%;
                height: 100%;
                text-align: center;
                font-size: 22px;
                line-height: 80px;
                color: #fff;
            }
        }
    }
    .content{
        width: calc(100% - 40px);
        min-width: 1366px;
        margin-left: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: flex-start;
        .left{
            width: 24%;
            height: 100%;
            .left_div{
                width: 100%;
                height: 280px;
                box-sizing: border-box;
                border: 1px solid #4788fb;
                position: relative;
                box-shadow: 0 0 1px #4788fb;
                .t_line_box {
                     position: absolute;
                     width: 100%;
                     height: 100%;
                    i{
                         background-color: #4788fb;
                         box-shadow: 0px 0px 10px #4788fb;
                         position: absolute;
                    }
                }
                .main_title{
                    width: 180px;
                    height: 35px;
                    line-height: 33px;
                    background-color: #2C58A6;
                    border-radius: 18px;
                    position: absolute;
                    top: -17px;
                    left:50%;
                    margin-left: -90px;
                    color:#fff;
                    font-size: 18px;
                    font-weight: 600;
                    box-sizing: border-box;
                    padding-left: 45px;
                    z-index: 1000;
                    img{
                        position: absolute;
                        top: 8px;
                        left: 20px;
                    }
                }
            }
            .left-top{
                   margin-bottom: 50px;
            }
            .left-bottom{
                position: relative;
                .wateCss{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    padding-top: 20px;
                    box-sizing: border-box;
                    color: #fff;
                    ul{
                        display: flex;
                        align-items: center;
                        li{
                            width: calc(100% /3);
                            text-align: center;
                        }
                        .active{
                            color: aqua;
                        }
                    }
                }
            }
        }
        .center{
            width: 52%;
            height: 610px;
            .center-text{
                width: calc(100% - 50px);
                height: 610px;
                margin-left: 25px;
                margin-right: 25px;
                box-sizing: border-box;
                border: 1px solid #2C58A6;
                box-shadow: 0px 0px 6px #2C58A6;
                position: relative;
                .t_line_box {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    i{
                            background-color: #4788fb;
                            box-shadow: 0px 0px 10px #4788fb;
                            position: absolute;
                    }
                }
                .main_title{
                    width: 180px;
                    height: 35px;
                    line-height: 33px;
                    background-color: #2C58A6;
                    border-radius: 18px;
                    position: absolute;
                    top: -17px;
                    left:50%;
                    margin-left: -90px;
                    color:#fff;
                    font-size: 18px;
                    font-weight: 600;
                    box-sizing: border-box;
                    padding-left: 45px;
                    z-index: 1000;
                    img{
                        position: absolute;
                        top: 8px;
                        left: 20px;
                    }
                }
                #cesiumS{
                    width: 100%;
                    height: 610px !important;
                    canvas{
                        width: 100%;
                        height: 610px !important;
                    }
                }
            }
        }
        .l_t_line{
            width: 5px;
            height: 24px;
            left: -3px;
            top: -3px;
        }
        .t_l_line{
            height: 5px;
            width: 26px;
            left: -3px;
            top: -3px;
        }
        .t_r_line{
            height: 5px;
            width: 26px;
            right: -3px;
            top: -3px;
        }
        .r_t_line{
            width: 5px;
            height: 24px;
            right: -3px;
            top: -3px;
        }
        .l_b_line{
            width: 5px;
            height: 24px;
            left: -3px;
            bottom: -3px;
        }
        .b_l_line{
            height: 5px;
            width: 26px;
            left: -3px;
            bottom: -3px;
        }
        .r_b_line{
            width: 5px;
            height: 24px;
            right: -3px;
            bottom: -3px;
        }
        .b_r_line{
            height: 5px;
            width: 26px;
            right: -3px;
            bottom: -3px;
        }
        .chart{
            width: 100%;
            height: 100%;
        }
    }
}

</style>
