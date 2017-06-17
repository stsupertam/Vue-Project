import Vue from 'vue'
import Router from 'vue-router'
import AddMessage from '@/components/AddMessage'
import Display from '@/components/Display'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hbd/id/:id',
      component: Display
    },
    {
      path: '/',
      component: AddMessage
    }
  ]
})
