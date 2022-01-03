import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import {
  Button,
  Select,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Row,
  Col,
  Card
} from 'element-ui';

Vue.config.productionTip = false

Vue.component(Button.name, Button);
Vue.use(Select)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
