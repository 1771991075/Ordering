<template>
	<div class="category">
		<ul>
			<!-- 遍历主题集合 -->
			<!-- index指的是该数组中的索引 -->
			<li v-for="(item,index) in subjects">
				<!-- 点击分类的图片切换列表内容 -->
				<img :src="item.pic" @click="changeType(index)" />
				<div>
					<label>{{item.subject}}</label>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"category",
		data:function(){
			return {
				imgs:[
					//可以 require 引入图片的路径
					//@代表根路径
					require('@/assets/category/jiaozi.jpg'),
					require('@/assets/category/liulian.jpg'),
					require('@/assets/category/zhou.jpg'),
					require('@/assets/category/avatar.png'),
					require('@/assets/category/douban-app-logo.png'),
					require('@/assets/category/loading_green.gif')
				],
				//主题加图片
				subjects:[
					{subject:"热门",pic:require('@/assets/category/jiaozi.jpg')},
					{subject:"披萨",pic:require('@/assets/category/liulian.jpg')},
					{subject:"皮蛋瘦肉粥",pic:require('@/assets/category/zhou.jpg')},
					{subject:"传统美食",pic:require('@/assets/category/avatar.png')},
					{subject:"黑暗料理",pic:require('@/assets/category/douban-app-logo.png')},
					{subject:"外星美食",pic:require('@/assets/category/loading_green.gif')},
				]
			}
		},
		methods:{
			changeType(index){
				//接受分类的索引
				console.log(index)
				//再把索引传递给index.vue组件
				this.$emit("input",index)
				//index.vue传递给列表组件（待完成）
				//也可以通过bus = new Vue() 事件总线传递索引
			}
		}
	}
</script>

<style>
	.category{
		width: 100%;
		height: 170px;
		background-color: whitesmoke;
		margin-top: 200px;
	}
	.category ul{
		width: 100%;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		font-size: 12px;
		margin: 0 52px;
	}
	.category ul li{
		width: 30%;
		justify-content: center;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.category ul li img{
		width: 45px;
		height: 45px;
		margin: 0 auto;
		border-radius: 80%;
	}
</style>
