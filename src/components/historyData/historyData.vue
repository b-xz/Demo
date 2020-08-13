<template>
  <div class="hisBox">
      <div class="left">
          <ul>
              <li v-for="(item,index) in name" :key="index" @click="hisBtn(index)" :class="hisIndex == index?'active':''">{{item}}</li>
          </ul>
      </div>
      <div class="right">
          <div v-if="hisIndex == 0" id="airEn" class="cancvs"></div>
          <div v-else-if="hisIndex == 1" id="sceneEn" class="cancvs"></div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import Time from '../../Data/data.json'
    export default {
        data(){
            return{
                name:['环境空气','气象数据'],
                hisIndex:0,
                airData:{
                    name:['SO2', 'NO2'],
                    yName:['SO2(μg/m³)','NO2(μg/m³)'],
                    Data:[Time.so2, Time.no2],
                    unit:['μg/m³','μg/m³'],
                    value:{
                        y1:[-20,20,10],
                        y2:[0,400,100]
                    }
                },
                sceneData:{
                    name:['温度','风速','雨量','噪音'],
                    yName:['','风速(m/s)',],
                    Data:[Time.temp,Time.speed,Time.noise,Time.rain],
                    unit:['℃','m/s','mm','DB'],
                    value:{
                        y1:[-20,60,20],
                        y2:[-1,7,2]
                    }
                }
            }
        },
        mounted(){
            this.ponlyline('airEn',this.airData)
        },
        methods:{
            ponlyline(id,data){
                var myEachar = this.$echarts.init(document.getElementById(id))
                let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999',
                            }
                        },
                    },
                    color:['#2db7f5','#ff6600','#C8FFFA', '#FF0000',],
                    legend: {
                        top:'middle',
                        left:'left',
                        orient:'vertical',
                        itemGap:20,
                        data: data.name,
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
                            name:data.yName[0],
                            min: data.value.y1[0],
                            max: data.value.y1[1],
                            interval: data.value.y1[2],
                            axisLabel: {
                                //formatter: '{value}(μg/m³)'
                                color:"#fff"
                            }
                        },
                        {
                            type: 'value',
                            name: data.yName[1],
                            min: data.value.y2[0],
                            max: data.value.y2[1],
                            interval: data.value.y2[2],
                            axisLabel: {
                                //formatter: '{value}(μg/m³)'
                                color:"#fff"
                            }
                        }
                    ],
                    series: this.series(data)
                };
                myEachar.setOption(option)
            },
            hisBtn(index){
                console.log(index)
                this.hisIndex = index
            },
            series(sourec){
                var series = []
                for(var i = 0; i< sourec.Data.length;i++){
                    if(i == 1){
                        series.push({
                            name:sourec.name[i],
                            type:'line',
                            yAxisIndex: 1,
                            data:sourec.Data[i]
                        })
                    }else{
                        series.push({
                            name:sourec.name[i],
                            type:'line',
                            data:sourec.Data[i]
                        })
                    }
                }
               // console.log(series)
                return series
            },
        },
        watch:{
            hisIndex(){
                if(this.hisIndex == 0){
                    this.$nextTick(()=>{
                        this.ponlyline('airEn',this.airData)
                        $("#sceneEn").removeAttr("_echarts_instance_").empty();
                    })
                }else if(this.hisIndex == 1){
                    this.$nextTick(()=>{
                        this.ponlyline('sceneEn',this.sceneData)
                         $("#airEn").removeAttr("_echarts_instance_").empty();
                    })
                   
                }
            }
        }   
    }
</script>

<style lang="less" scoped>
 .hisBox{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    .left{
        width: 10%;
        height: 100%;
        ul{
            width: 100%;
            height: 100%;
            padding: 30% 20%;
            margin: 0;
            box-sizing: border-box;
            font-size: 24px;
            li{
                width: 100%;
                height: 50%;
            }
            .active{
                color: aqua;
            }
        }
    }
    .right{
        width: 90%;
        height: 100%;
        .cancvs{
            width: 100%;
            height: 100%;
        }
    }
 }
 
</style>
