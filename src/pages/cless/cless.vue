<template>
  <div class="cless">
    <el-card class="elcard">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>管理</el-breadcrumb-item>
        <el-breadcrumb-item>班级设置</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card>
      <div class="new">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="addClass"
          >新建</el-button
        >
      </div>
      <el-table
        v-loading="listLoading"
        :data="list"
        header-row-class-name="headerBg"
        element-loading-text="正在查询中。。。"
        fit
        highlight-current-row
      >
        <el-table-column type="index" width="50" />
        <el-table-column align="center" label="年级名称" prop="gradeName" />
        <el-table-column align="center" label="班级名称" prop="name" />
        <el-table-column align="center" label="操作" width="260">
          <template slot-scope="scope">
            <span class="handle" @click="showClass(scope.row)">查看</span>
            <el-divider direction="vertical"></el-divider>
            <el-popover
              placement="top"
              width="160"
              trigger="click"
              v-model="scope.row.visible"
            >
              <p>这确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button
                  size="mini"
                  type="text"
                  @click="scope.row.visible = false"
                  >取消</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  @click="delClass(scope.row)"
                  >确定</el-button
                >
              </div>
              <span class="handle del" slot="reference">删除</span>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        v-show="total > 0"
        :total="total"
        :page.sync="page"
        limit.sync="10"
        @pagination="getList"
      />

    </el-card>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      center
      class="dialogForm"
      width="550px"
    >
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="年级名称" prop="gradeName">
          <el-select v-model="ruleForm.gradeId" placeholder="请选择年级">
                    <el-option
                        v-for="item in gradeList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id" >
                        {{item.name}}
                    </el-option>
                </el-select>
        </el-form-item>
        
        <el-form-item label="班级名称" prop="name">
          <el-input
            v-model="ruleForm.name"
            maxLength="20"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="medium">取消</el-button>
        <el-button type="primary" size="medium" @click="doSubmit()">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
import { classList, saveClass, delClass, gradeList } from "@/api/class.js";
export default {
  name: "",
  inject:['reload'],
  data() {
    return {
      listLoading: false,
      dialogVisible: false,
      isView: false,
      page: 1,
      total: 10,
      list: [],
      gradeList: [],
      dialogTitle: "新建班级",
      rules: {
        name: [{ required: true, message: "请输入班级名称", trigger: "blur" }]
      },
      ruleForm: {
        name: "",
        status: 1,
        gradeId: '',
        type: 0
      },
    };
  },
  components: { Pagination },
  computed: {},
  beforeMount() {},
  mounted() {
    this.getList();
  },
  methods: {
    addClass() {
      this.dialogTitle = "新建班级";
      this.dialogVisible = true;
      this.isView = false;
      this.ruleForm.name = '';
      this.$refs['ruleForm'].clearValidate();
    },
    showClass(row) {
      this.dialogTitle = "查看班级";
      this.dialogVisible = true;
      this.isView = true;
      this.ruleForm.name = row.name;
      this.$refs['ruleForm'].clearValidate();
    },
    delClass(row) {
      delClass(row.id).then((response) => {
        if (response.data.code == 200) {
          this.$message({
            type: "success",
            message: "删除成功",
          });
          this.getList();
        } else {
          this.$message({
            type: "error",
            message: response.data.msg,
          });
        }
      });
    },
    doSubmit() {
      if (this.isView) {
        this.dialogVisible = false;
        return;
      }
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          saveClass(this.ruleForm).then((response) => {
            if (response.data.code == 200) {
              this.$message({
                type: "success",
                message: "保存成功",
              });
              this.dialogVisible = false;
              this.getList();
            } else {
              this.$message({
                type: "error",
                message: response.data.msg,
              });
            }
          });
        }
      });
    },
    getList() {
      classList({pageNo:this.page, pageSize:10}).then((response) => {
        if (response.data.code == 200) {
          this.list = response.data.data.data;
          this.total = response.data.data.total
        } else {
          this.$message({
            type: "error",
            message: response.data.msg,
          });
        }
      });

      gradeList().then((response) => {
        if (response.data.code == 200) {
          this.gradeList = response.data.data.list;
        } else {
          this.$message({
            type: "error",
            message: response.data.msg,
          });
        }
      });
    },
    handleCurrentChange(val) {
          this.page = val;
          this.getList();
    },
  },
  watch: {},
};
</script>
<style>
.elcard {
  margin-bottom: 20px;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.message_box {
  display: flex;
  align-items: center;
}
.message_item {
  font-size: 16px;
  color: #666;
  margin-right: 20px;
}
.dictionary_title {
  font-size: 16px;
  color: #1890ff;
  margin: 20px 0;
}
.new {
  display: flex;
  padding: 10px 20px;
  justify-content: flex-end;
}
.dialogForm .el-input {
  width: 350px;
}
.el-dialog--center .el-dialog__body {
  padding-bottom: 5px;
}
.cless .handle {
  font-size: 12px;
  color: #1890ff;
  cursor: pointer;
}
.cless .del {
  color: #ff5555;
}
</style>
