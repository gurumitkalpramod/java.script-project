const savedCart = localStorage.getItem("cart")
const cartItems = savedCart ? JSON.parse(savedCart) : [];

const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();

    const products = document.getElementById("products");
    console.log(result);

    result.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = `
    <a href="/products/index.html?id=${product.id}">
    <div class="border-[1px] border-gray-400 p-4 rounded-[12px] h-[330px] hover:scale-105 duration-300 cursor-pointer">
    <div>
    <img src="${product.image}" class="h-[200px] w-[300px] flex flex-col justify-center items-center" alt="" />
    </div>
    <div class="p-3">
    <h3 class="font-semibold">${product.title.length > 40 ? product.title.slice(0,40) + "..." : product.title}</h3>
  
    <h1 class="font-bold text-[20px]">$${product?.price}</h1>
    </div>
    </div>
    </a>

    `;

    cartIcon = document.getElementById("cart")
    cartIcon.innerHTML = cartItems.length
    
    products.appendChild(productCard);
});    
};

getProducts();
