import NavBar from './pages/NavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Footer from './pages/Footer'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/navBar',
    component: NavBar,
    exact: true,
  },
  {
    path: '/aboutUs',
    component: AboutUs,
    exact: true,
  },
  {
    path: '/footer',
    component: Footer,
    exact: true,
  },
]

export default routes
