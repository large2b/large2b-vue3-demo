<template>
  <div @click="handler" class="son">
    I am son <br/>
    Click me to make me run
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let $emit = defineEmits(['run'])
let miles = ref(0)

const handler = function() {
  miles.value++;
  $emit('run', miles.value)  
}
</script>

<style scoped>
  .son {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    color: black;
    cursor: pointer;
    user-select: none;
  }

</style>