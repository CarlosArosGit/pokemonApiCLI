import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pokemon from '@/views/PokemonView.vue'
import NotFound from '@/components/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokemon/:id',
    name: "Pokemon",
    component: Pokemon,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: 'notfound',
    component: NotFound

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
