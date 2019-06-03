<template>
  <div v-if="all.changePassword">
    <h-dropdown-item @click.native="isShow=true">
      <h-icon name="lock"></h-icon>修改密码
    </h-dropdown-item>
    <h-msgBox class="changePwd-box" v-model="isShow" :closable="false" title="密码修改" width="360">
      <h-form ref="form" :model="form" :rules="rule" :label-width="90">
        <h-form-item label="原密码" prop="old" required>
          <h-input v-model="form.old" placeholder="请输入原密码" type="password"></h-input>
        </h-form-item>
        <h-form-item label="新密码" prop="new" required>
          <h-input v-model="form.new" placeholder="请输入新密码" type="password"></h-input>
        </h-form-item>
        <h-form-item label="确认新密码" prop="con" required>
          <h-input v-model="form.con" placeholder="请确认新密码" type="password"></h-input>
        </h-form-item>
      </h-form>
      <div slot="footer">
        <h-button type="text" @click="isShow=false">取消</h-button>
        <h-button type="primary" @click="ok" :loading="loading">确认</h-button>
      </div>
    </h-msgBox>
  </div>
</template>

<script>
import * as all from "@/bridge/var";

export default {
  data() {
    return {
      isShow: false,
      // 表单
      form: {
        old: "",
        new: "",
        con: ""
      },
      // 表单验证
      rule: {
        con: [
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.new) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ]
      },
      loading: false,
      all: all
    };
  },
  methods: {
    ok() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          all
            .changePassword(this.form)
            .then(data => {
              this.loading = false;
              // 登陆成功
              if (data.code == 200) {
                // this.$hMessage.success("操作成功，请重新登陆！");
                alert("操作成功，请重新登陆！");
                this.isShow = false;
                localStorage.clear();
                sessionStorage.clear();
                location.reload();
              }
            })
            .catch(err => {
              console.log(err);
              this.loading = false;
            });
        } else {
          console.error("表单验证不通过！");
        }
      });
    }
  }
};
</script>
<style lang="less">
.changePwd-box .h-modal-body {
  padding: 20px 30px 5px 30px;
  .h-form-item {
    margin-bottom: 15px;
    &-label {
      font-weight: bold;
    }
  }
}
</style>