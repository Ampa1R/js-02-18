const API_ROOT = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const request = (path = '', method = 'GET', body) => {
  return new Promise((resolve, reject)=> {  
  const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log({ response: xhr.responseText });
                resolve(JSON.parse(xhr.responseText));
            } else {
                console.error(xhr.responseText);
                reject(xhr.responseText);
            }
        }
    }
    
    xhr.open(method, `${API_ROOT}/${path}`);
    
    xhr.send(body);
  });
}
class GoodsItem {
    constructor(item) {
      this.item = item;
    }
  
    render() {
      return `
        <div class="item" data-id="${this.item.id_product}">
            <h2>${this.item.product_name}</h2>
            <p>${this.item.price}</p>
            <button name="add-to-basket">купить</button>
        </div>
      `;
    }
  }
  
  class GoodsList {
    constructor(basket) {
      this.basket = basket;
      this.goods = [];
      
      document.querySelector('.goods').addEventListener('click', (event) => {
      console.log(event);
        
        if (event.target.name === 'add-to-basket'){
          const itemId = event.target.parentElement.dataset.id;
          const item = this.goods.find((goodsItem) => goodsItem.id_product === parseInt(itemId));
          console.log({item, itemId});
          if (typeof item !== 'undefined'){
            this.addToBasket(item);
          } else {
            console.error (`Can't find element with id ${itemId}`)
          }
        }
      });
    }
  
    fetchData() {
      return new Promise((resolve, reject) => {
        request('catalogData.json')
          .then((goods) => {
            this.goods = goods;
            resolve();
          })
          .catch((error) => {
            console.log(`Can't fetch data`, error);
            reject(error);
          })
      });

    
  }
  
    getTotalPrice() {
        const sum = this.goods.reduce(
        (accumulator, currentElement) => accumulator + currentElement.price, 0);
        console.log(sum)
    };
    render() {
      const goodsString = this.goods.map(element => {
        const item = new GoodsItem(element);
        return item.render();
      });
      document.querySelector('.goods').innerHTML = goodsString.join('');
    }

    addToBasket(item) {
      this.basket.addItem(item);
    }
  }
  
  

  class Basket {
    constructor() {
      this.goods = [];
    }
    
    fetchData() {
        request('getBasket.json')
          .then((goods) => {
            this.goods = goods;
          })
          .catch((error) => {
            console.log(`Can't fetch basket data`, error);
            reject(error);
          })
    };
    addItem(item){
      request('addToBasket.json')
        .then((response) =>{
          if (response.result !== 0){
          const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
      if (itemIndex > -1){
        this.goods[itemIndex].quantity +=1;
      }else{
          this.goods.push({... item, quantity: 1});
        }
        console.log(this.goods);
      } else {
        console.error(`Can't add item to basket`, item, this.goods);
      }
        })
      }

    removeItem(id){
      request('deleteFromBasket.json')
        .then((response) =>{
          if (response.result !== 0){
            this.goods = this.goods.filter ((goodsItem) => goodsItem.id_product !== parseInt(id));
            console.log(this.goods);
          } else {
            console.error(`Can't delete item from basket`, item, this.goods);
          }
        });  
    }

    render() {} //отрисовать корзину
  
    calkDelivery() {} //расчитать доставку
  
    calcTotalPrice() {} //расчитать стоимость корзины
  
    clear() {} //очистить корзину
  
    completeOrder() {} //выполнить заказ
  }
  
  
  class BasketItem {
    constructor() {} //указать свойства из полученных данных о товарах с сервера
  
    render() {} //отрисовать товар
  
    calcTotalPrice() {} //рассчитать стоимость указанного количества товара
  
    changeQuantity() {} //изменить количество
  
    deleteItem() {} //удалить товар из корзины
  }
  const basket = new Basket();

  const list = new GoodsList(basket);
  list.fetchData() 
      .then(()=> {
      list.render();
      list.getTotalPrice();
  });