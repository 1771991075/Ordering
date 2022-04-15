<template>
	<div class="list">
		<!-- 我是列表组件 -->
		<!-- 当点击分类组件删的图片的时候，需要将索引传到该列表组件中 -->
		<!-- 是从index.vue中传过来的 -->
		<h2>{{takeouts[myindex][0].type}}</h2>
		<ul>
			<!-- 遍历二维列表 -->
				<li v-for="(item,index) in takeouts[myindex]">
					<router-link to="/details/goods">
						<!-- list-content-item加了弹性盒子 -->
						<div class="list-content-item">
							<img :src="item.picUrl" class="item-img"/>
							<!-- 得分 -->
							<div class="item-star">
								<p>{{item.name}}</p>
									<div class="item-second">
										<img src="../assets/list/xingxing.png" />
										<!-- 月售 -->
										<div class="item-count">{{item.score}}&nbsp; 月售: {{item.count}}</div>
										<!-- 配送距离 -->
										<div class="item-other">&nbsp;{{item.distance}}km</div>
										<!-- 配送时间 -->
										<div class="item-other">&nbsp;{{item.time}} 分钟</div>
									</div>
									<div class="item-third">
										<div class="item-price">￥{{item.price}}起送</div>
									</div>
							</div>
						</div>
					</router-link>
				</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"list",
		data:function(){
			return {
					takeouts:   [ //需要一个二维的列表
									[{
										type: "hot", //外卖的种类
										name:"红星咖喱饭",
										picUrl: require('@/assets/list/galiji.jpg'), //外卖的封面
										score: 8.0,
										count: 1232,
										distance: 3.3,
										time: 54,
										price: 30
									},
									{
										type: "hot", //外卖的种类
										name:"螺狮粉",
										picUrl: require('@/assets/list/luoshifen.jpg'), //外卖的封面
										score: 9.3,
										count: 11232,
										distance: 10.3,
										time: 54,
										price: 15
									 },
									 {
										type: "hot", //外卖的种类
										name:"藤椒鸡丝面",
										picUrl: require('@/assets/list/jisimian.jpg'), //外卖的封面
										score: 9.3,
										count: 11232,
										distance: 10.3,
										time: 54,
										price: 15
									  }
									
									
									],
									[{ //披萨种类
										type: "pizza", //外卖的种类
										name:"榴莲主题披萨",
										picUrl: require('@/assets/list/pizza.jpg'), //外卖的封面
										score: 9.0,
										count: 320,
										distance: 5.3,
										time: 45,
										price: 100
										 
										
									},
									],
									[ //粥类
										{
											type: "zhou", //外卖的种类
											name:"生蚝福满粥",
											picUrl: require('@/assets/list/zhou.jpg'), //外卖的封面
											score: 9.8,
											count: 1320,
											distance: 1.3,
											time: 60,
											price: 5
										}
									
									],
									
									[{
										type: "jiaozi", //外卖的种类
										name:"皮薄陷大",
										picUrl: require('@/assets/list/jiaozi.jpg'), //外卖的封面
										score: 6.0,
										count: 12320,
										distance: 1.3,
										time: 25,
										price: 10
									}],
									
									
									[ //粥类
										{
											type: "zhou", //外卖的种类
											name:"生蚝福满粥",
											picUrl: require('@/assets/list/zhou.jpg'), //外卖的封面
											score: 9.8,
											count: 1320,
											distance: 1.3,
											time: 60,
											price: 5
										}
									
									],
									[ //粥类
										{
											type: "zhou", //外卖的种类
											name:"生蚝福满粥",
											picUrl: require('@/assets/list/zhou.jpg'), //外卖的封面
											score: 9.8,
											count: 1320,
											distance: 1.3,
											time: 60,
											price: 5
										}
									
									]
			
							    ],
		//数组的索引
			}
		},
		props:['myindex']
	}
</script>

<style>
	.list{
		width: 100%;
		height: 100%;
		overflow: scroll;
		margin-top: 20px;
	}
	.list h2{
		font-size: 30px;
		color: silver;
		text-align: center;
	}
	.list ul{
		width: 100%;
		list-style: none;
	}
	.list ul li{
		width: 100%;
		font-size: 18px;
		margin-top: 15px;
	}
	a{
		text-decoration: none;
	}
	.list ul li .list-content-item{
		width: 100%;
		display: flex;
		/* padding-left: 10px; */
	}
	.list ul li .list-content-item .item-title{
		display: flex;
	}
	.list ul li .list-content-item .item-img{
		width: 75px;
		height: 75px;
		border-radius: 30%;
	}
	.list ul li .list-content-item .item-star{
		margin-left: 10px;
	}
	/* 缩小得分的小星星 */
	.list ul li .list-content-item .item-star img{
		width: 16px;
		height: 16px;
		margin-left: 1px;
		margin-right: 1px;
	}
	/* 给第二行 月售和小星星在同一行 */
	.item-star .item-second{
		display: flex;
	}
	/* 控制月售文字的样式 */
	.item-star .item-second .item-count{
		font-size: 15px;
		color: lightgray;
	}
	/* 控制配送距离和时间的样式 */
	.item-star .item-second .item-other{
		font-size: 15px;
		color: #595959;
	}
	.item-star .item-third .item-price{
		font-size: 15px;
		color: deeppink;
	}
</style>
