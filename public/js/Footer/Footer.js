let Footer = async()=>{



    let Footer=""
    let data = await fetch("http://localhost:3000/Footer")
    let res= await data.json()

    let FooterData = res.Footer;

    Footer=res.map((elem)=>{
        return `

        <div class="flex flex-col gap-[30px]">
                          <h1 class="text-[20px] font-bold">${elem.h1}</h1>
                          ${elem.p ? `<p class="mt-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 hover:after:w-full ">${elem.p}</p>` : ""}
                          ${elem.p2 ? `<p class="mt-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 hover:after:w-full ">${elem.p2}</p>` : ""}
                          </div> 
        
        


        `;
    }).join("")

    document.querySelector(".footer  ").insertAdjacentHTML("beforeend" , Footer )




}

export default Footer;