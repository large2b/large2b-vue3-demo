<template>
  <div class="cc">
    <div class="nav">
      <RouterLink :to="{name: 'props'}">props</RouterLink>
      <RouterLink :to="{name: 'customEvent'}">customEvent</RouterLink>
      <RouterLink :to="{name: 'eventBus'}">eventBus</RouterLink>
      <RouterLink :to="{name: 'vmodel'}">v-model</RouterLink>
      <RouterLink :to="{name: 'useAttrs'}">UseAttrs</RouterLink>
      <RouterLink :to="{name: 'refChildrenParent'}">ref-$parent</RouterLink>
      <RouterLink :to="{name: 'provideInject'}">provide / inject</RouterLink>
      <RouterLink :to="{name: 'pinia'}">Pinia</RouterLink>
    </div>
    <RouterView/>  
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.cc {
  .nav {
    border-top: 1px #639a46 solid;
    display: flex;
  }
  a:nth-child(n) {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 20px;
    // color:white
  }

}



</style>