<template>
   <div class='all'>
       <el-row :gutter="30">
           <el-col :span='6'>
                <el-card class="box-card">
                    <div class='card_header'>
                        <p>上传总量</p>
                    </div>
                    <div class='cont files_item2'>
                        1560 <span class='unit'>份</span> 
                    </div>
                    <div class='card_inner'>
                        <p>累积型档案</p>
                        <p>68%</p>
                        <p>1060份</p>
                    </div>
                    <div class='card_inner'>
                        <p>动态型档案</p>
                        <p>68%</p>
                        <p>1060份</p>
                    </div>
                    <div class='card_btm'>
                        <img src="../../../static/image/shape1.png" alt="" class='shape_img' >
                    </div>
                </el-card>
           </el-col>
           <el-col :span='6'>
                <el-card class="box-card">
                     <div class='card_header'>
                        <p>总均分</p>
                    </div>
                    <div class='cont files_item4'>
                        90 <span class='unit'>分</span> 
                    </div>
                    <div class='card_inner'>
                        <p>累积型档案均分</p>
                        <p>60分</p>
                    </div>
                    <div class='card_inner'>
                        <p>动态型档案均分</p>
                        <p>30分</p>
                    </div>
                    <div class='card_btm'>
                        <img src="../../../static/image/shape2.png" alt="" class='shape_img' >
                    </div>
                </el-card>
           </el-col>
           <el-col :span='6'>
                <el-card class="box-card">
                    <div class='card_flex'>
                        <div style='width:35%;' >
                             <div class='card_header'>
                                <p>教师级别</p>
                            </div>
                            <div class='cont files_item1'>
                                170 <span class='unit'>人</span> 
                            </div>
                             <img src="../../../static/image/shape3.png" alt="" class='shape_img shape_imgs'  >
                        </div>
                        <div>
                            <div class='card_inner'><p>正高级教师</p><p>68%</p><p>60人</p></div>
                            <div class='card_inner'><p>高级教师</p><p>68%</p><p>60人</p></div>
                            <div class='card_inner'><p>一级教师</p><p>68%</p><p>60人</p></div>
                            <div class='card_inner'><p>二级教师</p><p>68%</p><p>60人</p></div>
                            <div class='card_inner'><p>三级教师</p><p>68%</p><p>60人</p></div>
                        </div>
                    </div>
                </el-card>
           </el-col>
           <el-col :span='6'>
                <el-card class="box-card">
                   <div class='card_flex'>
                        <div style='width:35%;'>
                             <div class='card_header'>
                                <p>教师学历</p>
                            </div>
                            <div class='cont files_item3'>
                                170 <span class='unit'>人</span> 
                            </div>
                             <img src="../../../static/image/shape4.png" alt="" class='shape_img shape_imgs' >
                        </div>
                        <div>
                            <div class='card_inner'><p>博士</p><p>68%</p><p>1060人</p></div>
                            <div class='card_inner'><p>研究生</p><p>68%</p><p>1060人</p></div>
                            <div class='card_inner'><p>本科</p><p>68%</p><p>1060人</p></div>
                            <div class='card_inner'><p>大专</p><p>68%</p><p>1060人</p></div>
                        </div>
                    </div>
                </el-card>
           </el-col>
       </el-row>
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
       <el-row>
            <el-card>
                <div class='filter-container' >
                 <el-radio-group v-model="radio2"  @change="radioChange2" size='mini' >
                    <el-radio-button label="得分"></el-radio-button>
                    <el-radio-button label="数量"></el-radio-button>
                </el-radio-group>
                <el-input v-model.trim="keyword" clearable class="filter-item" style="width: 200px;" placeholder="关键字查询" size='small'/>
                <el-button class="filter-item" type="primary" icon="el-icon-search" size='small'>查找</el-button>
                <el-button class="filter-item" type="primary" icon="el-icon-plus" size='small'>导出</el-button>
                </div>
                 <el-table v-loading="listLoading" :data="list1" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>
                 <el-table-column align="center" label="序号" prop="id"/>

                <el-table-column align="center" label="姓名" prop="name"/>

                <el-table-column align="center" label="得分" prop="grade"/>

                <el-table-column align="center" label="排名" prop="order"/>

                <el-table-column align="center" label="荣誉获奖" prop="honour"/>

                <el-table-column align="center" label="科研培训" prop="study"/>

                <el-table-column align="center" label="科研成果" prop="result"/>

                <el-table-column align="center" label="课堂展示" prop="open"/>

                <el-table-column align="center" label="教学基本功" prop="base"/>

                <el-table-column align="center" label="教学计划" prop="plan"/>

                <el-table-column align="center" label="考试分析" prop="test"/>

                <el-table-column align="center" label="进修学习" prop="course"/>

                <el-table-column align="center" label="听课记录" prop="remeber"/>

                <el-table-column align="center" label="个人总结" prop="summary"/>
            </el-table>
            </el-card>
       </el-row>
   </div>
</template>
<script>
 var echarts = require('echarts');
