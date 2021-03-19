import { createStore } from 'vuex'

function getURLs() {
  const regex = /(?<=\/)([^\/]*)(\.ht\w+)$/gm;
  let m,
    url = {
      Cart: "api/cart/get/index.json",
      CatalogCashed: "api/catalog/elements/get/all.json",
      CatalogDisplayed: "api/catalog/displayed/get/index.json",
    };
  if ((m = regex.exec(window.location.href)) !== null) {
    switch (m[1]) {
      case "":
      case "index":
        url.Cart = "api/cart/get/index.json";
        url.CatalogCashed = "api/catalog/elements/get/all.json";
        url.CatalogDisplayed = "api/catalog/displayed/get/index.json";
        break;
      case "Checkout":
        url.Cart = "api/cart/get/checkout.json";
        url.CatalogCashed = "api/catalog/elements/get/all.json";
        url.CatalogDisplayed = "api/catalog/displayed/get/checkout.json";
        break;
      case "Product":
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
      CatalogChashed: {
        isLoaded: false,
        value: [],
      },
      CatalogDisplayedItems: {
        isLoaded: false,
        value: [],
      },
      Cart: {
        isLoaded: false,
        value: [],
      },
    };
  },
  getters: {
    CatalogDisplayed: (state) => {
      if (
        state.CatalogChashed.isLoaded &&
        state.CatalogDisplayedItems.isLoaded
      ) {
        return state.CatalogDisplayedItems.value.map((item) => {
          let elem = state.CatalogChashed.value.find((obj) => {
            return obj.id === item.id;
          });
          if (elem.type[item.type] !== undefined) {
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
          } else return {};
        });
      }
      return [];
    },
    CartDisplayed: (state) => {
      const regex = /(\..+$)/gm;
      if (state.CatalogChashed.isLoaded && state.Cart.isLoaded) {
        return state.Cart.value.map((item) => {
          let elem = state.CatalogChashed.value.find((obj) => {
            return obj.id === item.id;
          });
          if (elem.type[item.type] !== undefined) {
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
          } else return {};
        });
      }
      return [];
    },
    CartCount: (state) => {
      let stat = {
        products: 0,
        count: 0,
        grand_total: 0,
      };
      if (state.CatalogChashed.isLoaded && state.Cart.isLoaded) {
        for (let item of Object.values(state.Cart.value)) {
          let cat = state.CatalogChashed.value.find((obj) => {
            return obj.id === item.id;
          });
          if (cat) {
            stat.grand_total += cat.type[item.type].price * item.quantity;
            stat.count += item.quantity;
            stat.products++;
          }
        }
      }
      return stat;
    },
  },
  mutations: {
    UpdateCatalogChashed(state, catalog) {
      state.CatalogChashed.value = catalog;
      state.CatalogChashed.isLoaded = true;
    },
    UpdateCatalogDisplayedItems(state, displayed) {
      state.CatalogDisplayedItems.value = displayed;
      state.CatalogDisplayedItems.isLoaded = true;
    },
    UpdateCart(state, cart) {
      state.Cart.value = cart;
      state.Cart.isLoaded = true;
    },
    CartInc(state, index) {
      state.Cart.value[index].quantity++;
    },
    CartDec(state, index) {
      state.Cart.value[index].quantity--;
    },
    CartDel(state, index) {
      state.Cart.value.splice(index, 1);
    },
    CartAdd(state, item) {
      state.Cart.value.push(item);
    },
    CartSet(state, payload) {
      state.Cart.value[payload.index].quantity = payload.quantity;
    },
    CartClean(state) {
      state.Cart.value = [];
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
      } else {
        throw Error("Displayed Catalog load error");
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
            context.commit('CartSet', {index:index, quantity:item.quantity});
          } else {
            context.commit('CartDel', index);
          }
          resolve();
        } else {
          reject();
        }
      })
    }
  },
  modules: {
  }
})
