<template>
  <div>
    <h1>UseAttrsTest</h1>
    <el-button type="primary" size="medium" :icon="Edit">Edit</el-button>
  </div>
  <br>
  <HintButton 
  type="primary" 
  size="medium" 
  :icon="Search"
  tip="This is a hintButton"
  @click="handler"
  >Search</HintButton>

</template>

<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import HintButton from './HintButton.vue'

const handler = () => {
  alert('Clicked')
}

</script>

<style scoped>

</style>