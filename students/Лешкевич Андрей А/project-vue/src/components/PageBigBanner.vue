<template>
  <section class="slider">
    <div class="wrap slider-wrap">
      <h1><span>THE BRAND</span> OF&nbsp;LUXERIOUS <span>FASHION</span></h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageBigBanner",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@color_gray_light_12: #e8e8e8;
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
.heartbeat() {
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
} /**
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
.slider {
  height: 613px;
  padding-top: 224px;
  background: url(~@/assets/img/slider_background.png) center center/cover
    no-repeat;
  background-color: @color_gray_light_12;

  &-wrap {
    & > h1 {
      /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
      .fonts(40px; 1.2);
      color: @color_gray_dark_01;
      width: 50%;
      padding-left: 12px;
      border-left: 12px solid @color_brand_02;

      & > span {
        &:first-child {
          font-size: 60px;
        }

        &:last-child {
          color: @color_brand_02;
        }
      }
    }

    &:hover {
      .heartbeat();
    }
  }
}
</style>
