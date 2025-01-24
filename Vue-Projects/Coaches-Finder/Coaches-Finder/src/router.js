import { createWebHistory, createRouter } from "vue-router";
import CoachesPage from "./pages/CoachesPage.vue";
import CoachDetails from "./components/coach/CoachDetails.vue";
import RegisterPage from "./pages/RegisterPage.vue";
const routes = [
  { path: "/", redirect: "/coaches" },
  { path: "/coaches", component: CoachesPage },
  { path: "/coaches/details/:coachId", component: CoachDetails },
  { path: "/coaches/register", component: RegisterPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
