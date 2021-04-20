<template>
  <div class="school_year">
    <el-card class="elcard">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>管理</el-breadcrumb-item>
        <el-breadcrumb-item>学年设置</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
    <el-card>
      <div class="new">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="addSchoolYear"
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
        <el-table-column align="center" label="学年名称" prop="name" />
        <el-table-column align="center" label="时间周期" prop="dateStr" />

        <el-table-column align="center" label="状态">
          <template slot-scope="scope">
            <p v-if="scope.row.status == 1">进行中</p>
            <p v-else>已过期</p>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="260">
          <template slot-scope="scope">
            <span class="handle" @click="showSchoolYear(scope.row)">查看</span>
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
                  @click="delSchoolYear(scope.row)"
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
        <el-form-item label="学年名称" prop="name">
          <el-input
            v-model="ruleForm.name"
            maxLength="20"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="时间周期" prop="dateRange">
          <el-date-picker
            v-model="ruleForm.dateRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="是否开始" prop="status">
          <el-switch
            v-model="ruleForm.status"
            active-color="#13ce66"
            active-value="1"
            inactive-value="0"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="medium">取消</el-button>
        <el-button type="primary" size="medium" @click="doSubmit()"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
import { yearList, saveYear, delYear } from "@/api/class.js";
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
      dialogTitle: "新建学年",
      rules: {
        name: [{ required: true, message: "请输入学年名称", trigger: "blur" }],
        dateRange: [
          { required: true, message: "请选择时间周期", trigger: "change" },
        ],
      },
      ruleForm: {
        name: "",
        status: "0",
        dateRange: "",
        startDate: "",
        endDate: "",
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
    addSchoolYear() {
      this.dialogTitle = "新建学年";
      this.dialogVisible = true;
      this.isView = false;
      this.ruleForm.name = '';
      this.ruleForm.status = '0';
      this.ruleForm.dateRange = ''
      this.$refs['ruleForm'].clearValidate();
    },
    showSchoolYear(row) {
      this.dialogTitle = "查看学年";
      this.dialogVisible = true;
      this.isView = true;
      this.ruleForm.name = row.name;
      this.ruleForm.status = row.status + '';
      this.ruleForm.dateRange = [row.startDate, row.endDate];
      this.$refs['ruleForm'].clearValidate();
    },
    delSchoolYear(row) {
      delYear(row.id).then((response) => {
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
          this.ruleForm.startDate = this.ruleForm.dateRange[0];
          this.ruleForm.endDate = this.ruleForm.dateRange[1];
          saveYear(this.ruleForm).then((response) => {
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
      yearList().then((response) => {
        if (response.data.code == 200) {
          this.list = response.data.data.list;
        } else {
          this.$message({
            type: "error",
            message: response.data.msg,
          });
        }
      });
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
.school_year .handle {
  font-size: 12px;
  color: #1890ff;
  cursor: pointer;
}
.school_year .del {
  color: #ff5555;
}
</style>
