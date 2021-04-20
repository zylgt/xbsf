<template>
   <div class='home' >
       <el-card class="elcard">
           <div class='card'>
                <div class='message_box'>
                    <div class='message_item'>姓名：xxx</div>
                        <div class='message_item'>性别：男</div>
                        <div class='message_item'>年龄：27</div>
                        <div class='message_item'>学历：本科</div>
                        <div class='message_item'>得分：89</div>
                        <div class='message_item'>教龄：3年</div>
                        <div class='message_item'>职称：高级讲师</div>
                </div>
                <!-- <div class='message_box' >
                    <el-button  type="primary" size='mini'>修改</el-button>
                    <el-button  type="primary" size='mini'>导出</el-button>
                </div> -->
           </div>
       </el-card>
       <el-card>
           <div class='dictionary_title'>任教记录</div>
            <el-table v-loading="listLoading" :data="list" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>

                <el-table-column align="center" label="起始时间" prop="startTime"/>

                <el-table-column align="center" label="任教年级" prop="grades"/>

                <el-table-column align="center" label="任教科目" prop="object"/>

                <el-table-column align="center" label="任教班级" prop="class"/>

                <el-table-column align="center" label="担任职务" prop="job"/>

                <el-table-column align="center" label="课时数" prop="classTime"/>

                <el-table-column align="center" label="状态">
                    <template slot-scope="scope">
                        <p v-if='scope.row.status==1' style='color:#1890FF' >已审核</p>
                        <p v-else style='color:#FF5555'>未审核</p>
                    </template>
                </el-table-column>
            </el-table>
            <div class='dictionary_title'>荣誉获奖</div>
            <el-table v-loading="listLoading" :data="list1" show-summary header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>

                <el-table-column align="center" label="名称" prop="name"/>

                <el-table-column align="center" label="发奖单位" prop="company"/>

                <el-table-column align="center" label="等级" prop="grade"/>

                <el-table-column align="center" label="上传时间" prop="time"/>

                <el-table-column align="center" label="文件类型" prop="type"/>

                <el-table-column align="center" label="得分" prop="mark" sortable/>
            </el-table>
            <div class='dictionary_title'>研修培训</div>
             <el-table v-loading="listLoading" :data="list1" show-summary header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>

                <el-table-column align="center" label="名称" prop="name"/>

                <el-table-column align="center" label="发奖单位" prop="company"/>

                <el-table-column align="center" label="等级" prop="grade"/>

                <el-table-column align="center" label="上传时间" prop="time"/>

                <el-table-column align="center" label="文件类型" prop="type"/>

                <el-table-column align="center" label="得分" prop="mark" sortable/>
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
        listLoading:false,
        page:1,
        total:10,
        list:[{startTime:'2020-09-08',grades:'七年级',object:'语文，数学',class:'一班，二班',job:'科目组长',classTime:'30',status:1},
              {startTime:'2020-09-08',grades:'七年级',object:'语文，数学',class:'一班，二班',job:'科目组长',classTime:'30',status:2},
              {startTime:'2020-09-08',grades:'七年级',object:'语文，数学',class:'一班，二班',job:'科目组长',classTime:'30',status:1},
              {startTime:'2020-09-08',grades:'七年级',object:'语文，数学',class:'一班，二班',job:'科目组长',classTime:'30',status:2},],
        list1:[{name:'优秀班主任奖',company:'北京市及科教',grade:'市级',time:'2020-09-09 09:09:09',type:'word',mark:'3'},
                ]
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
.elcard{
    margin-bottom:20px;
}
.card{
    display: flex;
    align-items:center;
    justify-content: space-between;
    width:100%;
}
.message_box{
    display: flex;
    align-items: center;
}
.message_item{
    font-size:16px;
    color:#666;
    margin-right:20px;
}
.dictionary_title{
    font-size:16px;
    color:#1890FF;
    margin:20px 0;
}
</style>
