<template>
  <page-top-ribbon></page-top-ribbon>
  <section class="shopping-cart">
    <div class="shopping-cart-wrap wrap">
      <cart-big></cart-big>
      <section>
        <form id="form-shipping" action="#" class="form-shipping">
          <div class="col">
            <h3>Shipping Adress</h3>
            <div class="select_wrap">
              <details class="cust-select">
                <summary><span></span><span>Bangladesh</span></summary>
                <ul class="dropdown">
                  <li><a href="#">Bangladesh</a></li>
                  <li><a href="#">England</a></li>
                  <li><a href="#">USA</a></li>
                  <li><a href="#">Canada</a></li>
                </ul>
              </details>
            </div>
            <div class="splt-form splt-form-search">
              <input
                type="text"
                placeholder="State"
                name="search"
                class="splt-form-search-inp splt-form-search-borders splt-form-search-s2s"
              />
            </div>
            <div class="splt-form splt-form-search">
              <input
                type="text"
                placeholder="Postcode / Zip"
                name="search"
                class="splt-form-search-inp splt-form-search-borders splt-form-search-s2s"
              />
            </div>
            <div class="btn-sqr_dl">
              <a href="" class="btn-sqr_dl__link"
                ><span class="btn-sqr_dl__text">get a quote</span></a
              >
            </div>
          </div>

          <div class="col">
            <h3>coupon discount</h3>
            <div class="splt-form splt-form-search">
              <input
                type="text"
                placeholder="Coupon code"
                name="search"
                class="splt-form-search-inp splt-form-search-borders splt-form-search-s2s"
              />
            </div>
            <div class="btn-sqr_dl">
              <a href="" class="btn-sqr_dl__link"
                ><span class="btn-sqr_dl__text">Apply coupon</span></a
              >
            </div>
          </div>
          <div class="col">
            <p class="total-sub">Sub total <span>${{ float2str(CartCount.grand_total) }}</span></p>
            <p class="total-grand">GRAND TOTAL <span class="brand">${{ float2str(CartCount.grand_total) }}</span></p>

            <div class="btn-sqr_wb">
              <a href="" class="btn-sqr_wb__link"
                ><span class="btn-sqr_wb__text">proceed to checkout</span></a
              >
            </div>
          </div>
        </form>
      </section>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import PageTopRibbon from "@/components/PageTopRibbon.vue";
import CartBig from "@/components/CartBig.vue";

export default {
  name: "shopping-cart",
  methods: {
    float2str(int, fract = 2) {
      let arr = int.toString().split(".");
      if (arr[1] === undefined) {
        arr[1] = "0";
      }
      arr[1] = arr[1].substring(0, fract).padStart(fract, "0");
      return arr.join(".");
    }},
  computed: {
    ...mapGetters([
      "CartCount",
      "CartDisplayed",
      // ...
    ]),
  },
  components: {
    PageTopRibbon,
    CartBig,
  },
};
</script>

<style lang="less">
@color_gray_light_04: #bcbcbc;
@color_gray_dark_07: #4f4f4f;
@color_gray_dark_01: #222222;
@color_gray_light_10: #e2e2e2;
@color_brand_02: #f16d7f;
@color_gray_light_18: #f3f3f3;
@color_gray_light_19: #f5f3f3;
@color_gray_dark_17: #a4a4a4;
@color_white: #ffffff;
@color_gray_light_11: #e6e6e6;
/* default text`s parameters */
@text_fs: 14px;
@text_lh: 24px;
@text_w: 400;
@text_ls: normal;
@pad_hor_def: 15px;
@pad_ver_def: 25px;

