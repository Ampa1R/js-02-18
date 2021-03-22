<template>
  <div id="cartSmall" class="btn-cart__wrap">
    <a href="shopping_cart.html" class="btn-cart"
      ><img src="@/assets/img/cart_black.png" alt="" />
    </a>
    <div class="btn-cart__count" v-show="CartCount.count > 0">
      {{ CartCount.count }}
    </div>
    <div class="btn-cart__ddc">
      <ul class="btn-cart__ddc-list">
        <li
          v-for="item in CartDisplayed"
          v-bind:key="item.id + '/' + item.type"
          v-bind:data-cart-item="item.id"
          v-bind:data-cart-item-t="item.type"
          class="btn-cart__ddc-item"
        >
          <div class="col">
            <a href="#"><img v-bind:src="item.img" alt="" /></a>
          </div>
          <div class="col">
            <p>{{ item.name }}</p>
            <p>
              <i
                v-for="n in parseInt(Math.floor(item.star))"
                :key="n"
                class="fa fa-star"
              ></i>
              <i
                v-if="
                  0 < Math.floor(item.star * 10 - Math.floor(item.star) * 10)
                "
                class="fa fa-star-half-o"
                aria-hidden="true"
              ></i>
            </p>
            <div>
              <p class="price-count">
                {{ item.quantity }} <span class="x-txt">x</span> ${{
                  float2str(item.price)
                }}
              </p>
              <p class="sub-total clear-fix">
                = ${{ float2str(item.price * item.quantity) }}
              </p>
            </div>
          </div>
          <div class="col">
            <a
              @click.prevent="CartInc(item.id, item.type)"
              v-bind:href="'cart/inc/' + item.id + '/' + item.type"
              name="btn-inc-item"
            >
              <i class="fas fa-plus-circle"></i>
            </a>
            <a
              @click.prevent="CartDel(item.id, item.type)"
              v-bind:href="'cart/del/' + item.id + '/' + item.type"
              name="btn-del-item"
            >
              <i class="fa fa-times-circle"></i>
            </a>
            <a
              @click.prevent="CartDec(item.id, item.type)"
              v-bind:href="'cart/dec/' + item.id + '/' + item.type"
              name="btn-dec-item"
            >
              <i class="fas fa-minus-circle"></i>
            </a>
          </div>
        </li>
      </ul>
      <div class="btn-cart__ddc-total">
        <div class="total-grand">
          <span>TOTAL</span
          ><span class="total-grand-summ"
            >${{ float2str(CartCount.grand_total) }}</span
          >
        </div>
        <div class="btn-sqr_bw">          
          <router-link to="/vue/checkout.html" :class="btn-sqr_bw__link"><span class="btn-sqr_bw__text">Checkout</span></router-link>
        </div>
        <div class="btn-sqr_dl">
          <router-link to="/vue/shopping_cart.html" :class="btn-sqr_dl__link">
          <span class="btn-sqr_dl__text">Go to cart</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartSmall",
  methods: {
    float2str(int, fract = 2) {
      let arr = int.toString().split(".");
      if (arr[1] === undefined) {
        arr[1] = "0";
      }
      arr[1] = arr[1].substring(0, fract).padStart(fract, "0");
      return arr.join(".");
    },
    GetCartData(_obj) {
      let item = _obj.closest("[data-cart-item][data-cart-item-t]");
      if (item) {
        return {
          id: parseInt(item.getAttribute("data-cart-item")),
          type: parseInt(item.getAttribute("data-cart-item-t")),
        };
      }
      return undefined;
    },
    CartInc(id, type) {
      return this.$store.dispatch("CartInc", { id: id, type: type });
    },
    CartDec(id, type) {
      return this.$store.dispatch("CartDec", { id: id, type: type });
    },
    CartAdd(id, type) {
      return this.$store.dispatch("CartAdd", { id: id, type: type });
    },
    CartDel(id, type) {
      return this.$store.dispatch("CartDel", { id: id, type: type });
    },
    CartSet(id, type, event) {
      return this.$store.dispatch("CartSet", {
        id: id,
        type: type,
        quantity: parseInt(event.target.value),
      });
    },
    CartClean() {
      return this.$store.commit("CartClean");
    },
  },
  computed: {
    ...mapGetters([
      "CartCount",
      "CartDisplayed",
      // ...
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@color_brand_02: #f16d7f;
@color_white: #ffffff;
@color_gray_light_12: #e8e8e8;
@color_gray_dark_01: #222222;
@color_gold_01: #e4af48;
@color_gray_light_03: #c0c0c0;
@color_gray_dark_05: #4a4a4a;
@color_gray_light_14: #eaeaea;
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

.border-runner() {
  -webkit-animation: border-runner 0.5s ease-in-out infinite both;
  animation: border-runner 0.5s ease-in-out infinite both;
}
/**
 * ----------------------------------------
 * animation border runner
 * ----------------------------------------
 */
@-webkit-keyframes border-runner {
  0% {
    border-bottom-color: @color_brand_02;
    border-top-color: @color_brand_02;
    border-left-color: @color_gold_01;
    border-right-color: @color_gold_01;
  }

  100% {
    border-bottom-color: @color_gold_01;
    border-top-color: @color_gold_01;
    border-left-color: @color_brand_02;
    border-right-color: @color_brand_02;
  }
}

@keyframes border-runner {
  0% {
    border-bottom-color: @color_brand_02;
    border-top-color: @color_brand_02;
    border-left-color: @color_gold_01;
    border-right-color: @color_gold_01;
  }

  100% {
    border-bottom-color: @color_gold_01;
    border-top-color: @color_gold_01;
    border-left-color: @color_brand_02;
    border-right-color: @color_brand_02;
  }
}
.heartbeat() {
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
}
/**
 * ----------------------------------------
 * animation heartbeat
 * ----------------------------------------
 */
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
.btn {
  &-sqr_dl {
    @btn_h: 50px;
    @lh: 48px;
    @fs: @text_fs;
    @bor_th: 1px;
    @color_t: @color_gray_dark_05;
    @color_back: @color_white;
    @color_t__focus: @color_gray_dark_01;
    @color_bt__focus: @color_white;
    @color_back_focus: @color_brand_02;
    @bor_c: @color_gray_light_14;
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

        & .btn-sqr_dl__text {
          color: @color_bt__focus;
        }
      }
    }
  }

  &-sqr_bw {
    @btn_h: 50px;
    @lh: 48px;
    @fs: @text_fs;
    @bor_th: 1px;
    @color_t: @color_brand_02;
    @color_back: @color_white;
    @color_t__focus: @color_gray_dark_01;
    @color_bt__focus: @color_white;
    @color_back_focus: @color_brand_02;
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

        & .btn-sqr_bw__text {
          color: @color_bt__focus;
        }
      }
    }
  }
}
& .cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @bor_th: 1px;
  @btn-cart-width: 29px;

  .btn-cart {
    margin-right: 26px;

    &__wrap {
      position: relative;

      &:hover {
        & .btn-cart__ddc {
          display: block;
          transition: 100ms;

          opacity: 1;
          visibility: visible;
          transition: opacity 0.5s ease-out;
        }

        & .btn-cart {
          outline: 3px solid @color_brand_02;
        }
      }
    }

    &__count {
      position: absolute;
      z-index: 2;
      background-color: @color_brand_02;
      height: 19px;
      width: 19px;
      .fonts(12px; 20px; 700; 0.025em);
      color: @color_white;
      border-radius: 9.5px;
      top: -8px;
      left: 20px;
      text-align: center;
    }

    &__ddc {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      width: 262px;
      left: -72px;
      background-color: @color_white;
      top: 48px;
      padding: 4px 20px 20px 20px;
      border-radius: 5px;
      transition-delay: 500ms;
      z-index: 3;

      &:hover {
        opacity: 1;
        visibility: visible;
      }

      &-list {
        list-style: none;
        padding: 0;
        margin: 0 0 20px 0;
      }

      &-item {
        display: flex;
        align-items: center;
        border-bottom: 1px solid @color_gray_light_12;
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        .fonts(12px; 1.2; 700; normal);
        text-transform: uppercase;
        color: @color_gray_dark_01;
        margin-top: 16px;
        padding-bottom: 16px;

        &:hover {
          .border-runner();
        }

        & .col {
          p {
            & .x-txt {
              font-size: 10px;
            }
          }

          & .price-count {
            float: left;
          }

          & .sub-total {
            float: right;
          }

          &:first-child {
            margin-right: 14px;

            & a {
              display: block;

              &:hover {
                .heartbeat();
              }
            }
          }

          &:nth-child(2) {
            flex-grow: 1;

            & > p {
              &:nth-child(2) {
                color: @color_gold_01;
              }
            }

            & div p {
              color: @color_brand_02;
            }
          }

          &:last-child {
            display: flex;
            flex-direction: column;

            & a {
              text-transform: uppercase;
              text-decoration: none;
              color: @color_gray_light_03;
            }

            &:hover a {
              color: @color_gray_dark_01;
            }
          }
        }
      }

      &-total {
        & .total-grand {
          display: flex;
          justify-content: space-between;
          margin-bottom: 32px;

          & span {
            .fonts(16px; 12px; 700; normal);

            &:first-child {
              text-align: left;
            }

            &:last-child {
              text-align: left;
            }
          }
        }

        & .btn-sqr_bw {
          margin-bottom: 11px;
        }
      }
    }
  }
}
</style>
