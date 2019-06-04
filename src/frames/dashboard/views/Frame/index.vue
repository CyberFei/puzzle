<template>
  <div class="index full">
    <div id="topbar" class="full fb">
      <div id="topbarLogo">
        <img id="topbarLogoImg" src="../../assets/logo.png" alt>
      </div>
      <div id="topbarLogoName">{{ appName }}</div>
      <div id="topbarCon" class="fb1"></div>
      <partBtns id="topbarBtns"/>
    </div>
    <part-menu id="menu" class="full" :menus="menus" :nowTab="nowTab"/>
    <part-tabs id="part-tabs"/>
    <div id="con" class="full">
      <keep-alive :include="includedComponents">
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import partMenu from "./parts/Menu/";
import partTabs from "./parts/Tabs";
import partBtns from "./parts/Btns";
import { mapGetters } from "vuex";

export default {
  name: "Index",
  components: {
    partMenu,
    partTabs,
    partBtns
  },
  computed: {
    ...mapGetters(["tabs", "nowTab", "menus"]),
    includedComponents: function() {
      // 首页默认缓存
      var comps = [PUZZLE_CONFIG.pageHome ? PUZZLE_CONFIG.pageHome : "Home"];
      // 根据路由地址处理其他tab
      for (var i in this.tabs) comps.push(this.tabs[i].id);
      // console.log(comps);
      return comps;
    }
  },
  data() {
    return {
      appName: PUZZLE_CONFIG.appName
    };
  }
};
</script>

<style lang="less">
@import "~@frames/dashboard/style/var";

.index {
  background: @bg;
}

#topbar {
  @light-primary: lighten(@primary, 10%);
  @dark-primary: darken(@primary, 5%);
  height: @topBarH;
  bottom: auto;
  z-index: 5;

  background: @primary;
  background: linear-gradient(135deg, @dark-primary, @light-primary);

  &Logo {
    @aniTime: 0.3s;
    display: inline-block;
    width: @topBarH;
    height: @topBarH;
    padding: 10px;

    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: background @aniTime;

    &Img {
      filter: grayscale(1) brightness(2);
      width: 100%;
      transition: filter @aniTime;
    }

    &:hover {
      background: #fff;
      #topbarLogoImg {
        filter: grayscale(0) brightness(1);
      }
    }
  }

  &LogoName {
    padding: 0 10px;
    font-size: 19px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 3px;
    text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.1);
  }
}

#menu {
  top: @topBarH;
  width: @menuBarW;
  z-index: 4;

  background: #fff;
  box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.05);
  transition: width 0.3s;
}

#part-tabs {
  top: @topBarH;
  left: @menuBarW;
  height: @TabsH;

  z-index: 3;

  background: #fff;
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.05);
}

#con {
  top: @topBarH + @TabsH;
  left: @menuBarW;
  z-index: 1;
  overflow: auto;
  overflow: overlay;
}
</style>
