<template>
  <div class="full">
    <div class="tabs-panel">
      <span
        :class="!nowTab.id ? 'now' : ''"
        @click="home()"
        style="border-left:1px solid #eee;padding-right:10px;"
      >
        <i class="iconfont icon-home"></i>首页
      </span>
      <span
        v-for="(tab, i) in tabs"
        :key="tab.id"
        :class="nowTab.id == tab.id ? 'now' : ''"
        @click.self="changeTab(tab)"
        @click.right="rightMenu($event, tab, i, nowTab.id == tab.id)"
        @contextmenu.prevent
        @click.middle="closeTab(tab, i, nowTab.id == tab.id)"
      >
        {{ tab.name }}
        <i
          class="iconfont icon-x tab-close"
          @click="closeTab(tab, i, nowTab.id == tab.id)"
        ></i>
      </span>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <div class="bg-left">
      <i class="iconfont icon-chevron-left"></i>
    </div>
    <div class="bg-right">
      <i class="iconfont icon-chevron-right"></i>
    </div>
    <div class="right-menu" v-show="openRight">
      <div
        class="right-menu-item"
        @click.stop="
          closeTab(rightItem.tab, rightItem.index, rightItem.isNow);
          openRight = false;
        "
      >关闭标签</div>
      <div class="right-menu-item" @click.stop="closeOthers()">关闭其他</div>
      <div class="right-menu-item" @click.stop="closeAll()">关闭所有</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: {
    // tabs: Array
  },
  data() {
    return {
      oldTabsLength: 0,
      openRight: false,
      rightItem: {}
    };
  },
  computed: {
    ...mapGetters(["tabs", "nowTab"])
  },
  watch: {
    tabs: function(newTabs) {
      if (newTabs.length > this.oldTabsLength)
        this.$nextTick(() => {
          document.querySelector("#part-tabs .tabs-panel").scrollLeft = 100000;
          this.oldTabsLength = newTabs.length;
        });
    }
  },
  methods: {
    changeTab(tab) {
      this.$router.replace({ name: tab.id });
      this.$store.commit("SET_NOWTAB", tab);
    },
    closeTab(tab, index, isNow) {
      this.$store.commit("DEL_TAB", index);
      if (isNow) {
        if (index == 0) this.home();
        else this.changeTab(this.tabs[index - 1]);
      }
      this.oldTabsLength = this.tabs.length;
    },
    home() {
      this.$store.commit("CLEAR_NOWTAB");
      // 跳转主页
      this.$router.replace({ path: "/" });
    },
    // 打开右键菜单
    rightMenu(e, tab, index, isNow) {
      this.openRight = true;
      this.rightItem = {
        tab: tab,
        index: index,
        isNow: isNow
      };
      document.querySelector(".right-menu").style.left = e.clientX + "px";
      document.querySelector(".right-menu").style.top = e.clientY + "px";
      // return false;
    },
    // 关闭其他
    closeOthers() {
      // console.log(this.rightItem);
      this.changeTab(this.rightItem.tab);
      this.$store.commit("DEL_OTHERS", this.rightItem.index);
      this.openRight = false;
    },
    // 关闭所有
    closeAll() {
      this.$store.commit("CLEAR_TAB");
      this.home();
      this.openRight = false;
    }
  },
  mounted() {
    // 点击任意地方隐藏右键菜单
    document.addEventListener("click", () => {
      this.openRight = false;
    });
    //鼠标滚轮操作滚动条
    function doScroll(e) {
      var delta =
        // chrome & ie
        (e.wheelDelta && (e.wheelDelta > 0 ? 1 : -1)) ||
        // firefox
        (e.detail && (e.detail > 0 ? -1 : 1));
      var a =
        document.querySelector("#part-tabs .tabs-panel").scrollLeft -
        delta * 40;
      document.querySelector("#part-tabs .tabs-panel").scrollLeft = a;
    }
    document
      .querySelector("#part-tabs .tabs-panel")
      .addEventListener("mousewheel", doScroll);
    document
      .querySelector("#part-tabs .tabs-panel")
      .addEventListener("DOMMouseScroll", doScroll);
  }
};
</script>

<style lang="less">
@import "~@frames/dashboard/style/var";

#part-tabs {
  height: @TabsH;
  // 超出遮罩
  .bg-left,
  .bg-right {
    position: absolute;
    top: 0;
    right: 0;
    height: @TabsH;
    width: 20px;
    transition: all 0.2s;
    z-index: 3;
    i {
      // font-weight: bold;
      display: inline-block;
      line-height: @TabsH + 1;
      width: 100%;
      text-align: center;
      color: #888;
    }
  }
  .bg-left {
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
    left: 0;
  }
  .bg-right {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
    right: 0;
  }
  // 标签栏
  .tabs-panel {
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 20px;
    // background: #f7f7f7;
    font-size: 0;
  }
  // 标签
  span {
    display: inline-block;
    height: @TabsH;
    line-height: @TabsH;
    border: 0;
    border-right: 1px solid #eee;
    cursor: pointer;
    padding: 0 6px 0 10px;
    font-size: 13px;
    transition: all 0.2s;
    color: #888;
    font-weight: bold;
    .iconfont {
      font-size: 14px;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.6);
    }
    &.now {
      color: @primary;
      font-weight: bold;
    }
    .tab-close {
      display: inline-block;
      width: 0;
      overflow: hidden;
      font-weight: bold;
      transition: all 0.2s;
      margin-left: 0;
      opacity: 0;
      vertical-align: middle;
      color: #444;
      &:hover {
        color: #d9534f;
      }
    }
    &:hover {
      .tab-close {
        margin-left: 5px;
        width: 20px;
        opacity: 1;
      }
    }
  }
  // 右键菜单
  .right-menu {
    position: fixed;
    background: #ffffff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    z-index: 100;
    border-radius: 4px;
    padding: 6px 0;
    &-item {
      font-size: 12px;
      font-weight: bold;
      padding: 6px 16px;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>