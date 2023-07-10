import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// 定义小仓库

// defineStore(storeName, config) => 返回一个函数, 让组件可以获取到仓库数据
// 组合式 API
export const useCounterStore = defineStore('counter', () => {
  const count = ref(88)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  // 返回一个对象： 属性和方法供组件使用
  return { count, doubleCount, increment }
})

// 选项式
// export const useCounterStore = defineStore('counter', {
//   state: () => {
//     return {
//       count: 88
//     }
//   },
//   actions: {
//     // 函数没有 上下文 对象
//     // 没有 commit 没有 mutations
//     increment() {
//       // 这里的this就是仓库对象本身
//       this.count++;
//     }
//   },
//   getters: {
//     doubleCount(): typeof this.count { 
//       return this.count * 2 
//     }
//   }
// })