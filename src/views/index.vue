<template>
	 <div id="myindex">
		 <banner></banner>
		 <!-- 分类模块组件 -->
		 <!-- v-model封装的是@input事件 -->
		 <!-- category给index.vue传过来的值 -->
		 <category v-model="myindex"></category>
		 <!-- index.vue给 列表组件传输的值 -->
		 <list :myindex = "myindex"></list>
	 </div>
</template>

<script>
	// 引入封装好的banner组件
	// @代表是当前的文件夹
	import banner from '@/views/banner.vue'
	// 引入分类组件
	import category from '@/views/category.vue'
	import list from '@/views/list.vue'
	export default{
		name:"index",
		data:function(){
			return {
				myindex:0
			}
		},
		components:{
			banner,
			category,
			list
		}
	}
</script>

<style>
	#myindex{
		height: 800px;
		overflow: hidden;
	}
</style>
