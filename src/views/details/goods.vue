<template>
	<div id="wrap">
		
		<!--  左侧菜单的div -->
		<!-- 加上一个ref属性后，作为better-scroll的定位点 -->
		<div class="goodMenu" ref="goodMenu">
			<ul>
				<li @click="selectLeft(0)">
					<img src="../../assets/detail/baokuan.png" />爆款专区
				</li>
				<li @click="selectLeft(1)">
					<img src="../../assets/detail/remai.png" />热款专区
				</li>
				<li @click="selectLeft(2)">
					<img src="../../assets/detail/wangzhe.png" />王者炒饭
				</li>
				<li @click="selectLeft(3)">
					<img src="../../assets/detail/wangzhe.png" />王者炒面
				</li>
				<li @click="selectLeft(4)">
					<img src="../../assets/detail/chunjuan2.jpg" />王者小吃
				</li>
				<li @click="selectLeft(5)"> 
					<img src="../../assets/detail/remai.png" />冬日热饮
				</li>
			</ul>
		</div>
		<!-- 右侧-具体的条目信息 -->
		<!-- 加上一个ref属性后，作为better-scroll的定位点 -->
		<div class="goodList" ref="goodList">
			<ul class="fa">
				<li class="fa-li" v-for="(item,index) in shopList" :key="index" ref="rItem">
					<div>
						<ul class="ch">
							<li class="ch-li" v-for="(item1,index1) in item" :key="index1">
								<div class="list-item">
									<div class="item_bg">
										<img :src="item1.picUrl" class="item-img" />
									</div>
									<!-- 内容的div -->
									<div class="item-infor-content">
										<!-- 第一行，神券加上餐品名称 -->
										<div class="quan">
											<img src="../../assets/detail/shenquan.png" />
											<p class="item-title">{{item1.shopname}}</p>
										</div>
										<!-- 第二行，评分 月售 -->
										<div class="item-desc">
											<div class="item-score">
												<img src="../../assets/list/xingxing.png" />{{item1.score}}
											</div>
											<div class="item-count">
												月售{{item1.count}}
											</div>
											<div class="item-zhuansong">
												<img src="../../assets/detail/zhuansong.jpg" />
											</div>
										</div>
										<!-- 第三行 价格 -->
										<div class="item-price">
											<div class="item-pre-price">
												<span>￥</span>
												<span>{{item1.price}}</span>
											</div>
											<!-- 订单加号和减号 以及订单数量 -->
											<div class="item-ordernum">
												<!-- 减号，没有订单时，隐藏减号按钮 -->
												<div v-show="item1.ordNum!=0" @click="shopMinus(index,index1)"><img src="../../assets/list/jian.png" /></div>
												<!-- 订单数量 -->
												<div>{{item1.ordNum}}</div>
												<!-- 加号，需要定位到该二维数组的orderNum，订购数量 -->
												<div @click="shopAdd(index,index1)"><img src="../../assets/list/jia.png" /></div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
		<!-- 购物车-->
		<div class="shopcar">
			<div class="shopCarInfor">
				<span>￥{{totalResultPrice}}</span>
				<!-- 预估配送费 -->
				<span>预估配送费:￥{{shopcar.items.length==0?0:shopcar.delifee}}</span>
				<span>￥{{shopcar.items.length==0?0:15}}起送</span>				
			</div>
			<span class="itemNum">{{itemTotalNum}}</span>
		    <img  class="gouwu1" :src="buyCarSrc" /> 
			<!--  结算图片，当购物车里条目数量大于0 才能显示-->
			<router-link :to="{path:'/account',query:{'shopcar':shopcar,'money':totalResultPrice}}">
				<img class="gouwu2" src="../../assets/list/jiesuan.png" />
			</router-link>
		</div>
	</div>
</template>

