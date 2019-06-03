<template>
  <div v-show="!item.hide">
    <!-- 菜单 -->
    <div
      v-if="item.leaf"
      class="menu-c"
      :style="{ paddingLeft: 14 + level * 14 + 'px' }"
      @click="handleClick(item)"
      :class="{
        sel:
          item.service_name + item.page ==
          (activeMenu ? activeMenu.fullPath : ''),
        'with-sub': item.sub
      }"
    >
      <!-- 名字 -->
      <span v-html="withKW(item.name)"></span>
      <!-- 副名字 -->
      <div v-if="item.sub" class="sub-title">{{ item.sub }}</div>
    </div>
    <!-- 文件夹 -->
    <div
      v-else
      class="menu-p"
      @click="toggle"
      :style="{ paddingLeft: 14 + level * 14 + 'px' }"
    >
      <!-- 图标 -->
      <el-icon :name="item.icon"></el-icon>
      <!-- 名字 -->
      <span v-html="withKW(item.name)"></span>
      <!-- 文件夹图标 -->
      <i
        class="right el-icon el-icon-arrow-down"
        :class="item.expand ? 'open' : 'close'"
      ></i>
      <!-- 副名字 -->
      <div v-if="item.sub" class="sub-title">{{ item.sub }}</div>
    </div>
    <!-- 子菜单 -->
    <div
      v-if="item.children"
      ref="c-panel"
      class="menu-c-panel"
      :class="item.expand ? 'open' : 'close'"
    >
      <menu-item
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :kw="kw"
        :level="level + 1"
        :activeMenu="activeMenu"
      ></menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuItem",
  props: ["item", "level", "activeMenu", "kw"],
  methods: {
    // 打开菜单
    handleClick(node) {
      var r = this.$router.match({ name: node.id });
      // 滚动条置0
      r.meta.scrollTop = 0;
      this.$router.push({
        name: node.id,
        params: {
          resource: node.resource
        }
      });

      this.$store.commit("ADD_TAB", {
        name: node.name,
        fullPath: node.service_name + node.page
      });
    },
    // 展开/折叠
    toggle() {
      this.item.expand = !this.item.expand;
    },
    // 关键字高亮
    withKW(name) {
      var findText = name.split(this.kw);
      return findText.join(
        '<span style="color:#ffe079;">' + this.kw + "</span>"
      );
    }
  }
};
</script>


<style lang="less">
#part-side-bar {
  // 菜单/文件夹共有样式
  .menu-p,
  .menu-c {
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    line-height: 20px;
    height: 46px;
    padding: 13px 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 1;
    transition: background 0.2s, height 0.2s, opacity 0.2s, padding 0.2s;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    .sub-title {
      color: rgba(255, 255, 255, 0.5);
      font-weight: normal;
      font-size: 11px;
    }
    &.with-sub {
      padding: 8px 14px;
      height: 56px;
    }
  }
  // 文件夹
  .menu-p {
    .el-icon {
      display: inline-block;
      margin-right: 5px;
      vertical-align: middle;
      font-size: 16px;
      &.right {
        font-size: 12px;
        color: #bbbec4;
        margin-right: 0;
        transition: transform 0.2s;
        &.open {
          transform: rotate(0);
        }
        &.close {
          transform: rotate(90deg);
        }
      }
    }
  }
  // 菜单
  .menu-c {
    &.sel {
      color: #63b4fb;
    }
  }
  // 子菜单
  .menu-c-panel {
    background: rgba(0, 0, 0, 0.2);
    &.close {
      .menu-p,
      .menu-c {
        height: 0;
        opacity: 0;
        padding: 0 14px;
      }
    }
  }
}
</style>