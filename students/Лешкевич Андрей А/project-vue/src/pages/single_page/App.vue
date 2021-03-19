<template>
  <page-top-ribbon></page-top-ribbon>
  <section
    id="slider"
    class="top-slider"
    data-width="597px"
    data-height="724px"
  >
    <div class="btn-sqr_ar">
      <a
        href="#"
        onclick="slider.left();return false;"
        class="btn-sqr_ar__link clear-fix"
        ><span class="btn-sqr_ar__icon"><i class="fa fa-angle-left"></i></span>
      </a>
    </div>
    <div class="wrap top-slider-wrap">
      <div class="top-slider-image">
        <img src="img/catalog_item_22_big.png" alt="" />
      </div>
    </div>
    <div class="btn-sqr_ar">
      <a
        href="#"
        onclick="slider.right();return false;"
        class="btn-sqr_ar__link clear-fix"
        ><span class="btn-sqr_ar__icon"><i class="fa fa-angle-left"></i></span>
      </a>
    </div>
  </section>
  <section class="product-adjust">
    <div class="wrap product-adjust-wrap">
      <div class="collection-selector">
        <div class="line">WOMEN COLLECTION</div>
        <div class="line">
          <div class="slide-selection">
            <a href="#" class="slide-selection-btn"></a>
            <a
              href="#"
              class="slide-selection-btn slide-selection-btn__active"
            ></a>
            <a href="#" class="slide-selection-btn"></a>
          </div>
        </div>
      </div>
      <h3>Moschino Cheap And Chic</h3>
      <p class="description">
        Compellingly actualize fully researched processes before proactive
        outsourcing. Progressively syndicate collaborative architectures before
        cutting-edge services. Completely visualize parallel core competencies
        rather than exceptional portals.
      </p>
      <div class="char-wrap">
        <div class="characteristics">
          <div class="line">
            <p><span class="type">MATERIAL:</span> COTTON</p>
            <p><span class="type">DESIGNER:</span> BINBURHAN</p>
          </div>
          <div class="line"><span class="type">$561</span></div>
        </div>
      </div>
      <section class="cart-form">
        <form action="#" class="cart-form-wrap">
          <div class="selectors">
            <div class="col">
              <h3>CHOOSE COLOR</h3>
              <div class="menu"></div>
              <details class="cust-select">
                <summary>
                  <i class="color color__red"></i><span>Red</span>
                </summary>
                <ul class="dropdown">
                  <li>
                    <a href="#"><i class="color color__red"></i> Red</a>
                  </li>
                  <li>
                    <a href="#"><i class="color color__green"></i> Green</a>
                  </li>
                  <li>
                    <a href="#"><i class="color color__blue"></i> Blue</a>
                  </li>
                </ul>
              </details>
            </div>
            <div class="col">
              <h3>CHOOSE SIZE</h3>
              <div class="menu">
                <details class="cust-select">
                  <summary><span></span><span>XXS</span></summary>
                  <ul class="dropdown">
                    <li><a href="#">XXS</a></li>
                    <li><a href="#">XS</a></li>
                    <li><a href="#">S</a></li>
                    <li><a href="#">M</a></li>
                    <li><a href="#">L</a></li>
                    <li><a href="#">XL</a></li>
                    <li><a href="#">XXL</a></li>
                  </ul>
                </details>
              </div>
            </div>
            <div class="col">
              <h3>QUANTITY</h3>
              <input type="number" value="2" />
            </div>
          </div>
          <div class="btn-sqr_adc">
            <a href="" class="btn-sqr_adc__link clear-fix">
              <div class="btn-sqr_adc__wrap">
                <img
                  src="@/assets/img/cart_brand.png"
                  alt=""
                  class="btn-sqr_adc__icon"
                /><span class="btn-sqr_adc__text">Add to Cart</span>
              </div>
            </a>
          </div>
        </form>
      </section>
    </div>
  </section>
  <section class="products">
    <div class="wrap products-wrap">
      <div class="head">
        <h2 class="upper">you may like also</h2>
      </div>
      <products-list></products-list>
    </div>
  </section>
</template>

<script>
import PageTopRibbon from "@/components/PageTopRibbon.vue";
import ProductsList from "@/components/ProductsList.vue";

