<template>
  <page-header></page-header>
  <main>
    <router-view />
    <div class="footer-baloon"></div>
  </main>
  <page-footer></page-footer>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {
  name: "root",
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}
html,
body {
  height: 100%;
  margin: 0;
}
main {
  min-height: 100%;

  /* Equal to height of footer */
  /* But also accounting for potential margin-bottom of last child */
  margin-bottom: -@footer_height;
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
@footer_height: 1200px;
.footer {
  &-baloon {
    height: @footer_height;
  }
}
footer {
  height: @footer_height;
}
</style>
