<template>
	<div>
		我是banner-detail1页面<br/>
		传过来的type:{{$route.query.type}}<br/>
		传过来的id:{{$route.query.id}}<br/>
		传过来的对象:{{$route.query}}
		<button class="myback" @click="goback()">返回首页</button>
	</div>
</template>

<script>
	//  导入路由的变量
	import router from '../router'
		export default{
			name:"banner-detail1",
			data:function(){
				return {}
			},
			methods:{
				goback(){
					//通过router 返回首页
					router.push("/index")
				}
			}
		}
</script>

<style>
	.myback{
		position: absolute;
		width: 70px;
		height: 50px;
		background-color: #ebf9ff;
		border-radius: 13%;
		text-align: center;
		left: 80%;
		top: 1%;
	}
</style>
