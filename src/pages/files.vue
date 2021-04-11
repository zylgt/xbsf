<template>
   <div class='files'>
       <el-card class="elcard">
           <div class='files_message'>
               <div class='files_item files_item1'>
                   已审核
                   <div> <span class='fils_tip' >10</span> 个附件</div>
               </div>
               <div class='files_item files_item4'>
                   待审核
                   <div> <span class='fils_tip' >10</span> 个附件</div>
               </div>
               <div class='files_item files_item3'>
                   驳回
                   <div> <span class='fils_tip' >10</span> 个附件</div>
               </div>
           </div>
       </el-card>
       <el-card>
           <div class='compont_list'>
               <div class='compont_message'>
                   <img src="../../static/image/img.png" alt="" class='message_img' >
                   <div class='compont_info'>
                       <p class='compont_type' >类型：获奖荣誉</p>
                       <p class='compont_type' >等级：省级</p>
                       <p class='compont_type' >时间：2015年6月</p>
                       <p>
                            <el-button  type="primary" size='mini'>预览</el-button>
                            <el-button  type="primary" size='mini'>下载</el-button>
                       </p>
                   </div>
               </div>
               <div class='compont_num' >
                    <p class='compont_label'>
                        <span class='compont_tip'>*</span>评分:
                    </p>
                    <p :class='["compont_result",grade==1?"compont_results":""]' @click='grade=1' >1</p>
                    <p :class='["compont_result",grade==2?"compont_results":""]' @click='grade=2' >2</p>
                    <p :class='["compont_result",grade==3?"compont_results":""]' @click='grade=3' >3</p>
                    <p :class='["compont_result",grade==4?"compont_results":""]' @click='grade=4' >4</p>
                    <p :class='["compont_result",grade==5?"compont_results":""]' @click='grade=5' >5</p>
                </div>
                <div class='compont_num'>
                    <p class='compont_label'>
                        <span class='compont_tip'>*</span>评语:
                    </p>
                    <el-input
                    type="textarea"
                    :rows="2"
                    maxlength="600"
                    show-word-limit
                    placeholder="请对老师的成果进行评价鼓励"
                    v-model="textarea" >
                    </el-input>
                </div>
                <el-button  type="primary" class="sub_mit" size='mini' >提交</el-button>
           </div>
           <div class='compont_list'>
               <div class='compont_message'>
                   <img src="../../static/image/img.png" alt="" class='message_img' >
                   <div class='compont_info'>
                       <p class='compont_type' >类型：获奖荣誉</p>
                       <p class='compont_type' >等级：省级</p>
                       <p class='compont_type' >时间：2015年6月</p>
                       <p>
                            <el-button  type="primary" size='mini'>预览</el-button>
                            <el-button  type="primary" size='mini'>下载</el-button>
                       </p>
                   </div>
               </div>
               <div class='compont_num' >
                    <p class='compont_label'>
                        <span class='compont_tip'>*</span>评分:
                    </p>
                    <p :class='["compont_result",grade==1?"compont_results":""]' @click='grade=1' >1</p>
                    <p :class='["compont_result",grade==2?"compont_results":""]' @click='grade=2' >2</p>
                    <p :class='["compont_result",grade==3?"compont_results":""]' @click='grade=3' >3</p>
                    <p :class='["compont_result",grade==4?"compont_results":""]' @click='grade=4' >4</p>
                    <p :class='["compont_result",grade==5?"compont_results":""]' @click='grade=5' >5</p>
                </div>
                <div class='compont_num'>
                    <p class='compont_label'>
                        <span class='compont_tip'>*</span>评语:
                    </p>
                    <el-input
                    type="textarea"
                    :rows="2"
                    maxlength="600"
                    show-word-limit
                    placeholder="请对老师的成果进行评价鼓励"
                    v-model="textarea" >
                    </el-input>
                </div>
                <el-button  type="primary" class="sub_mit" size='mini' >提交</el-button>
           </div>
           <div class='compont_list'>
               <div class='compont_message'>
                   <img src="../../static/image/img.png" alt="" class='message_img' >
                   <div class='compont_info'>
                       <p class='compont_type' >类型：获奖荣誉</p>
                       <p class='compont_type' >等级：省级</p>
                       <p class='compont_type' >时间：2015年6月</p>
                       <p>
                            <el-button  type="primary" size='mini'>预览</el-button>
                            <el-button  type="primary" size='mini'>下载</el-button>
                       </p>
                   </div>
               </div>
               <div class='compont_num' >
                    <p class='compont_label'>
                        <span class='compont_tip'>*</span>评分:
                    </p>
                    <p :class='["compont_result",grade==1?"compont_results":""]' @click='grade=1' >1</p>
                    <p :class='["compont_result",grade==2?"compont_results":""]' @click='grade=2' >2</p>
                    <p :class='["compont_result",grade==3?"compont_results":""]' @click='grade=3' >3</p>
                    <p :class='["compont_result",grade==4?"compont_results":""]' @click='grade=4' >4</p>
                    <p :class='["compont_result",grade==5?"compont_results":""]' @click='grade=5' >5</p>
                </div>
                <div class='compont_num'>
                    <p class='compont_label'>
                        <span class='compont_tip'>*</span>评语:
                    </p>
                    <el-input
                    type="textarea"
                    :rows="2"
                    maxlength="600"
                    show-word-limit
                    placeholder="请对老师的成果进行评价鼓励"
                    v-model="textarea" >
                    </el-input>
                </div>
                <el-button  type="primary" class="sub_mit" size='mini' >提交</el-button>
           </div>
       </el-card>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        textarea:'',
        grade:'',
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
.files_message{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.files_item{
    font-size:14px;
    display: flex;
    flex-direction: column;
     align-items: center;
     justify-content: center;
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
.fils_tip{
    font-size:30px;
}
.compont_list{
    border-bottom:1px dashed #eee;
    padding:20px 0;
}
.compont_message{
    display: flex;
    align-items: center;
    margin-bottom:16px;
}
.message_img{
    width:306px;
    margin-right:16px;
}
.compont_type{
    font-size:18px;
    color:#666;
    margin-bottom:30px;
}
.compont_label{
    margin-right:20px;
    width:60px;
}
.compont_num{
    display: flex;
    align-items: center;
    margin-bottom:16px;
    font-size:14px;
    color:#666;
}
.compont_tip{
    color:#f00;
}
.compont_result{
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
.compont_results{
    background:#409EFF;
}
.sub_mit{
    margin:0 auto;
    display: block;
    margin-top:30px;
}
</style>
