<template>
  <div class="app">
    <van-config-provider theme="light">
      <router-view />
      <van-tabbar route>
        <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item replace to="/setting" icon="setting"
          >设置</van-tabbar-item
        >
      </van-tabbar>
    </van-config-provider>
  </div>
</template>

<style>
.app {
  width: 100vw;
  height: 100vh;
}
</style>
