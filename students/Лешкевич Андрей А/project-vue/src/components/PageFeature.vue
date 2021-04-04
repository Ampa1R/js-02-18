<template>
  <section class="feature">
    <div class="wrap feature-wrap">
      <div class="banner">
        <div class="col">
          <h2>30%&nbsp;<span>OFFER</span><br /><span>FOR WOMEN</span></h2>
        </div>
        <div class="col">
          <div class="item">
            <img src="@/assets/img/feature_slider_delivery.png" alt="" />
            <div class="cont">
              <h3>Free Delivery</h3>
              <p>
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/feature_slider_sales-discounts.png" alt="" />
            <div class="cont">
              <h3>Sales & discounts</h3>
              <p>
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/img/feature_slider_quality.png" alt="" />
            <div class="cont">
              <h3>Quality assurance</h3>
              <p>
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageFeature",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@color_brand_02: #f16d7f;
@color_white: #ffffff;
@color_gray_dark_02: #222224;
@color_gray_light_23: #fbfbfb;
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
.feature {
  & > div > div > .col:first-child {
    background-image: url(~@/assets/img/feature_slider_mask.png),
      url(~@/assets/img/feature_slider.png);
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;

    & > h2 {
      /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
      .fonts(53.7px; 0.8; 700);
      color: @color_white;
      margin-top: 146px;
      margin-left: 40px;

      & span:first-child {
        color: @color_brand_02;
      }

      & span:last-child {
        font-size: 32.2px;
      }
    }
  }

  & .banner {
    display: flex;
    margin-bottom: 97px;

    & .col {
      &:first-child {
        min-width: 767px;
        min-height: 529px;
      }

      &:last-child {
        display: flex;
        flex-direction: column;
        min-width: 374px;
        padding: 48px 28px;
        background-color: @color_gray_dark_02;

        & > .item {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          margin-top: 15px;

          & img {
            align-self: flex-start;
            margin-right: 28px;
          }

          & h3 {
            margin: 0;
            /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
            .fonts(20px; 1.2; 700);
            color: @color_gray_light_23;
          }

          & p {
            /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
            .fonts(14px; 24px; 300);
            color: @color_gray_light_23;
          }
        }
      }
    }
  }
}
</style>
