import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '@/views/ProjectsView.vue'
import EmloyeeView from '@/views/EmloyeeView.vue'
import PointsView from '@/views/PointsView.vue'
import SamplesView from '@/views/SamplesView.vue'
import EgesView from '@/views/EgesView.vue'
import LayersView from '@/views/LayersView.vue'
import PhysicalCharacteristicsOfSoils from '@/views/PhysicalCharacteristicsOfSoils.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/employee',
      name: 'employee',
      component: EmloyeeView
    },
    {
      path: '/',
      name: 'projects',
      component: ProjectsView
    },    
    {
      path: '/points',
      name: 'points',
      component: PointsView
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