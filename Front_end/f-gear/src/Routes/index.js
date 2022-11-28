import routes from './Configuration'
import LoginPage from '../Page/LoginPage/LoginPage'
import HeaderDefault from '../Page/HomePage/HomePage'


const publicRoutes = [
   {
    path: routes.login,
    component : LoginPage
   },
   {
    path: routes.home,
    component : HeaderDefault
   } 
]
export default publicRoutes