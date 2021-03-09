<template>
   <div class='collectInfo'>
        <!-- 查询和其他操作 -->
        <div class="filter-container">
           <p>年级：</p> 
            <el-select v-model="value" placeholder="请选择" size='small' >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
            <p>科目：</p> 
            <el-select v-model="value" placeholder="请选择"  size='small'>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
            <p>状态：</p>
            <el-select v-model="value" placeholder="请选择"  size='small'>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
          <el-input v-model.trim="name" clearable class="filter-item" style="width: 200px;" placeholder="请输入姓名" size='small'/>
          <el-button class="filter-item" type="primary" icon="el-icon-search" size='small'>查找</el-button>
          <el-button :loading="downloadLoading" class="filter-item" type="primary" size='small' icon="el-icon-download" >导出</el-button>
        </div>
        <!-- 查询结果 -->
        <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。"  highlight-current-row medium fit
        :default-sort = "{prop: 'number'}" style='width:100%;' >
          <el-table-column align="center" label="序号" prop="number" sortable fixed/>
          <el-table-column align="center" label="姓名" prop="name" sortable/>
          <el-table-column align="center" label="年级" prop="class" :filters="[{text: '七年级', value: '七年级'}, {text: '八年级', value: '八年级'}, {text: '九年级', value: '九年级'}]"
          :filter-method="filterClass"/>
          <el-table-column align="center" label="科目" prop="object" :filters="[{text: '语文', value: '语文'}, {text: '数学', value: '数学'}, {text: '英语', value: '英语'}]"
          :filter-method="filterObject"/>
          <el-table-column align="center" label="班级" prop="small_class" width='120' />
          <el-table-column align="center" label="获奖荣誉" prop="honour" sortable width='100'/>
          <el-table-column align="center" label="科研成果" prop="result" sortable width='100'/>
          <el-table-column align="center" label="基本功" prop="base" sortable width='100'/>
          <el-table-column align="center" label="教学计划" prop="plan" sortable width='100'/>
          <el-table-column align="center" label="教学总结" prop="summary" sortable width='100'/>
          <el-table-column align="center" label="教学成绩" prop="school" sortable width='100'/>
          <el-table-column align="center" label="状态" prop="status" width='100'>
                <template slot-scope="scope">
                   <p class='wan' v-if='scope.row.status==1' >已提交</p>
                   <p class='no' v-else>未提交</p>
                </template>
          </el-table-column>
        </el-table>
        <Pagination v-show="total>0" :total="total" :page.sync="page" limit.sync="10" />
   </div>
</template>
<script>
import Pagination from '@/components/Pagination' 
export default {
  name: '',
  data () {
    return {
        options:[{value:1,label:'2019-2020期末教师评比'},{value:2,label:'2020-2021期末教师评比'},
        {value:3,label:'2019-2021期末教师评比'}],
        value:'',
        name:'',
        listLoading:false,
        downloadLoading: false,
        page:1,
        total:10,
         list:[
          {number:1,name:'赵雨蕾',class:'七年级',object:'语文',small_class:'一班，二班',honour:'10',result:10,base:9,plan:5,summary:10,school:10,status:1},
          {number:2,name:'赵雨蕾',class:'九年级',object:'语文',small_class:'一班，二班',honour:'10',result:10,base:9,plan:5,summary:10,school:10,status:0},
          {number:3,name:'赵雨蕾',class:'八年级',object:'数学',small_class:'一班，二班',honour:'10',result:10,base:9,plan:5,summary:10,school:10,status:1},
          {number:4,name:'赵雨蕾',class:'七年级',object:'语文',small_class:'一班，二班',honour:'10',result:10,base:9,plan:5,summary:10,school:10,status:0},
          {number:5,name:'赵雨蕾',class:'九年级',object:'语文',small_class:'一班，二班',honour:'10',result:10,base:9,plan:5,summary:10,school:10,status:1},
          {number:6,name:'赵雨蕾',class:'七年级',object:'语文',small_class:'一班，二班',honour:'10',result:10,base:9,plan:5,summary:10,school:10,status:1},
        ]
    }
  },
  components: { Pagination },
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {
      filterClass(value, row, column){
        return row.class === value;
        },
        filterObject(value, row, column){
        return row.object === value;
        }
  },
  watch: {}
}
</script>
<style >
.collectInfo .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom:30px;
  font-size:12px;
}
.collectInfo .el-input{
  margin-right:20px;
}
.collectInfo .el-select{
  margin-right:20px;
  width:150px;
}
.collectInfo .wan{
    color:#67C23A;
}
.collectInfo .no{
    color:#F56C6C;
}
</style>
