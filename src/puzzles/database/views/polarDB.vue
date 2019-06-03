<template>
  <div class="page">{{ moment().format("MMMM Do YYYY, h:mm:ss a") }}</div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      moment: moment
    };
  },
  created() {
    console.log(moment);
  }
};
</script>
