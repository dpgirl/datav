import CustomSvg from "./components/CustomSvg";
import Icon from "./components/Icon";
import Loading from "./components/Loading";
import FlyBox from "./components/FlyBox";
import Container from "./components/Container";

export default function(Vue) {
  Vue.use(CustomSvg)
  Vue.use(Icon)
  Vue.use(Loading)
  Vue.use(FlyBox)
  Vue.use(Container)
}