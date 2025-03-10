const id = new URLSearchParams(window.location.search).get("id")
const savedCart = localStorage.getItem("cart")
const cartItems = savedCart ? JSON.parse(savedCart) : [];



const product = document.getElementById("product");
const getProductById = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    console.log("result", result);
    const productDetails = document.createElement("div")
productDetails.innerHTML=`
<div class="flex  flex-col lg:flex-row lg:justify-between justify-center items-center gap-12">
<div class+"flex justify-center items-center w-[100%] lg:w-[50%]">
<img src="${result?.image}" class="w-[400px] h-[500px]" />
</div>
<div class="w-[100%] lg:w-[50%] flex flex-col justify-start items-start gap-4">
<h3 class="text-[24px] font-bold">${result?.title}</h3>
<p>${result?.description}</p>
<h3 class="text-[28px] font-bold">${result?.price}</h3>
<button onclick="addToCart(${result?.id})" class="bg-gray-500 text-white p-3 rounded-[12px]">Add to cart </button>
</div>
</div>
`;
cartIcon = document.getElementById("cart")
cartIcon.innerHTML = cartItems.length;

cartMobile = document.getElementById("cartMobile")
cartMobile.innerHTML = cartItems.length
if(cartItems.length > 0){
    cartMobile.style.display = "block";
}else{
    cartMobile.style.display = "none";
}

product.appendChild(productDetails);
}
 
const addToCart = async (product) => {
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    const addedProduct =result.find((item) => item.id === product);
if (addedProduct){
    cartItems.push(addedProduct)
}
cartIcon = document.getElementById("cart")
cartIcon.innerHTML = cartItems.length


localStorage.setItem("cart", JSON.stringify(cartItems))
}
 const hideMenuBar = () => {
    const menu = document.getElementById("menu");
    menu.classList.add("hidden")

    const mobileNav = document.getElementById("mobileNav")
    mobileNav.classList.remove("hidden")

    const close = document.getElementById("close")
    close.classList.remove("hidden")

    const body = document.getElementById("body")
    body.classList.add("h-[100vh")
    body.classList.add("overflow-hidden")
 }
 const showMenuBar = () =>{
    const menu = document.getElementById("menu");
    menu.classList.remove("hidden")

    const close = document.getElementById("close")
    close.classList.add("hidden")

    const mobileNav = document.getElementById("mobileNav")
 mobileNav.classList.add("hidden")

 const body = document.getElementById("body")
 body.classList.remove("h-[100vh]")
 body.classList.remove("overflow-hidden")
}

getProductById();