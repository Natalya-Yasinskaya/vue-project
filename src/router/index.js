import { createRouter, createWebHistory } from 'vue-router';
import Article from '../components/Article.vue';
import News from "../components/News.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'news',
      component: News
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
    },
  ]
})

export default router
