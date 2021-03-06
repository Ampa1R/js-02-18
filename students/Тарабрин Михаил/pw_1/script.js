const goods = [
    {title: 'Shirt', price: 150, image: "https://a.lmcdn.ru/img600x866/M/P/MP002XW047N4_12804328_1_v1_2x.jpg"},
    {title: 'Socks', price: 20, image: "https://a.lmcdn.ru/product/M/P/MP002XW04FOT_12975464_1_v1.jpg"},
    {title: 'Jacket', price: 350, image: "https://a.lmcdn.ru/img600x866/I/X/IX001XW00U8W_13143761_2_v2.jpeg"},
    {title: 'Shoes', price: 250, image: "https://a.lmcdn.ru/product/D/R/DR004AUKPTG7_11968908_1_v2.jpg"},
];

const renderGoodsItem = (title, price, image) => `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${image}" alt="Card image cap">
  <div class="card-body text-center">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${price}</p>
    <a href="#" class="btn btn-outline-secondary">check details</a>
  </div>
</div>
`;

const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.image));
    document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
}

renderGoodsList(goods);
