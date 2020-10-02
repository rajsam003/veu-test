import { createRouter, createWebHistory } from 'vue-router'
import ImageList from '../pages/images/ImageList.vue'
import ImageDetail from '../pages/images/ImageDetail.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  { path: '/', redirect: '/images'},
  { path: '/images', component: ImageList},
  { path: '/images/:imageId/:width/:height', component: ImageDetail},
  { path: '/:notFound(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
