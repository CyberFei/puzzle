<template>
  <div class="part-lock">
    <h-tooltip content="锁屏" :delay="500" @click.native="show()">
      <h-icon class="part-btn" name="lock"></h-icon>
    </h-tooltip>
    <h-msgBox
      class="lock-box"
      v-model="isShow"
      :closable="false"
      :mask-closable="false"
      title="请输入解锁密码"
      width="360"
    >
      <h-input v-model="loginForm.password" placeholder="请输入" type="password"></h-input>
      <div slot="footer">
        <h-button type="text" @click="logout">退出登录</h-button>
        <h-button type="primary" @click="ok" :loading="loading">确认</h-button>
      </div>
    </h-msgBox>
  </div>
</template>

<script>
import { login } from "@/bridge/var";

export default {
  data() {
    return {
      isShow: false,
      loginForm: {
        userId: "",
        password: "",
        remember: true
      },
      loading: false,
      // 默认超时10分钟
      lockTime: 10 * 60 * 1000
    };
  },
  methods: {
    // 显示锁屏
    show() {
      this.loginForm.password = "";
      // 参数获取
      this.loginForm.userId = localStorage.getItem("userId");
      if (localStorage.getItem("token")) this.loginForm.remember = true;
      if (sessionStorage.getItem("token")) this.loginForm.remember = false;
      // 清除token
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      // 显示
      this.isShow = true;
    },
    // 退出登录
    logout() {
      location.reload();
    },
    ok() {
      if (!this.loginForm.password) {
        this.$hMessage.warning("密码不能为空！");
        return;
      }
      this.loading = true;
      login(this.loginForm)
        .then(data => {
          this.loading = false;
          // 登陆成功
          if (data.code == 200) {
            // 保存凭证
            if (this.loginForm.remember)
              localStorage.setItem("token", data.data);
            else sessionStorage.setItem("token", data.data);
            this.isShow = false;
          }
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
        });
    }
  },
  mounted() {
    // 超时登陆
    let _this = this;
    let t = setTimeout(_this.show, _this.lockTime); //延时3秒执行延时任务
    //鼠标移动，重置延时任务
    function resetTask() {
      clearTimeout(t);
      t = setTimeout(_this.show, _this.lockTime);
    }
    //页面加载时，加载函数。
    document.onmousemove = resetTask;
  }
};
</script>

<style lang="less">
.part-lock {
  position: relative;
  display: inline-block;
}
.lock-box .h-modal-body {
  padding: 15px 20px;
}
</style>