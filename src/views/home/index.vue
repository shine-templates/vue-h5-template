<template>
  <div class="container">
    <van-nav-bar title="模板首页" />
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
