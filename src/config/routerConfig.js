import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import GetListQuestion from "../components/Play/Child/GetListQuestion";
import Play from "../components/Play/Main/Play"
import Switchmode from "../components/Switchmode/Switchmode"
import Management from "../components/Management/Management";

const routerConfig = [
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
    path: "play/getlistquestion",
    component: <GetListQuestion />,
  },
  {
    path: "play",
    component: <Play />
  },
  {
    path: "switchmode",
    component: <Switchmode />
  },
  {
    path: "management",
    component: <Management />
  }
];

export default routerConfig;
