<template>
   <div class='honour' >
       <el-card class='elcard' >
           <div class='filter-container' >
            <p>状态：</p>
            <el-select v-model="value" placeholder="请选择"  size='small'>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-select>
            <el-input v-model.trim="keyword" clearable class="filter-item" style="width: 200px;" placeholder="关键字查询" size='small'/>
            <el-button class="filter-item" type="primary" icon="el-icon-search" size='small'>查找</el-button>
            <!-- <el-button class="filter-item" type="primary" icon="el-icon-plus" size='small'>添加</el-button> -->
            </div>
       </el-card>
       <el-card>
           <el-row :gutter="20" class='honour_box' >
               <el-col :span='6' >
                   <div class='honour_list'>
                        <img src="../../../static/image/img.png" alt="" class='honour_img' >
                        <div class='honour_info'>
                            <p class='honour_name'>最佳奉献奖</p>
                            <p class='honour_grade'>级别：省级</p>
                            <p class='honour_grade'>获奖日期：2020年5月3日</p>
                        </div>
                        <img src="../../../static/image/wait.png" alt="" class='honour_status' >
                    </div>
               </el-col>
               <el-col :span='6' >
                   <div class='honour_list'>
                        <img src="../../../static/image/img.png" alt="" class='honour_img' >
                        <div class='honour_info'>
                            <p class='honour_name'>最佳奉献奖</p>
                            <p class='honour_grade'>级别：省级</p>
                            <p class='honour_grade'>获奖日期：2020年5月3日</p>
                        </div>
                        <img src="../../../static/image/wait.png" alt="" class='honour_status' >
                    </div>
               </el-col>
               <el-col :span='6' >
                   <div class='honour_list'>
                        <img src="../../../static/image/img.png" alt="" class='honour_img' >
                        <div class='honour_info'>
                            <p class='honour_name'>最佳奉献奖</p>
                            <p class='honour_grade'>级别：省级</p>
                            <p class='honour_grade'>获奖日期：2020年5月3日</p>
                        </div>
                        <img src="../../../static/image/success.png" alt="" class='honour_status' >
                    </div>
               </el-col>
               <el-col :span='6' >
                   <div class='honour_list'>
                        <img src="../../../static/image/img.png" alt="" class='honour_img' >
                        <div class='honour_info'>
                            <p class='honour_name'>最佳奉献奖</p>
                            <p class='honour_grade'>级别：省级</p>
                            <p class='honour_grade'>获奖日期：2020年5月3日</p>
                        </div>
                        <img src="../../../static/image/wait.png" alt="" class='honour_status' >
                    </div>
               </el-col>
               <el-col :span='6' >
                   <div class='honour_list'>
                        <img src="../../../static/image/img.png" alt="" class='honour_img' >
                        <div class='honour_info'>
                            <p class='honour_name'>最佳奉献奖</p>
                            <p class='honour_grade'>级别：省级</p>
                            <p class='honour_grade'>获奖日期：2020年5月3日</p>
                        </div>
                        <img src="../../../static/image/wait.png" alt="" class='honour_status' >
                    </div>
               </el-col>
               <el-col :span='6' class='upBOx' >
                   <el-button class='more_btn' @click="dialogFormVisible = true" >上传更多...</el-button>
               </el-col>
           </el-row>
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
       </el-card>
       <el-dialog title="上传奖项" :visible.sync="dialogFormVisible">
        <el-form :model="form" size='mini' >
            <el-form-item label="奖项名称" label-width="80px">
            <el-input v-model="form.name" autocomplete="off" style='width:200px;' ></el-input>
            </el-form-item>
            <el-form-item label="级别" label-width="80px">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="省级" value="shanghai"></el-option>
                <el-option label="市级" value="beijing"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="上传图片" label-width="80px"> 
                 <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        keyword:'',
         listLoading:false,
         options:[{value:1,label:'全部'},{value:2,label:'待审核'},{value:3,label:'已审核'},{value:3,label:'已驳回'}],
        value:'',
         list1:[{name:'优秀班主任奖',company:'北京市及科教',grade:'市级',time:'2020-09-09 09:09:09',type:'word',mark:'3'},
         {name:'优秀班主任奖',company:'北京市及科教',grade:'市级',time:'2020-09-09 09:09:09',type:'word',mark:'3'},
         {name:'优秀班主任奖',company:'北京市及科教',grade:'市级',time:'2020-09-09 09:09:09',type:'word',mark:'3'},],
         dialogFormVisible:false,
         form:{
             name:'',
             region:''
         },
         dialogVisible:false,
          dialogImageUrl: '',
    }
  },
  components: {},
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
  },
  watch: {}
}
</script>
<style>
.honour .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size:12px;
}
.honour .el-select{
  margin-right:20px;
}
.honour .el-input{
  margin-right:20px;
}
.honour .elcard{
    margin-bottom:20px;
}
.honour .honour_box{
    border-bottom:2px dotted #dcdcdc;
}
.honour .honour_list{
    width:100%;
    border:1px solid #eee;
    margin-right:20px;
    margin-bottom:20px;
    position: relative;
}
.honour .honour_img{
    width:100%;
}
.honour .honour_info{
    padding:10px;
}
.honour .honour_name{
    font-size:18px;
    color:#666;
    margin-bottom:6px;
}
.honour .honour_grade{
    font-size:14px;
    color:#999;
    margin-bottom:6px;
}
.honour .honour_status{
    width:80px;
    position: absolute;
    right:20px;
    bottom:10px;
}
.honour .upBOx{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top:100px;
}
.honour .files_message{
    width:100%;
    padding:30px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.honour .files_item{
    font-size:14px;
    display: flex;
    flex-direction: column;
     align-items: center;
     justify-content: center;
}
.honour .files_item1{
    color:#67C23A;
}
.honour .files_item2{
    color:#409EFF;
}
.honour .files_item3{
    color:#F56C6C;
}
.honour .files_item4{
    color:#7948EA;
}
.honour .fils_tip{
    font-size:30px;
}
.honour .handle{
    font-size:12px;
    color:#1890FF;
    cursor: pointer;
}
</style>