export default {
  name: "single-page",
  components: {
    PageTopRibbon,
    ProductsList,
  },
};
</script>

<style lang="less">
@color_gray_light_24: #f7f7f7;
@color_gray_light_14: #eaeaea;
@color_white: #ffffff;
@color_brand_01: #ef5b70;
@color_brand_02: #f16d7f;
@color_gray_dark_06: #4d4d4d;
@color_gray_dark_09: #5e5e5e;
@color_gray_light_10: #e2e2e2;
@color_gray_light_02: #b9b9b9;
@color_gray_dark_04: #2f2f2f;
@color_gray_light_04: #bcbcbc;
@color_gray_light_06: #cfcfcf;
@color_gray_dark_01: #222222;
@color_gray_dark_14: #838383;
@color_gray_light_19: #f5f3f3;
@color_brand_04: #f06c7d38;
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
.top-slider {
  background-color: @color_gray_light_24;
  margin-bottom: 42px;
  border-color: @color_gray_light_14;
  border-bottom-style: solid;
  border-top-style: solid;
  border-width: 1px 0 1px 0;
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .btn-sqr_ar:last-of-type {
    transform: rotate(180deg);
  }

  &-wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
  }

  &-image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }

  &-hidden {
    visibility: hidden;
  }
}
.btn {
  &-sqr_ar {
    @btn_h: 47px;
    @lh: 24px;
    @fs: 24px;
    @bor_th: 1px;
    @color_t: @color_white;
    @color_ic: @color_white;
    @color_back: @color_gray_light_06;
    @color_t__focus: @color_gray_dark_01;
    @color_ic__focus: @color_gray_dark_14;
    @color_bt__focus: @color_white;
    @color_back_img__hover: @color_gray_light_02;
    @bor_c: @color_gray_light_06;
    @bor_rad: 0px;
    @pad_hor: 20px;
    @pad_txt: ((@btn_h - @lh)/2) 0 ((@btn_h - @lh)/2) @pad_hor;
    @pad_ico: (@pad_hor / 2) (@pad_hor - 2px) (@pad_hor / 2) (@pad_hor - 2px);
    display: inline-block;
    height: @btn_h;
    width: @btn_h;

    & a {
      text-decoration: none;
    }

    &__icon {
      color: @color_ic;
      .fonts(@fs; @lh);
    }

    &__link {
      float: left;
      background-color: @color_back;
      position: relative;
      border: @bor_th solid @bor_c;
      border-radius: @bor_rad;
      padding: @pad_ico;

      &:hover {
        background-color: @color_back_img__hover;
        border-color: @color_ic__focus;
        transition: 100ms;

        & .btn-sqr_ar__icon {
          color: @color_bt__focus;
        }
      }
    }
  }
  &-sqr_adc {
    @btn_h: 55px;
    @lh: 18px;
    @fs: 16px;
    @bor_th: 1px;
    @color_t: @color_brand_02;
    @color_ic: @color_white;
    @color_back: @color_white;
    @color_t__focus: @color_white;
    @color_ic__focus: @color_brand_02;
    @color_bt__focus: @color_white;
    @color_back_img__hover: @color_brand_02;
    @bor_c: @color_brand_02;
    @bor_rad: 0px;
    @pad_hor: 5px;
    height: @btn_h;

    & a {
      text-decoration: none;
    }

    &__wrap {
      display: inline-block;
    }

    &__text {
      color: @color_t;
      .fonts(@fs; @lh; 700; normal);
      //padding: 0 16px 0 @pad_hor;
      padding: (floor((@btn_h - @lh)/2) - 2px) 16px
        (floor((@btn_h - @lh)/2) - 2px) @pad_hor;
      float: left;
      display: inline-block;
    }

    &__icon {
      color: @color_ic;
      .fonts(@fs; @lh);
      // padding: 0 @pad_hor 0 16px;
      padding: (floor((@btn_h - 24px)/2) - 2px) @pad_hor
        (floor((@btn_h - 24px)/2) - 2px) 16px;
      float: left;
      display: inline-block;
    }

    &__link {
      //display: flex;
      //align-items: center;
      //justify-content: center;
      display: block;
      background-color: @color_back;
      position: relative;
      border: @bor_th solid @bor_c;
      border-radius: @bor_rad;
      text-align: center;

      &:hover {
        background-color: @color_back_img__hover;
        border-color: @color_ic__focus;
        transition: 100ms;

        & .btn-sqr_adc__text {
          color: @color_bt__focus;
        }

        & .btn-sqr_adc__icon {
          display: none;
        }
      }
    }
  }
}
.product-adjust {
  &-wrap {
    border: 1px solid @color_gray_light_14;
    background-color: @color_white;
    position: relative;
    margin-top: -85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 260px;

    & .collection-selector {
      color: @color_brand_02;
      margin-top: 73px;
      border-bottom: 1px solid @color_gray_light_14;

      & .line {
        &:first-child {
          .fonts(14px; 24px; 700; normal);
        }

        &:last-child {
          & .slide-selection-btn {
            width: 33%;
            height: 10px;
            margin: 0;
            border-bottom-width: 1px;

            &__active {
              border-bottom-width: 3px;
            }

            &:hover {
              border-bottom-width: 2px;
            }
          }
        }
      }
    }

    & h3 {
      .fonts(18px; 24px; 900; normal);
      text-transform: uppercase;
      color: @color_gray_dark_06;
      margin-bottom: 47px;
    }

    & .description {
      color: @color_gray_dark_09;
      text-align: center;
      .fonts(14px; 24px; 300; normal);
    }

    & .char-wrap {
      width: 100%;
      border-bottom: 1px solid @color_gray_light_10;
      margin-bottom: 48px;
      padding-bottom: 43px;

      & .characteristics {
        & .line {
          display: flex;

          &:first-child {
            color: @color_gray_light_02;
            .fonts(14px; 24px; 700; normal);
            justify-content: space-between;
            margin-bottom: 22px;

            & .type {
              color: @color_gray_dark_04;
            }
          }

          &:last-child {
            justify-content: center;
            .fonts(24px; 24px; 700; normal);
            color: @color_brand_02;
          }
        }
      }
    }

    .cart-form {
      width: 100%;

      & .selectors {
        display: flex;
        justify-content: space-between;
        margin-bottom: 23px;

        & .col {
          & h3 {
            color: @color_gray_dark_04;
            .fonts(14px; 24px; 700; normal);
            padding: 15px 0;
            margin: 0;
          }

          & input {
            width: 144px;
            height: 35px;
            padding: 10px;
            border: 1px solid @color_gray_light_14;
            color: @color_gray_light_04;
            .fonts(13px; 24px; 400; normal);
          }

          & .menu {
            position: relative;
          }
        }
      }

      & .btn-sqr_adc {
        margin-bottom: 63px;
      }
    }
  }
}
.cust-select {
  border: none;
  width: 144px;
  height: 33px;
  .fonts(13px; 13px);
  position: absolute;
  z-index: 1;

  & .color {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 10px;

    &__red {
      background-color: @color_brand_02;
    }

    &__green {
      background-color: green;
    }

    &__blue {
      background-color: blue;
    }
  }

  & summary {
    display: flex;
    justify-content: space-between;
    border: 1px solid @color_gray_light_14;
    padding: 11px 12px;
    color: @color_gray_light_04;

    & :nth-child(2) {
      flex-grow: 1;
    }

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: "\f104";
      /*font: normal normal normal 14px/13px FontAwesome;*/
      font-style: normal;
      font-weight: normal;
      font-stretch: normal;
      font-size: 14px;
      line-height: 13px;
      font-family: "Font Awesome 5 Free";
      display: inline-block;
      color: @color_gray_light_04;
      transform: rotate(270deg);
    }

    &:focus {
      outline: none;
      border: 1px solid @color_brand_01;
      color: @color_brand_01;

      &::after {
        color: @color_brand_01;
      }
    }
  }

  .dropdown {
    background-color: @color_gray_light_19;
    border-radius: 3px;
    list-style: none;
    padding: 4px 6px;
    margin: 0px 6px;

    & li {
      margin-bottom: 8px;
      padding: 4px;

      & a {
        color: @color_gray_dark_09;
        text-decoration: none;
      }

      &:hover {
        background-color: @color_brand_04;
      }
    }
  }
}
</style>
