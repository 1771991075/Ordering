<template>
  <div class="myinfor">
	  <!-- {{msg}} -->
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="心情日志">
      <el-input v-model="form.myinfors"></el-input>
    </el-form-item>
    <el-form-item label="发布地址">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="上海" value="shanghai"></el-option>
        <el-option label="北京" value="beijing"></el-option>
		 <el-option label="郑州" value="zhengzhou"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="发布时间">
      <el-col :span="11">
        <el-date-picker type="datetime" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
     <el-date-picker type="datetime" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="特别关心">
      <el-switch v-model="form.care"></el-switch>
    </el-form-item>   
    <el-form-item label="性别">
      <el-radio-group v-model="form.sex">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="发布形式">
      <el-input type="textarea" v-model="form.desc1"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
 import axios from 'axios'
 export default {
    data() {
      return {
       form:{
		   myinfors:"",
		   region:"",
		    date1: '',
		    date2: '',
			care:false,
			sex:"",
			desc1:""
			
			
	   },
	   msg:""
      }
    },
    methods: {
     onSubmit(){
		 // 输出填写的表单数据
		 var that =this
		 console.log(this.form)
		 axios({
			 url:"/api/myboot/addinfor",
			 method:"post",
			 data:this.form
			 
		 }).then(function(res){
			 //输出从java后台的值
			 console.log(res)
			 that.msg = res.data.msg
		 })
		 
	 }
    }
  }
	
</script>
<style scoped="scoped">
	 .myinfor{
			width:90%;
			height:400px;
		}
	
</style>