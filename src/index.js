import tips from './tips'
import button from './button'
import badge from './badge'
import loading from './loading'

import config from './config'

const components = {
  tips,
  button,
  badge,
  loading,
}

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)
export default {
  config,
  install
}
