import { createRouter, createWebHistory } from 'vue-router'
import ApplicationDescription from '@/components/main/ApplicationDescription.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import EmloyeeView from '@/views/EmloyeeView.vue'
import AdminView from '@/views/AdminView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import PointsView from '@/views/PointsView.vue'
import CptView from '@/views/CptView.vue'
import SamplesView from '@/views/SamplesView.vue'
import EgesView from '@/views/EgesView.vue'
import LayersView from '@/views/LayersView.vue'
import PhysicalCharacteristicsOfSoils from '@/views/PhysicalCharacteristicsOfSoils.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ApplicationDescription
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/employee',
      name: 'employee',
      component: EmloyeeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },    
    {
      path: '/points',
      name: 'points',
      component: PointsView
    },
    {
      path: '/cpt',
      name: 'cpt',
      component: CptView
    },
    {
      path: '/samples',
      name: 'samples',
      component: SamplesView
    },
    {
      path: '/eges',
      name: 'eges',
      component: EgesView
    },
    {
      path: '/layers',
      name: 'layers',
      component: LayersView
    },
    {
      path: '/physicalcharacteristicsofsoils',
      name: 'physicalcharacteristicsofsoils',
      component: PhysicalCharacteristicsOfSoils
    },
  ]
})

export default router