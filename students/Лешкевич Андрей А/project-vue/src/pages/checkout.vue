<template>
  <page-top-ribbon></page-top-ribbon>
  <section class="check-out">
    <div class="check-out-wrap wrap">
      <details open>
        <summary>01. Shipping Adress</summary>
        <div class="cont">
          <div class="col">
            <form action="#" class="ship-addr">
              <h3>Check as a guest or register</h3>
              <p class="text-reg">Register with us for future convenience</p>
              <div class="radio">
                <input
                  type="radio"
                  id="ship-addr-type-guest"
                  name="ship-addr-type"
                  value="guest"
                /><label for="ship-addr-type-guest">checkout as guest</label>
              </div>
              <div class="radio">
                <input
                  type="radio"
                  id="ship-addr-type-reg"
                  name="ship-addr-type"
                  value="register"
                  checked
                /><label for="ship-addr-type-reg">register</label>
              </div>

              <h3>register and save time!</h3>
              <p class="text-reg">Register with us for future convenience</p>
              <p class="text-adv">
                <i class="fa fa-angle-double-right"></i> Fast and easy checkout
              </p>
              <p class="text-adv">
                <i class="fa fa-angle-double-right"></i> Easy access to your
                order history and status
              </p>

              <div class="btn-sqr_dl">
                <a href="" class="btn-sqr_dl__link"
                  ><span class="btn-sqr_dl__text">Continue</span></a
                >
              </div>
            </form>
          </div>
          <div class="col">
            <form class="login">
              <h3>Already registed?</h3>
              <p class="text-reg">Please log in below</p>
              <label for="login-email"
                >EMAIL ADDRESS <span class="req-color">*</span></label
              ><input
                type="email"
                id="login-email"
                name="login-email"
                value=""
              />
              <label for="login-pass"
                >PASSWORD <span class="req-color">*</span></label
              ><input
                type="password"
                id="login-pass"
                name="login-pass"
                value=""
              />
              <p class="req-color">* Required Fileds</p>
              <div class="btn-wrap">
                <div class="btn-sqr_dl">
                  <a href="" class="btn-sqr_dl__link"
                    ><span class="btn-sqr_dl__text">Log in</span></a
                  >
                </div>
                <span>Forgot Password ?</span>
              </div>
            </form>
          </div>
        </div>
      </details>
      <details>
        <summary>02. BILLING INFORMATION</summary>
        <div class="cont">
          <div class="stub">Some Fields</div>
        </div>
      </details>
      <details>
        <summary>03. SHIPPING INFORMATION</summary>
        <div class="cont">
          <div class="stub">Some Fields</div>
        </div>
      </details>
      <details>
        <summary>04. SHIPPING METHOD</summary>
        <div class="cont">
          <div class="stub">Some Fields</div>
        </div>
      </details>
      <details>
        <summary>05. PAYMENT METHOD</summary>
        <div class="cont">
          <div class="stub">Some Fields</div>
        </div>
      </details>
      <details>
        <summary>06. ORDER REVIEW</summary>
        <div class="cont">
          <div class="stub">Some Fields</div>
        </div>
      </details>
    </div>
  </section>
</template>

<script>
import PageTopRibbon from "@/components/PageTopRibbon.vue";

export default {
  name: "checkout",
  components: {
    PageTopRibbon,
  },
};
</script>

<style lang="less">
@color_gray_light_14: #eaeaea;
@color_red_01: #ff0d0d;
@color_gray_dark_01: #222222;
@color_gray_dark_19: #b3b2b2;
@color_gray_light_12: #e8e8e8;
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
.check-out {
  & details {
    & .cont {
      display: flex;
      justify-content: space-between;
      padding: 32px;

      & .stub {
        .fonts(50px; 54px; 900);
      }

      & .btn-sqr_dl {
        width: 180px;

        &__link {
          display: inline-block;
          width: 100%;
        }

        &__text {
          padding-left: 0;
        }
      }

      & .col {
        width: 390px;

        & .login {
          & input {
            display: block;
            border: 1px solid @color_gray_light_14;
            line-height: 41px;
            margin: 16px 0;
            width: 100%;
          }

          & .req-color {
            color: @color_red_01;
          }

          & .btn-wrap {
            display: flex;
            align-items: center;

            & > span {
              margin-left: 32px;
            }
          }
        }
      }
    }

    & .radio {
      margin-top: 20px;

      & label {
        text-transform: uppercase;
        margin-left: 10px;
        .fonts(12px; 1.2; 400; normal);
      }
    }

    & summary {
      color: @color_gray_dark_01;
      .fonts(16px; 1.2; 700; normal);

      &::-webkit-details-marker {
        display: none;
      }
    }

    & h3 {
      .fonts(13px; 1.2; 400; normal);
      color: @color_gray_dark_01;
      text-transform: uppercase;
    }

    & p.text-reg {
      .fonts(13px; 20px; 400; normal);
      color: @color_gray_dark_19;
      margin-bottom: 32px;
    }

    & p.text-adv {
      .fonts(13px; 20px; 400; normal);
      color: @color_gray_dark_19;
    }

    padding-bottom: 28px;
    margin-bottom: 28px;
    border-bottom: 1px solid @color_gray_light_12;
  }

  padding: 32px 15px 90px 15px;
}
</style>
