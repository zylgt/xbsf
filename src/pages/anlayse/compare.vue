<template>
   <div class='compare'>
       <div class="filter-container">
           <p>分析：</p> 
            <el-select v-model="value" placeholder="请选择" >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
            <el-tag effect="dark" style='margin-right:20px;'> 指标选配(8) </el-tag>
            <el-tag effect="dark"> 人员选配(5) </el-tag>
        </div>
        <!-- 查询结果 -->
        <el-table v-loading="listLoading" :data="transData" element-loading-text="正在查询中。。。"  highlight-current-row fit style='width:100%;' >
            <el-table-column v-for="(item, index) in transTitle" :label="item" :key="index" align="center" :fixed="index==0" width='100' >
                <template slot-scope="scope">
                    {{scope.row[index]}}
                </template>
            </el-table-column>
        </el-table>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        options:[{value:1,label:'2019-2020期末教师评比'},{value:2,label:'2020-2021期末教师评比'},
        {value:3,label:'2019-2021期末教师评比'}],
        value:'',
        listLoading:false,
        list:[
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
             {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
             {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4},
            {allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4}
        ],
        originTitle:['总积分','性别','政治面貌','获奖荣誉','科研成果','基本功','教学计划','教学总结','教学成绩'],
        transData: [],
         transTitle: ['类别', '学生1', '学生2', '学生3', '学生4', '学生5','学生2', '学生3', '学生4', '学生5','学生2', '学生3', '学生4', '学生5']
    }
  },
  created:{},
  components: {},
  computed: {},
  beforeMount () {},
  mounted () {
      // 数组按矩阵思路, 变成转置矩阵
            let matrixData = this.list.map((row) => {
                let arr = []
                for (let key in row) {
                    arr.push(row[key])
                }
                return arr
            })
            console.log(matrixData)
            // 加入标题拼接最终的数据
            this.transData = matrixData[0].map((col, i) => {
                return [this.originTitle[i], ...matrixData.map((row) => {
                    return row[i]
                })]
            })
            console.log(this.transData)
  },
  methods: {},
  watch: {}
}
</script>
<style>
.compare .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom:30px;
}
.compare .el-input{
  margin-right:20px;
}
.compare .el-select{
  margin-right:20px;
}
.compare{
    padding-bottom:60px;
}
.compare .el-table thead{
  background-color:#EBEEF5;
}
.compare .el-table thead tr,.compare .el-table thead th{
  background-color:#EBEEF5;
}
</style>
