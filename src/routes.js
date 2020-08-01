import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const DashboardDataIndonesia = React.lazy(() => import('./Demo/Dashboard/DefaultIndo'));


const routes = [
    { path: '/global_data',  name: 'Default', component: DashboardDefault },
    { path: '/indonesia_data',  name: 'Default', component: DashboardDataIndonesia },
];

export default routes;