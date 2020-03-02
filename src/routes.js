import pageBuyer from './page/pageBuyer.vue'
import payment from './page/payment.vue'
import login from './page/login.vue'

export const routes = [
  {
    path: '/',
    component: login,
    name: 'page-buyer',
  },  
  {
    path: '/page-buyer',
    component: pageBuyer,
    name: 'page-buyer',
    children:[{
      path: ':category',
      component: pageBuyer,
    }]
  },
  {
    path: '/payment',
    component: payment,
    name: 'payment',
  },  
  // {
  //   path: '/payment',
  //   components:{
  //     default: User,
  //     'header-bottom': Header,
  //   },    
  //   children:[
  //     {
  //       path: '',
  //       component: UserStart
  //     },
  //     {
  //       path: ':id',
  //       component: UserDetail
  //     },
  //     {
  //       path: ':id/edit',
  //       component: UserEdit,
  //       name: 'userEdit'
  //     }            
  //   ]
  // },
  // {
  //   path: '*', redirect: '/'
  // }
]