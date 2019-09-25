<template>
    <div id="app">
      <el-container class="wapper">
        <el-header>
          
        </el-header>
        <el-container>
          <el-aside class="attrWapper" width="180px">
            <p v-for="(item, index) in Attr" :key="index"><span>{{index|AttrToName}}:</span><span>{{item}}</span></p>
          </el-aside>
          <el-container>
            <el-main>
              <el-button type="primary" @click="drawer = true">查看</el-button>
            </el-main>
            <el-footer > <p >Footer</p> </el-footer>
          </el-container>
        </el-container>
      </el-container>

      <el-drawer
      title="我嵌套了表格!"
      :visible.sync="drawer"
      direction="rtl"
      size="50%">
        <Equipment></Equipment>
    </el-drawer>
    </div>
</template>
<script>
import { BaseAttrClass } from "./class/BaseClass";
import { DependClass } from "./class/DependClass";
import Equipment from './components/Equipment'
export default {
    components:{Equipment},
    data() {
        return {
            Attr:new BaseAttrClass(),
            drawer: false,
        }
    },
    created(){
      let depend = new DependClass('疾语','鞋子',1,{Rapid:50})
    },
    methods:{
      handleClose:function(e){
        e()
      }
    }    
}
</script>
<style >
    html,body,#app{
      height: 100%;
    }
    .wapper{
      height: 100%;
    }
    .attrWapper{
      padding: 0 20px;
    }
    .attrWapper p{
      line-height: 28px;
      display: flex;
      justify-content: space-between;
    }
</style>
