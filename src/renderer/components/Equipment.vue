<template>
    <div>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
        <template slot-scope="scope">
            <i class="el-icon-edit-outline" @click="drawer = true"></i>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer
      title="我嵌套了表格!"
      :visible.sync="drawer"
      direction="rtl"
      :append-to-body="true">
      <div>
          asdasdas
      </div>
    </el-drawer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer:false,
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    created(){
        console.log('ttttt')
    }
}   
</script>