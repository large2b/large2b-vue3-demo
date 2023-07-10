<template>
  <div class="son">
    <h1>子组件 </h1>
    <h2>通过 v-model 从父组件获取到的info<br/>
      info: {{ modelValue }}
    </h2>
    <div>
      <button @click="handler">加个签名</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 通过 emit 和 props 实现双向绑定
  // props[modelValue] emits['update:modelValue']
  const props = defineProps<{
    modelValue: string
  }>()
  const $emit = defineEmits(['update:modelValue'])
  const handler = () => {
    $emit('update:modelValue', props.modelValue + ' lzb')
  }

</script>

<style scoped>
.son {
  width: 100%;
  height: 200px;
  background-color: rgb(112, 67, 67);  
}
</style>