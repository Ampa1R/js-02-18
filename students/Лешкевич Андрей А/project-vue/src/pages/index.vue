<template>
  <page-big-banner></page-big-banner>
  <page-category></page-category>
  <section class="products">
    <div class="wrap products-wrap">
      <div class="head">
        <h2>Fetured Items</h2>
        <p>Shop for items based on what we featured in this week</p>
      </div>
      <products-list></products-list>

      <div class="footer">
        <div class="btn-sqr_ba">
          <a href="#" class="btn-sqr_ba__link clear-fix"
            ><span class="btn-sqr_ba__text">Browse All Product</span
            ><span class="btn-sqr_ba__icon"
              ><i class="fa fa-long-arrow-right"></i
            ></span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <page-feature></page-feature>
</template>

<script>
import PageBigBanner from "@/components/PageBigBanner.vue";
import PageCategory from "@/components/PageCategory.vue";
import ProductsList from "@/components/ProductsList.vue";
import PageFeature from "@/components/PageFeature.vue";

export default {
  name: "index",
  components: {
    PageBigBanner,
    PageCategory,
    ProductsList,
    PageFeature,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch(
        "GetCatalogDisplayedItems",
        "api/catalog/displayed/get/8"
      );
    });
  },
};
</script>

<style lang="less">
@color_gray_dark_01: #222222;
@color_gray_dark_06: #4d4d4d;
@color_gray_dark_16: #9f9f9f;
@color_brand_02: #f16d7f;
@color_white: #ffffff;
@color_gray_dark_14: #838383;
@color_gradient_gray_light_20: linear-gradient(
  180deg,
  #f9f9f9 0%,
  #f5f5f5 100%
);
@color_gradient_brand_02: linear-gradient(180deg, #f16d7f 0%, #f06c7d 100%);
/* default text`s parameters */
@text_fs: 14px;
@text_lh: 24px;
@text_w: 400;
@text_ls: normal;

.fonts(@fs: @text_fs; @lh: @text_lh; @w: @text_w; @ls: @text_ls) {
  font-size: @fs;
  line-height: @lh;
  font-weight: @w;
  letter-spacing: @ls;
}
.btn {
  &-sqr_ba {
    @btn_h: 48px;
    @lh: 46px;
    @fs: @text_fs;
    @bor_th: 1px;
    @color_t: @color_white;
    @color_ic: @color_white;
    @color_back: @color_brand_02;
    @color_back_img: @color_gradient_brand_02;
    @color_t__focus: @color_gray_dark_01;
    @color_ic__focus: @color_gray_dark_14;
    @color_bt__focus: @color_gray_dark_14;
    @color_back_img__hover: @color_gradient_gray_light_20;
    @bor_c: @color_brand_02;
    @bor_rad: 0px;
    @pad_hor: 16px;
    @pad_txt: ((@btn_h - @lh)/2) 0 ((@btn_h - @lh)/2) @pad_hor;
    @pad_ico: ((@btn_h - @lh)/2) @pad_hor (@pad_hor / 2) (@pad_hor / 2);

    display: inline-block;
    height: @btn_h;

    & a {
      text-decoration: none;
    }

    &__text {
      color: @color_t;
      .fonts(@fs; @lh; 300; 0.025em);
      padding: @pad_txt;
    }

    &__icon {
      color: @color_ic;
      .fonts(@fs; @lh);
      padding: @pad_ico;
    }

    &__link {
      float: left;
      background-color: @color_back;
      background-image: @color_back_img;
      position: relative;
      border: @bor_th solid @bor_c;
      border-radius: @bor_rad;

      &:hover {
        background-image: @color_back_img__hover;
        border-color: @color_ic__focus;
        transition: 100ms;

        & .btn-sqr_ba__text,
        .btn-sqr_ba__icon {
          color: @color_bt__focus;
        }
      }
    }
  }
}
.products {
  &-wrap {
    margin: 67px auto 112px auto;

    & .head {
      text-align: center;
      margin-bottom: 50px;

      & h2 {
        /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
        .fonts(30px; 54px; 700);
        color: @color_gray_dark_01;

        &.upper {
          text-transform: uppercase;
          .fonts(24px; 20px; 900; normal);
          color: @color_gray_dark_06;
        }
      }

      & p {
        /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
        .fonts(14px; normal);
        color: @color_gray_dark_16;
      }

      & > * {
        margin: 0;
      }
    }

    & .footer {
      text-align: center;
    }
  }
}
</style>
