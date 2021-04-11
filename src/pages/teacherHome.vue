<template>
   <div class='teacherHome'>
       <el-card class='elcard'>
            <div class="filter-container">
           <p>年级：</p> 
            <el-select v-model="value" placeholder="请选择" size='small' >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
            <p>科目：</p> 
            <el-select v-model="value" placeholder="请选择"  size='small'>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
          <p>老师：</p>
           <el-select v-model="value" placeholder="请选择"  size='small'>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
          <el-button class="filter-item" type="primary" icon="el-icon-search" size='small'>查找</el-button>
        </div>
       </el-card>
       <el-card>
           <div class='teacher_group'>
               <div class='tacher_list' v-for='(item,index) in list' :key='index' >
                   <div class='teacher_info'>
                       <img src="../../static/image/avatar.png" alt="" class='teacher_avatar' >
                       <div>
                           <p class='teacher_company' >张建军工作室</p>
                           <p class='teacher_object'>语文</p>
                           <p class='teacher_object'>高级教师</p>
                       </div>
                   </div>
                   <div class='teacher_btm'>
                       <p class='btm_item'>
                           得分：80分
                       </p>
                       <p class='btm_item'>
                           资源：50分
                       </p>
                   </div>
               </div>
           </div>
           <el-button class='more_btn' >加载更多...</el-button>
       </el-card>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        list:[1,1,1,1,1,1,1,1,1,1,1]
    }
  },
  components: {},
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {},
  watch: {}
}
</script>
<style>
.elcard{
    margin-bottom:20px;
}
.teacherHome .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size:14px;
}
.teacherHome .el-input{
  margin-right:20px;
}
.teacherHome .el-select{
  margin-right:20px;
}
.teacherHome .teacher_group{
    display: flex;
    flex-wrap: wrap;
}
.teacherHome .tacher_list{
    width:265px;
    height:140px;
    margin-right:40px;
    margin-bottom:40px;
    border:1px solid #e9e9e9;
}
.teacherHome .teacher_info{
    height:109px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid #e9e9e9;
}
.teacherHome .teacher_avatar{
    width:67px;
    height:67px;
    border-radius:50%;
    margin-right:35px;
}
.teacherHome .teacher_company{
    font-size:18px;
    color:#666;
    margin-bottom:6px;
    text-align: center;
}
.teacherHome .teacher_object{
    font-size:14px;
    color:#999;
    margin-bottom:6px;
    text-align: center;
}
.teacherHome .teacher_btm{
    display: flex;
    align-items: center;
}
.teacherHome .btm_item{
    width:50%;
    text-align: center;
    font-size:14px;
    color:#999;
    height:30px;
    line-height: 30px;;
}
.teacherHome .btm_item:first-child{
    border-right:1px solid #e9e9e9;
}
.teacherHome .more_btn{
    display: block;
    margin:0 auto;
}
</style>
