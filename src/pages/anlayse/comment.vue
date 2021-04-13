<template>
   <div class='comment'>
      <el-card  >
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
            <p>老师：</p> 
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
      <el-card class='elcard'>
        <div class='comlist' v-for='(item,index) in targetoptions' :key='index' >
          <p class='comTitle'>教学计划-张三-查看或下载文件</p>
          <div class='tagList'>
            <el-tag class='tags' size="medium" >标签一</el-tag><el-tag class='tags' size="medium">标签二</el-tag><el-tag class='tags' size="medium" >标签三</el-tag>
          </div>
          <div class='comInner'>
            段落示意：XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </div>
          <div class='author'>
            <img src="../../../static/image/avatar.png" alt="" class='avatar' >
            <p>林冬冬</p>
            <p class='comTime'>发布在：2021-03-09 12：00：00</p>
          </div>
        </div>
        <el-radio-group v-model="radio1" class='radio_choose' @change="radioChange" size='mini' >
            <el-radio-button label="高分"></el-radio-button>
            <el-radio-button label="低分"></el-radio-button>
        </el-radio-group>
        <Pagination v-show="total>0" :total="total" :page.sync="page" limit.sync="10" />
      </el-card>
     
   </div>
</template>
<script>
import Pagination from '@/components/Pagination' 
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
        total:1,
        page:1,
        radio1:'高分'
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
  font-size:12px;
}
.comment .el-select{
  margin-right:20px;
}
.comment .el-card{
    margin-bottom:30px;
}
.comment .elcard{
  position: relative;
}
.comment .radio_choose{
  position: absolute;
  right:20px;
  top:20px;
}
.comment .comlist{
  border-bottom:2px dotted #eee;
  padding:16px 0;
}
.comment .comTitle{
  font-size:16px;
  color:#666;
  margin-bottom:20px;
}
.comment .tagList{
  margin-bottom:16px;
}
.comment .tags{
  margin-right:20px;
}
.comment .comInner{
  font-size:16px;
  color:#666;
  margin-bottom:16px;
}
.comment .author{
  display: flex;
  align-items: center;
  font-size:18px;
  color:#666;
}
.comment .avatar{
  width:30px;
  height:30px;
  border-radius:50%;
  margin-left:0;
  margin-right:20px;
}
.comment .comTime{
  font-size:14px;
  color:#999;
  margin-left:20px;
}
</style>
