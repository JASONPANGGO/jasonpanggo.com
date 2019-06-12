import VueRouter from 'vue-router'
import Intro from './components/Intro.vue'
import Frontend from './components/Frontend.vue'
import Photography from './components/Photography.vue'
import Design from './components/Design.vue'
const routes = [
    {path:'/', component: Intro},
    {path:'/frontend', component: Frontend},
    {path:'/photography', component: Photography},
    {path:'/Design', component: Design},
  ]
  
  const router = new VueRouter({
    routes
  })

export default router;