import Vue from 'vue'
import Pagination from 'element-ui/lib/pagination'
import Menu from 'element-ui/lib/menu'
import MenuItem from 'element-ui/lib/menu-item'
import Input from 'element-ui/lib/input'
import Button from 'element-ui/lib/button'
import Icon from 'element-ui/lib/icon'
import Rate from 'element-ui/lib/rate'
import Loading from 'element-ui/lib/loading'
import Message from 'element-ui/lib/message'
import Tag from 'element-ui/lib/tag'

export default () => {
  Vue.use(Pagination)
  Vue.use(Menu)
  Vue.use(MenuItem)
  Vue.use(Input)
  Vue.use(Button)
  Vue.use(Icon)
  Vue.use(Rate)
  Vue.use(Tag)

  Vue.use(Loading.directive);

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$message = Message;
}