<script>
	/*  引入自己定义data.js文件定义的两个获取数据的方法 */
	import  {getgoodList,getshopList} from '@/assets/js/data.js'
	// 引入  Better-scroll 实现动态滚动
	import Bscroll from "better-scroll"
	export default{
		name:"goods",
		data:function(){
			return {
				   // 该商家大致外卖的分类(点餐的条目)
					goodList:getgoodList(),
					shopList:getshopList(),
					// 获取实时滚动位置坐标属性
					scrollY:0,
					// 获取每一个li的高度的集合
					heightList:[],
					// 购物车对象类
					shopcar:{
						// 点餐单项条目集合，（名字、份数、单项总价、配送费、打包费
						items:[],
						// 配送费
						delifee:3
					},
					// 购物车图片属性
					shopCarSrc:require('@/assets/list/gouwu1.png'),
					// 订餐数量的属性
					itemTotalNum:0
			}	
		},
		methods:{
			// 写better-scroll的初始化方法
			_scrollInit(){
				this.menuList = new Bscroll(this.$refs.goodMenu,{
					click:true
				})
				// 给右侧列表一个滑动效果
				this.goodmenu = new Bscroll(this.$refs.goodList,{
					click:true,
					probeType:3,
				})
				this.goodmenu.on('scroll',(pos)=>{
					this.scrollY = Math.abs(Math.round(pos.y))
					console.log('this.scrollY')
				})
			},
			//点击左侧右侧滚动效果
			selectLeft(index){
				var rItem = this.$refs.rItem;
				// 通过索引来定位滚动到哪个li
				var el = rItem[index]
				console.log(index + "是:" + el)
				this.goodmenu.scrollToElement(el,1500)
			},
			// 购物车减少方法
			shopMinus(index,index1){
				console.log('购物车减少.....'+ index + "......" + index1)
				var num = this.shopList[index][index1].ordNum;
				// 判断数量为不为0，为0就不用减少
				if(num!=0){
					num = num - 1
				}
				// 订单总量的个数
				if(this.itemTotalNum!=0){
					this.itemTotalNum = this.itemTotalNum - 1;
				}
				
				this.shopList[index][index1].ordNum = num;
				
				// 构建一个单项，把这个外卖单项，添加购物车里
				// 记住这个单项的购买总数量
				this.temp = num;
				
				var itObj = {
					// 订餐的名称
					itemName:this.shopList[index][index1].shopname,
					// 订餐单项的购买数量
					itemCount:num,
					//订餐的价格
					itemPrice:this.shopList[index][index1].price,
					//订餐单项的类型编号
					type:this.shopList[index][index1].type,
					// 订餐单项的编号
					itemNum:this.shopList[index][index1].itemNum,
					// 单项的总价格
					itemTotalPrice:num*this.shopList[index][index1].price
					
				}
				var orderItems = this.shopcar.items
				var flag = false;
				if(orderItems.length > 0){
					// 如果大于0 ，里面内容不为空
					// 遍历orderItems 是否有一样的itemNum
					for(var i = 0; i < orderItems.length;i++){
						
						if(num == 0){
							// 如果该单项数量为0 ，直接从数组中删掉就可以
							orderItems.splice(i,1)
						}
						else{
							// 如果该订单项目没有减少到0
							orderItems.splice(i,1)
							orderItems.push(itObj)
						}
					}
				}
				// 输出一下添加完的购物车
				console.log(this.shopcar)
			},
			// 购物车增加方法
			shopAdd(index,index1){
				console.log('购物车增加.....'+ index + "......" + index1)
				var num = this.shopList[index][index1].ordNum;
				num = num + 1;
				this.shopList[index][index1].ordNum = num;
				
				// 只要加一项，订单总量加1
				this.itemTotalNum = this.itemTotalNum + 1
				
				// 构建一个单项，把这个外卖单项，添加到购物车里
				// 记住这个单项的购买总数量
				this.temp = num;
				
				var itObj = {
					// 订单的名称
					itemName:this.shopList[index][index1].shopname,
					// 订单单项的购买数量
					itemCount:num,
					// 订餐的价格
					itemPrice:this.shopList[index][index1].price,
					// 订餐单项的类型编号
					type:this.shopList[index][index1].type,
					// 订餐单项的编号
					itemNum:this.shopList[index][index1].itemNum,
					// 单项的总价格
					itemTotalPrice:num*this.shopList[index][index1].price
				}
				
				// 先获取购物车原来的单项内容集合，第一次获取的时候，orderItems是空值
				var orderItems = this.shopcar.items
				// 标识符，判断单项
				var flag = false;
				if(orderItems.length > 0 ){
					// 如果大于0 ，里面内容不为空
					// 遍历orderItems 是否有一样的itemNum
					for(var i = 0 ;i < orderItems.length;i++){
						if(orderItems[i].itemNum == itObj.itemNum){
							// 针对于对象数组中，属性替换不触发计算属性，可以先删除orderItems,
							// splice 参数1 删除第i项，参数2 删除几个
							orderItems.splice(i,1)
							orderItems.push(itObj)
							// flag = true 代表能够找到单项
							flag = true
							break
						}
					}
					// 循环结束之后，如果还没有找到单项
					if(!flag){
						this.shopcar.items.push(itObj)
					}
				}
				else{
					this.shopcar.items.push(itObj)
				}
				// 输出一下添加完的购物车、
				console.log(this.shopcar)
			}
		},
		// 当元素刚被创建完，还没被渲染的时候
		created(){
			this.$nextTick(()=>{
				this._scrollInit()
			})
		},
		computed:{
			// 购物车灰白图片切换
			buyCarSrc(){
				if(this.shopcar.items.length > 0){
					return require('@/assets/list/gouwu2.png')
				}
				else{
					return require('@/assets/list/gouwu1.png')
				}
			},
			// 通过计算属性显示总价格
			totalResultPrice(){
				var sum = 0;
				if(this.shopcar.items.length > 0){
					for(var i = 0;i<this.shopcar.items.length;i++){
						sum = sum + this.shopcar.items[i].itemTotalPrice
					}
					return sum + this.shopcar.delifee
				}
			}
			
		},
		// mounted 元素都加载玩渲染完后执行的函数
		mounted(){
			//当VUE中节点修改，有一个延迟点击效果
			//  ()=>  lamda 表单式，相当于匿名函数
		}
		
}
</script>

