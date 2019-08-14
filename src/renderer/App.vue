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
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </div>
</template>
<script>
import { BaseAttrClass } from "./class/BaseClass";
export default {
    data() {
        return {
            Attr:new BaseAttrClass()
        }
    },    
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
