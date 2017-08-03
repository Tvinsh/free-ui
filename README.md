# 浅析如何写一个vue ui 组件（库）

## 提要

组件是vue很重要的一部分，从官方文档就可以看出来，占了比较多的篇幅，随着vue的发展，开源社区已经出现了很多ui组件库，判断一个组件库好不好除了拥有丰富的组件，漂亮的设计，还需要可拓展性和可定制性，以及良好的api接口

## 主要知识点

组件的结构
组件之间的数据传递，事件传递
props的使用
组件的注册
组件的引用
render函数的使用
自定义事件
如何使用webpack进行打包
如何全局引入
如何按需引入

## 组件用法

注册后才能使用，注册分为局部注册和全局注册
组件和vue实例类似，基本可以使用其所有内容（data，computed，methods）
data是函数，需要return

## props使用

组件实例的作用域是孤立的，父组件向子组件传递数据，需要通过props实现
prop是单向绑定的，父组件属性变化，将传导给子组件，如果需要在子组件中修改prop，则应定义一个局部变量或计算属性

## 自定义事件

如果子组件需要把数据传递给父组件，需要使用自定义事件
使用 $on(eventName) 监听事件
使用 $emit(eventName) 触发事件

## .sync 修饰符

如果子组件需要把数据传递给父组件，需要使用自定义事件
使用 $on(eventName) 监听事件
使用 $emit(eventName) 触发事件

## 整体框架

使用vue-cli  webpack + vue + less + bable

需要修改的地方：

修改alias,这样可以方便引用的时候写引用路径

```js
alias: {
  'free-ui': path.resolve(__dirname, '../src'),
  'vue$': 'vue/dist/vue.esm.js',
  'src': resolve('src'),
}
```

修改output,配置好打包时候的名字，导出库的名称，以及导出库的类型，umd 集合amd和cmd模式，支持多种引入方式

```js
output: {
  path: path.resolve(__dirname, '../dist'),
  filename: 'free-ui.js',
  library: 'FreeUI',
  libraryTarget: 'umd'
}
```

组件目录内每个组件一个文件，里面的```index.js```为打包的入口文件，引入目录内的每个组件，并全局注册

```js
import tips from './tips'
import button from './button'
import badge from './badge'
import config from './config'
const components = {
  tips,
  button,
  badge,
}
const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}
```

修改externals,不要打包vue，而是在运行时作为依赖引入

```js
externals: {
  vue: {
    root: 'Vue',
    commonjs2: 'vue',
    amd: 'vue',
    commonjs: 'vue'
  }
}
```

## 开发规范

组件名使用组件特殊的前缀名作为命名空间
组件名须简短，有意义，可读性强
css也要采取一定的命名规范，如使用BEM来命名，使用一些全局变量来管理颜色等属性

## 开发准备

确认视觉规范，制定基础的颜色，字体等
确认基础组件，先实现基础组件

## 基础组件-button

通常button组件比较简单，只是促发一个点击事件或者跳转一个链接，现在有很多ui组件库，每个库对button的实现都不一样，大致表现为类似于bootstrap的根据不同状态显示不同的样式，比如default，success，warning等，以及加了水波纹的button，或者带icon，带链接的button等
