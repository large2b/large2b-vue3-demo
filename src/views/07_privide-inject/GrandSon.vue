<template>
  <el-card>
    <h2>I am grandson</h2>
    <el-divider/>
    <h3>从祖先那得到的房子: {{ house }}</h3>
  
    <el-button :type="button.type" @click="button.handler">{{ button.text }}</el-button>
  
  </el-card>    
</template>

<script setup lang="ts">
import { computed, inject, Ref, ref } from 'vue'
// 注入祖先提供的数据
// 并且是一个响应式数据 子孙组件能够更改

let house = inject('TOKEN')
let isBroken = ref(false)

let handler = computed(() => {
  return isBroken.value ? build : breakdown
})
const button = computed(() => {
  return isBroken.value ? {
    handler: build,
    type: 'success',
    text: 'Build a house'
  } : {
    handler: breakdown,
    type: 'warning',
    text: 'Break down the house'
  } 
})
function breakdown() {
  (house as Ref<string>).value = 'house into pieces'
  isBroken.value = true;
}
function build() {
  (house as Ref<string>).value = 'big house'
  isBroken.value = false;

}

</script>

<style scoped>

</style>