import React from 'react'

const Principal = React.lazy(() => import('./views/principal/Principal'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/principal', name: 'Principal', component: Principal },
  { path: '/login', name: 'Login', component: Login },
  { path: '/404', name: '404', component: Page404 },
  { path: '/500', name: '500', component: Page500 },
]

export default routes
