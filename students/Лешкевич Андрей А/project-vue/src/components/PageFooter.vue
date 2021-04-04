<template>
  <footer>
    <section class="subscribe">
      <div class="wrap warp-subscribe">
        <div class="cont">
          <div class="col">
            <div class="item">
              <img src="@/assets/img/comment_ellipse.png" alt="" />
              <div class="cont">
                <p>
                  “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                  pulvinar purus condimentum a. Aliquam condimentum mattis neque
                  sed pretium”
                </p>
                <p><span>Bin Burhan</span><br />Dhaka, Bd</p>
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
          </div>
          <div class="col">
            <div class="item">
              <div class="cont">
                <h3>Subscribe</h3>
                <p>FOR OUR NEWLETTER AND PROMOTION</p>
                <div class="btn-subs">
                  <form action="#" class="form-subs">
                    <input
                      name="subscribe"
                      type="email"
                      class="form-subs__input"
                      placeholder="Enter Your Email"
                    /><a href="#" class="form-subs__btn clear-fix">Subscribe</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="footer">
      <div class="wrap footer-wrap">
        <div class="cont">
          <div class="col logo">
            <section class="logo">
              <a href="#"
                ><img src="@/assets/img/logo.png" alt="" /><span
                  >BRAN<span>D</span></span
                ></a
              >
            </section>
            <p>
              Objectively transition extensive data rather than cross functional
              solutions. Monotonectally syndicate multidisciplinary materials
              before go forward benefits. Intrinsicly syndicate an expanded
              array of processes and cross-unit partnerships.<br /><br />
              Efficiently plagiarize 24/365 action items and focused
              infomediaries. Distinctively seize superior initiatives for
              wireless technologies. Dynamically optimize.
            </p>
          </div>
          <div class="col">
            <h2>COMPANY</h2>
            <ul class="footer-nav">
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Home</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Shop</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">About</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">How It Works</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h2>INFORMATION</h2>
            <ul class="footer-nav">
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Tearms & Condition</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Privacy Policy</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">How to Buy</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">How to Sell</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Promotion</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h2>SHOP CATEGORY</h2>
            <ul class="footer-nav">
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Men</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Women</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Child</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Apparel</a>
              </li>
              <li class="footer-nav-item">
                <a href="#" class="footer-nav-link">Brows All</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="copyright">
      <div class="wrap copyright-wrap">
        <div class="cont">
          <div class="text">© 2017 Brand All Rights Reserved.</div>
          <ul class="icon-nav">
            <li class="icon-nav-item">
              <a href="#" class="icon-nav-link"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <li class="icon-nav-item">
              <a href="#" class="icon-nav-link"
                ><i class="fa fa-twitter"></i
              ></a>
            </li>
            <li class="icon-nav-item">
              <a href="#" class="icon-nav-link"
                ><i class="fa fa-linkedin" aria-hidden="true"></i
              ></a>
            </li>
            <li class="icon-nav-item">
              <a href="#" class="icon-nav-link"
                ><i class="fa fa-pinterest-p"></i
              ></a>
            </li>
            <li class="icon-nav-item">
              <a href="#" class="icon-nav-link"
                ><i class="fa fa-google-plus" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
/* default text`s parameters */
@text_fs: 14px;
@text_lh: 24px;
@text_w: 400;
@text_ls: normal;
/* Defaults padding and margin */
@pad_hor_def: 15px;
@pad_ver_def: 25px;

.fonts(@fs: @text_fs; @lh: @text_lh; @w: @text_w; @ls: @text_ls) {
  font-size: @fs;
  line-height: @lh;
  font-weight: @w;
  letter-spacing: @ls;
}

@color_gray_dark_15: #898989;
@color_brand_02: #f16d7f;
@color_brand_03: #f06c7d0f;
@color_gray_light_11: #e6e6e6;
@color_white: #ffffff;
@color_gray_light_21: #f7f7f8;
@color_gray_light_01: #b2b2b2;
@color_gray_dark_13: #7a7a7a;
@color_gray_light_07: #d6d6d6;
@color_gray_light_09: #e1e1e1;
@color_gray_dark_01: #222222;
@color_brand_01: #ef5b70;
@color_gray_dark_08: #575757;

