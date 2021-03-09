<template>
   <div class='comment'>
        <div class="filter-container">
           <p>分析：</p> 
            <el-select v-model="value" placeholder="请选择" size='small' >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
            <p>指标：</p> 
            <el-select v-model="value" placeholder="请选择"  size='small'>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
            <p>教师：</p>
          <el-input v-model.trim="name" clearable class="filter-item" placeholder="请输入姓名" size='small'/>
          <p>只看未读：</p>
          <el-switch
            v-model="value1">
          </el-switch>
          <p>只看收藏：</p>
          <el-switch
            v-model="value2">
          </el-switch>
          <el-button class="filter-item" type="primary" icon="el-icon-search" size='small'>查找</el-button>
          <el-button :loading="downloadLoading" class="filter-item" type="primary" size='small' icon="el-icon-download" >导出</el-button>
        </div>
        <div class='comment_list'>
          <p class='comment_title'>1. 国家级 &nbsp;&nbsp;&nbsp; 被评老师：朱晓丽 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 账号：2879e83ee</p>
           <el-image 
            class='comment_img'
            :src="url" 
            :preview-src-list="srcList" >
          </el-image>
          <p class='comment_title'>评语（朱兰兰老师点评）</p>
            <el-input
                type="textarea"
                :rows="6"
                maxlength="600"
                :disabled="true"
                show-word-limit
                v-model="textarea">
            </el-input>
          <div class='action'>
              <el-radio v-model="reads" label="1">已读</el-radio>
              <el-radio v-model="reads" label="2">未读</el-radio>
              积分：<span class='collect_num'>5分</span>
              <img src="../../../static/image/collect.png" alt="" class='collect_icon' >
          </div>
        </div>
        <Pagination v-show="total>0" :total="total" :page.sync="page" limit.sync="10" />
   </div>
</template>
<script>
import Pagination from '@/components/Pagination' 
export default {
  name: '',
  data () {
    return {
       options:[{value:1,label:'2019-2020期末教师评比'},{value:2,label:'2020-2021期末教师评比'},
        {value:3,label:'2019-2021期末教师评比'}],
        value:'',
        name:'',
        downloadLoading:false,
        value1:true,
        value2:true,
        page:1,
        total:10,
        reads:"1",
        textarea:'专业知识过硬，风趣幽默。善于观察，给与每个人发言的机会，经常表扬，看学生的性格和接受程度给与一定批评。认真，大度，循循善诱，和蔼鼓励，不耻下问，以身作则。不放弃每一个学生。一心只想着学生，细心寻找每个学生尤其是学习成绩差的学生在其他方面的优点。观学生之所观，想学生之所想。尽全力维护学生的自尊心。有亲和力。 把学生当成了自己的孩子。',
        url:'https://hbtv-1302663429.file.myqcloud.com/img/img1614651639.jpg',
        srcList:['https://hbtv-1302663429.file.myqcloud.com/img/img1614651639.jpg']

    }
  },
  components: { Pagination },
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {},
  watch: {}
}
</script>
<style >
.comment .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom:30px;
  font-size:14px;
}
.comment .el-input{
  margin-right:20px;
  width:120px;
}
.comment .el-select{
  margin-right:20px;
  width:120px;
}
.comment .el-switch{
  margin-right:20px;
}
.comment .comment_list{
  font-size:14px;
  font-weight: bold;
  color:#333;
  position: relative;
}
.comment .comment_title{

  margin-bottom:16px;
}
.comment .comment_img{
  width:140px;
  margin-bottom:14px;
}
.comment .collect_icon{
  width:22px;
  height:22px;
}
.comment .action{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top:0;
  right:0;
  font-size:14px;
}
.comment .collect_num{
  font-size:20px;
  color:#409EFF;
  margin-right:20px;
}
</style>
