<template>
   <div class='compare'>
  
        <!-- 查询结果 -->
        <el-card>
          <div class='compare-title'>
            <p>教师对比分析</p>
               <el-radio-group v-model="radio1"  @change="radioChange" size='mini' class='switchs' >
                    <el-radio-button label="得分"></el-radio-button>
                    <el-radio-button label="数量"></el-radio-button>
                </el-radio-group>
                <div>
                   <el-button class="filter-item" type="primary" icon='el-icon-upload2'  size='small'>导出</el-button>
                   <el-button class="filter-item" type="primary" icon='el-icon-plus' size='small' @click="dialogFormVisible = true" >添加</el-button>
                </div>
          </div>
          <div class='table_box' >
            <table class='tables' id='tables' :style='"width:"+wh+"px"' >
                <tr class='table_header' >
                  <th class='table_fix' >指标</th>
                  <th v-for='(item,index) in list' :key='index' @click="removeTable(index)" class='table_late' >
                    <div class='th_inner'>
                        {{item.name}}  
                      <img src='../../../static/image/del_icon.png' class='del_icon' />
                    </div>
                  </th>
                </tr>
                <tr v-for='(items,index) in titles' :key='index' class='table_body' >
                    <td class='table_fix' > {{items.value}} </td>
                    <td v-for="(item,index) in list" :key='index' class='table_late' >
                    <span v-for='(val,key) in item' :key='key' v-if="key == items.label">
                      {{val}}
                    </span>
                  </td>
                </tr>
                <tr class='table_title' >
                  教师成长档案对比分析
                </tr>
                  <tr v-for='(items,index) in titles1' :key='index' class='table_body' >
                    <td class='table_fix' > {{items.value}} </td>
                    <td v-for="(item,index) in list" :key='index' class='table_late' >
                    <span v-for='(val,key) in item' :key='key' v-if="key == items.label">
                      {{val}}
                    </span>
                  </td>
                </tr>
                <tr class='table_title' >
                  教师常规档案对比分析
                </tr>
                <tr v-for='(items,index) in titles2' :key='index' class='table_body' >
                    <td class='table_fix' > {{items.value}} </td>
                    <td v-for="(item,index) in list" :key='index' class='table_late' >
                    <span v-for='(val,key) in item' :key='key' v-if="key == items.label">
                      {{val}}
                    </span>
                  </td>
                </tr>
            </table>
          </div>
        </el-card>
        <el-dialog title="选择数据" :visible.sync="dialogFormVisible">
          <el-form :model="form" size='mini' >
              <el-form-item label="名称" label-width="80px">
              <el-select v-model="form.region" placeholder="请选择老师">
                  <el-option label="老师1" value="1"></el-option>
                  <el-option label="老师2" value="2"></el-option>
              </el-select>
              </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="addList">确 定</el-button>
          </div>
        </el-dialog>
   </div>
</template>
<script>
// 注：titles的key和list的key相对应
export default {
  name: '',
  data () {
    return {
        options:[{value:1,label:'2019-2020期末教师评比'},{value:2,label:'2020-2021期末教师评比'},
        {value:3,label:'2019-2021期末教师评比'}],
        value:'',
        listLoading:false,
        radio1:'得分',
        form:{
          region:''
        },
        dialogFormVisible:false,
        list:[
            {name:'学生1',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生2',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生3',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生4',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生5',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生6',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生7',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生8',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生9',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生10',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生11',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生12',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'},
            {name:'学生13',allNum:'34',sex:'女',zhen:'党员',age:'6',country:'汉',study:'本科',study1:'高级',study2:'2',study3:'数学'}
        ],
        titles:[
          {label:'allNum',value:'总积分'},
          {label:'sex',value:'性别'},
          {label:'age',value:'年龄'},
          {label:'country',value:'民族'},
          {label:'zhen',value:'政治面貌'},
          {label:'study',value:'学历'},
          {label:'study1',value:'职称'},
          {label:'study2',value:'教龄'},
          {label:'study3',value:'任教学科'}
        ],
        titles1:[
          {label:'allNum',value:'总积分'},
          {label:'honour',value:'获奖荣誉'},
          {label:'honour',value:'研修培训'},
          {label:'country',value:'教学成果'},
          {label:'honour',value:'课堂展示'},
          {label:'base',value:'教学基本功'},
          {label:'plan',value:'课堂展示'}
        ],
        titles2:[
          {label:'allNum',value:'总积分'},
          {label:'sex',value:'教研组计划'},
          {label:'age',value:'学科备课计划'},
          {label:'country',value:'学科总结'},
          {label:'zhen',value:'学科成绩统计'},
          {label:'study',value:'学科质量分析'},
          {label:'study',value:'集体活动记录'},
          {label:'study',value:'听评课记录'}
        ]
    }
  },
  created:{},
  components: {},
  computed: {
    wh(){
      let wh=''
      console.log(this.list.length)
      wh = 180+ this.list.length*80
      return wh 
    }
  },
  beforeMount () {},
  mounted () {
  },
  methods: {
    radioChange(e){
          this.radio1 = e
      },
    // 删除某一列
    removeTable(i){
       this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.list.splice(i,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {         
        });
    },
    // 添加一组数据
    addList(){
      // 选择完成后添加到列表内
      if(this.form.region != ''){
        let obj = {name:'老师1',allNum:'34',sex:'女',zhen:'党员',honour:'6',result:5,base:5,plan:4,summary:5,success:4}
        this.list.push(obj)
        this.dialogFormVisible = false
      }else{
        this.$message({
          message: '请选择老师',
          type: 'warning'
        });
      }
    }
  },
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
.table_box{
  width:100%;
  overflow-x:scroll;
}
.tables{
  background:#fff;
  border-spacing: 0;
  display: block;
  position: relative;
}
#tables tr{
  height:50px;
  font-size:14px;
}
#tables tr td{
  border-bottom:1px solid #EBEEF5;
  text-align: center;
}
#tables tr th{
  border-bottom:1px solid #EBEEF5;
  text-align: center;
  height:60px;
  background:#EBEEF5 ;
  overflow: hidden;
}
.table_late{
  width:80px;
}
.table_fix{
  width:180px;
  height:50px;
  line-height: 50px;
  background:#fff;
}
.th_inner{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.del_icon{
  width:15px;
  height:15px;
  margin-left:4px;
}
.table_header{
  color:#909399 ;
  font-size:16px;
}
.table_body{
  color:#606266;
}
.compare-title{
  display: flex;
  align-items: center;
  font-size:16px;
  color:#409EFF;
  justify-content: space-between;
  margin-bottom:20px;
  position: relative;
}
.table_title{
   color:#409EFF;
   line-height:60px;
}
.switchs{
  position: absolute;
  left:200px;
}
</style>
