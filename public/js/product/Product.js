

let Product = async () => {

    console.log("Product loaded...");
  

    let data = await fetch("http://localhost:3000/product");
    let res = await data.json();
  



    let productHTML = res.map((elem) => {
      return `
        <div class="relative w-full aspect-square h-[400px] overflow-hidden">
          <img src="${elem.image}" alt="${elem.title}" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-red-600 flex items-start opacity-0 hover:opacity-75 transition-all duration-500 p-4">
            <p class="text-white text-sm">${elem.description}</p>
          </div>
        </div>
      `;
    }).join("");
  
    document.querySelector(".product").insertAdjacentHTML("beforeend", productHTML);
  };
  
  export default Product;
  