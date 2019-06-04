<template>
  <div v-show="!item.hide">
    <!-- 菜单 -->
    <div
      class="fb menu"
      :style="{ paddingLeft: 12 + level * 16 + 'px' }"
      @click="item.leaf?handleClick(item):toggle()"
      :class="{'sel':activeMenu.id==item.id}"
    >
      <!-- 图标 -->
      <i v-if="item.icon" class="iconfont" :class="'icon-'+item.icon"></i>
      <!-- 名字 -->
      <div v-html="withKW(item.name)" class="fb1"></div>
      <!-- 文件夹图标 -->
      <i
        v-if="!item.leaf"
        class="iconfont icon-chevron-left"
        :class="item.expand ? 'open' : 'close'"
      ></i>
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
        :handleClick="handleClick"
        :withKW="withKW"
        :activeMenu="activeMenu"
      ></menu-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuItem",
  props: ["item", "level", "activeMenu", "handleClick", "withKW", "kw"],
  methods: {
    // 展开/折叠
    toggle() {
      this.$set(this.item, "expand", !this.item.expand);
    }
  }
};
</script>


<style lang="less">
@import "~@frames/dashboard/style/var";

#menuCon {
  .menu {
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    border-left: 2px solid transparent;
    line-height: 20px;
    height: 46px;
    padding: 13px 12px;
    opacity: 1;

    transition: background 0.2s, height 0.2s, opacity 0.2s, padding 0.2s;

    &:hover {
      background: @hover;
    }
    &.sel {
      color: @primary;
      background: @hover;
      border-left: 2px solid @primary;
    }

    // 图标
    .iconfont {
      margin-right: 5px;
    }
    // 文字
    .fb1 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    // 箭头
    .icon-chevron-left {
      display: inline-block;
      font-size: 12px;
      color: #bbbec4;
      margin-right: 0;
      transition: transform 0.2s;
      &.open {
        transform: rotate(-90deg);
      }
      &.close {
        transform: rotate(0);
      }
    }
  }
  // 子菜单
  .menu-c-panel {
    overflow: hidden;
    &.close {
      .menu {
        height: 0;
        opacity: 0;
        padding: 0 12px;
      }
    }
  }
}
</style>