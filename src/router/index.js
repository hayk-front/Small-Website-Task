import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../components/Home')
  },
  {
    path: '/login',
    component: () => import('../components/Login')
  },
  {
    path: '/admin',
    component: () => import('../components/AdminPanel')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
