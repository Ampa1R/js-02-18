'use strict';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url, callback) {
    var xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.responseText);
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
}

class GoodsItem {
    constructor(id_product, product_name, price) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `
            <div class="block__item" data-id="${this.id_product}">
                <a href="#">
                    <h4 class="block__title">${this.product_name}</h4>
                </a>
                <p class="block__prise">$${this.price}</p>
                <div class="block__img">
                    <div class="block__item-hover">
                        <div>
                           <i class="block__cart-icon"></i>
                            <span>Add to Cart</span>
                        </div>
                    </div>
                </div>
            </div>    
        `;
    }
}

class GoodsList {
    constructor(basket) {
        this.basket = basket;
        this.goods = [];
    }
    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            cb();
        });
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
          listHtml += goodItem.render();
        });
        document.querySelector('.product__block').innerHTML = listHtml;

        const buttomAddBasket = document.querySelectorAll('.block__item-hover');

        for (let i = 0; i < buttomAddBasket.length; i++) {
            buttomAddBasket[i].addEventListener('click', (event) => {
                
                const itemId = buttomAddBasket[i].parentElement.parentElement.dataset.id;
                const item = this.goods.find(function (goodItem) {
                    if( goodItem.id_product == itemId ) {
                        return goodItem;
                    }
                });
                if(typeof item !== 'undefined') {
                    this.addBasket(item);
                }
            });
        }
    }
    addBasket(item) {
        this.basket.addItem(item);
    }
}

class BasketItem {
    constructor(id_product, product_name, price, quantity) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
        this.quantity = quantity;
    }
    render() {
        return `
            <div class="cart-togle__item" data-id="${this.id_product}">
                <!-- <img src="#" alt="${this.product_name}" width="100%" height="85" class="cart-togle__image"> -->
                <div class="cart-togle__cont">
                    <div class="h3 cart-togle__title">${this.product_name}</div>
                    <div class="cart-togle__atr">
                        <div class="cart-togle__count">${this.quantity}</div>
                        <div class="cart-togle__prise">$${this.price}</div>
                    </div>
                </div>
                <div class="cart-togle__close">
                    <div class="cart-togle__close-icon">x</div>
                </div>
            </div>  
        `;
    }
}

class BasketList {
    constructor() {
        this.goods = [];
        this.fetchGoods(() => {
            this.render();
        });
    }
    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
            this.goods = JSON.parse(goods);
            cb();
        });
    }
    addItem(item) {
        let check = 0;
        this.goods.contents.forEach(good => {
            if(item.id_product === good.id_product) {
                good.quantity += 1;
                check = 1;
            }
        });
        if (check === 0) {
            item.quantity = 1;
            this.goods.contents.push(item);
        }
        this.goods.countGoods += 1;
        this.goods.amount += item.price;
        this.render();
    }
    deleteItem (item) {
        let index = 0;
        let indexdeleteItem = -1;
        this.goods.contents.forEach(good => {
            if(item.id_product === good.id_product) {
                good.quantity -= 1;
                if(good.quantity <= 0) {
                    indexdeleteItem = index;
                }
            }
            index++;
        });
        console.log(indexdeleteItem);
        if (indexdeleteItem >= 0) {
            this.goods.contents.splice(indexdeleteItem, 1);
        }
        this.goods.countGoods -= 1;
        this.goods.amount -= item.price;
        this.render();
    }
    render() {
        let listHtml = '';
        this.goods.contents.forEach(good => {
          const goodItem = new BasketItem(good.id_product, good.product_name, good.price, good.quantity);
          listHtml += goodItem.render();
        });
        document.querySelector('.cart-togle__basket').innerHTML = listHtml;
        document.querySelector('.top-cart__items').innerHTML = this.goods.countGoods;
        document.querySelector('.cart-togle__prise1').innerHTML = `$${this.goods.amount}`;

        const buttomDeleteItem = document.querySelectorAll('.cart-togle__close-icon');

        for (let i = 0; i < buttomDeleteItem.length; i++) {
            buttomDeleteItem[i].addEventListener('click', (event) => {
                
                const itemId = buttomDeleteItem[i].parentElement.parentElement.dataset.id;
                console.log(itemId);
                const item = this.goods.contents.find(function (goodItem) {
                    if( goodItem.id_product == itemId ) {
                        return goodItem;
                    }
                });
                console.log(item);
                if(typeof item !== 'undefined') {
                    this.deleteItem(item);
                }
            });
        }
    }
}

const basket = new BasketList();
const list = new GoodsList(basket);
list.fetchGoods(() => {
    list.render();
});

document.querySelector('.top-cart').onclick = function() {
    var div = document.querySelector('.cart-togle');
    if(div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};