<template>
   <div class='target'>
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
        <el-card>
            <div id='main' style='height:400px;'></div>
        </el-card>
        <el-card>
            <div class='card_title'>
                <div class='card_left'>
                    <el-tag>指标一</el-tag>
                    <p class='card_tips'>获奖荣誉</p>
                </div>
                <div class='card_right'>
                    国家级 5分/项；省级 4分/项；市级 3分/项
                </div>
            </div>
            <div class='card_pro'>
                <div class='pro_left'>
                    <p class='pro_result'>3.1</p>
                    <p>均分</p>
                </div>
                <div class='pro_right'>
                    <div class='pro_list'>
                        <el-progress :percentage="10" :show-text='false' status="success" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>5分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                    <div class='pro_list'>
                        <el-progress :percentage="16" :show-text='false' status="success" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>4分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                     <div class='pro_list'>
                        <el-progress :percentage="30" :show-text='false' status="warning" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>3分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                    <div class='pro_list'>
                        <el-progress :percentage="46" :show-text='false' status="warning" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>2分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                    <div class='pro_list'>
                        <el-progress :percentage="16" :show-text='false' status="exception" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>1分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                    <div class='pro_list'>
                        <el-progress :percentage="10" :show-text='false' status="exception" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>0分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                </div>
            </div>
        </el-card>
        <el-card>
            <div class='card_title'>
                <div class='card_left'>
                    <el-tag>指标一</el-tag>
                    <p class='card_tips'>科研成果</p>
                </div>
                <div class='card_right'>
                    国家级 5分/项；省级 4分/项；市级 3分/项
                </div>
            </div>
            <div class='card_pro'>
                <div class='pro_left'>
                    <p class='pro_result'>3.1</p>
                    <p>均分</p>
                </div>
                <div class='pro_right'>
                    <div class='pro_list'>
                        <el-progress :percentage="10" :show-text='false' status="success" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>5分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                    <div class='pro_list'>
                        <el-progress :percentage="16" :show-text='false' status="success" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>4分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                     <div class='pro_list'>
                        <el-progress :percentage="30" :show-text='false' status="warning" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>3分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                    <div class='pro_list'>
                        <el-progress :percentage="46" :show-text='false' status="warning" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>2分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                    <div class='pro_list'>
                        <el-progress :percentage="16" :show-text='false' status="exception" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>1分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                    <div class='pro_list'>
                        <el-progress :percentage="10" :show-text='false' status="exception" :stroke-width="8"></el-progress>
                        <p class='pro_fen'>0分：12人 </p>
                        (<span class='pro_name'>张龙龙，张龙龙，张龙龙，张龙龙</span>)
                    </div>
                </div>
            </div>
        </el-card>
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
                        text: '各指标均分'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ['获奖荣誉', '科研成果', '基本功', '教学计划', '教学总结', '教学成绩']
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
                        barMaxWidth:'36%',
                        itemStyle:{
                            color:'#409EFF'
                        },
                        label:{
                            show: true,
                            position: 'top',
                            color:'#409EFF'
                        },
                        data: [7, 15, 19, 10, 10, 3]
                    }]
                };
                this.myChart.setOption(option)
            }
  },
  watch: {}
}
</script>
<style>
.target .choose{
    display: flex;
    align-items:center;
    justify-content:flex-start;
    margin-bottom:20px;
}

.target .el-card__body{
    padding:16px;
    padding-bottom:0;
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
</style>
