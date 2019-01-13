import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home.vue';
import Regions from '@/components/Regions.vue';
import Locations from '@/components/Locations.vue';

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/regions',
            component:Regions
        },
        {
            path:'/locations',
            component:Locations
        }
    ],
    linkActiveClass:'active',
    mode:'history'
})