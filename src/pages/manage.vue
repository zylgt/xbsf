<template>
   <div class="manage_page fillcontain">
         <el-row>
            <el-header height='64px' >
                <div class='logo' >
                  <img src="../../static/image/logo.jpeg" alt="" class='logo_icon' >
                  <p class='logo_text'>北京市海淀北部新区实验学校</p>
                </div>
                <div class='avatar_box'>
                    <i class="el-icon-search" style="width:22px;height:22px;" ></i>
                    <i class='el-icon-question'></i>
                    <i class='el-icon-bell'></i>
                    <el-dropdown  @command="handleCommand" menu-align='start'>
                        <img src="../../static/image/avatar.png" class="avatar">
                        <p class='name'>用户名</p>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="signout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
         </el-row>
         <el-row style="height: 90%;">
          <el-col :span="4"  style="min-height: 100%;height:100%;over-flow:auto;background-color: #fff;">
            <div class='menu_logo'>
              <img src="" alt="" class='menu_icon' >
              <p class='menu_text'>评比系统</p>
            </div>
              <el-select v-model="value" placeholder="请选择" class='selects' >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            <el-menu default-active="all" style="min-height: 84%;" router>
              <el-submenu index='1'>
                  <template slot="title">
                    <i class="el-icon-data-line"></i>
                    <span>评比分析</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="all">整体分析</el-menu-item>
                    <el-menu-item index="achievement">成绩分析</el-menu-item>
                    <el-menu-item index="target">指标分析</el-menu-item>
                    <el-menu-item index="compare">对比分析</el-menu-item>
                    <el-menu-item index="comment">评语分析</el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index='2'>
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
              </el-submenu>
              <!-- <el-menu-item index="qx50"><i class="el-icon-document"></i>QX50 - 移动站点</el-menu-item>
              <el-menu-item index="qx50l"><i class="el-icon-star-on"></i>Q50L - 车书</el-menu-item>
              <el-menu-item index="mini3d"><i class="el-icon-edit"></i>留资 - 3D小程序</el-menu-item>
              <el-menu-item index="miniprogram"><i class="el-icon-setting"></i>全系 - 预约小程序</el-menu-item> -->
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
   </div>
</template>
<script>
import {  removeToken } from '@/utils/auth'
export default {
  name: '',
  data () {
    return {
      options:[{value:1,label:'一年级'},{value:2,label:'二年级'},{value:3,label:'三年级'}],
      value:''
    }
  },
  components: {},
  computed: {
  },
  beforeMount () {},
  mounted () {},
  methods: {
    handleCommand(){
      removeToken()
      this.$message({
          type: 'success',
          message: '退出成功'
      });
      this.$router.push('/');
    }
  },
  watch: {}
}
</script>
<style>
    .main{
        margin:30px;
        margin-bottom:0;
        padding:30px;
        background:#fff;
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
        background:#324057;
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
      font-size:28px;
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
    }
</style>
