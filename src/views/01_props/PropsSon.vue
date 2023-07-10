<template>
  <div class="son">
    <div>姓名: {{ name }}</div>
    <div>性别: {{ gender }}</div>
    <div>年龄: {{ age }}</div>
    <div>体重: {{ weight }}</div>
  </div>
</template>

<script setup lang="ts">
import { Prop } from 'vue';

  interface Props {
    name: string
    gender: string
    age: number,
    weight?: string
  }

  // 这种叫做基于类型的声明, 失去为props声明默认值的能力，
  // 可以通过 withDefaults 编译器宏解决
  // const props = defineProps<Props>()
  const props = withDefaults(defineProps<Props>(), {
    weight: 'unknow'
  })

  console.log(props);


</script>

<style scoped>
  .son {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
    color: #000;
  }
</style>