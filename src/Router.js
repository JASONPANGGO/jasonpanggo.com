import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from './components/Intro.vue'
import Frontend from './components/Frontend.vue'
import Photography from './components/Photography.vue'
import Design from './components/Design.vue'
import About from './components/About.vue'
import Sheron from './components/Sheron.vue'
const routes = [
    {path:'/', component: Intro},
    {path:'/frontend', component: Frontend},
    {path:'/photography', component: Photography},
    {path:'/design', component: Design},
    {path:'/about', component: About},
    {path:'/sheron', component: Sheron},
  ]

Vue.use(VueRouter)
  const router = new VueRouter({
    routes
  })

export default router;