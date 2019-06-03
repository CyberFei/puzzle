<template>
  <div>
    <i class="btn iconfont icon-lock"></i>
    <i class="btn iconfont icon-bell"></i>
    <i class="btn iconfont icon-hexagon"></i>
    <div class="btn user-op">
      <i class="iconfont icon-user"></i>
      <span>Cyber</span>
      <i class="iconfont icon-chevron-down"></i>
      <ul>
        <li><i class="iconfont icon-alert-circle"></i>个人信息</li>
        <li><i class="iconfont icon-key"></i>修改密码</li>
        <li><i class="iconfont icon-log-out"></i>退出登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import partMsgs from "./Msgs";
// import partLock from "./Lock";
// import partPwd from "./Pwd";

export default {
  components: {
    // partMsgs,
    // partLock,
    // partPwd
  },
  data() {
    return {
      username: localStorage.getItem("userId")
    };
  },
  methods: {
    logout() {
      this.$hMsgBox.confirm({
        title: "确认退出登录",
        content: "",
        onOk: () => {
          localStorage.clear();
          sessionStorage.clear();
          location.reload();
        },
        onCancel: () => {}
      });
    }
  }
};
</script>

<style lang="less">
@import "~@frames/dashboard/style/var";

#topbarBtns {
  height: @topBarH;
  padding-right: 15px;

  .btn {
    display: inline-block;
    padding: 0 12px;
    font-size: 21px;
    line-height: @topBarH;
    color: #fff;
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .user-op {
    position: relative;
    margin-left: 19px;
    cursor: default;

    &:hover {
      ul {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
      }
    }

    &:after {
      position: absolute;
      content: "";
      left: -10px;
      background: rgba(0, 0, 0, 0.07);
      top: 10px;
      bottom: 10px;
      width: 1px;
    }

    .icon-user {
      display: inline-block;
      vertical-align: top;
      font-size: 21px;
      line-height: @topBarH;
      color: #fff;
    }

    span {
      display: inline-block;
      padding: 0 6px;
      font-size: 14px;
      vertical-align: top;
    }

    .icon-chevron-down {
      vertical-align: middle;
      margin-top: -5px;
      font-size: 12px;
      font-weight: bold;
    }

    ul {
      position: absolute;
      top: @topBarH;
      right: 0;
      left: 0;
      background: #fff;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
      color: #444;
      padding: 8px 0;
      border-radius: 0 0 3px 3px;

      transition: all 0.2s;
      visibility: hidden;
      opacity: 0;
      transform: translateY(10px);
      li {
        text-align: center;
        font-size: 13px;
        font-weight: bold;
        line-height: 34px;
        i {
          margin-right: 6px;
          font-size: 13px;
        }
        &:hover {
          background: @hover;
        }
      }
    }
  }
}
</style>
