<template>
  <section class="category">
    <div class="wrap category-wrap">
      <div class="col">
        <div class="item">
          <a href="#">
            <!--<img src="img/category_man.png" alt="">-->
            <div data-href="img/category_man.png" class="progressive replace">
              <img
                src="@/assets/img/tiny.a1.05.jpg"
                class="preview"
                alt="image"
                style="width: 560px; height: 542px"
              />
            </div>
            <h3>hOT&nbsp;dEAL<br /><span>FOR MEN</span></h3>
          </a>
        </div>
        <div class="item">
          <a href="#">
            <!--<img src="img/category_accesories.png" alt="">-->
            <div
              data-href="img/category_accesories.png"
              class="progressive replace"
            >
              <img
                src="@/assets/img/tiny.a2.22.jpg"
                class="preview"
                alt="image"
                style="width: 560px; height: 261px"
              />
            </div>
            <h3>LUXIROUS&nbsp;& &nbsp;trendy<br /><span>ACCESORIES</span></h3>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="item">
          <a href="#">
            <!--<img src="img/category_women.png" alt="">-->
            <div data-href="img/category_women.png" class="progressive replace">
              <img
                src="@/assets/img/tiny.a2.22.jpg"
                class="preview"
                alt="image"
                style="width: 560px; height: 261px"
              />
            </div>
            <h3>30%&nbsp;offer<br /><span>women</span></h3>
          </a>
        </div>
        <div class="item">
          <a href="#">
            <!--<img src="img/category_kids.png" alt="">-->
            <div data-href="img/category_kids.png" class="progressive replace">
              <img
                src="@/assets/img/tiny.a1.05.jpg"
                class="preview"
                alt="image"
                style="width: 560px; height: 542px"
              />
            </div>
            <h3>new&nbsp;arrivals<br /><span>FOR kids</span></h3>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageCategory",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@color_gray_dark_01: #222222;
@color_brand_02: #f16d7f;
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
.scale-up-center() {
  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

/**
 * ----------------------------------------
 * animation scale-up-center
 * ----------------------------------------
 */
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
}

@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
}

.pulsate-bck() {
  -webkit-animation: pulsate-bck 0.5s ease-in-out infinite both;
  animation: pulsate-bck 0.5s ease-in-out infinite both;
}

/**
 * ----------------------------------------
 * animation pulsate-bck
 * ----------------------------------------
 */
@-webkit-keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes pulsate-bck {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.category {
  padding: 67px 0;

  &-wrap {
    display: flex;
    justify-content: space-between;

    & .col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 560px;

      & .item {
        margin: 10px 0;
        position: relative;

        & a {
          text-decoration: none;
          display: block;

          & h3 {
            /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
            .fonts(18px; 1.2; 900);
            text-transform: uppercase;
            color: @color_gray_dark_01;
            display: inline-block;
            padding: 16px;
            margin: 0;
            position: absolute;
            top: 26px;
            left: 0px;

            background-color: white;

            & span {
              font-size: 30px;
              color: @color_brand_02;
            }
          }
        }

        &:hover {
          .scale-up-center();

          & h3 {
            .pulsate-bck();
          }
        }
      }
    }
  }
}
</style>
