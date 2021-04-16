import Vue from 'vue'
import VueRouter from 'vue-router'
import Hospitais from "@/views/Hospitais";
import Delegacias from "@/views/Delegacias";
import Hoteis from "@/views/Hoteis";
import Restaurantes from "@/views/Restaurantes";
import PontosTuristicos from "@/views/PontosTuristicos";
import Inicio from "@/views/Inicio";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/hospitais',
        name: 'hospitais',
        component: Hospitais
    },
    {
        path: '/delegacias',
        name: 'delegacias',
        component: Delegacias
    },
    {
        path: '/hoteis',
        name: 'hoteis',
        component: Hoteis
    },
    {
        path: '/restaurantes',
        name: 'restaurantes',
        component: Restaurantes
    },
    {
        path: '/turisticos',
        name: 'turisticos',
        component: PontosTuristicos
    }

]

const router = new VueRouter({
    routes
})

export default router
