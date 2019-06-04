<template>
  <div>
    <div id="menuSearch">
      <input type="text" placeholder="请输入关键字搜索" v-model="kw" @input="find()" @focus="focus">
    </div>
    <div id="menuCon" class="fb1">
      <menuItem
        v-for="item in mt"
        :key="item.id"
        :item="item"
        :level="0"
        :activeMenu="nowTab"
        :handleClick="handleClick"
        :withKW="withKW"
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
    // 树的模糊搜索
    find() {
      this.mt = JSON.parse(JSON.stringify(this.menus));
      if (this.kw != "") this.findNode(this.kw, this.mt);
    },
    findNode(key, raw) {
      var all = false;
      for (let i = 0; i < raw.length; i++) {
        raw[i].expand = true;
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
    },
    focus(e) {
      e.target.select();
    },
    // 打开菜单
    handleClick(node) {
      if (node.leaf) {
        var r = this.$router.match({ name: node.id });
        // 滚动条置0
        r.meta.scrollTop = 0;

        this.$router.push({ name: node.id });
        this.$store.commit("ADD_TAB", node.id);
      }
    },
    // 关键字高亮
    withKW(name) {
      if (this.kw == "") return name;
      var findText = name.split(this.kw);
      return findText.join(
        '<span style="color:#d9534f;">' + this.kw + "</span>"
      );
    }
  },
  created() {
    this.mt = JSON.parse(JSON.stringify(this.menus));
  }
};
</script>

<style lang="less">
@import "~@frames/dashboard/style/var";

#menu {
  display: flex;
  flex-direction: column;

  &Search {
    padding: 10px 12px;
    border-bottom: 1px solid #f5f7fb;
    input {
      width: 100%;
      height: 30px;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.1);

      font-size: 12px;
      line-height: 28px;
      text-align: center;

      transition: all 0.3s;
      &:focus {
        border-color: fadeout(@primary, 20%);
        box-shadow: 0 0 0 4px fadeout(@primary, 90%);
      }
    }
  }

  &Con {
    overflow: auto;
    overflow: overlay;
  }
}
</style>