<style>
	/*  点餐条目里的最大div样式 */
	#wrap{
		width:100%;
		/*  左右两边平行的 */
		display: flex;
		height:560px;
		margin-top:20px;
		overflow: hidden;
		position: fixed;
		
		
	}
	/* 左侧 菜单的样式 */
	#wrap .goodMenu{
		height:80%;
		width:20%;
		flex:1;
		background-color: #D3D3D3;
		
	}
	/*菜单栏里的ul列表样式   */
	.goodMenu ul{
		width:100%;
		height:80%;
		list-style: none;
	}
	.goodMenu ul li{
		height:70px;
		font-size: 15px;

	}
	/*  菜单栏列表里的图片 */
   .goodMenu ul li img{
	   width:30px;
	   height:30px;
	   position: relative;
	   top:6px;
	   border-radius: 50%;
   }
	
	/*  右侧具体产品列表栏 */
	#wrap .goodList{
		flex:2;
		width:80%;
		overflow: scroll;
	    background-color: whitesmoke;
		/* 给右侧上皮吗列表一个弹性盒子，以列的形式展示 */
		display: flex;
		/* 弹性盒子，以列的形式展示 */
		flex-direction: column;
	}
	/* ul 和.fa 连接上，表示 <ul class="fa"></ul>*/
	.goodList ul.fa{
		width: 100%;
		list-style: none;
	}
	.goodList ul.fa li.fa-li{
		flex: 1;
		height: 500px;
	}
	/* 子 ul 和子 li */
	ul.ch{
		width: 100%;
		list-style: none;
	}
	/* 单项外卖条目的间隙 */
	ul.ch li.ch-li{
		margin-bottom: 5px;
	}
	/* 单项外卖条目的样式 */
	ul.ch li.ch-li .list-item{
		display: flex;
		width: 100%;
	}
	/* 单项外卖条目图片外层div整体样式*/
	ul.ch li.ch-li .list-item .item_bg{
		flex:1;
	}
	/* 单项外卖条目图片样式 */
	ul.ch li.ch-li .list-item .item_bg .item-img{
		width: 56px;
		height: 70px;
		margin-left:5px;
	}
	/* 单项条目，内容样式 */
	.list-item .item-infor-content{
		flex:5;
		display: flex;
		flex-direction: column;
	}
	/* 神券里的整体样式 */
	.list-item  .item-infor-content .quan{
		width: 160px;
		height: 30px;
		display: flex;
		font-size: 14px;
	}
	/* 神券图片样式 */
	.list-item  .item-infor-content .quan img{
		width: 40px;
		height: 20px;
		margin-left:5px;
		margin-right:3px;
		
	}
	/* 第二行样式 */
	.list-item  .item-infor-content .item-desc{
		width: 100%;
		display: flex;
		font-size: 14px;
	}
	/* 控制得分，和小星星样式 */
	.list-item  .item-infor-content .item-desc .item-score{
		  width:16%;
		  flex:1;
	}
	.list-item  .item-infor-content .item-desc .item-score img{
		margin-left:5px;
		width: 15px;
		height: 15px;
	}
	/* 月售数量的样式 */
	.list-item  .item-infor-content .item-desc .item-count{
		flex:2;
		font-size: 12px;
	}
	/* 美团专送样式 */
	.list-item  .item-infor-content .item-desc .item-zhuansong{
		flex: 1;
	}
	.list-item  .item-infor-content .item-desc .item-zhuansong img{
		width: 60px;
		height: 20px;
	}
	/* 订餐价格样式 */
	.list-item  .item-infor-content .item-price{
		width: 100%;
		display: flex;
		font-size: 20px;
		color: orange;
	}
	.list-item  .item-infor-content .item-price{
		flex:1;
	}
	.list-item  .item-infor-content .item-price span{
		margin-right: -5px;
	
	}
	/* 订购数量整体样式 */
	.item-price .item-ordernum{
		display: flex;
		flex:2;
		font-size: 15px;
		margin-top: 3px;
		margin-left: 60px;
	}
	/* 订购图片的整体大小 */
	.item-price .item-ordernum img{
		width: 18px;
		height: 18px;
		margin-left: 10px;
		margin-right: 10px;
	}
	/*  购物车的样式*/
	#wrap .shopcar{
		position: fixed;
		left:0;
		bottom:0%;
		font-size:12px;
	}
	#wrap .shopcar .gouwu1{
		height:70px;
		width:100%;
		
	}
	/*  购物车文字内容 */
	#wrap .shopcar .shopCarInfor{
		color:white;
		position: fixed;
		left:66px;
		bottom: 20px;
	}
	
	#wrap .shopcar .shopCarInfor span{
		margin-left:10px;
	}
	
	/* 购物数量 */
	#wrap .shopcar .itemNum{
		position: fixed;
		color: white;
		left:15.5%;
		bottom:3%;
	}
	/* 购物车结算图片 样式*/
	#wrap .shopcar .gouwu2{
		    position: fixed;
		    width: 17%;
		    height: 55px;
		    left: 83%;
		    bottom: 0.35%;
	}
</style>
