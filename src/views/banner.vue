<template>
	<div class="banner-swiper">
		<!-- 里面是固定写法，样式都是现成的 -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<!--  带有简单的值，进行传输 -->
					<router-link to="/banner-detail/66">
						<img src="../assets/banner/banner1.jpg">
					</router-link>
				</div>
				<!-- 传输一个对象 -->
				<!-- 从banner组件到banner详情组件传输一个对象 -->
				<div class="swiper-slide">
					<router-link :to="{path:'/banner-detail1',query:{id:10,type:'bannerhot'}}">
						<img src="../assets/banner/banner2.jpg">
					</router-link>
				</div>
				<div class="swiper-slide"><img src="../assets/banner/banner3.jpg"></div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
			
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
			
			<!-- 如果需要滚动条 -->
			<div class="swiper-scrollbar"></div>
		</div>
	</div>
</template>

<script>
	//  引入swiper
	import Swiper from 'swiper'
	// 引入swiper样式
	import 'swiper/dist/css/swiper.min.css'
	// 在vue组件中对swiper进行初始化
	export default{
		name:"banner",
		data:function(){
			return {}
		},
		//如果需要对swiper进行初始化，需要放到mounted函数里
		mounted(){
			new Swiper('.swiper-container',{
				autoplay:true,
				speed:1000,
				autoplay:{
					deplay:1000
				},
				loop:true,
				//是否加分页器
				pagination:{
					el:'.swiper-pagination',
				},
				//前进或者后退按钮
				navigation:{
					nextE1:'.swiper-button-next',
					prevE1:'.swiper-button-prev',
				},
				//是否需要滚动条
				scrollbar:{
					el:'.swiper-scrollbar',
				},
			})
		}
		
	}
</script>

<style>
	/* 将banner广告条固定在最上方 */
	.banner-swiper{
		width: 100%;
		position: fixed;
	}
	.banner-swiper img{
		width: 100%;
		height: 200px;
	}
</style>
