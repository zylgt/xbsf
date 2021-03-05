<template>
   <div class='indicator' >
       <!-- 查询和其他操作 -->
        <div class="filter-container">
           <p>累计指标：</p> 
            <el-select v-model="value" placeholder="请选择" size='small' >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
            <p>动态指标：</p> 
            <el-select v-model="value" placeholder="请选择" size='small' >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
              <p>学年范围：</p> 
            <el-select v-model="value" placeholder="请选择" size='small' >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
          <p>积分：</p>
           <el-input v-model.trim="small" clearable class="filter-item" style="width: 100px;" size='small' placeholder="最小值"/>
            <span style='margin-right:20px;'>-</span>
           <el-input v-model.trim="big" clearable class="filter-item" style="width: 100px;" size='small' placeholder="最大值"/>
          <el-button class="filter-item" type="primary" icon="el-icon-search" size='small'>查找</el-button>
          <el-button :loading="downloadLoading" class="filter-item" type="primary" size='small' icon="el-icon-download" >导出</el-button>
        </div>
        <div class='indicator_box'>
            <div class='indicator_list'>
                <img src="https://hbtv-1302663429.file.myqcloud.com/img/img1614651639.jpg" alt="" class='indicator_img'>
                <div class='indicator_info'>
                    <div class='indicator_name'>赵小龙</div>
                    <div class='indicator_name'>5积分</div>
                </div>
                <div class='indicator_honour'>获奖荣誉（国家级）</div>
            </div>
            <div class='indicator_list'>
                <img src="https://hbtv-1302663429.file.myqcloud.com/img/img1614651639.jpg" alt="" class='indicator_img'>
                <div class='indicator_info'>
                    <div class='indicator_name'>赵小龙</div>
                    <div class='indicator_name'>5积分</div>
                </div>
                <div class='indicator_honour'>获奖荣誉（国家级）</div>
            </div>
        </div>
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
        small:'',
        big:'',
        page:1,
        total:10,
        downloadLoading:false
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
.indicator .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom:30px;
  font-size:12px;
}
.indicator .el-input{
  margin-right:20px;
}
.indicator .el-select{
  margin-right:20px;
  width:150px;
}
.indicator_box{
    display: flex;
    flex-wrap: wrap;
}
.indicator_list{
    width:200px;
    margin-right:20px;
    margin-bottom:20px;
    border:1px solid #eee;
    padding-bottom:10px;
}
.indicator_img{
    width:200px;
    margin-bottom:4px;
}
.indicator_info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:12px;
    margin-bottom:4px;
    font-weight:bold;
    padding:0 10px;
}
.indicator_honour{
    font-size:12px;
    color:#666;
    padding:0 10px;
}
</style>
