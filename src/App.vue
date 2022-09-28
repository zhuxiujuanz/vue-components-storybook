<template>
  <div id="app">
    <div>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <el-button type="primary" disabled>主要按钮</el-button>
      <div>
        <router-link to="/">Go to Home</router-link>
      </div>
      <div>
        <router-link to="/table">Go to table</router-link>
      </div>
      <div>
        <router-link to="/ScSelect">Go to ScSelect</router-link>
      </div>
      <div>
        <router-link to="/ScLabelBadge">Go to ScLabelBadge</router-link>
      </div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
