<template>
   <div class="manage_page fillcontain">
        <el-row>
            <el-header height='64px' >
                <div class='logo' >
                  <p class='logo_text'>教师专业发展考评 <span style='font-size:18px;' >管理系统</span> </p>
                </div>
                <div class='avatar_box'>
                    <i class="el-icon-search" style="width:22px;height:22px;" ></i>
                    <i class='el-icon-question'></i>
                    <i class='el-icon-bell'></i>
                    <el-dropdown  @command="handleCommand" menu-align='start'>
                        <img src="../../static/image/avatar.png" class="avatar">
                        <p class='name'>用户名</p>
                        <el-dropdown-menu slot="dropdown">
                           <el-dropdown-item command="1">修改</el-dropdown-item>
                            <el-dropdown-item command="2">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
        </el-row>
        <el-row style="height: 90%;">
          <el-col :span="4"  style="min-height: 100%;height:100%;over-flow:auto;background-color: #fff;">
              <el-select v-model="value" placeholder="请选择" class='selects' >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            <el-menu default-active="home" style="min-height: 84%;" router>
              <el-menu-item index='/home'>
                <i class="el-icon-user"></i>
                <span slot="title">个人首页</span>
              </el-menu-item>
              <el-menu-item index='/teacherHome'>
                <i class="el-icon-s-custom"></i>
                <span slot="title">教师工作室</span>
              </el-menu-item>
              <el-submenu index='1'>
                  <template slot="title">
                    <i class="el-icon-notebook-1"></i>
                    <span>教师累积型档案</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="honour">荣誉获奖</el-menu-item>
                    <el-menu-item index="study">研修培训</el-menu-item>
                    <el-menu-item index="result">科研成果</el-menu-item>
                    <el-menu-item index="open">课堂展示</el-menu-item>
                    <el-menu-item index="base">教学基本功</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
               <el-submenu index='2'>
                  <template slot="title">
                    <i class="el-icon-notebook-2"></i>
                    <span>教师动态型档案</span>
                  </template>
                  <el-menu-item-group>
                      <el-menu-item index="plan1">教研组计划</el-menu-item>
                      <el-menu-item index="plan2">学科备课组计划</el-menu-item>
                      <el-menu-item index="plan3">教研组总结</el-menu-item>
                      <el-menu-item index="plan4">学科备课组总结</el-menu-item>
                      <el-menu-item index="plan5">教研组计划</el-menu-item>
                      <el-menu-item index="plan6">学科备课组计划</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index='3'>
                  <template slot="title">
                    <i class="el-icon-data-line"></i>
                    <span>评比分析</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="all">整体分析</el-menu-item>
                    <el-menu-item index="honour">成绩分析</el-menu-item>
                    <el-menu-item index="target">指标分析</el-menu-item>
                    <el-menu-item index="compare">对比分析</el-menu-item>
                    <el-menu-item index="comment">评语分析</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <!-- <el-submenu index='2'>
                  <template slot="title">
                    <i class="el-icon-edit-outline"></i>
                    <span>评比任务</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="gather">采集任务</el-menu-item>
                    <el-menu-item index="review">评审任务</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index='3'>
                  <template slot="title">
                    <i class="el-icon-tickets"></i>
                    <span>资料查询</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="teacher">教师查询</el-menu-item>
                    <el-menu-item index="indicator">指标查询</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
               <el-submenu index='4'>
                  <template slot="title">
                    <i class="el-icon-help"></i>
                    <span>进度检测</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="collectProgress">采集进度</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
               <el-submenu index='5'>
                  <template slot="title">
                    <i class="el-icon-user"></i>
                    <span>个人数据</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="personal">个人档案</el-menu-item>
                  </el-menu-item-group>
              </el-submenu> -->
               <el-menu-item index='/files'>
                <i class="el-icon-s-check"></i>
                <span slot="title">档案审核</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="20" style="height: 100%;overflow: auto;">
                    <div class='main'>
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </div>
          </el-col>
		    </el-row>
         <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
        <el-form :model="form" size='mini' :rules="rules" ref="form" >
            <el-form-item label="账号" label-width="80px">
            <el-input v-model="form.account" autocomplete="off" style='width:200px;' :disabled="true" placeholder="admin" ></el-input>
            </el-form-item>
             <el-form-item label="原始密码" prop='old' label-width="80px">
            <el-input v-model="form.old" type="password" autocomplete="off" style='width:200px;' ></el-input>
            </el-form-item>
             <el-form-item label="新密码" prop='new' label-width="80px">
            <el-input v-model="form.new" type="password" autocomplete="off" style='width:200px;' ></el-input>
            </el-form-item>
            <el-form-item >
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </el-form-item>
        </el-form>
       
        </el-dialog>
   </div>
</template>
<script>
import {  removeToken } from '@/utils/auth'
export default {
  name: '',
  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.old) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      options:[{value:1,label:'一年级'},{value:2,label:'二年级'},{value:3,label:'三年级'}],
      value:'',
      dialogFormVisible:false,
      form:{
        account:'',
        old:'',
        new:''
      },
      rules:{
        old:[{required: true, message: '请输入原始密码', trigger: 'blur'}],
        new:[ { required: true, validator: validatePass2, trigger: 'blur' }],
      }
    }
  },
  components: {},
  computed: {
  },
  beforeMount () {},
  mounted () {},
  methods: {
    handleCommand(e){
      console.log(e)
      if(e==2){
          removeToken()
          this.$message({
              type: 'success',
              message: '退出成功'
          });
          this.$router.push('/');
      }else{
        this.dialogFormVisible = true
      }
    },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible=false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      
  },
  watch: {}
}
</script>
<style>
    .main{
        margin:30px;
        margin-bottom:0;
        /* padding:30px;
        background:#fff; */
    }
    .manage_page{
        height: 100%;
    }
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    line-height: 64px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-menu{
    background-color: #fff;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
    .el-header{
        padding:0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background:#2365AE;
    }
    .el-dropdown{
        height:42px;
        display: flex;
        align-items: center;
    }
    .avatar{
        width:42px;
        height:42px;
        margin-left:30px;
    }
	.el-dropdown-menu__item{
        text-align: center;
    }
    .logo_icon{
      width:42px;
      height:42px;
      margin-right:10px;
      border-radius: 50%;
    }
    .logo{
      display: flex;
      align-items:center;
      justify-content: center;
    }
    .logo_text{
      font-size:24px;
      color:#fff;
    }
    .avatar_box{
      color:#fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .avatar_box i{
      font-size:20px;
      margin:0 10px;
    }
    .name{
      color:#fff;
      margin-left:10px;
    }
    .menu_logo{
      width:80%;
      margin:20px auto;
      height:30px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .menu_icon{
      width:20px;
      height:20px;
      margin-right:4px;
    }
    .menu_text{
      font-size:16px;
      font-weight:bold;
    }
    .selects{
      display: block;
      margin:0 auto;
      width:90%;
      padding-top:20px;
    }
</style>
