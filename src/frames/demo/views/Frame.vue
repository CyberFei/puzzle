<template>
  <div class="full">
    <div class="full" id="fLeft">
      <div v-for="menu in menus" :key="menu.id">
        <b>{{ menu.name }}</b>
        <div
          class="link"
          v-for="item in menu.children"
          :key="item.id"
          @click="linkTo(item.id)"
        >{{ item.name }}</div>
        <br>
      </div>
    </div>
    <div class="full" id="con">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    menus() {
      return this.$store.getters.menus;
    }
  },
  methods: {
    linkTo(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="less">
@lW: 300px;
#fLeft {
  right: auto;
  width: @lW;
  padding: 20px;
  overflow: auto;
  overflow: overlay;
  .link {
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
}
#con {
  background: #f5f7fb;
  left: @lW;
  border-left: 1px solid #eee;
  overflow: auto;
  overflow: overlay;
}
</style>
