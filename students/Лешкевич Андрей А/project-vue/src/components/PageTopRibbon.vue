<template>
  <section class="top-ribbon top-ribbon-nomargin">
    <div class="wrap top-ribbon-wrap">
      <h1>New Arrivals</h1>
      <div class="breadcrumbs">
        <a href="Home">Home</a> / <a href="#">Men</a> /
        <span class="current">New Arrivals</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageTopRibbon",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
/* default text`s parameters */
@text_fs: 14px;
@text_lh: 24px;
@text_w: 400;
@text_ls: normal;
/* Defaults padding and margin */
@pad_hor_def: 15px;
@pad_ver_def: 25px;
@color_gray_light_22: #f8f3f4;
@color_brand_02: #f16d7f;
@color_gray_dark_10: #636363;

.fonts(@fs: @text_fs; @lh: @text_lh; @w: @text_w; @ls: @text_ls) {
  font-size: @fs;
  line-height: @lh;
  font-weight: @w;
  letter-spacing: @ls;
}
.top-ribbon {
  background-color: @color_gray_light_22;
  text-transform: uppercase;
  margin-bottom: 58px;

  &-nomargin {
    margin-bottom: 0;
  }

  &-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 42px 15px;

    & h1 {
      .fonts(24px; 24px; 900; normal);
      color: @color_brand_02;
    }

    & .breadcrumbs {
      color: @color_gray_dark_10;

      & .current {
        color: @color_brand_02;
        font-weight: 700;
      }

      & * {
        .fonts(14px; 20px; 300; normal);
        color: @color_gray_dark_10;
      }
    }

    & a {
      text-decoration: none;
    }
  }
}
</style>
