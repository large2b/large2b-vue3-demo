import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/ComponentsCommunication',
      name: 'ComponentsCommunication',
      component: () => import('@/views/ComponentsCommunication.vue'),
      redirect: '/ComponentsCommunication/customEvent',
      children: [
        {
          path: 'props',
          name: 'props',
          component: () => import('@/views/01_props/PropsTest.vue'),
        },
        {
          path: 'customEvent',
          name: 'customEvent',
          component: () => import('@/views/02_customEvent/EventTest.vue'),
        },
        {
          path: 'eventBus',
          name: 'eventBus',
          component: () => import('@/views/03_bus/EventBusTest.vue'),
        },
        {
          path: 'vmodel',
          name: 'vmodel',
          component: () => import('@/views/04_v-model/ModelTest.vue'),
        },
        {
          path: 'useAttrs',
          name: 'useAttrs',
          component: () => import('@/views/05_useAttrs/UseAttrsTest.vue'),
        },
        {
          path: 'refChildrenParent',
          name: 'refChildrenParent',
          component: () => import('@/views/06_ref-children-parent/RefChildrenParentTest.vue'),
        },  
        {
          path: 'provideInject',
          name: 'provideInject',
          component: () => import('@/views/07_privide-inject/ProvideInjectTest.vue'),
        },
        {
          path: 'pinia',
          name: 'pinia',
          component: () => import('@/views/08_pinia/PiniaTest.vue'),
        },  
      ]
    },
  ]
})

export default router
