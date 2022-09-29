import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import Play from "../components/Play/Play"


const Router = [
  {
    path: "/",
    component: <Login />,
  },
  {
    path: "register",
    component: <Register />,
  },
  {
    path: "forgot",
    component: <ForgotPassword />,
  },
  {
    path: "play",
    component: <Play/>,
  }
];

export default Router;
