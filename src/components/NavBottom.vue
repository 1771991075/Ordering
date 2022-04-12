<template>
	<!--  作为底部导航条，内容切换的组件 -->
	<div class="nav_bottom">
		<!--  可以切换路由的标签 -->
		<!--  -->
          <router-link to="/index">首页</router-link>	
	      <router-link to="/search">搜索</router-link>		
	      <router-link to="/order">订单</router-link>		
	      <router-link to="/my">我的</router-link>		
	</div>
</template>

<script>
	
</script>
<style>
	.nav_bottom{
		position: fixed;
		height:6%;
		bottom: 0%;
		width:100%;
		display: flex;
		background-color: orange;
	}
	.nav_bottom a{
		flex:1;
		text-decoration: none;
		line-height: 40px;
		text-align: center;
		color: white;
	}
	/* 当把鼠标 放到链接的时候，文字颜色发生改变 */
	.nav_bottom a:hover{
		background-color: #FFD700;
	}
</style>
