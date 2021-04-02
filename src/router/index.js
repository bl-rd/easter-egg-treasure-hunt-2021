import { createRouter, createWebHashHistory } from 'vue-router';

export const ROUTE_KEYS = {
    HOME: 'HOME',
    CLUE: 'CLUE'
};

const routes = [
    {
        path: '/',
        name: ROUTE_KEYS.HOME,
        component: () => import('../components/pages/Home.vue'),
        children: [
            {
                path: '/:clue',
                name: ROUTE_KEYS.CLUE,
                component: () => import('../components/pages/Clue.vue'),
                props: route => ({ clue: route.params.clue })
            }
        ]
    },    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export { router };