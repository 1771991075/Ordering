<template>
	  <div>支付结果页面:{{msg}}</div>
</template>

<script>
	import axios from 'axios'
	import qs from "qs"
	
	export default{
		name:"paysucc",
		data:function(){
			return {
				msg:""
			}
		},
		created(){
			var that = this;
			let data={
				// 在支付宝跳转页面地址解析出来的内容
				out_trade_no:this.$route.query.out_trade_no,
				trade_no:this.$route.query.trade_no
			}
			// axios 给后台在发送消息，反复确认支付结果
			axios({
				url:"/api/queryOrder",
				"method":"post",
				headers:{
					"content-type":"application/x-www-form-urlencoded"
				},
				// qs.stringify 将对象转化为可以传输的字符串
				data:qs.stringify(data)
				
			}).then((res)=>{
				console.log(res)
				//接受支付状态，将它渲染界面
				that.msg = res.data.msg;
				
			})
		}
	}
</script>

<style>
</style>
