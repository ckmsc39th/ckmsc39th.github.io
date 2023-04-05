import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Categories from '../views/Categories.vue'
import Works from '../views/Works.vue'
import Schedule from '../views/Schedule.vue'
import Contact from '../views/Contact.vue'

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
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/works',
        name: 'Works',
        component: Works
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: Schedule
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
        
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
