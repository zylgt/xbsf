<template>
   <div class='taskBox'>
       <el-page-header @back="goBack" content="期末教师数据评比采集">
       </el-page-header>
       <div class='task_list'>
           <div class='task_title'>任务一：获奖荣誉</div>
            <el-radio-group v-model="radio">
                <el-radio :label="3">国家级</el-radio>
                <el-radio :label="6">省级</el-radio>
                <el-radio :label="9">市级</el-radio>
            </el-radio-group>
            <div class='task_num'>最高分值：5分</div>
            <div class='task_up'>材料：
                <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </div>
       </div>
        <div class='task_list'>
           <div class='task_title'>任务二：获奖荣誉</div>
            <el-radio-group v-model="radio">
                <el-radio :label="3">国家级</el-radio>
                <el-radio :label="6">省级</el-radio>
                <el-radio :label="9">市级</el-radio>
            </el-radio-group>
            <div class='task_num'>最高分值：5分</div>
            <div class='task_up'>材料：
                <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </div>
       </div>
        <el-button type="primary" size="medium">提交</el-button>
        <div class='submit_tips'>未被审核前都可以修改</div>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        dialogImageUrl: '',
        dialogVisible: false,
        radio:3
    }
  },
  components: {},
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      goBack() {
        this.$router.back(-1)
      }
  },
  watch: {}
}
</script>
<style>
.taskBox{
    padding-bottom:30px;
}
.taskBox .task_list{
    padding:30px 0;
    border-bottom:1px dashed #ddd;
}
.taskBox .task_title{
    font-size:16px;
    font-weight: bold;
    margin-bottom:16px;
}
.taskBox .el-radio-group{
    margin-bottom:16px;
}
.taskBox .el-radio{
     color:#333;
}
.taskBox .task_num{
    font-size:14px;
    color:#666;
    margin-bottom:16px;
}
.taskBox .task_up{
    font-size:14px;
    color:#666;
    display: flex;
    flex-wrap: wrap;
}
.taskBox .el-upload--picture-card{
    width:120px;
    height:120px;
    line-height:120px;
}
.taskBox .el-upload-list--picture-card .el-upload-list__item{
    width:120px;
    height:120px;
}
.taskBox .submit_tips{
    width:100%;
    text-align: center;
    font-size:12px;
    color:#666;
}
.taskBox .el-page-header__content{
    font-size:14px;
    color:#333;
}
</style>
