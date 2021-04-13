<template>
   <div class='target'>
       <el-card class='el-card' >
           <div class='filter-container'>
            <p>指标类型：</p> 
                <el-select v-model="target" placeholder="请选择" size='small' >
                <el-option
                    v-for="item in targetoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
             <p>年级：</p> 
                <el-select v-model="grade" placeholder="请选择" size='small' >
                <el-option
                    v-for="item in gradeoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
             <p>科目：</p> 
                <el-select v-model="object" placeholder="请选择" size='small' >
                <el-option
                    v-for="item in objectoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
        </div>
       </el-card>
        <el-row>
           <el-card>
               <el-col :span='18' style="position:relative;" >
                    <div id='main' style='height:400px;'></div>
                    <el-radio-group v-model="radio1" class='radio_choose' @change="radioChange" size='mini' >
                        <el-radio-button label="得分"></el-radio-button>
                        <el-radio-button label="数量"></el-radio-button>
                    </el-radio-group>
                </el-col>
                <el-col :span='4'>
                    <div class='teacher_order'>
                        <p class='teacher_title' >教师资源排名</p>
                        <p class='teacher_tiem' v-for="(item,index) in teacherOrder" :key='index' >
                            <span :class='["teacher_num",item.order>3?"teacher_nums":""]' >{{item.order}}</span>
                            <span class='teacher_name'>{{item.name}}</span>
                            <span class='teacher_grade'>{{item.grade}}</span>
                        </p>
                    </div>
                </el-col>
           </el-card>
       </el-row>
        <el-card>
                 <el-table v-loading="listLoading" :data="list1" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>
                 <el-table-column align="center" label="序号" prop="id"/>

                <el-table-column align="center" label="姓名" prop="name"/>

                <el-table-column align="center" label="得分/数量" prop="grade"/>

                <el-table-column align="center" label="排名" prop="order"/>

                <el-table-column align="center" label="年级" prop="class"/>

                <el-table-column align="center" label="科目" prop="object"/>

                <el-table-column align="center" label="内容名称" prop="inner"/>

                <el-table-column align="center" label="级别" prop="level"/>

                <el-table-column align="center" label="文件类型" prop="type"/>

                <el-table-column align="center" label="下载">
                        <template>
                            <span class='handle'> <i class='el-icon-download' ></i> </span>
                        </template>
                </el-table-column>
            </el-table>
            </el-card>
   </div>
</template>
<script>
 var echarts = require('echarts');
export default {
  name: '',
  data () {
    return {
        targetoptions:[{value:1,label:'个人总结'},{value:2,label:'荣誉获奖'},{value:3,label:'研修培训'}],
        gradeoptions:[{value:1,label:'七年级'},{value:2,label:'八年级'},{value:3,label:'九年级'}],
        objectoptions:[{value:1,label:'语文'},{value:2,label:'数学'},{value:3,label:'英语'}],
        target:'',
        grade:'',
        object:'',
        myChart:{},
        radio1:'得分',
        teacherOrder:[
            {'name':'孔玲玲','order':1,'grade':50},
            {'name':'孔玲玲','order':2,'grade':50},
            {'name':'孔玲玲','order':3,'grade':50},
            {'name':'孔玲玲','order':4,'grade':50},
            {'name':'孔玲玲','order':5,'grade':50},
            {'name':'孔玲玲','order':6,'grade':50},
            {'name':'孔玲玲','order':7,'grade':50},
            {'name':'孔玲玲','order':8,'grade':50},
            {'name':'孔玲玲','order':9,'grade':50},
            {'name':'孔玲玲','order':10,'grade':50},],
        listLoading:false,
        list1:[{id:1,name:'xxx',grade:'90',order:1,class:'七年级',object:'语文',inner:'背诵课文',level:'省级',type:'word'},
        {id:2,name:'xxx',grade:'90',order:1,class:'七年级',object:'语文',inner:'背诵课文',level:'省级',type:'word'},
        {id:3,name:'xxx',grade:'90',order:1,class:'七年级',object:'语文',inner:'背诵课文',level:'省级',type:'word'},
        {id:4,name:'xxx',grade:'90',order:1,class:'七年级',object:'语文',inner:'背诵课文',level:'省级',type:'word'},],
    }
  },
  components: {},
  computed: {},
  beforeMount () {},
  mounted () {
      this.myChart = echarts.init(document.getElementById('main'));
       this.initData();
  },
  methods: {
      radioChange(e){
          this.radio1 = e
          this.initData();
      },
      initData() {
          let that = this;
                // 绘制图表
                const option = {
                    title: {
                        text: '教师总体分析'
                    },
                    tooltip: {},
                    xAxis: {
                        axisTick:{
                            show:false
                        },
                        axisLabel:{
                            interval:0
                        },
                        data: ['荣誉获奖', '研修培训', '科研成果', '课堂展示', '教学基本功', '教学计划', '教学总结', '考试分析', '进修学习', '听课记录','个人总结']
                    },
                    yAxis: {
                        splitLine:{
                             lineStyle:{
                                 type:'dashed'
                             }
                        }
                    },
                    series: [{
                        name: that.radio1,
                        type: 'bar',
                        barMaxWidth:'46%',
                        itemStyle:{
                            color:'#409EFF'
                        },
                        data: [7, 15, 19, 10, 10, 3,10,5,7,15,10,7]
                    }]
                };
                this.myChart.setOption(option)
       }
  },
  watch: {}
}
</script>
<style>
.target .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size:12px;
}
.target .el-select{
  margin-right:20px;
}
.target .el-card__body{
    padding:16px;
}
.target .card_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:14px;
    color:#666;
}
.target .el-card{
    margin-bottom:30px;
}
.target .card_title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:1px solid #eee;
    padding-bottom:16px;
    margin-bottom:20px;
    padding-right:20px;
}
.target .card_left{
    font-size:14px;
    display: flex;
    align-items: center;
}
.target .card_tips{
    margin-left:20px;
}
.target .card_right{
    font-size:12px;
    color:#666;
}
.target .card_pro{
    display: flex;
    align-items: center;
}
.target .pro_left{
    width:20%;
    font-size:14px;
    color: #666;
    text-align: center;
}
.target .pro_result{
    font-size:38px;
    font-weight: bold;
    text-align: center;
    color:#333;
}
.target .pro_list{
    display: flex;
    align-items: center;
    font-size:14px;
    color:#666;
    margin-bottom:15px;
}
.target .pro_fen{
    margin:0 10px;
    color:#333;
}
.target .pro_name{
    font-size: 12px;
    color:#666;
    width:15%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.target .pro_right{
    width:100%;
}
.target .el-progress{
    width:66%;
}
.target .radio_choose{
    position: absolute;
    left:200px;
    top:0;
}
.target .teacher_order{
    height:100%;
}
.target .teacher_title{
    font-size:16px;
    height:30px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom:20px;
}
.target .teacher_tiem{
    display: flex;
    align-items: center;
    height:30px;
    justify-content: space-between;
}
.target .teacher_num{
    width:20px;
    height:20px;
    text-align: center;
    line-height: 20px;
    color:#fff;
    background:#409EFF;
    font-size:12px;
    font-weight:bold;
}
.target .teacher_nums{
    background:#eee;
    color:#333;
}
.target .teacher_name{
    font-size:14px;
    color:#666;
}
.target .teacher_grade{
    font-size:14px;
    color:#666;
}
.target .handle{
    font-size:16px;
    color:#1890FF;
    cursor: pointer;
}
</style>
