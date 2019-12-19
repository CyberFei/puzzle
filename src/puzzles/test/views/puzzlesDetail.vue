<template>
  <div class="page">
    <b>当前使用基座：</b>
    <div>{{frame}}</div>
    <br>
    <b>成功加载模块</b>
    <div>{{PUZZLE_SUCCESS}}</div>
    <br>
    <b>未成功加载模块</b>
    <div>{{PUZZLE_FAILURE}}</div>
  </div>
</template>

<script>
export default {
  name: "puzzlesDetail",
  data() {
    return {
      frame: sessionStorage.getItem("frame") || "dashboard",
      PUZZLE_SUCCESS: window.PUZZLE_SUCCESS
        ? window.PUZZLE_SUCCESS.join(", ")
        : "请在生产环境查看",
      PUZZLE_FAILURE: window.PUZZLE_FAILURE
        ? window.PUZZLE_FAILURE.join(", ")
        : "请在生产环境查看"
    };
  }
};
</script>
