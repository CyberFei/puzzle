<template>
  <div class="page">
    <button @click="changeFrame">点我切换一个基座（灰度测试）</button>
  </div>
</template>

<script>
export default {
  name: "changeFrame",
  methods: {
    changeFrame() {
      if (
        !localStorage.getItem("frame") ||
        localStorage.getItem("frame") == "dashboard"
      )
        localStorage.setItem("frame", "demo");
      else localStorage.setItem("frame", "dashboard");
      location.reload();
    }
  }
};
</script>
