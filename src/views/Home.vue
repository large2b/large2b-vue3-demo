<template>
  <div class="home">
    <!-- <span>Welcome to my website</span> -->
    <span id="number">{{ number }}</span><br>
    <button @click="increment">Count++</button>

    <!-- 拼字阶段更新 input  -->
    
    <div class="msg">用v-model绑定 Message is: {{ message }}</div>
    <input type="text" v-model="message"><br>

    <div class="msg">用value 和 input 绑定 Message is: {{ message }}</div>
    <input type="text" 
    :value="message" 
    @input="event => message = (event.target as HTMLInputElement).value">

    <!-- select -->
    <div>Select: {{ selected }}</div>
    <select v-model="selected">
      <option value="" disabled>Select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <div>Selects: {{ selecteds }}</div>
    <select v-model="selecteds" multiple>
      <option value="" disabled>Select</option>
      <option value="K">A</option>
      <option>B</option>
      <option>C</option>
    </select>


    <Radio>ok</Radio>
</div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import Radio from '@/components/Radio/Radio.vue'

const number = ref<Number>(1)
const message = ref<String>('')
const selected = ref('');
const selecteds =ref([]);

function increment() {
  const num = document.querySelector('#number')
  console.log(num?.innerHTML, 'normal');
  nextTick(() => {
    // 访问更新之后的 DOM
    console.log(num?.innerHTML, 'nexttick');
  })
}


onMounted(() => {
  console.log('mounted');
});

</script>

<style lang="less" scoped>
.home {
  span {
    color: white;
    font-weight: bold;
    font-size: 50px;
  }
}

  
</style>