<template>
   <el-tooltip
    class="box-item"
    effect="dark"
    :content="$attr.tip"
    placement="top-start"
    >
      <el-button v-bind="$attr">
        <slot></slot>
      </el-button>
    </el-tooltip>
</template>

<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
// 接收父组件传递过来的数据
// 引入useAttrs方法: 获取组件标签身上的属性与事件
// Props 优先级更高: 使用了props 获取之后,无法通过 useAttrs 获取
import { useAttrs } from 'vue'

let $attr = useAttrs();
console.log('attrs', $attr);

</script>

<style scoped>

</style>