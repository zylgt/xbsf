<template>
   <div class='plan1'>
        <el-card class='elcard' >
           <div class='filter-container' >
            <p>学年：</p>
            <el-select v-model="value" placeholder="请选择"  size='small'>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
            <el-button class="filter-item" type="primary" icon="el-icon-search" size='small'>查找</el-button>
            <el-button class="filter-item" type="primary" icon="el-icon-plus" size='small'>添加</el-button>
            </div>
       </el-card>
       <el-card>
           <div class='files_message'>
               <div class='files_item files_item2'>
                   待完成任务
                   <div> <span class='fils_tip' >10</span> 个附件</div>
               </div>
               <div class='files_item files_item1'>
                   已上传
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
            <el-table v-loading="listLoading" :data="list1" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>

                <el-table-column align="center" label="名称" prop="name"/>

                <el-table-column align="center" label="颁发部分" prop="company"/>

                <el-table-column align="center" label="级别" prop="grade"/>

                <el-table-column align="center" label="上传时间" prop="time"/>

                <el-table-column align="center" label="文件类型" prop="type"/>

                <el-table-column align="center" label="得分" prop="mark"/>

                 <el-table-column align="center" label="操作">
                        <template>
                            <span class='handle'>查看</span>
                            <el-divider direction="vertical"></el-divider>
                            <span class='handle'>下载</span>
                        </template>
                    </el-table-column>
            </el-table>
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
         page:1,
        total:10,
         listLoading:false,
         options:[{value:1,label:'2020-2021'},{value:2,label:'2017-2018'},{value:3,label:'2018-2019'},{value:3,label:'2019-2020'}],
        value:'',
         list1:[{name:'优秀班主任奖',company:'北京市及科教',grade:'市级',time:'2020-09-09 09:09:09',type:'word',mark:'3'},
         {name:'优秀班主任奖',company:'北京市及科教',grade:'市级',time:'2020-09-09 09:09:09',type:'word',mark:'3'},
         {name:'优秀班主任奖',company:'北京市及科教',grade:'市级',time:'2020-09-09 09:09:09',type:'word',mark:'3'},]
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
<style>
.plan1 .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size:12px;
}
.plan1 .el-select{
  margin-right:20px;
}
.plan1 .el-input{
  margin-right:20px;
}
.plan1 .elcard{
    margin-bottom:20px;
}
.plan1 .honour_box{
    border-bottom:2px dotted #dcdcdc;
}
.plan1 .honour_list{
    width:100%;
    border:1px solid #eee;
    margin-right:20px;
    margin-bottom:20px;
    position: relative;
}
.plan1 .honour_img{
    width:100%;
}
.plan1 .honour_info{
    padding:10px;
}
.plan1 .honour_name{
    font-size:18px;
    color:#666;
    margin-bottom:6px;
}
.plan1 .honour_grade{
    font-size:14px;
    color:#999;
    margin-bottom:6px;
}
.plan1 .honour_status{
    width:80px;
    position: absolute;
    right:20px;
    bottom:10px;
}
.plan1 .upBOx{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top:100px;
}
.plan1 .files_message{
    width:100%;
    padding:30px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.plan1 .files_item{
    font-size:14px;
    display: flex;
    flex-direction: column;
     align-items: center;
     justify-content: center;
}
.plan1 .files_item1{
    color:#67C23A;
}
.plan1 .files_item2{
    color:#409EFF;
}
.plan1 .files_item3{
    color:#F56C6C;
}
.plan1 .files_item4{
    color:#7948EA;
}
.plan1 .fils_tip{
    font-size:30px;
}
.plan1 .handle{
    font-size:12px;
    color:#1890FF;
    cursor: pointer;
}
</style>
