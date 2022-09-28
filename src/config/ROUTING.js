import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';



const ROUTING = [
    {
        path: '/',
        component: <Login/>
    },
    {
        path : 'register',
        component : <Register/>
    },
    {
        path : 'forgot',
        component : <ForgotPassword/>
    }
]

export default ROUTING;
   