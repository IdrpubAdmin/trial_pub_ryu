import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import PostList from './components/PostList.vue'
import PostDetail from './components/PostDetail.vue'
import AuthorBx from './components/Author.vue'
import CommentBx from './components/Comment.vue'

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/list",
    component: PostList,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: PostDetail,
    children: [
      {
        path: "author",
        component: AuthorBx
      },
      {
        path: "comment",
        component: CommentBx
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
