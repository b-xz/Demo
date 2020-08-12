<template>
  <div id="app">
    <keep-alive exclude="show-founder">
     <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

// console.log(Cesium)
export default {
  name: 'App',
  provide(){
    return{
      reload:this.reload
    };
  },
  data(){
    return{
      isRouterAlive:true
    };
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(()=>{
        this.isRouterAlive=true;
      });
    }
  }
}
</script>

<style>
</style>
