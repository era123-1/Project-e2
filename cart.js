const products = [
    {
        id: 1,
        image: 'f1.jpg',
        title: 'Hair Grow Shampoo',
        price: '$30',
    },
    {
        id: 2,
        image: 'f2.jpg',
        title: 'Hair Elixir',
        price: '$49',
    },
    {
        id: 3,
        image: 'f3.jpg',
        title: 'Luminance Pearl Treatment',
        price: '$36',
    },
    {
        id: 4,
        image: 'f4.jpg',
        title: 'Serum Dafine',
        price: '$28',
    },
    {
        id: 5,
        image: 'f5.jpg',
        title: 'Daily Cream',
        price: '$50',
    },
    {
        id: 6,
        image: 'f6.jpg',
        title: 'Castor Oil Serum',
        price: '$22',
    },
];

const cart = document.getElementById('root');

products.forEach(item => {
    const productBox = document.createElement('div');
    productBox.classList.add('box');

    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    imgBox.appendChild(img);

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left');
    const title = document.createElement('p');
    title.textContent = item.title;
    const price = document.createElement('h2');
    price.textContent = item.price;
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';

    leftDiv.appendChild(title);
    leftDiv.appendChild(price);
    leftDiv.appendChild(addButton);

    productBox.appendChild(imgBox);
    productBox.appendChild(leftDiv);

    cart.appendChild(productBox);
});





