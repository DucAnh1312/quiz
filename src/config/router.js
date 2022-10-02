import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import GetListQuestion from "../components/Play/Child/GetListQuestion";
import Play from "../components/Play/Main/Play"


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
    path: "getlistquestion",
    component: <GetListQuestion/>
  },
  {
    path: "play",
    component: <Play/>,
  }
];

export default Router;
