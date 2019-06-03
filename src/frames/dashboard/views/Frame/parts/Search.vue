<template>
  <div id="part-search">
    <input type="text" placeholder="请输入关键字搜索" v-model="kw">
  </div>
</template>

<script>
export default {
  computed: {
    menusForSearch() {
      return this.$store.getters.menusForSearch;
    }
  },
  data() {
    return {
      kw: ""
    };
  }
};
</script>

<style lang="less">
#part-search {
  padding: 0 14px;
  margin-bottom: 12px;
  // 搜索框
  input {
    background: transparent;
    width: 100%;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    &:focus {
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
    }
  }
}
</style>