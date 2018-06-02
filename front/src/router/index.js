import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/components/page-view'
import PostList from '@/components/post-list'
import PostView from '@/components/post-view'
import BibList from '@/components/bib-list'
import BibView from '@/components/bib-view'
import DistList from '@/components/dist-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PostList
    },
    {
      path: '/page/:slug',
      name: 'PageView',
      component: PageView
    },
    {
      path: '/post',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/post/:slug',
      name: 'PostView',
      component: PostView
    },
    {
      path: '/bib',
      name: 'BibList',
      component: BibList
    },
    {
      path: '/bib/:slug',
      name: 'BibView',
      component: BibView
    },
    {
      path: '/dist',
      name: 'DistList',
      component: DistList
    }
  ]
})
