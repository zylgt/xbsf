<template>
   <div class='gather'>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="进行中任务" name="1"></el-tab-pane>
            <el-tab-pane label="已完成任务" name="2"></el-tab-pane>
        </el-tabs>
        <div class='task_box'>
            <el-card>
                <div class='task_title'>期末教师评比数据</div>
                <div class='task_tips'>进度：<span class='task_red'>100</span>/200 (已完成/总数)</div>
                <div class='task_tips'>时间：剩<span class='task_red'>28</span>天</div>
                <div class='border'></div>
                <div class='task_tips'>当前进度：50%</div>
                <el-progress :percentage="10" :show-text='false' :stroke-width="8"></el-progress>
                <div class='task_tips task_label'>（共6项填报数据）</div>
                <el-button type="primary" size="small" @click="taskDetail" >查看详情</el-button>
            </el-card>

        </div>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        activeName:'1'
    }
  },
  components: {},
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      taskDetail(){
          this.$router.push('/task')
      }
  },
  watch: {}
}
</script>
<style>
.gather .task_box{
    display: flex;
    align-self: center;
    flex-wrap: wrap;
    justify-content:flex-start;
}
.gather .el-card{
    width:22%;
    min-width:200px;
    margin-right:30px;
    margin-bottom:30px;
}
.gather .task_title{
    font-size:26px;
    color:#333;
    font-weight: bold;
    margin-bottom:10px;
}
.gather .task_tips{
    font-size:14px;
    color:#666;
    margin-bottom:4px;
}
.gather .el-progress{
    margin-bottom:6px;
}
.gather .task_label{
    font-size:12px;
}
.gather .border{
    border-bottom:1px dashed #ddd;
    margin:10px 0;
}
.gather .el-button{
    width:86%;
    display: block;
    margin:10px auto;
}
.gather  .task_red{
    color:#f00;
}
</style>
