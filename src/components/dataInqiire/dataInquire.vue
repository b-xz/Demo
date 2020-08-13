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
        <div class="top">
            <div class="left">
                <!-- 左上部分 -->
                <div class="left-top">
                    <div class="left_div">
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
                </div>
                <!-- 左下部分 -->
                <div class="left-bt">
                    <div class="left_div">
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
                            <img src="./img/t_2.png" alt="">
                            生物多样性指数
                        </div>
                        <div class="bt-bar">
                            <ul class="bar-box">
                                <li class="bar-title">
                                    <h3>生物多样性等级</h3>
                                    <h4>生物多样性指数</h4>
                                </li>
                                <li class="bar-item" v-for="(item,index) in DiversityData" :key="index">
                                    <span>{{item[0]}}</span>
                                    <span class="span-1">{{item[1]}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
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
            <div class="left">
                <div class="left-top">
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
                <div class="left-bt">
                    <div class="left_div">
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
                            <img src="./img/t_2.png" alt="">
                                生态指数指标
                        </div>
                        <div class="bt-bar">
                            <div class="bar-div">
                                <div class="bar-item">
                                    <h3>生态承载力</h3>
                                    <p><span>100hm2</span></p>
                                </div>
                                <div class="bar-item">
                                    <h3>生态足迹</h3>
                                    <p><span>100hm2</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="right_div">
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
                    监测点历史数据
                </div>
                    <div class="airCss">
                        <History/>
                    </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import wateData from '../wateData/wataData.vue'
    import History from '../historyData/historyData'
    import Time from '../../Data/data.json'
    export default {
      data(){
          return{
            //   生态环境数据
            wcologyData:{
                xData:['物质生产', '净化环境', '气候调节', '大气组分调节', '水源涵养', '保持土壤', '生物多样性维持','释氧','休闲旅游','教育科研'],
                yData: [100, 101, 102,103,104,105,106,107,108,109]
            },
            items:['水质类别指标','营养状态评价指标','监测指标'],
            wateId:0,
            // 生物多样性指标
            DiversityData:[['高','BI≥60'],['中','30≤BI＜60'],['一般','20≤BI＜30'],['低','BI＜20']]
          }
      },
      components:{wateData,History},
      mounted(){
          this.ecology('WaterEn')
          this.Init()
          //this.ponlyline('airEn')
         // this.cake('wateData')
      },
      methods:{
        //   柱状图
            ecology(id){
              var myEcharts = this.$echarts.init(document.getElementById(id))
                var option = {
                    xAxis: {
                        type: 'category',
                        data: this.wcologyData.xData,
                        axisLabel:{
                            color:'#fff',
                            interval:0,
                            rotate:-40
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
                    // 设置柱状图，折线图，散点图的大小及位置
                    grid:{
                        width:'70%',
                        //height:'50%',
                        left:'center',
                    },
                    series: [
                        {
                            type: 'bar',
                            showBackground: true,
                            itemStyle: {
                               color: 'rgba(0,0,0,0.05)'
                            },
                            barGap: '-100%',
                            barCategoryGap: '40%',
                            data: [],
                            animation: false
                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#83bff6'},
                                        {offset: 0.5, color: '#188df0'},
                                        {offset: 1, color: '#188df0'}
                                    ]
                                )
                            },
                            emphasis: {
                                itemStyle: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: this.wcologyData.yData,
                        },
                    ],
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
                                color: '#999',
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
                            data: Time.time,
                            axisPointer: {
                                type: 'shadow'
                            },
                            axisLabel:{
                                rotate:-20,
                                interval:400
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: 'SO2(μg/m³)',
                            min: -20,
                            max: 20,
                            interval: 5,
                            axisLabel: {
                                //formatter: '{value}(μg/m³)'
                                color:"#fff"
                            }
                        },
                        {
                            type: 'value',
                            name: 'NO2(μg/m³)',
                            min: 0,
                            max: 400,
                            interval: 50,
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
                            data: Time.so2
                        },
                        {
                            name: 'NO2',
                            type: 'line',
                            yAxisIndex: 1,
                            data: Time.no2
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
    height: 100%;
    color:#333;
    background-image: url(./img/true.png);
    background-size: 100% 100%;
    .header{
        width: 100%;
        height: 100px;
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
        height: calc(100% - 120px);
        margin-left: 20px;
        .top{
            width: 100%;
            height: 70%;
            display: flex;
            align-items: flex-start;
            .left{
                width: 20%;
                height: 100%;
                .left-top{
                    width: 100%;
                    height: 45%;
                    margin-bottom: 25px;
                    // margin: 0;
                    // padding: 0;
                }
                .left-bt{
                    width: 100%;
                    height: 45%;
                    .bt-bar{
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                        padding: 5% 10% 0;
                        color: #fff;
                        .bar-box{
                            width: 100%;
                            height: 100%;
                            //background: #4788fb;
                            li{
                                width: 100%;
                                height: 19%;
                                display: flex;
                                justify-content: space-between;
                            }
                            .bar-title{
                                //border-width: 0 4px;
                                font-size: 18px;
                                align-items: center;
                                h3{
                                    border-left: 4px solid #4788fb;
                                    padding-left: 5px;
                                }
                                h4{
                                    border-right: 4px solid #4788fb;
                                    padding-right: 5px;
                                }
                            }
                            .bar-item{
                                border-bottom: 1px solid #2C58A6;
                                padding: 0 5px;
                                span{
                                    display: block;
                                    font-size: 18px;
                                    line-height: 3;
                                }
                                .span-1{
                                    color: chartreuse;
                                }
                            }
                        }
                        .bar-div{
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: space-between;
                            .bar-item{
                                width: 40%;
                                height: 100%;
                                display: flex;
                                flex-direction:column;
                                justify-content: center;
                                h3{
                                    width: 100%;
                                    font-size: 20px;
                                    text-align: center;
                                    background: #2C58A6;
                                }
                                p{
                                    font-size: 26px;
                                    text-align: center;
                                    color: chartreuse;
                                }
                            }
                        }
                    }
                }
                .left_div{
                    width: 100%;
                    height: 100%;
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
                .left-bottom{
                    position: relative;
                    width: 100%;
                    height: 100%;
                    .wateCss{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        padding-top: 40px;
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
                width: 60%;
                height: 100%;
                .center-text{
                    width: calc(100% - 50px);
                    height: 95%;
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
                        height: 100% !important;
                        canvas{
                            width: 100%;
                            height: 100% !important;
                        }
                    }
                }
            }
            .right{
                width: 20%;
                height: 100%;
            }
        }
        .bottom{
            width: 100%;
            height: 30%;
            .right_div{
                width: 100%;
                height: 100%;
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
                .airCss{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    color: #fff;
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
