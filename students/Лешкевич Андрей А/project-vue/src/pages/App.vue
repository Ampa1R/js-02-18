<template>
  <p>main</p>
  <router-view />
  <page-footer></page-footer>
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
export default {
  name: "root",
  components: {
    PageFooter,
  },
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
}

.clear-fix:after {
  content: "";
  display: table;
  clear: both;
}

.fonts(@fs: @text_fs; @lh: @text_lh; @w: @text_w; @ls: @text_ls) {
  font-size: @fs;
  line-height: @lh;
  font-weight: @w;
  letter-spacing: @ls;
}

.wrap {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
