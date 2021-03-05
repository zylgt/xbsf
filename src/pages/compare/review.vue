<template>
   <div class='review'>
        <!-- 查询和其他操作 -->
        <div class="filter-container">
           <p>任务：</p> 
            <el-select v-model="value" placeholder="请选择" >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
            <p>指标：</p> 
            <el-select v-model="value" placeholder="请选择" >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
          <el-input v-model.trim="name" clearable class="filter-item" style="width: 200px;" placeholder="请输入教师名"/>
          <el-button class="filter-item" type="primary" icon="el-icon-search">查找</el-button>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="未评审" name="1"></el-tab-pane>
            <el-tab-pane label="已评审" name="2"></el-tab-pane>
        </el-tabs>
        <div class='review_list' v-for='(item,index) in options' :key="index" >
            <div class='review_info'>
                <img src="../../../static/image/avatar.png" alt="" class='review_avatar' >
                <div class='review_message'>
                    <p class='review_name'>猫咪</p>
                    <p class='review_honour'>获奖荣誉（国家级，最高5分）</p>
                    <div class='review_img_box'>
                        <el-image 
                        class='review_img'
                            :src="url" 
                            :preview-src-list="srcList">
                        </el-image>
                    </div>
                </div>
                <div class='review_time'>一天前</div>
            </div>
            <div class='review_num' v-if='activeName==1'  >
                <p class='review_label'>
                    评分<span class='review_tip'>*</span>:
                </p>
                <p :class='["review_result",grade==1?"review_results":""]' @click='grade=1' >1</p>
                <p :class='["review_result",grade==2?"review_results":""]' @click='grade=2' >2</p>
                <p :class='["review_result",grade==3?"review_results":""]' @click='grade=3' >3</p>
                <p :class='["review_result",grade==4?"review_results":""]' @click='grade=4' >4</p>
                <p :class='["review_result",grade==5?"review_results":""]' @click='grade=5' >5</p>
            </div>
             <div class='review_num' v-else >
                <p class='review_label'>
                    评分<span class='review_tip'>*</span>:
                </p>
                <p :class='["review_result",grade==1?"review_results":""]'  >1</p>
                <p :class='["review_result",grade==2?"review_results":""]'  >2</p>
                <p :class='["review_result",grade==3?"review_results":""]'  >3</p>
                <p :class='["review_result",grade==4?"review_results":""]'  >4</p>
                <p :class='["review_result",grade==5?"review_results":""]'  >5</p>
            </div>
            <div class='review_num'>
                 <p class='review_label'>
                    评语:
                </p>
                <el-input
                type="textarea"
                :rows="4"
                maxlength="600"
                show-word-limit
                placeholder="请对老师的成果进行评价鼓励"
                v-model="textarea" v-if='activeName==1' >
                </el-input>
                <div class='review_comment' v-else>评语这里是评语这里是评语这里是评语这里是评语这里是评语这里是评语这里是</div>
            </div>
            <el-button type="primary" size='medium' :disabled='grade==""' v-if='activeName==1' >提交</el-button>
        </div>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        activeName:'1',
        textarea:'',
        value:'',
        name:'',
        grade:'',
        disabled:true,
        options:[{value:1,label:'2019-2020期末教师评比'},{value:2,label:'2020-2021期末教师评比'},
        {value:3,label:'2019-2021期末教师评比'}],
        url:'https://hbtv-1302663429.file.myqcloud.com/img/img1614651639.jpg',
        srcList:['https://hbtv-1302663429.file.myqcloud.com/img/img1614651639.jpg']
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
      gradeName(e){
          console.log(e)
      }
  },
  watch: {}
}
</script>
<style>
.review .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom:30px;
}
.review .el-input{
  margin-right:20px;
}
.review .el-select{
  margin-right:20px;
}
.review .review_list{
    padding:20px 0;
    border-bottom:1px solid #ddd;
}
.review .review_info{
    display: flex;
    align-items: flex-start;
    position: relative;
    margin-bottom:16px;
}
.review .review_time{
    font-size:12px;
    color:#666;
    position: absolute;
    right:20px;
    top:0;
}
.review .review_avatar{
    width:60px;
    height:60px;
    border-radius:50%;
    margin-right:20px;
}
.review .review_name{
    font-size:16px;
    margin-bottom:4px;
}
.review .review_honour{
    font-size:12px;
    margin-bottom:10px;
    color:#444;
}
.review .review_img_box{
    display: flex;
    flex-wrap: wrap;
}
.review .review_img{
    width:160px;
    margin-right:20px;
    margin-bottom:10px;
}
.review .review_label{
    margin-right:20px;
    width:60px;
}
.review .review_num{
    display: flex;
    align-items: center;
    margin-bottom:16px;
    font-size:14px;
    color:#666;
}
.review .review_tip{
    color:#f00;
}
.review .review_result{
    width:30px;
    height:30px;
    margin-right:10px;
    text-align: center;
    line-height:30px;
    background:#bbb;
    color:#fff;
    font-weight:bold;
    border-radius:4px;
    cursor: pointer;
}
.review .review_results{
    background:#409EFF;
}
.review .review_comment{
    font-size:14px;
    color:#333;
}
.review .el-button{
    width:120px;
    display: block;
    margin:10px auto;
}
</style>
