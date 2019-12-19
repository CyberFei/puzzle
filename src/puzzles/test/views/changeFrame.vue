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
      const frames = {
        dashboard: {
          name: "dashboard",
          version: "0.1.0",
          host: "http://www.shuva.cn/demo/puzzle-parts/"
        },
        demo: {
          name: "demo",
          version: "0.1.0"
        }
      };

      if (!sessionStorage.getItem("frame"))
        sessionStorage.setItem("frame", JSON.stringify(frames.demo));
      else {
        let name = JSON.parse(sessionStorage.getItem("frame")).name;
        if (name === "dashboard")
          sessionStorage.setItem("frame", JSON.stringify(frames.demo));
        if (name === "demo")
          sessionStorage.setItem("frame", JSON.stringify(frames.dashboard));
      }
      location.reload();
    }
  }
};
</script>
