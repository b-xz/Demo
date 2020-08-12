<template>
  <div>
    <div id="cesiumPath">
		<div class="main-header">
			<!-- Logo Header -->
			<div class="logo-header" data-background-color="blue">
				
				<a href="index.html" class="logo" style="color:#fff">
         			<span>赤龙湖湿地检测平台</span>
				</a>
				<button class="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon">
						<i class="icon-menu"></i>
					</span>
				</button>
				<button class="topbar-toggler more"><i class="icon-options-vertical"></i></button>
				<div class="nav-toggle">
					<button class="btn btn-toggle toggle-sidebar">
						<i class="icon-menu"></i>
					</button>
				</div>
			</div>
			<!-- End Logo Header -->

			<!-- Navbar Header -->
			<nav class="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
				
				<div class="container-fluid">
					<div class="collapse" id="search-nav">
						<form class="navbar-left navbar-form nav-search mr-md-3">
							<div class="input-group">
								<div class="input-group-prepend">
									<button type="submit" class="btn btn-search pr-1">
										<i class="fa fa-search search-icon"></i>
									</button>
								</div>
								<input type="text" placeholder="Search ..." class="form-control">
							</div>
						</form>
					</div>
						<ul class="navbar-nav topbar-nav ml-md-auto align-items-center">
              <li class="nav-item toggle-nav-search hidden-caret">
                <a class="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                  <i class="fa fa-search"></i>
                </a>
              </li>
              <li class="nav-item dropdown hidden-caret">
                <a class="nav-link dropdown-toggle" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
              <li class="nav-item dropdown hidden-caret">
                <a class="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-bell"></i>
                  <span class="notification">4</span>
                </a>
              </li>
              <li class="nav-item dropdown hidden-caret">
                <a class="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                  <i class="fas fa-layer-group"></i>
                </a>
              </li>
              <li class="nav-item dropdown hidden-caret">
                <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
                  <div class="avatar-sm">
                    <img src="assets/img/profile.jpg" alt="..." class="avatar-img rounded-circle">
                  </div>
                </a>
              </li>
					</ul>
				</div>
			</nav>
			<!-- End Navbar -->
		</div>

		<!-- Sidebar -->
		<div class="sidebar sidebar-style-2">			
			<div class="sidebar-wrapper scrollbar scrollbar-inner">
				<div class="sidebar-content">
					<div class="user">
						<div class="avatar-sm float-left mr-2">
							<img src="assets/img/profile.jpg" alt="..." class="avatar-img rounded-circle">
						</div>
						<div class="info">
							<a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
								<span>
									Hizrian
									<span class="user-level">Administrator</span>
									<span class="caret"></span>
								</span>
							</a>
							<div class="clearfix"></div>

							<div class="collapse in" id="collapseExample">
								<ul class="nav">
									<li>
										<a href="#profile">
											<span class="link-collapse">My Profile</span>
										</a>
									</li>
									<li>
										<a href="#edit">
											<span class="link-collapse">Edit Profile</span>
										</a>
									</li>
									<li>
										<a href="#settings">
											<span class="link-collapse">Settings</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<ul class="nav nav-primary">
						<li class="nav-item active">
							<a data-toggle="collapse" class="collapsed" aria-expanded="false">
								<i class="fas fa-home"></i>
								<p>智慧湿地检测管理</p>
								<span class="caret"></span>
							</a>
						</li>
						<li class="nav-item">
							<a  href="#base" role="button" id="dropdownMenuLink" data-toggle="collapse">
								<i class="fas fa-layer-group"></i>
								<p>视图管理</p>
								<span class="caret"></span>
							</a>
              <div class="collapse" id="base">
								<ul class="nav nav-collapse">
									<li>
                    <a>
											<span class="sub-item">分布展示</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">电子地图</span>
                    </a>
									</li>
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a data-toggle="collapse" href="#SpaceAnalysis">
								<i class="fas fa-layer-group"></i>
								<p>空间分析</p>
								<span class="caret"></span>
							</a>
              <div class="collapse" id="SpaceAnalysis">
								<ul class="nav nav-collapse">
									<li>
                    <a>
											<span class="sub-item">路径分析</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">缓冲区分析</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">淹没分析</span>
                    </a>
									</li>
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a data-toggle="collapse" href="#Data">
								<i class="fas fa-layer-group"></i>
								<p>数据管理</p>
								<span class="caret"></span>
							</a>
                  <div class="collapse" id="Data">
								<ul class="nav nav-collapse">
									<li>
                    <a>
											<span class="sub-item">数据输入</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">数据编辑</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">数据审核</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">数据备份</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">数据查询</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">数据浏览</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">数据审核</span>
                    </a>
									</li>
								</ul>
							</div>
						</li>
						<li class="nav-item">
							<a data-toggle="collapse" href="#platform">
								<i class="fas fa-layer-group"></i>
								<p>平台管理</p>
								<span class="caret"></span>
							</a>
              <div class="collapse" id="platform">
								<ul class="nav nav-collapse">
									<li>
                    <a>
											<span class="sub-item">权限管理</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">数据加密</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">网络监控</span>
                    </a>
									</li>
									<li>
                    <a>
											<span class="sub-item">操作日志管理</span>
                    </a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
  export default {
    mounted(){
      this.Init()
    },
    methods:{
      //初始化Cesium
       Init(){
          var viewer = new Cesium.Viewer('cesiumPath',{
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
       }
    }
  }
</script>

<style lang="less" >

body{
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  #cesiumPath{
    width: 100%;
    height: 100% !important;
    margin: 0;
    padding: 0;
  } 
}


</style>
