<template>
  <ul id="catalog" class="products-grid_list">
    <li
      v-for="item in $store.getters.CatalogDisplayed"
      v-bind:key="item.uid"
      v-bind:data-catalog-item="item.id"
      v-bind:data-catalog-item-t="item.type"
      class="products-grid_item"
    >
      <div class="top-block">
        <!--<img v-bind:src="item.img" alt="">-->
        <div class="visible progressive replace" v-bind:data-href="item.img">
          <img src="@/assets/img/tiny.a1.07.jpg" class="preview" alt="image" />
        </div>
        <div class="hovered">
          <div class="btn-sqr_adcw">
            <a
              @click.prevent="CartAdd(item.id, item.type)"
              v-bind:href="'cart/add/' + item.id + '/' + item.type"
              class="btn-sqr_adcw__link clear-fix"
              name="btn-add-item"
            >
              <div class="btn-sqr_adcw__wrap">
                <img
                  src="@/assets/img/cart_white.png"
                  alt=""
                  class="btn-sqr_adcw__icon"
                /><span class="btn-sqr_adcw__text">Add to Cart</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <a href="#" class="products-grid_link">
        <h3>{{ item.name }}</h3>
        <p>${{ float2str(item.price) }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  methods: {
    float2str(int, fract = 2) {
      let arr = int.toString().split(".");
      if (arr[1] === undefined) {
        arr[1] = "0";
      }
      arr[1] = arr[1].substring(0, fract).padStart(fract, "0");
      return arr.join(".");
    },
    GetCatalogData(_obj) {
      let item = _obj.closest("[data-catalog-item][data-catalog-item-t]");
      if (item) {
        return {
          id: parseInt(item.getAttribute("data-catalog-item")),
          type: parseInt(item.getAttribute("data-catalog-item-t")),
        };
      }
      return undefined;
    },
    CartAdd(id, type) {
      return this.$store.dispatch("CartAdd", { id: id, type: type });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@color_gray_light_01: #b2b2b2;
@color_gray_light_13: #e9e9e9;
@color_gray_dark_01: #222222;
@color_brand_02: #f16d7f;
@color_white: #ffffff;
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
  &-sqr_adcw {
    @btn_h: 39px;
    @lh: 15px;
    @fs: 13px;
    @bor_th: 1px;
    @color_t: @color_white;
    @color_ic: @color_white;
    @color_back: transparent;
    @color_t__focus: @color_white;
    @color_ic__focus: @color_brand_02;
    @color_bt__focus: @color_white;
    @color_back_img__hover: @color_brand_02;
    @bor_c: @color_white;
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
      padding: (floor((@btn_h - 22px)/2) - 2px) @pad_hor
        (floor((@btn_h - 22px)/2) - 2px) 16px;
      float: left;
      display: inline-block;
    }

    &__link {
      //display: flex;
      //align-items: center;
      //justify-content: center;
      display: inline-block;
      background-color: @color_back;
      position: relative;
      border: @bor_th solid @bor_c;
      border-radius: @bor_rad;
      text-align: center;

      &:hover {
        background-color: @color_back_img__hover;
        border-color: @color_ic__focus;
        transition: 100ms;

        & .btn-sqr_adcw__text {
          color: @color_bt__focus;
          padding: (floor((@btn_h - @lh)/2) - 2px) (16px + (@pad_hor + 23px)/2)
            (floor((@btn_h - @lh)/2) - 2px) (16px + (@pad_hor + 23px)/2);
        }

        & .btn-sqr_adcw__icon {
          display: none;
        }
      }
    }
  }
}
.products {
  &-wrap {
    margin: 67px auto 112px auto;
  }
}
.products-grid {
      &_list {
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 54px 0 40px 0;
        padding: 0;
      }

      &_item {
        @height: 280px;
        @width: 261px;
        margin-bottom: 40px;

        & .top-block {
          height: @height;
          width: @width;
          background-color: @color_gray_light_13;
          position: relative;
& .visible {
        height: inherit;
        width: inherit;

        & img {
          align-self: center;
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
          & .hovered {
            position: absolute;
            display: flex;
            z-index: -1;
            top: 0;
            background-color: rgba(58, 56, 56, 0.83);
            height: @height;
            width: @width;
            justify-content: center;
            align-items: center;
            opacity: 0;
          }
        }

        & h3 {
          .fonts(13px; 1.2; 400; normal);
          text-transform: uppercase;
          color: @color_gray_dark_01;
          margin-left: 15px;
        }

        & p {
          .fonts(16px; 1.2; 700; normal);
          text-transform: uppercase;
          color: @color_brand_02;
          margin-left: 15px;
        }

        &:hover {
          box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.5s ease-out;

          & .top-block {
            & .hovered {
              z-index: 1;
              opacity: 1;
              transition: opacity 0.5s ease-out;
            }
          }
        }
      }

      &_link {
        text-decoration: none;
      }
    }
</style>
