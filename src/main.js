// import Vue from "vue/dist/vue.esm.js" //自己找的带解析器的版本
import Vue from "vue";
import App from "@/App";
// new Vue({
//     el: "#app",
//     components: {
//       App,
//     },
//     template: "<App/>"
//   })
// 我们现在默认导入的vue是一个runtime-only版本的vue，这个
new Vue({
  el: "#app",
  render: h => h(App) //写法固定的
    // 1.定义并注册了APP
    // 2.使用了APP组件
    //3.比上面的写法多干了一件事，就是寻找解析器loader
})