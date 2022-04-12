<template>
	<!-- template相当于原来的组件中template属性 -->
	<div id="app">
		<h2>{{reverseMsg}}</h2>
	</div>
</template>


<script type="text/javascript">
	// export port 这个组件需要被其他应用需要导用、
	export default{
		name:"APP",
		//返回变量的时候也是以函数的形式进行返回
		data:function(){
			return {
				msg:"hahahhahahhahahha"
			}
		},
		//计算属性
		computed:{
			reverseMsg:function(){
				return this.msg.split("").reverse().join("")
			}
		}
	}
</script>	

<style>
	#app{
		border: 1px solid green;
	}
	h2{
		font-size: 40px;
		color: gold;
		text-shadow: 3px 4px yellow;
	}
</style>