.fonts(@fs: @text_fs; @lh: @text_lh; @w: @text_w; @ls: @text_ls) {
  font-size: @fs;
  line-height: @lh;
  font-weight: @w;
  letter-spacing: @ls;
}
.shopping-cart {
  &-wrap {
    padding: 0 15px;
  }

 

  .form-shipping {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 80px;

    & .col {
      min-width: 360px;

      & h3 {
        .fonts(16px; 1.2; 700; normal);
        text-transform: uppercase;
      }

      & .splt-form {
        margin-bottom: 20px;

        & input::placeholder {
          color: @color_gray_light_04;
        }
      }

      & .btn-sqr_dl {
        height: 35px;

        &__text {
          line-height: 33px;
          font-size: 11px;
        }

        &__link {
          display: inline-block;
        }
      }

      &:first-child {
        & > div:not(:first-child) input {
          width: 100%;
        }

        & .select_wrap {
          position: relative;
          height: 45px;
          width: 100%;
          margin-bottom: 20px;

          & .cust-select {
            height: inherit;
            width: inherit;

            & summary {
              padding: 15px 12px;

              &::after {
                content: "\f0d7";
                transform: none;
                font-style: normal;
                font-weight: 900;
                font-stretch: normal;
                font-size: 14px;
                font-family: "Font Awesome 5 Free";
              }
            }
          }
        }

        & .splt-form {
          margin-bottom: 20px;
          height: 45px;

          & input::placeholder {
            color: @color_gray_light_04;
          }
        }
      }

      &:nth-child(2) {
        & > div input {
          width: 100%;
        }

        & .splt-form {
          height: 45px;
        }

        & .btn {
          display: inline-block;
          margin-top: 5px;
        }
      }

      &:last-child {
        & p {
          text-transform: uppercase;
          text-align: right;

          & span {
            margin-left: 15px;
          }
        }

        & .total {
          &-sub {
            .fonts(11px; 1.2; 400; normal);
            color: @color_gray_dark_07;
            margin: 0 0 10px 0;
          }

          &-grand {
            margin: 0 0 16px 0;
            .fonts(16px; 1.2; 700; normal);
            padding-bottom: 16px;
            color: @color_gray_dark_01;
            border-bottom: 1px solid @color_gray_light_10;

            & .brand {
              color: @color_brand_02;
            }
          }
        }

        background-color: @color_gray_light_19;
        padding: 43px;
      }
    }
  }
}
.borders(@st: solid; @color: black; @width: 1px; @radius: 3px) {
  border-style: @st;
  border-color: @color;
  border-width: @width @width @width @width;
  border-radius: @radius @radius @radius @radius;
}
.bordersNoStyleSide(@side) {
  border-@{side}-style: none !important;
}

.bordersNoRadiusSide(@side1; @side2) {
  border-@{side1}-radius: 0 !important;
  border-@{side2}-radius: 0 !important;
}
.splt-form {
  display: flex;

  &-search {
    /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
    .fonts(14px; 38px; 300);

    &-inp {
      color: @color_gray_dark_17;
      width: 80%;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      padding: 0px 6px 0px 16px;
    }

    /* left side connecting */
    &-cls {
      .bordersNoStyleSide(right);
      .bordersNoRadiusSide(top-right; bottom-right);
    }

    /* right side connecting */
    &-crs {
      .bordersNoStyleSide(left);
      .bordersNoRadiusSide(top-left; bottom-left);
    }

    /* side2side */
    &-s2s {
      .bordersNoRadiusSide(top-right; bottom-right);
      .bordersNoRadiusSide(top-left; bottom-left);
    }

    &-btn {
      width: 20%;
      color: @color_gray_dark_17;
      background-color: @color_white;

      &:active {
        opacity: 0.29;
        transition-duration: 100ms;
        background-color: @color_white;
      }

      &:hover {
        opacity: 0.29;
        transition-duration: 200ms;
        background-color: @color_gray_dark_17;
        color: @color_white;
      }
    }

    &-borders {
      .borders(@color: @color_gray_light_11);
    }
  }
}
.btn{
  &-sqr_wb {
    @btn_h: 50px;
    @lh: 48px;
    @fs: @text_fs;
    @bor_th: 1px;
    @color_t: @color_white;
    @color_back: @color_brand_02;
    @color_t__focus: @color_brand_02;
    @color_bt__focus: @color_brand_02;
    @color_back_focus: @color_white;
    @bor_c: @color_brand_02;
    @bor_rad: 0;
    @pad_txt: 0 20px;
    min-width: 115px;
    height: @btn_h;

    & a {
      text-decoration: none;
      padding: @pad_txt;
    }

    &__text {
      color: @color_t;
      .fonts(@fs; @lh; 700; normal);
      text-transform: uppercase;
    }

    &__link {
      display: block;
      text-align: center;
      background-color: @color_back;
      position: relative;
      border: @bor_th solid @bor_c;
      border-radius: @bor_rad;

      &:hover {
        border-color: @color_back_focus;
        transition: 100ms;
        background-color: @color_back_focus;

        & .btn-sqr_wb__text {
          color: @color_bt__focus;
        }
      }
    }
  }
}
</style>
