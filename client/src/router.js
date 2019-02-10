import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'

Vue.use(Router)

//{
  //path: '/trip-plans/:id',
  //name: 'view trip plan',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //component: () => import(/* webpackChunkName: "about" */ './views/ViewTripPlan.vue')
//}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/trip-plans'
    },
    {
      path: '/trip-plans',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/trip-plans/new',
      name: 'new',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/NewTripPlan.vue')
    },
    {
      path: '/trip-plans/:id/edit',
      name: 'edit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/EditTripPlan.vue')
    },
    {
      path: '/trip-plans/:id/edit/:dayId/editDay',
      name: 'editDay',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/EditDay.vue')
    }
  ]
})
