import Vue from "vue";
import Router  from "vue-router";
Vue.use(Router);

const home = r => require(['../components/Home/home'], r)
const CustomTable = r => require(['../components/CustomTable'], r)
const ScSelect = r => require(['../components/ScSelect'], r);
const ScLabelBadge = r => require(['../components/ScLabelBadge'], r);


// 路由配置
const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/table',
        component: CustomTable,
    },
    {
        path: '/ScSelect',
        component: ScSelect,
    },
    {
        path: '/ScLabelBadge',
        component: ScLabelBadge,
    },
]

// 创建路由对象并导出，在main.js文件中导入并使用即可
const router = new Router({
    routes,
})

export default router