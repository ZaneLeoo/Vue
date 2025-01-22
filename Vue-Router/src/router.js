import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NoFound from './pages/NoFound.vue';
import CurrentTeam from './components/teams/CurrentTeam.vue';
import TeamsFooter from './pages/TeamsFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    // nested route
    {
      path: '/teams',
      components: { default: TeamsList, teamsFooter: TeamsFooter },
      children: [
        {
          path: ':teamId',
          name: 'member',
          component: TeamMembers,
          children: [
            {
              path: '',
              component: CurrentTeam,
            },
          ],
        },
      ],
      // 指定路由路径触发的导航守卫
      beforeEnter: (to, from) => {
        console.log(to, from);
        console.log('beforeEnter..');
        return true;
      },
    },
    { path: '/users', component: UsersList },

    // 如果以上 path 没有匹配到，这里将匹配所有的其他 path
    // 但需要保证它是最后面的，因为在vue-router中是顺序匹配
    // .* 是通配符
    { path: '/:noFound(.*)', component: NoFound },
  ],
  // 函数控制切换路由时的页面位置,具体请看
  // https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
// navigation guard,可以在导航到其他页面时做一些操作
// 比如鉴权并返回 boolean 来决定是否进行 routing
router.beforeEach((to, from) => {
  console.log('You navigated to another page.');
  console.log(to, from);
  // some authentication
  return true;
});

export default router;
