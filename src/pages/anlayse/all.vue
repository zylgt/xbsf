<template>
   <div class='all'>
       <div class='choose'>
           <p>分析：</p> 
            <el-select v-model="value" placeholder="请选择" >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
       </div>
       <el-row :gutter="30">
           <el-col :span='6'>
                <el-card class="box-card">
                    <div class='card_header'>
                        <p>总均分</p>
                        <i class="el-icon-warning-outline"></i>
                    </div>
                    <div class='cont'>
                        26.5分
                    </div>
                    <div class='card_btm'>
                        <div class='btm_list'>参考指标6项</div>
                    </div>
                </el-card>
           </el-col>
           <el-col :span='6'>
                <el-card class="box-card">
                    <div class='card_header'>
                        <p>最高得分</p>
                        <i class="el-icon-warning-outline"></i>
                    </div>
                    <div class='cont'>
                        26.5分
                    </div>
                    <div class='card_btm'>
                        <div class='btm_list'>孔玲玲</div>
                        <div class='btm_list'>语文</div>
                    </div>
                </el-card>
           </el-col>
           <el-col :span='6'>
                <el-card class="box-card">
                    <div class='card_header'>
                        <p>参加人数</p>
                        <i class="el-icon-warning-outline"></i>
                    </div>
                    <div class='cont'>
                        168人
                    </div>
                    <div class='card_btm'>
                        <div class='btm_list'>名单 200 人</div>
                        <div class='btm_list'>参与率 88%</div>
                    </div>
                </el-card>
           </el-col>
           <el-col :span='6'>
                <el-card class="box-card">
                    <div class='card_header'>
                        <p>评语数</p>
                        <i class="el-icon-warning-outline"></i>
                    </div>
                    <div class='cont'>
                        68份
                    </div>
                    <div class='card_btm'>
                        <div class='btm_list'>参评老师10位</div>
                    </div>
                </el-card>
           </el-col>
       </el-row>
       <el-row>
           <el-card>
               <el-col :span='18'>
                    <div id='main' style='height:400px;'></div>
                </el-col>
                    <el-col :span='4'>
                    <div class='teacher_order'>
                        <p class='teacher_title' >教师积分排名</p>
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
                <div class='title'>班级均分对比</div>
                <div class='class_box'>
                    <div class='class_item class_items'>
                        <div class='class_perfect' >31.6</div>
                        <div class='perfect_tips' >优秀班级均分</div>
                    </div>
                    <div class='class_item'>
                        <div class='class_perfect' >26.6</div>
                        <div class='perfect_tips' >较好班级均分</div>
                    </div>
                    <div class='class_item'>
                        <div class='class_perfect' >21.6</div>
                        <div class='perfect_tips' >一般班级均分</div>
                    </div>
                    <div class='class_item'>
                        <div class='class_perfect' >11.6</div>
                        <div class='perfect_tips' >较差班级均分</div>
                    </div>
                </div>
                <div class='grade_box'>
                    <div class='grade_list' v-popover:popovers >23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_lists'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_lists'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_lists'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_lists'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_lists'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_lists'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_lists'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_list'>23</div>
                    <div class='grade_lists'>23</div>
                </div>
                <el-popover
                    ref="popovers"
                    width='120'
                    placement="top-start"
                    trigger="hover"
                    popper-class='el-popovers'
                    >
                    <div>
                        <div class='popover_title' style='font-size:12px;font-weight:bold;'>
                            <p class='clicle'></p>
                            <p>七年级三班</p>
                        </div>
                        <div class='popover_list'>
                            <p class='popover_name'>张三</p>
                            <p class='popover_object'>语文</p>
                            <p class='popover_num'>34分</p>
                        </div>
                        <div class='popover_list'>
                            <p class='popover_name'>张三</p>
                            <p class='popover_object'>语文</p>
                            <p class='popover_num'>34分</p>
                        </div>
                    </div>
                </el-popover>
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
        visible:true,
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
      initData() {
                // 绘制图表
                const option = {
                    title: {
                        text: '教师积分分布'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['0-5', '5-10', '10-15', '15-20', '20-25', '25-30', '30-35', '35-40', '40-45', '45-50']
                    },
                    yAxis: {
                        splitLine:{
                             lineStyle:{
                                 type:'dashed'
                             }
                        }
                    },
                    series: [{
                        name: '销量',
                        type: 'bar',
                        barMaxWidth:'46%',
                        itemStyle:{
                            color:'#409EFF'
                        },
                        data: [7, 15, 19, 10, 10, 3,10,5,7,15,10]
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
.all .choose{
    display: flex;
    align-items:center;
    justify-content:flex-start;
    margin-bottom:20px;
}

.all .el-card__body{
    padding:16px;
    padding-bottom:0;
}
.all .card_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:14px;
    color:#666;
}
.all .cont{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:20px;
    font-weight: bold;
    width:100%;
    height:80px;
}
.all .card_btm{
    height:40px;
    border-top:1px solid #eee;
    display: flex;
    align-items: center;
    font-size:14px;
    color:#555;
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
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    color:#fff;
    background:#324057;
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
</style>
