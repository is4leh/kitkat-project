let Menu=async()=>{
    console.log("Menu");



let menu=""

let data = await fetch("http://localhost:3000/menu")
let res= await data.json()


let menuData = res.menu; 


menu=res.map((elem)=>{
    return `
    <a 
  href=${elem.href}
  class=" hidden md:block  items-center justify-center px-4 py-6 
         text-white text-center 
         transition-all duration-500 
         rounded-[30px] relative overflow-visible
         hover:bg-red-900 
         hover:[clip-path:polygon(0_0,100%_1%,100%_80%,50%_100%,0_80%)]
         hover:translate-y-[10px] hover:scale-105"
>${elem.name}
</a>
    `
    ;
})
document.querySelector(".header div").insertAdjacentHTML("beforeend", menu.join(""))

}

export default Menu