import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Items from '../views/Items.vue'
import ItemDetails from '../views/ItemDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  },
  {
    path: '/items/:id',
    name: 'ItemDetails',
    component: ItemDetails,
    props: true
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
