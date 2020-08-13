<template>
  <div id="wataBox">
      <div v-if="wateId == 0" id="waterQuality"></div>
      <div v-else-if="wateId == 1" id="nutritional">
          <ul>
              <li v-for="(item,index) in this.nurData" :key="index">
                  <div class="title">{{item[0]}}</div>
                  <div class="num">{{item[1]}}</div>
              </li>
          </ul>
      </div>
      <div v-else-if="wateId == 2" id="nutritional">
           <ul>
              <li v-for="(item,index) in this.monitor" :key="index">
                  <div class="title">{{item[0]}}</div>
                  <div class="num">{{item[1]}}</div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:{
          wateId:{
            required:true,//必须传入
            type:Number,
            default:0 //默认
          }
      },
      data(){
          return{
              nurData:[
                  ['贫营养','TLI(∑)＜30'],['中营养','30≤TLI(∑)≤50'],['富营养','TLI(∑)＞50'],['轻度富营养','50＜TLI(∑)≤60'],['中度富营养','60＜TLI(∑)≤70'],['重度富营养','TLI(∑)＞70'],
              ],
              monitor:[
                  ['氨氮（mg/L）',0.15],['总氮（mg/L）',0.01],['总磷（mg/L）',0.01],['化学需氧量',10],['PH',7],['溶解氧',7.5]
              ],
          }
      },
      mounted(){
         this.Wata("waterQuality")
      },
      methods:{
          Wata(id){
              var myEchart = this.$echarts.init(document.getElementById(id))
              var option = {
                //   悬浮显示数据
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    icon: 'circle',
                    right: 5,
                    top:10,
                    data: ['Ⅰ类','Ⅱ类','Ⅲ类','Ⅳ类','Ⅴ类','劣Ⅴ类'],
                    textStyle:{
                        color:'#fff'
                    }
                },
                series: [
                    {
                        name: '水质类别指标',
                        type: 'pie',
                        radius:'90%',//控制饼状图的大小
                        center:['40%','48%'],//控制饼状图的位置
                        label:{
                            position: 'inner',
                            formatter:'{d}%',
                            rotate:-45

                        },
                        data: [
                            {value: 335, name: 'Ⅰ类'},
                            {value: 310, name: 'Ⅱ类'},
                            {value: 234, name: 'Ⅲ类'},
                            {value: 135, name: 'Ⅳ类'},
                            {value: 1548, name: 'Ⅴ类'},
                             {value: 135, name: '劣Ⅴ类'},
                        ],
                        // 饼状图颜色
                        itemStyle:{
                            color: function(params) {
                                    //自定义颜色
                                    var colorList = [          
                                        '#00FFFF', '#00FF00', '#FFCC00', '#FF8C00', '#FF0000', '#FE8463',
                                    ];
                                    return colorList[params.dataIndex]
                                }
                        }
                    }
                ]
            };
            myEchart.setOption(option)
          } 
      },
      watch:{
          wateId(){
              console.log(this.wateId)
            if(this.wateId == 0){
                // watch需要等待节点渲染完毕加载
              this.$nextTick(()=>{
                  this.Wata("waterQuality")
              })
            }else{
                // 清楚echarts
                $("#waterQuality").removeAttr("_echarts_instance_").empty();
            }
          }
      }
  }
</script>

<style lang="less" scoped>
    #wataBox{
        width: 100%;
        height: 90%;
        box-sizing: border-box;
        padding-top: 10px;
        #waterQuality{
            width: 100%;
            height: 100%;
        }
        #nutritional{
            width: 100%;
            ul{
                height: 92%;
                box-sizing: border-box;
                padding: 5px;
                display: flex;
                align-items: flex-start;
                flex-wrap: wrap;
                li{
                    width: calc(100% /3);
                   // height: 80px;
                    box-sizing: border-box;
                    padding-right: 5px;
                    .title{
                        width: 100%;
                        text-align: center;
                        background: #2C58A6;
                    }
                    .num{
                        width: 100%;
                        height: 50px;
                        text-align: center;
                        line-height: 50px;
                        color: chartreuse;
                    }
                }
            }
        }
    }
 
</style>
