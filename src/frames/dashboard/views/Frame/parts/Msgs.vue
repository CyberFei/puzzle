<template>
  <div class="msgs">
    <!-- 图标 -->
    <h-tooltip content="消息中心" :delay="500" @click.native="isShow=true">
      <h-icon class="part-btn" name="remind"></h-icon>
      <div class="msgs-num mono" v-show="msgsNo.length>0">{{msgsNo.length>999?'999+':msgsNo.length}}</div>
    </h-tooltip>
    <!-- 遮罩 -->
    <div v-show="isShow" @click="isShow=false" class="msgs-bg full"></div>
    <div class="msgs-p full" :class="{'show':isShow,'showS':isShowS}">
      <div class="msgs-c full">
        <div class="msgs-c-title">
          <h-icon name="remind"></h-icon>
          &nbsp;消息中心&nbsp;[{{msgs.length}}]
          <h-icon v-show="!isShowS" @click.native="isShowS=true" name="manage" class="r"></h-icon>
          <h-icon v-show="isShowS" @click.native="isShowS=false" name="ios-arrow-forward" class="r"></h-icon>
          <h-poptip
            class="r"
            confirm
            title="标记所有消息为已读？"
            placement="bottom-end"
            @on-ok="readAll"
            style="margin-right:12px;"
          >
            <h-icon name="android-done-all" class="success-hover"></h-icon>
          </h-poptip>
          <h-poptip
            class="r"
            confirm
            title="确认清空所有消息？"
            placement="bottom-end"
            @on-ok="delAll"
            style="margin-right:12px;"
          >
            <h-icon name="trash" class="error-hover"></h-icon>
          </h-poptip>
        </div>
        <!-- 消息 -->
        <div class="msg-list full">
          <div class="no-tip" v-show="msgs.length==0">
            <h-icon name="message"></h-icon>暂无消息
          </div>
          <div
            class="msg"
            :class="item.type"
            v-for="(item,i) in msgs"
            :key="i"
            :style="item.status=='yes'?{opacity:0.4,color:'#aaa'}:{}"
          >
            <div class="msg-title">
              {{item.status=='yes'?'[已读] ':''}}
              {{item.title?item.title:types[item.type]}}
              <span
                class="msg-time r mono"
              >{{datetimeFormat(item.time)}}</span>
            </div>
            <div class="msg-con">{{item.con}}</div>
            <div class="msg-op">
              <h-icon name="trash" class="error-hover" @click.native="item.del=true"></h-icon>
              <h-icon name="android-done" class="success-hover" @click.native="item.status='yes'"></h-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="msgs-s full">
        <div class="msgs-s-title">
          <h-icon name="flag"></h-icon>&nbsp;消息状态
        </div>
        <h-checkbox-group v-model="msgsStatus">
          <h-checkbtn value="no" icon="mail" :label="'未读消息 ['+msgsNo.length+']'"></h-checkbtn>
          <h-checkbtn value="yes" label="已读消息"></h-checkbtn>
        </h-checkbox-group>
        <div class="msgs-s-title" style="margin-top:36px">
          <h-icon name="order"></h-icon>&nbsp;消息类型
        </div>
        <h-checkbox-group v-model="msgsType">
          <h-checkbtn
            icon="remind"
            v-for="(type,key) in types"
            :key="key"
            :class="key"
            :value="key"
            :label="type"
          ></h-checkbtn>
        </h-checkbox-group>
        <div class="msgs-s-title" style="margin-top:36px">
          <h-icon name="setup"></h-icon>&nbsp;其他
        </div>
        <h-checkbox-group v-model="others">
          <h-checkbtn value="showDate" label="查看消息日期"></h-checkbtn>
        </h-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isShowS: false,
      types: {
        info: "通知消息",
        success: "成功消息",
        warning: "警告消息",
        error: "错误消息"
      },
      msgsType: ["info", "warning", "error"],
      msgsStatus: ["no", "yes"],
      others: []
    };
  },
  computed: {
    msgsAll() {
      return this.$store.getters.msgsAll;
    },
    msgs: function() {
      return this.msgsAll.filter(
        item =>
          !item.del &&
          this.msgsType.indexOf(item.type) > -1 &&
          this.msgsStatus.indexOf(item.status) > -1
      );
    },
    msgsNo: function() {
      return this.msgsAll.filter(
        item =>
          !item.del &&
          this.msgsType.indexOf(item.type) > -1 &&
          item.status == "no"
      );
    }
  },
  methods: {
    readAll() {
      for (let msg of this.msgsNo) msg.status = "yes";
    },
    delAll() {
      for (let msg of this.msgs) msg.del = true;
    },
    // 时间处理
    datetimeFormat(timestamp) {
      var zero = value => (value < 10 ? "0" : "") + value;

      var myDate = new Date(timestamp);

      var year = myDate.getFullYear();
      var month = zero(myDate.getMonth() + 1);
      var day = zero(myDate.getDate());

      var hour = zero(myDate.getHours());
      var minite = zero(myDate.getMinutes());
      var second = zero(myDate.getSeconds());

      return (
        (this.others.indexOf("showDate") > -1
          ? year + "-" + month + "-" + day + " "
          : "") +
        (hour + ":" + minite + ":" + second)
      );
    },
    timeFormat(timestamp) {
      var mistiming = Math.round((Date.now() - timestamp) / 1000);
      var arrr = ["年", "个月", "星期", "天", "小时", "分钟", "秒"];
      var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
      for (var i = 0; i < arrn.length; i++) {
        var inm = Math.floor(mistiming / arrn[i]);
        if (inm != 0) {
          return inm + arrr[i] + "前";
        }
      }
    }
  },
  created() {
    // 重写hui方法
    let _this = this;
    let types = ["info", "success", "warning", "error"];
    for (let i in types) {
      (function(type) {
        // 全局提示
        let f1 = _this.$hMessage[type];
        _this.$hMessage[type] = text => {
          _this.$store.commit("ADD_MSG", {
            type: type,
            status: "no",
            del: false,
            title: "",
            con: text,
            time: Date.now(),
            from: "message"
          });
          f1(text);
        };
        // 通知提醒
        let f2 = _this.$hNotice[type];
        _this.$hNotice[type] = args => {
          _this.$store.commit("ADD_MSG", {
            type: type,
            status: "no",
            del: false,
            title: args.title,
            con: args.desc,
            time: Date.now(),
            from: "notice"
          });
          f2(args);
        };
      })(types[i]);
    }
  }
};
</script>

