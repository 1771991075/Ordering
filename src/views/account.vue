<template>
	<div id="account">
		 <h2>我是结算界面</h2>
	    <div>
			<h3>天富君澜小区2号楼5单元809</h3>
		</div>
		<br />
		
		<div>
			
			<span><b>支付宝:</b></span>&nbsp;&nbsp;&nbsp;<span>支付宝支付</span>
		</div>
		<!--  显示具体的订单信息 -->
		<div>
			<ul>
				
				<li v-for="item in shopcar.items" :key="item">
					<span>{{item.itemName}}</span>&nbsp;&nbsp;
					<span>￥{{item.itemPrice}}</span>
					<div>{{item.itemCount}}份</div>
					<!-- 水平分割线 -->
					<hr />
				</li>
				
			</ul>
			
		</div>
		<button class="back" @click="goback">返回</button>
		<!--  支付按钮 -->
		<div class="shopcar">
			 <div>
				 <span class="money">￥{{money}}</span>
				  <img class="gouwu3" src="../assets/list/gouwu2.png" />
				   <img class="mypay" src="../assets/list/jiesuan.png" @click="goPayment()" />
			 </div>
			
		</div>
	</div>
</template>
<script>
	/*  引入路由 */
	import router from '@/router'
	import qs  from "qs"
	
	export default{
		name:"account",
		data:function(){
			return {
				shopcar:[],
				money:0.0
			}
		},
		mounted() {
			// 从商品页面传过来的值
			this.shopcar = this.$route.query.shopcar;
			this.money = this.$route.query.money;
			//将底部导航栏隐藏
			this.$store.dispatch("HIDENAV")
		},
		destroyed() {
			this.$store.dispatch("SHOWNAV")
		},
		methods:{
			goback(){
				router.push("/detail/goods")
			},
			goPayment(){
				//alert('准备支付')
				// 构建一个一个随机的订单号
				var data = {
					//随机的订单号
					orderId:("ab1234"+Math.random()).replace(".","").substring(0,12),
					money:this.money
				}
				console.log(data.orderId)
			var axios=	this.axios 
				axios({
					url:"/api/payment",
					method:"post",
					//访问的请求头
					headers:{
						"content-type":"application/x-www-form-urlencoded"
					},
					// qs.stringify 将对象转化为可以传输的字符串
					data:qs.stringify(data)
					// 请求完服务端后返回的信息
				}).then(function(res){
					console.log(res)
					// 跳转到支付页面
					// res.data.result跳转的支付页面地址
				window.location.href=res.data.result
				})
			}
		}
	}
</script>

<style>
 #account{
	 width:100%;
 }
 #account .back{
	  width:64px;
	  height:32px;
	  border-radius: 20%;
	  background-color: #F5F5F5;
	  position: absolute;
	  top:0px;
	  left:280px;
	  color:coral;
	  border-color: #FF4500;
	   }
	   
  /*  购物车样式*/
  .shopcar .gouwu3{
	  position: absolute;
	  height:80px;
	  width:100%;
	  left:0%;
	  bottom:0;
  }
  
  
  .shopcar .mypay{
	  position: absolute;
	  height:60px;
	  width:19%;
	  left:81%;
	  bottom:0;
  }

 .shopcar .money{
	 font-size:40px;
	 position:absolute;
	 color: white;
	 left:25%;
	 bottom: 2px;
	 z-index: 5;
 }
</style>
