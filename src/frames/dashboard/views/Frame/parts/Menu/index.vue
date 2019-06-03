<template>
  <div>
    <div id="menuSearch">
      <!-- <i class="iconfont icon-search"></i> -->
    </div>
    <div id="menuCon" class="fb1">
      <i class="iconfont icon-aperture"></i>
      <i class="iconfont icon-tv"></i>
      <i class="iconfont icon-twitter"></i>
      <i class="iconfont icon-globe"></i>
      <i class="iconfont icon-gitlab"></i>
      <i class="iconfont icon-codesandbox"></i>
      <i class="iconfont icon-zap"></i>
      <i class="iconfont icon-pocket"></i>
    </div>
    <div id="menuToggle"><i class="iconfont icon-menu"></i></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "~@frames/dashboard/style/var";
#menu {
  display: flex;
  flex-direction: column;

  &Search {
    height: @TabsH + 1px;
    // padding: 4px 0;
    text-align: center;
    border-bottom: 1px solid #f5f7fb;
    i {
      display: block;
      font-size: 18px;
      // font-weight: bold;
    }
  }

  &Con {
    text-align: center;
    overflow: auto;
    overflow: overlay;
    .iconfont {
      display: block;
      padding: 8px 0;
      font-size: 21px;
    }
  }

  &Toggle {
    border-top: 1px solid #f5f7fb;
    cursor: pointer;
    text-align: center;
    padding: 2px 0 3px;

    &:hover {
      background: @hover;
    }

    .iconfont {
      font-size: 12px;
      font-weight: bold;
      display: inline-block;

      transition: transform 0.3s;
      transform: rotate(-90deg);
    }
  }
}

#menu:hover {
  #menuToggle {
    .iconfont {
      transform: rotate(-45deg);
    }
  }
}
</style>
