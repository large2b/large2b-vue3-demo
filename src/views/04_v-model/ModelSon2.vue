<template>
  <div class="son">
    <h1>子组件2 </h1>
    <h2>通过 v-model 从父组件获取到<br/>
    </h2>
    <div>
      <button @click="handlerNo">PageNo: {{ PageNo }}<br>点击+1</button>
      <button @click="handlerSize">PageSize: {{ PageSize }}<br>点击+1</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 通过 emit 和 props 实现双向绑定
  // props[modelValue] emits['update:modelValue']
  const props = defineProps<{
    PageNo: number
    PageSize: number
  }>()
  const $emit = defineEmits(['update:PageNo','update:PageSize'])
  const handlerNo = () => {
    $emit('update:PageNo', props.PageNo + 1)
  }
  const handlerSize = () => {
    $emit('update:PageSize', props.PageSize + 1)
  }

</script>

<style scoped>
.son {
  width: 100%;
  height: 200px;
  background-color: rgb(112, 67, 67);  
}
</style>