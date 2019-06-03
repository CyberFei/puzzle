<template>
  <div id="part-side">
    <div id="part-search">
      <input type="text" placeholder="请输入关键字搜索" v-model="kw" @input="find()">
    </div>
    <div id="part-side-bar">
      <div v-show="mt.length==0" class="no-tip">无相关结果</div>
      <menuItem
        v-for="item in mt"
        :key="item.id"
        :item="item"
        :level="0"
        :activeMenu="nowTab"
        :kw="kw"
      />
    </div>
  </div>
</template>

<script>
import menuItem from "./item";

export default {
  components: { menuItem },
  props: ["menus", "nowTab"],
  data() {
    return {
      kw: "",
      mt: []
    };
  },
  methods: {
    find() {
      this.mt = JSON.parse(JSON.stringify(this.menus));
      if (this.kw != "") this.findNode(this.kw, this.mt);
    },
    // 树的模糊搜索
    findNode(key, raw) {
      var all = false;
      for (let i = 0; i < raw.length; i++) {
        this.$set(raw[i], "expand", true);
        var has = false;
        if (raw[i].name.toLowerCase().indexOf(key.toLowerCase()) > -1) {
          has = true;
        } else if (raw[i].children) {
          has = this.findNode(key, raw[i].children);
        } else {
          has = false;
        }
        if (!has) {
          raw.splice(i, 1);
          i--;
        }
        all = all || has;
      }
      return all;
    }
  },
  created() {
    this.mt = JSON.parse(JSON.stringify(this.menus));
  }
};
</script>

<style lang="less">
#part-side {
  display: flex;
  flex-direction: column;
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
      color: rgba(255, 255, 255, 0.8);
      &::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      &:focus {
        color: #222;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
      }
    }
  }
  #part-side-bar {
    flex: 1;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    overflow: auto;
    overflow: overlay;
    .no-tip {
      text-align: center;
      line-height: 3;
      color: rgba(255, 255, 255, 0.8);
    }
  }
}
</style>