<template>
  <header class="header">
    <section class="header-top-wrap wrap">
      <section class="logo">
        <a href="index.html"
          ><img src="@/assets/img/logo.png" alt="" /><span
            >BRAN<span>D</span></span
          ></a
        >
      </section>
      <section class="search">
        <div class="btn-browse">
          <div class="btn-browse__hover-wrap">
            <a href="#" class="btn-browse__link"
              ><span class="btn-browse__text">Browse</span
              ><span class="btn-browse__icon"
                ><i class="fa fa-caret-down"></i
              ></span>
            </a>
            <div class="btn-browse__ddc">
              <div class="btn-browse__ddc-nav__wrap">
                <h3>Women</h3>
                <ul class="btn-browse__ddc-nav">
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Dresses</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Tops</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Sweaters/Knits</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Jackets/Coats</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Blazers</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Denim</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Leggings/Pants</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Skirts/Shorts</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Accessories</a>
                  </li>
                </ul>
              </div>
              <div class="btn-browse__ddc-nav__wrap">
                <h3>Men</h3>
                <ul class="btn-browse__ddc-nav">
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Tees/Tank tops</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Shirts/Polos</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Sweaters</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link"
                      >Sweatshirts/Hoodies</a
                    >
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Blazers</a>
                  </li>
                  <li class="btn-browse__ddc-item">
                    <a href="#" class="btn-browse__ddc-link">Jackets/vests</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <form action="#" class="form-search clear-fix">
            <input
              name="search"
              type="text"
              class="form-search__input"
              placeholder="Search for Item..."
            /><a href="#" class="form-search__btn clear-fix"
              ><i class="fa fa-search"></i
            ></a>
          </form>
        </div>
      </section>
      <section class="cart">
        <cart-small></cart-small>
        <div class="btn-account">
          <a href="#" class="btn-account__link clear-fix"
            ><span class="btn-account__text">My Account</span
            ><span class="btn-account__icon"
              ><i class="fa fa-caret-down"></i
            ></span>
          </a>
        </div>
      </section>
    </section>
    <div class="header-hl"></div>
    <nav class="header-nav-wrap wrap">
      <ul class="nav-list">
        <router-link
          to="/vue/index.html"
          v-slot="{ href, navigate, isActive, isExactActive }"
          class="nav-item nav-item__active"
          custom
        >
          <li
            :class="[
              isActive && 'nav-item__active',
              isExactActive && 'nav-item__active',
              'nav-item',
            ]"
          >
            <div class="nav-item__hover-wrap">
              <a :href="href" @click="navigate" class="nav-link">Home</a>
            </div>
          </li>
        </router-link>
        <li class="nav-item">
          <div class="nav-item__hover-wrap">
            <router-link
              to="/vue/product.html"
              v-slot="{ href, navigate, isActive, isExactActive }"
              class="nav-item nav-item__active"
              custom
            >
              <li
                :class="[
                  isActive && 'nav-item__active',
                  isExactActive && 'nav-item__active',
                  'nav-item',
                ]"
              >
                <div class="nav-item__hover-wrap">
                  <a :href="href" @click="navigate" class="nav-link">Man</a>
                </div>
              </li>
            </router-link>
            <!--<a href="Product.html" class="nav-link">Man</a>-->
            <div class="nav-item__ddc">
              <div class="nav-item__ddc-list__wrap">
                <h3>Women</h3>
                <ul class="nav-item__ddc-list">
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Dresses</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Tops</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Sweaters/Knits</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Jackets/Coats</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Blazers</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Denim</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Leggings/Pants</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Skirts/Shorts</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Accessories </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="nav-item__ddc-list__wrap">
                <h3>Women</h3>
                <ul class="nav-item__ddc-list">
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Dresses</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Tops</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Sweaters/Knits</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Jackets/Coats</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="nav-item__ddc-list__wrap">
                <h3>Women</h3>
                <ul class="nav-item__ddc-list">
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Dresses</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Tops</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Sweaters/Knits</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Jackets/Coats</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="nav-item__ddc-list__wrap">
                <h3>Women</h3>
                <ul class="nav-item__ddc-list">
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Dresses</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Tops</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Sweaters/Knits</a>
                    </div>
                  </li>
                  <li class="nav-item__ddc-item">
                    <div class="nav-item__ddc-item__hover-wrap">
                      <a href="#" class="nav-item__ddc-link">Jackets/Coats</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="nav-item__ddc-list__wrap__sale">
                <a href="#" class="nav-item__ddc-list__wrap__sale__link"
                  ><img src="@/assets/img/sales_banner.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-item__hover-wrap">
            <router-link
              to="/vue/single_page.html"
              v-slot="{ href, navigate, isActive, isExactActive }"
              class="nav-item nav-item__active"
              custom
            >
              <li
                :class="[
                  isActive && 'nav-item__active',
                  isExactActive && 'nav-item__active',
                  'nav-item',
                ]"
              >
                <div class="nav-item__hover-wrap">
                  <a :href="href" @click="navigate" class="nav-link">Women</a>
                </div>
              </li>
            </router-link>
            <!--<a href="single_page.html" class="nav-link">Women</a>-->
            <!-- <div class="nav-item__ddc"></div> -->
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-item__hover-wrap">
            <router-link
              to="/vue/product.html"
              v-slot="{ href, navigate, isActive, isExactActive }"
              class="nav-item nav-item__active"
              custom
            >
              <li
                :class="[
                  isActive && 'nav-item__active',
                  isExactActive && 'nav-item__active',
                  'nav-item',
                ]"
              >
                <div class="nav-item__hover-wrap">
                  <a :href="href" @click="navigate" class="nav-link">Kids</a>
                </div>
              </li>
            </router-link>
            <!--<a href="Product.html" class="nav-link">Kids</a>-->
            <!-- <div class="nav-item__ddc"></div> -->
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-item__hover-wrap">
            <router-link
              to="/vue/product.html"
              v-slot="{ href, navigate, isActive, isExactActive }"
              class="nav-item nav-item__active"
              custom
            >
              <li
                :class="[
                  isActive && 'nav-item__active',
                  isExactActive && 'nav-item__active',
                  'nav-item',
                ]"
              >
                <div class="nav-item__hover-wrap">
                  <a :href="href" @click="navigate" class="nav-link"
                    >Accoseriese</a
                  >
                </div>
              </li>
            </router-link>
            <!--<a href="Product.html" class="nav-link">Accoseriese</a>-->
            <!-- <div class="nav-item__ddc"></div> -->
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-item__hover-wrap">
            <router-link
              to="/vue/product.html"
              v-slot="{ href, navigate, isActive, isExactActive }"
              class="nav-item nav-item__active"
              custom
            >
              <li
                :class="[
                  isActive && 'nav-item__active',
                  isExactActive && 'nav-item__active',
                  'nav-item',
                ]"
              >
                <div class="nav-item__hover-wrap">
                  <a :href="href" @click="navigate" class="nav-link"
                    >Featured</a
                  >
                </div>
              </li>
            </router-link>
            <!--<a href="Product.html" class="nav-link">Featured</a>-->
            <!-- <div class="nav-item__ddc"></div> -->
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-item__hover-wrap">
            <router-link
              to="/vue/product.html"
              v-slot="{ href, navigate, isActive, isExactActive }"
              class="nav-item nav-item__active"
              custom
            >
              <li
                :class="[
                  isActive && 'nav-item__active',
                  isExactActive && 'nav-item__active',
                  'nav-item',
                ]"
              >
                <div class="nav-item__hover-wrap">
                  <a :href="href" @click="navigate" class="nav-link"
                    >Hot&nbsp;Deals</a
                  >
                </div>
              </li>
            </router-link>
            <!--<a href="Product.html" class="nav-link">Hot&nbsp;Deals</a>-->
            <!-- <div class="nav-item__ddc"></div> -->
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import CartSmall from "@/components/CartSmall.vue";
export default {
  name: "PageHeader",
  components: {
    CartSmall,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
/* Variables */
/* Colors */
/* Dark Gray colors */
@color_gray_light_09: #e1e1e1;
@color_gray_dark_03: #232323;
@color_gray_light_12: #e8e8e8;
@color_gray_dark_01: #222222;
@color_gray_dark_14: #838383;
@color_gray_dark_17: #a4a4a4;
@color_gray_light_05: #cdcdcc;
@color_white: #ffffff;
@color_brand_01: #ef5b70;
@color_brand_02: #f16d7f;
@color_brand_03: #f06c7d0f;
@color_gray_dark_07: #4f4f4f;
@color_gray_light_11: #e6e6e6;
@color_gradient_brand_02: linear-gradient(180deg, #f16d7f 0%, #f06c7d 100%);
@color_gradient_gray_light_20: linear-gradient(
  180deg,
  #f9f9f9 0%,
  #f5f5f5 100%
);
/* default text`s parameters */
@text_fs: 14px;
@text_lh: 24px;
@text_w: 400;
@text_ls: normal;
/* Defaults padding and margin */
@pad_hor_def: 15px;
@pad_ver_def: 25px;

.heartbeat() {
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
}
.fonts(@fs: @text_fs; @lh: @text_lh; @w: @text_w; @ls: @text_ls) {
  font-size: @fs;
  line-height: @lh;
  font-weight: @w;
  letter-spacing: @ls;
}
.btn {
  &-browse {
    @btn_h: 38px;
    @lh: 36px;
    @fs: @text_fs;
    @bor_th: 1px;
    @color_t: @color_gray_dark_01;
    @color_ic: @color_gray_dark_14;
    @color_in: @color_gray_dark_17;
    @color_back: @color_gray_light_05;
    @color_back_img: @color_gradient_gray_light_20;
    @color_t__focus: @color_gray_dark_01;
    @color_ic__focus: @color_gray_dark_14;
    @color_in__focus: @color_brand_02;
    @color_in_shad__focus: @color_brand_01;
    @color_bt__focus: @color_white;
    @color_back_img__hover: @color_gradient_brand_02;
    @bor_c: @color_gray_light_11;
    @bor_c2: @color_gray_light_12;
    @bor_rad: 3px;
    @pad_hor: 16px;
    @pad_in: (@btn_h - @lh - @bor_th*2) @pad_hor;
    @pad_btn: 0 12px;
    @pad_txt: ((@btn_h - @lh)/2) 0 ((@btn_h - @lh)/2) @pad_hor;
    @pad_ico: ((@btn_h - @lh)/2) (@pad_hor / 2);
    display: inline-block;
    height: @btn_h;
    min-width: 302px;
    position: relative;

    & .form-search {
      float: left;

      &__input {
        float: left;
        color: @color_in;
        .fonts(@fs; @lh; 300; 0.025em);
        height: @btn_h;
        border-style: solid;
        border-color: @bor_c;
        border-top-width: @bor_th;
        border-bottom-width: @bor_th;
        border-left-width: 0;
        border-right-width: 0;
        @pad_calc: (@btn_h - @lh - @bor_th*2);
        padding: @pad_calc (@pad_hor + @bor_th) @pad_calc (@pad_hor + @bor_th);

        &::placeholder {
          color: @color_in;
        }

        &:focus {
          outline: none;
          //box-shadow: inset 0px 0px 0px @bor_th @color_in_shad__focus;

          border-style: solid;
          border-color: @color_in_shad__focus;
          padding: @pad_in;
          border-left-width: @bor_th;
          border-right-width: @bor_th;
          transition: 100ms;
          color: @color_in__focus;

          &::placeholder {
            color: @color_in;
          }
        }

        &:hover {
          color: @color_in__focus;
          transition: 100ms;

          &::placeholder {
            color: @color_in__focus;
            transition: 100ms;
          }
        }
      }

      &__btn {
        color: @color_in;
        .fonts(@text_fs; @lh);
        padding: @pad_btn;
        border: @bor_th solid @bor_c;
        border-radius: 0 @bor_rad @bor_rad 0;
        display: inline-block;

        &:hover {
          background-color: @color_in__focus;
          border-color: @color_in__focus;
          border-radius: @bor_rad;
          transition: 100ms;
          color: @color_bt__focus;
        }
      }
    }

    & a {
      text-decoration: none;
    }

    &__hover-wrap {
      float: left;

      &:hover {
        .btn-browse__ddc {
          top: calc(100% + @bor_th);
          opacity: 1;
          visibility: visible;
          transition: opacity 0.5s ease-out;
        }

        .btn-browse__link {
          background-image: @color_back_img__hover;
          border-radius: @bor_rad;
          border-color: @color_in__focus;
          //transition: 100ms;

          .btn-browse__text,
          .btn-browse__icon {
            color: @color_bt__focus;
          }
        }
      }
    }

    &__ddc {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      z-index: 1;

      transition-delay: 500ms;

      &:hover {
        opacity: 1;
        visibility: visible;
        transition-property: opacity;
      }
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
      border: @bor_th solid @bor_c;
      border-radius: @bor_rad 0 0 @bor_rad;
    }
  }
  &-account {
    @btn_h: 38px;
    @lh: 36px;
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
    @pad_vert: 16px;
    @pad_txt: ((@btn_h - @lh)/2) 0 ((@btn_h - @lh)/2) @pad_vert;
    @pad_ico: ((@btn_h - @lh)/2) (@pad_vert / 2);

    display: inline-block;
    height: @btn_h;
    min-width: 118px;
    position: relative;

    & a {
      text-decoration: none;
    }

    &__hover-wrap {
      float: left;

      &:hover {
        .btn-account__link {
          background-image: @color_back_img__hover;
          border-color: @color_ic__focus;
          transition: 100ms;
        }

        .btn-account__text,
        .btn-account__icon {
          color: @color_bt__focus;
        }

        .btn-account__ddc {
          top: calc(100% + @bor_th);
          display: block;
          transition: 100ms;

          opacity: 1;
          visibility: visible;
          transition: opacity 0.5s ease-out;
        }
      }
    }

    &__ddc {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      z-index: 1;

      transition-delay: 500ms;

      &:hover {
        opacity: 1;
        visibility: visible;
      }
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
    }
  }
}
.logo {
  justify-content: space-between;

  & a {
    .fonts(27px; 32px; 300);
    text-transform: uppercase;
    color: @color_gray_dark_01;
    text-decoration: none;
    display: flex;

    & > span {
      margin-left: 13px;

      & > span {
        font-weight: 900;
        color: @color_brand_02;
      }
    }
  }

  & * {
    align-self: center;
  }
}
.header {
  &-hl {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: @color_gray_light_09;
  }

  &-top-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: @pad_ver_def @pad_hor_def;

    & .logo {
      margin-right: 30px;
    }

    & .search {
      flex-grow: 1;

      .btn-browse__ddc {
        width: 262px;
        height: 530px;
        background-color: @color_white;
        border-radius: 5px;
        padding: 13px;
        top: 38px;
        left: 0;
        z-index: 3;

        & h3 {
          .fonts(14px; 32px; 400);
          text-transform: uppercase;
          color: @color_gray_dark_03;
          margin: 0 0 3px 0;
          border-bottom: 1px solid @color_gray_light_12;
        }

        &-nav {
          list-style: none;
          padding: 0;
          margin: 0;

          & a {
            display: block;

            transition: 300ms;

            &:hover {
              border-left: 5px solid @color_brand_02;
              background-color: @color_brand_03;
              padding-left: 10px;
              transition: 500ms;
            }
          }
        }

        &-link {
          text-decoration: none;
          .fonts(@lh: 28px);
          color: @color_gray_dark_07;
          padding: 0;
        }
      }
    }
  }

  .header &-nav-wrap {
    padding: 0;
    margin-bottom: 3px;

    & .nav {
      &-list {
        list-style: none;
        display: flex;
        justify-content: center;
        margin: 0;
      }

      &-link {
        text-decoration: none;
        /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
        .fonts(@lh: 48px; @w: 700; @ls: normal);
        text-transform: uppercase;
        color: @color_gray_dark_01;
        position: relative;
        border-bottom: 3px solid transparent;
        margin: 0 10px;
        padding: 16px 10px;
      }

      &-item {
        &__active .nav-link {
          border-bottom-color: @color_brand_01;
        }

        &__hover-wrap:hover {
          & .nav-link {
            background-color: @color_brand_02;
            color: @color_white;
            border-bottom-color: @color_brand_01;
            transition: 500ms;
          }

          & .nav-item__ddc {
            transition: 100ms;

            opacity: 1;
            visibility: visible;
            transition: opacity 0.5s ease-out;
          }
        }

        &__ddc {
          padding: 7px 25px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-content: flex-start;
          height: 310px;
          width: 846px;
          position: absolute;
          opacity: 0;
          visibility: hidden;
          z-index: 3;
          border-radius: 5px;
          background-color: @color_white;

          &-list {
            width: 235px;
            list-style: none;
            margin: 0;
            padding: 0;

            &__wrap {
              margin: 0 23px 0 23px;
              position: relative;

              &__sale {
                margin: 27px 0 0 0;

                &:hover {
                  .heartbeat();
                }

                &__link {
                  text-decoration: none;
                  display: block;
                }
              }
            }
          }

          & h3 {
            .fonts(14px; 32px; 400);
            text-transform: uppercase;
            color: @color_gray_dark_03;
            margin: 0 0 3px 0;
            border-bottom: 1px solid @color_gray_light_12;
          }

          &-nav {
            list-style: none;
            padding: 0;
            margin: 0;

            & a {
              display: block;

              transition: 300ms;
            }
          }

          &-link {
            text-decoration: none;
            .fonts(@lh: 28px);
            color: @color_gray_dark_07;
            padding: 0;
            display: block;
          }

          &-item__hover-wrap {
            &:hover a {
              border-left: 5px solid @color_brand_02;
              background-color: @color_brand_03;
              padding-left: 10px;
              transition: 500ms;
            }
          }

          &:hover {
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
  }
}
</style>