@color_gray_dark_02: #222224;
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
  &-subs {
    @btn_h: 46px;
    @lh: 44px;
    @fs: @text_fs;
    @bor_th: 1px;
    @color_t: @color_brand_02;
    @color_ic: @color_white;
    @color_in: @color_gray_dark_02;
    @color_back: @color_gray_light_09;
    @color_t__focus: @color_gray_dark_01;
    @color_ic__focus: @color_gray_light_09;
    @color_in__focus: @color_white;
    @color_in_shad__focus: @color_brand_01;
    @color_bt__focus: @color_gray_dark_08;
    @bor_c: @color_gray_light_09;
    @bor_c2: @color_brand_02;
    @bor_rad: 23px;
    @pad_hor: 23px;
    @pad_in: (@btn_h - @lh - @bor_th*2) @pad_hor;
    @pad_btn: 0 12px;
    @pad_txt: ((@btn_h - @lh)/2) 0 ((@btn_h - @lh)/2) @pad_hor;
    @pad_ico: ((@btn_h - @lh)/2) (@pad_hor / 2);
    display: inline-block;
    height: @btn_h;
    min-width: 302px;

    & .form-subs {
      display: inline-block;

      &__input {
        color: @color_in;
        .fonts(@fs; @lh);
        height: @btn_h;
        border-style: solid;
        border-color: @bor_c;
        border-top-width: @bor_th;
        border-bottom-width: @bor_th;
        border-left-width: 0;
        border-right-width: 0;
        background-color: @color_back;
        border: @bor_th solid @bor_c;
        border-radius: @bor_rad 0 0 @bor_rad;
        @pad_calc: (@btn_h - @lh - @bor_th*2);
        padding: @pad_calc (@pad_hor + @bor_th) @pad_calc (@pad_hor + @bor_th);
        float: left;

        &::placeholder {
          color: @color_in;
        }

        &:focus {
          outline: none;
          background-color: @color_ic;
          border-style: solid;
          border-color: @color_in_shad__focus;
          border-left-width: @bor_th;
          border-right-width: @bor_th;
          transition: 100ms;

          &::placeholder {
            color: @color_in;
          }
        }

        &:hover {
          color: @color_in__focus;
          transition: 100ms;
          background-color: @color_bt__focus;
          border-color: @color_bt__focus;

          &::placeholder {
            color: @color_in__focus;
            transition: 100ms;
          }
        }
      }

      &__btn {
        color: @color_ic;
        .fonts(@text_fs; @lh);
        padding: @pad_btn;
        background-color: @color_t;
        border-style: solid;
        border-color: @bor_c2;
        border-top-width: @bor_th;
        border-bottom-width: @bor_th;
        border-left-width: 0;
        border-right-width: 0;
        border-radius: 0 @bor_rad @bor_rad 0;
        display: inline-block;

        &:hover {
          border-style: solid;
          background-color: @color_ic__focus;
          border-color: @color_ic__focus;
          transition: 100ms;
          color: @color_bt__focus;
        }
      }
    }

    & a {
      text-decoration: none;
    }
  }
}
.footer {
  & .footer-wrap .cont .logo {
    min-width: 430px;
    margin-right: 90px;
  }

  & .cont {
    display: flex;
    padding: 110px 0 85px 0;

    & .logo p {
      /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
      .fonts(14px; 24px; 300);
      color: @color_gray_dark_15;
    }

    & .col {
      margin: 0 15px;
      min-width: 15%;

      & h2 {
        /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
        .fonts(18px; 26px; 700);
        color: @color_brand_02;
      }
    }
  }

  & .footer-nav {
    list-style: none;
    padding: 0;

    &-link {
      text-decoration: none;
      /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
      .fonts(16px; 40px);
      color: @color_gray_dark_15;
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
}
.copyright {
  background-color: @color_gray_light_11;

  & .cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 79px;

    & > * {
      margin: 0 16px;
    }
  }

  & .icon-nav {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    padding: 0;

    &-item {
      background-color: @color_white;
      min-width: 32px;
      min-height: 32px;
      margin: 0 10px 0 0;
      text-align: center;
      transition-duration: 300ms;

      &:hover {
        background-color: @color_brand_02;
        transition-duration: 200ms;

        & a {
          color: @color_gray_light_21;
        }
      }

      &:active {
        background-color: @color_white;
        opacity: 0.29;
        transition-duration: 100ms;

        & a {
          color: @color_gray_light_01;
        }
      }
    }

    &-link {
      text-decoration: none;
      /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
      .fonts(15px; 32px);
      color: @color_gray_light_01;
    }
  }

  & .text {
    /* (@size: @textBaseSize; @lHeight: @textBaseLineHeight; @weight: @textBaseWeight; @ls: @textLS) */
    .fonts(15px; 42px);
    color: @color_gray_dark_13;
  }
}
.subscribe {
  min-height: 613px;

  background-image: url("~@/assets/img/subscribe_background_mask.png"),
    url("~@/assets/img/subscribe_background.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-color: rgba(242, 242, 242, 0.5);
  background-size: cover;

  & .cont {
    display: flex;
    justify-content: center;

    & .col {
      padding-top: 224px;
      min-height: 613px;
      min-width: 50%;

      &:first-child {
        border-width: 0 1px 0 0px;
        border-color: @color_white;
        border-style: solid;

        & > .item {
          padding-right: 70px;
          display: flex;
          justify-content: center;
          align-items: flex-start;

          & img {
            align-self: flex-start;
            margin-right: 28px;
          }

          & .cont {
            flex-direction: column;
            margin: 0 32px 0 0;

            & p {
              &:first-child {
                .fonts(16px; 26px);
                font-style: italic;
                color: #222224;
              }

              &:nth-child(2) {
                .fonts(12px; 14px; 300; normal);
                color: #222224;

                & span {
                  .fonts(16px; 26px; 700);
                  color: #f16d7f;
                }
              }
            }
          }
        }
      }

      &:last-child .item {
        padding: 0 90px;

        & .cont {
          display: flex;
          flex-direction: column;

          text-align: center;

          & h3 {
            text-transform: uppercase;
            color: @color_gray_dark_02;
            text-align: center;
            .fonts(24px; 30px; 400);
            margin: 0;
          }

          & p {
            .fonts(14px; 24px; 400);
            margin: 0 0 35px 0;
          }
        }
      }
    }
  }

  .slide-selection {
    @btn_h: 14px;
    @btn_w: 38px;
    @btn_p: 7px;
    @btn_bor_h: 4px;
    @btn_bor_col: @color_gray_light_07;
    @btn_bor_col_act: @color_brand_02;
    display: flex;
    justify-content: left;

    &-btn {
      display: inline-block;
      width: @btn_w;
      height: @btn_h;
      border-bottom: @btn_bor_h solid @color_gray_light_07;
      text-decoration: none;
      margin: 0 @btn_p;

      &:hover {
        .heartbeat();
        border-bottom-color: @btn_bor_col_act;
      }

      &__active {
        border-bottom-color: @btn_bor_col_act;
      }
    }
  }

  & .sub-slide {
    text-decoration: none;
  }
}
</style>
