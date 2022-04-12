<template>
	<div id="myapp">
		<!-- {{infor}} -->
		<!--  <router-view> 是一个组件占位符，会根据内容不同，切换不同的组件 -->
		<!-- router-view 根据路径的不同，切换为不同的组件内容  -->
		<router-view></router-view>
		<Navbottom v-show="isNavShow"></Navbottom>
	</div>
</template>

<script>
	/* 导入自己写的地步导航组件 */
	import axios from 'axios'
	import Navbottom from '@/components/NavBottom.vue'
	export default{
		name:"app1",
		data:function(){
			return {
				infor:[]
			}
		},
		components:{
			Navbottom
		},
		// 计算属性调用 计算属性的isNavShow
		computed:{
			isNavShow(){
				// 返回isNavShow的状态
				return this.$store.getters.showNav
			}
		},// 当app1.vue中的所有有的页面元素加载完后，执行的函数
		mounted() {
			var that = this;
		   axios({
			   // /api/myboot/list 通过跨域设置相当于访问 localhost:8888/api/list
			   url:"/api/myboot/queryAllInfor",
			   method:"get"
		   }).then(data=>{
			   this.infor= data.data
			   console.log(data)
		   })
		}
	}
</script>

<style>
	/* 去掉图片的默认间隙 */
	*{
		margin:0;
		padding:0;
	}
</style>
