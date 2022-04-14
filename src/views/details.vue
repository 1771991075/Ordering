<template>
	<div class="details">
		<!-- 背景图 -->
		<img class="bg" src="../assets/detail/chihao.jpg" />
		<!-- 返回按钮 -->
		<button class="back" @click="goback">返回</button>
		<!-- 用来tab切换的三个子组件 -->
		<div class="tab">
			<div class="tab-item" @click="changeColor(0)">
				<router-link to="/details/goods" :class="(activeIndex==0?'tabchange':'')">点餐</router-link>
			</div>
			<div class="tab-item" @click="changeColor(1)">
				<router-link to="/details/reviews" :class="(activeIndex==1?'tabchange':'')">评价</router-link>
			</div>
			<div class="tab-item" @click="changeColor(2)">
				<router-link to="/details/shop" :class="(activeIndex==2?'tabchange':'')">商家</router-link>
			</div>
		</div>
		<div>
			<!-- 点击上面路由的时候，<router-view>切换为点餐、评价、商家任意组件 -->
			<router-view></router-view>
		</div>
	</div>
	
</template>

<script>
	import router from '@/router'
	export default{
		name:"details",
		data:function(){
			return {
				// 准备一个tab切换用到的索引
				activeIndex:0
			}
		},
		methods:{
			goback(){
				router.push("/index")
			},
			changeColor(zhi){
				this.activeIndex = zhi
			}
		},
		components:{
			
		},
		// 当进入到详情页面的时候，将底部导航条隐藏
		mounted(){
			// 提交隐藏 底部导航条的方法
			this.$store.dispatch("HIDENAV")
		},
		// 页面销毁函数
		destroyed(){
			this.$store.dispatch("SHOWNAV")
		}
	}
</script>

<style>
	.details{
		width: 100%;
	}
	.details .bg{
		width: 100%;
		height: 200px;
	}
	.details .back{
		width: 50px;
		height: 40px;
		left: 330px;
		top: 150px;
		border-radius: 20%;
		border: 1px solid #D3D3D3;
		position: absolute;
	}
	/* tab切换 */
	.details .tab{
		width: 100%;
		display: flex;
	}
	.tab .tab-item{
		flex: 1;
		font-size: 25px;
		text-align: center;
	}
	a{
		text-decoration: none;
		/* tab的文字切换是1秒 */
		transition: all 0.5s;
	}
	.tabchange{
		color: #FFA500;
		font-size: 23px;
		text-shadow: 2px 3px lightpink;
		font-weight: bold;
	}
</style>
