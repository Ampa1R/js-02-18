import { createStore } from 'vuex'

function getURLs() {
  const regex = /(?<=\/)([^\/]*)(\.ht\w+)$/gm;
  let m,
    url = {
      Cart: "api/cart/get/index.json",
      CatalogCashed: "api/catalog/elements/get/index.json",
      CatalogDisplayed: "api/catalog/displayed/get/index.json",
    };
  if ((m = regex.exec(window.location.href)) !== null) {
    switch (m[1]) {
      case "":
      case "/":
      case "index":
        url.Cart = "api/cart/get/index.json";
        url.CatalogCashed = "api/catalog/elements/get/index.json";
        url.CatalogDisplayed = "api/catalog/displayed/get/index.json";
        break;
      case "checkout":
        url.Cart = "api/cart/get/checkout.json";
        url.CatalogCashed = "api/catalog/elements/get/all.json";
        url.CatalogDisplayed = "api/catalog/displayed/get/checkout.json";
        break;
      case "product":
        url.Cart = "api/cart/get/Product.json";
        url.CatalogCashed = "api/catalog/elements/get/Product.json";
        url.CatalogDisplayed = "api/catalog/displayed/get/Product.json";
        break;
      case "shopping_cart":
        url.Cart = "api/cart/get/Shopping Cart.json";
        url.CatalogCashed = "api/catalog/elements/get/Shopping Cart.json";
        url.CatalogDisplayed = "api/catalog/displayed/get/Shopping Cart.json";
        break;
      case "single_page":
        url.Cart = "api/cart/get/Single Page.json";
        url.CatalogCashed = "api/catalog/elements/get/Single Page.json";
        url.CatalogDisplayed = "api/catalog/displayed/get/Single Page.json";
        break;
    }
  }
  return url;
}
export default createStore({

  state() {
    return {
      CatalogChashed: {},
      CatalogDisplayedItems: {},
      Cart: new Object(),
      Slider: {
        isLoaded: false,
        index: 1,
        value: [
          "https://picsum.photos/1920/1080?random=1",
          "img/catalog_item_22_big.png",
          "https://picsum.photos/1920/1080?random=2",
        ],
      }
    };
  },
  getters: {
    CatalogDisplayed: (state) => {
      let cat = (Object.keys(state.CatalogDisplayedItems).length === 0
        && state.CatalogDisplayedItems.constructor === Object) ? [] : state.CatalogDisplayedItems.map((item) => {
          /*let elem = state.CatalogChashed.value.find((obj) => {
            return obj.id === item.id;
          });*/
          let elem = state.CatalogChashed[item.id] !== undefined ? state.CatalogChashed[item.id] : undefined;
          if (elem !== undefined && elem.type[item.type] !== undefined) {
            return {
              id: item.id,
              name: elem.name,
              type: item.type,
              img: elem.type[item.type].img,
              price: elem.type[item.type].price,
              star: elem.type[item.type].star,
              color: elem.type[item.type].color,
              size: elem.type[item.type].size,
            };
          } else {
            return {
              id: item.id,
              name: 'Requested on server',
              type: item.type,
              img: '',
              price: 0,
              star: 0,
              color: 'Requested on server',
              size: 'Requested on server',
            };
          }
        });
      return cat;
    },
    CartDisplayed: (state) => {
      const regex = /(\..+$)/gm;
      return (Object.keys(state.Cart).length === 0
        && state.Cart.constructor === Object) ? [] : state.Cart.map((item) => {
          /*let elem = state.CatalogChashed.value.find((obj) => {
            return obj.id === item.id;
          });*/
          let elem = state.CatalogChashed[item.id] !== undefined ? state.CatalogChashed[item.id] : undefined;
          if (elem !== undefined && elem.type[item.type] !== undefined) {
            return {
              id: item.id,
              name: elem.name,
              type: item.type,
              quantity: item.quantity,
              img: elem.type[item.type].img.replace(regex, "_small.png"),
              price: elem.type[item.type].price,
              star: elem.type[item.type].star,
              color: elem.type[item.type].color,
              size: elem.type[item.type].size,
            };
          } else {
            return {
              id: item.id,
              name: 'Requested on server',
              type: item.type,
              img: '',
              price: 0,
              star: 0,
              color: 'Requested on server',
              size: 'Requested on server',
            };
          }
        });
    },
    CartCount: (state) => {
      let stat = {
        products: 0,
        count: 0,
        grand_total: 0,
      };
      for (let item of Object.values(state.Cart)) {
        /*let cat = state.CatalogChashed.value.find((obj) => {
          return obj.id === item.id;
        });*/
        let cat = state.CatalogChashed[item.id] !== undefined ? state.CatalogChashed[item.id] : undefined;
        if (cat && cat.type[item.type] !== undefined) {
          stat.grand_total += cat.type[item.type].price * item.quantity;
          stat.count += item.quantity;
          stat.products++;
        }
      }
      return stat;
    },
  },
  mutations: {
    UpdateCatalogChashed(state, catalog) {
      if (catalog.merge !== undefined) {
        state.CatalogChashed = Object.assign(state.CatalogChashed, catalog.catalog);
      }
      else {
        state.CatalogChashed = catalog;
      }
    },
    UpdateCatalogDisplayedItems(state, displayed) {
      state.CatalogDisplayedItems = displayed;
    },
    UpdateCart(state, cart) {
      state.Cart = cart;
    },
    CartInc(state, index) {
      state.Cart[index].quantity++;
    },
    CartDec(state, index) {
      state.Cart[index].quantity--;
    },
    CartDel(state, index) {
      state.Cart.splice(index, 1);
    },
    CartAdd(state, item) {
      state.Cart.push(item);
    },
    CartSet(state, payload) {
      state.Cart[payload.index].quantity = payload.quantity;
    },
    CartClean(state) {
      state.Cart = [];
    },
    SetSliderIndex(state, index) {
      state.Slider.index = index;
    }
  },
  actions: {
    async GetCatalogChashed(context) {
      let response = await fetch(getURLs().CatalogCashed);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let json = await response.json();
      if (json.status === 200) {
        context.commit("UpdateCatalogChashed", json.catalog);
      } else {
        throw Error("Catalog load error");
      }
    },
    async GetCatalogDisplayedItems(context) {
      let response = await fetch(getURLs().CatalogDisplayed);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let json = await response.json();
      if (json.status === 200) {
        context.commit("UpdateCatalogDisplayedItems", json.displayed);
        context.dispatch('GetCatalogItems',context.state.CatalogDisplayedItems)
      } else {
        throw Error("Displayed Catalog load error");
      }
    },
    async GetCatalogItems(context, displayed) {
      console.dir(Object.keys(context.state.CatalogChashed).length)
      console.dir(context.state.CatalogChashed.constructor)
      let request = (Object.keys(context.state.CatalogChashed).length === 0
        && context.state.CatalogChashed.constructor === Object) ? Object.assign(displayed,{empty:true}) :
        displayed.map((item) => {
          let cat = context.state.CatalogChashed[item.id] !== undefined ? context.state.CatalogChashed[item.id] : undefined;
          if (!cat || cat.type[item.type] === undefined) {
            return { id: item.id, type: item.type }
          }
        });
      console.dir(request)
      let response = await fetch('api/catalog/elements/get/all.json');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let json = await response.json();
      if (json.status === 200) {
        context.commit("UpdateCatalogChashed", { catalog: json.catalog, merge: true });
      } else {
        throw Error("Catalog load error");
      }
    },
    async GetCart(context) {
      let response = await fetch(getURLs().Cart);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let json = await response.json();
      if (json.status === 200) {
        context.commit("UpdateCart", json.cart);
        context.dispatch('GetCatalogItems',context.state.Cart)
      } else {
        throw Error("Cart load error");
      }
    },
    CartInc(context, item) {
      return new Promise((resolve, reject) => {
        let index = context.state.Cart.value.findIndex(obj => { return (obj.id === item.id && obj.type === item.type) });
        if (index !== -1) {
          context.commit('CartInc', index);
          resolve();
        } else {
          reject();
        }
      })
    },
    CartDec(context, item) {
      return new Promise((resolve, reject) => {
        let index = context.state.Cart.value.findIndex(obj => { return (obj.id === item.id && obj.type === item.type) });
        if (index !== -1) {
          if (1 < context.state.Cart.value[index].quantity) {
            context.commit('CartDec', index);
          } else {
            context.commit('CartDel', index);
          }
          resolve();
        } else {
          reject();
        }
      })
    },
    CartDel(context, item) {
      return new Promise((resolve, reject) => {
        let index = context.state.Cart.value.findIndex(obj => { return (obj.id === item.id && obj.type === item.type) });
        if (index !== -1) {
          context.commit('CartDel', index);
          resolve();
        } else {
          reject();
        }
      })
    },
    CartAdd(context, item) {
      return new Promise((resolve, reject) => {
        context.dispatch('CartInc', item).catch(() => {
          context.commit('CartAdd', {
            "id": item.id,
            "type": item.type,
            "quantity": 1
          });
          resolve();
        })
      })
    },
    CartSet(context, item) {
      return new Promise((resolve, reject) => {
        let index = context.state.Cart.value.findIndex(obj => { return (obj.id === item.id && obj.type === item.type) });
        if (index !== -1) {
          if (item.quantity > 0) {
            context.commit('CartSet', { index: index, quantity: item.quantity });
          } else {
            context.commit('CartDel', index);
          }
          resolve();
        } else {
          reject();
        }
      })
    },
    SliderLeft(context) {
      if (0 < context.state.Slider.index) {
        context.commit('SetSliderIndex', context.state.Slider.index - 1);
      }
    },
    SliderRight(context) {
      if (context.state.Slider.index < (context.state.Slider.value.length - 1)) {
        context.commit('SetSliderIndex', context.state.Slider.index + 1);
      }
    }
  },
  modules: {
  }
})