<style lang="less">
.msgs {
  position: relative;
  display: inline-block;
  &-num {
    font-size: 12px;
    text-align: center;
    top: 4px;
    left: 22px;
    position: absolute;
    background: #d9534f;
    color: #fff;
    line-height: 16px;
    padding: 0 4px;
    min-width: 16px;
    border-radius: 10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  }
  &-bg.full {
    position: fixed;
    z-index: 100;
    // background: rgba(0, 0, 0, 0.2);
  }
  &-p {
    @w: 600px;
    @w-c: 400px;
    &.full {
      z-index: 101;
      position: fixed;
      left: auto;
      width: @w;
      background: #fff;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
      transform: translateX(@w+10);
      opacity: 0;
      transition: transform 0.3s, opacity 0.2s;
    }
    &.show {
      opacity: 1;
      transform: translateX(@w - @w-c);
      &.showS {
        opacity: 1;
        transform: translateX(0);
      }
    }
    // 内容
    .msgs-c {
      // padding: 20px;
      &.full {
        right: @w - @w-c;
        // overflow: auto;
      }
      &-title {
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #4a94fa;
        line-height: 39px;
        height: 60px;
        border-bottom: 1px solid #f5f5f5;
        .h-icon {
          font-size: 22px;
          position: relative;
        }
        .h-icon.r,
        .r .h-icon {
          color: #444;
          cursor: pointer;
          // margin-right: -6px;
          &:hover {
            color: #4a94fa;
          }
        }
      }
      .msg-list {
        padding: 16px 20px;
        // margin-left: 20px;
        // border-left: 1px solid#f5f5f5;
        &.full {
          top: 60px;
          overflow: auto;
          overflow: overlay;
        }
        .no-tip {
          // line-height: 3;
          color: #ccc;
          text-align: center;
          .h-icon {
            color: #eee;
            display: block;
            font-size: 80px;
          }
        }
      }
      .msg {
        position: relative;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1),
          0 0 0 1px rgba(0, 0, 0, 0.05);
        border-left: 3px solid #298dff;
        border-radius: 3px;
        padding: 12px;
        margin-bottom: 12px;
        transition: opacity 0.2s;
        &.success {
          border-color: #1abe6b;
        }
        &.warning {
          border-color: #ff9901;
        }
        &.error {
          border-color: #f5222d;
        }
        &-title {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        &-time {
          font-size: 12px;
          color: #aaa;
        }
        // 消息操作
        &:hover {
          .msg-time {
            display: none;
          }
          .msg-op {
            display: block;
          }
        }
        &-op {
          display: none;
          position: absolute;
          top: 8px;
          right: 10px;
          border-radius: 3px;
          font-weight: bold;
          .h-icon {
            color: #444;
            cursor: pointer;
            display: inline-block;
            font-size: 18px;
            line-height: 28px;
            width: 28px;
            text-align: center;
            &:hover {
              color: #4a94fa;
            }
          }
        }
      }
    }
    // 设置
    .msgs-s {
      padding: 20px;
      border-left: 1px solid #ddd;
      // background: #f5f5f5;
      &.full {
        left: @w-c;
        overflow: auto;
        overflow: overlay;
      }
      &-title {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 16px;
      }
      .h-checkbtn-wrapper {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
        &-selected {
          &.success {
            color: #1abe6b;
            border-color: #1abe6b;
            .h-checkbtn-icon {
              border-color: transparent #1abe6b transparent transparent;
            }
          }
          &.warning {
            color: #ff9901;
            border-color: #ff9901;
            .h-checkbtn-icon {
              border-color: transparent #ff9901 transparent transparent;
            }
          }
          &.error {
            color: #f5222d;
            border-color: #f5222d;
            .h-checkbtn-icon {
              border-color: transparent #f5222d transparent transparent;
            }
          }
        }
      }
    }
  }
  .success-hover {
    &:hover {
      color: #1abe6b !important;
    }
  }
  .error-hover {
    &:hover {
      color: #f5222d !important;
    }
  }
}
</style>