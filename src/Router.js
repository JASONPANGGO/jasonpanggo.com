import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from './pages/Intro.vue'
import Frontend from './pages/Frontend.vue'
import Photography from './pages/Photography.vue'
import Design from './pages/Design.vue'
import About from './pages/About.vue'
import Sheron from './pages/Sheron.vue'
import HBDTOSheron from './pages/HBDTOSheron.vue'

const routes = [
    {path:'/', component: Intro},
    {path:'/frontend', component: Frontend},
    {path:'/photography', component: Photography},
    {path:'/design', component: Design},
    {path:'/about', component: About},
    {path:'/sheron', component: Sheron},
    {path:'/HBDTOSheron', component: HBDTOSheron},
  ]

Vue.use(VueRouter)
  const router = new VueRouter({
    routes
  })

export default router;