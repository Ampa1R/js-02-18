<template>
  <section>
    <div id="cartBig" class="table">
      <div class="table-header table-line">
        <div class="table-line-item">Product Details</div>
        <div class="table-line-item">unite Price</div>
        <div class="table-line-item">Quantity</div>
        <div class="table-line-item">shipping</div>
        <div class="table-line-item">Subtotal</div>
        <div class="table-line-item">ACTION</div>
      </div>
      <div
        v-for="item in $store.getters.CartDisplayed"
        v-bind:key="item.id + '/' + item.type"
        v-bind:data-catalog-item="item.id"
        v-bind:data-catalog-item-t="item.type"
        class="product-item table-line"
      >
        <div class="table-line__wrap">
          <div class="table-line-item table-line-item-prod">
            <div class="col">
              <a href="#" class="item-img">
                <div
                  class="visible progressive replace"
                  v-bind:data-href="item.img"
                >
                  <img src="@/assets/img/tiny.a1.07.jpg" class="preview" alt="image" />
                </div>
              </a>
            </div>
            <div class="col">
              <h3>Mango People T-shirt</h3>
              <p><span class="item-title"> Color:</span> {{ item.color }}</p>
              <p><span class="item-title">Size:</span> {{ item.size }}</p>
            </div>
          </div>
          <div class="table-line-item table-line-item-price">
            ${{ float2str(item.price) }}
          </div>
          <div class="table-line-item table-line-item-quant">
            <input
              @change.prevent="CartSet(item.id, item.type, $event)"
              @onblur.prevent="CartSet(item.id, item.type, $event)"
              class="item-quant"
              type="number"
              v-bind:value="item.quantity"
              name="btn-update-item"
              min="0"
            />
          </div>
          <div class="table-line-item table-line-item-ship">FREE</div>
          <div class="table-line-item table-line-item-subt">
            ${{ float2str(item.price * item.quantity) }}
          </div>
          <div class="table-line-item table-line-item-act">
            <a
              @click.prevent="CartDel(item.id, item.type)"
              v-bind:href="'cart/del/' + item.id + '/' + item.type"
              name="btn-del-item"
              ><i class="fa fa-times-circle"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="table-footer table-line">
        <div class="col">
          <div class="btn-sqr_dl">
            <a href="#" @click.prevent="CartClean()" class="btn-sqr_dl__link"
              ><span class="btn-sqr_dl__text">cLEAR SHOPPING CART</span></a
            >
          </div>
        </div>
        <div class="col">
          <div class="btn-sqr_dl">
            <a href="" class="btn-sqr_dl__link"
              ><span class="btn-sqr_dl__text">cONTINUE sHOPPING</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartBig",
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
@color_gray_dark_08: #575757;
@color_gray_dark_12: #6f6e6e;
@color_gray_dark_11: #656565;
@color_gray_dark_07: #4f4f4f;
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
 .table {
    display: flex;
    flex-direction: column;

    &-line {
      justify-content: space-between;
      border-bottom: 1px solid @color_gray_light_14;
      display: flex;
      padding: 25px 0;

      &__wrap {
        display: flex;
        width: 100%;
        border: 1px solid transparent;

        &:hover {
          .border-runner();
        }
      }

      &-item {
        color: @color_gray_dark_01;
        .fonts(13px; 20px; 700; -0.015em);
        text-transform: uppercase;
        text-align: center;

        &:first-child {
          flex-grow: 1;
          text-align: left;
        }

        &:last-child {
          text-align: right;
        }

        &:nth-child(2) {
          min-width: 130px;
        }

        min-width: 90px;

        &-prod {
          display: flex;

          & .col {
            &:first-child {
              margin-right: 15px;
            }

            &:last-child {
              .fonts(13px; 20px; 300; normal);

              & h3 {
                margin: 13px 0 38px 0;
              }

              & p {
                color: @color_gray_dark_08;
                margin: 0;
                text-transform: none;

                & .item-title {
                  font-weight: 400;
                  color: @color_gray_dark_12;
                }
              }
            }
          }
        }

        &-price,
        &-quant,
        &-ship,
        &-subt {
          color: @color_gray_dark_11;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &-act {
          display: flex;
          justify-content: center;
          align-items: center;

          & a {
            text-decoration: none;

            color: @color_gray_light_03;

            &:hover {
              color: @color_gray_dark_07;
            }
          }
        }

        &-quant > input {
          max-width: 54px;
          -moz-appearance: textfield;
          text-align: center;
          border: 1px solid @color_gray_light_14;

          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }
    }

    &-header,
    .table-line {
      padding-bottom: 20px;
    }

    &-footer {
      margin-bottom: 60px;
      border-bottom: none;
    }
  }
</style>
