<template>
  <div class="page">
    <router-link to="/elastic/page">Go /elastic/page</router-link>

    <div v-for="menu in menus" :key="menu.id">
      <b>{{ menu.name }}</b>

      <div
        class="link"
        v-for="item in menu.children"
        :key="item.id"
        @click="linkTo(item.id)"
      >
        {{ item.name }}
      </div>
      <br />
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
      // console.log(this.$router.options.routes);
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="less">
.link {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