export default {
  name: '',
  data () {
    return {
        options:[{value:1,label:'2019-2020期末教师评比'},{value:2,label:'2020-2021期末教师评比'},
        {value:3,label:'2019-2021期末教师评比'}],
        value:'',
        myChart:{},
        radio1:'得分',
        radio2:'得分',
        visible:true,
        listLoading:false,
        list1:[{id:1,name:'xxx',grade:'90',order:1,honour:2,study:2,result:3,open:3,base:3,plan:3,test:5,course:6,remember:6,summary:4},
        {id:1,name:'xxx',grade:'90',order:1,honour:2,study:2,result:3,open:3,base:3,plan:3,test:5,course:6,remember:6,summary:4},
        {id:1,name:'xxx',grade:'90',order:1,honour:2,study:2,result:3,open:3,base:3,plan:3,test:5,course:6,remember:6,summary:4},
        {id:1,name:'xxx',grade:'90',order:1,honour:2,study:2,result:3,open:3,base:3,plan:3,test:5,course:6,remember:6,summary:4}],
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
            {'name':'孔玲玲','order':10,'grade':50},]
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
      radioChange2(e){
          this.radio2 = e
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
.all .el-row{
    margin-bottom:30px;
}
.all .box-card{
    height:185px;
}
.all .choose{
    display: flex;
    align-items:center;
    justify-content:flex-start;
    margin-bottom:20px;
}
.all .radio_choose{
    position: absolute;
    left:200px;
    top:0;
}
.all .el-card__body{
    padding:16px;
    padding-bottom:0;
}
.all .card_header{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    color:#666;
    margin-bottom:8px;
}
.all .cont{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:20px;
    font-weight: bold;
    width:100%;
     margin-bottom:8px;
}
.all .unit{
    font-size:12px;
    margin-left:6px;
}
.all .card_inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:14px;
    color:#666;
    margin-bottom:10px;
}
.all .card_flex{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 165px;
}
.files_item1{
    color:#67C23A;
}
.files_item2{
    color:#409EFF;
}
.files_item3{
    color:#F56C6C;
}
.files_item4{
    color:#7948EA;
}
.all .card_btm{
    height:40px;
    border-top:1px solid #eee;
    display: flex;
    align-items: center;
    font-size:14px;
    color:#555;
}
.all .shape_img{
    width:100%;
}
.all .shape_imgs{
    width:80%;
    display: block;
    margin:0 auto;
    margin-top:20px;
}
.all .btm_list{
    margin-right:10px;
}
.all .teacher_order{
    height:100%;
}
.all .teacher_title{
    font-size:16px;
    height:30px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom:20px;
}
.all .teacher_tiem{
    display: flex;
    align-items: center;
    height:30px;
    justify-content: space-between;
}
.all .teacher_num{
    width:20px;
    height:20px;
    text-align: center;
    line-height: 20px;
    color:#fff;
    background:#409EFF;
    font-size:12px;
    font-weight:bold;
}
.all .teacher_nums{
    background:#eee;
    color:#333;
}
.all .teacher_name{
    font-size:14px;
    color:#666;
}
.all .teacher_grade{
    font-size:14px;
    color:#666;
}.all .title{
     font-size:16px;
    height:30px;
    line-height: 30px;
    font-weight: bold;
    margin-bottom:20px;
}
.all .class_box{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:30px;
}
.all .class_item{
    margin:0 30px;
}
.all .class_items .class_perfect{
    background:#409EFF;
}
.all .class_items .perfect_tips{
    color:#409EFF;
}
.all .class_perfect{
    width:60px;
    height:60px;
    text-align:center;
    line-height:60px;
    border-radius:50%;
    font-size:14px;
    color:#fff;
    font-weight: bold;
    background:#bbb;
    margin:0 auto;
    margin-bottom:4px;
}
.all .perfect_tips{
    font-size:12px;
    color:#bbb;
    text-align: center;
}
.all .grade_box{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.all .grade_list{
    width:30px;
    height:30px;
    border-radius:4px;
    background:#bbb;
    color:#fff;
    font-size:16px;
    margin:15px;
    text-align: center;
    line-height: 30px;
}
.all .grade_lists{
    width:30px;
    height:30px;
    border-radius:4px;
    color:#fff;
    font-size:16px;
    margin:15px;
    text-align: center;
    line-height: 30px;
    background:#409EFF;
}
.el-popovers .popover_title{
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size:14px;
    margin-bottom:6px;
}
.el-popovers .clicle{
    display: block;
    width:14px;
    height:14px;
    border-radius:50%;
    background:#409EFF;
    margin-right:10px;
}
.el-popovers .popover_list{
    display: flex;
    align-items: center;
    font-size: 12px;
    width:100%;
}
.el-popovers .popover_name{
    width:33%;
}
.el-popovers .popover_object{
    width:33%;
}
.el-popovers .popover_num{
    width:33%;
}
.el-popovers{
    min-width:120px;
}
.all .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size:12px;
  margin-bottom:30px;
}
.all .el-input{
    margin:0 20px;
}
</style>
