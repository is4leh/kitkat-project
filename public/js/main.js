import Menu from './Menu/Menu.js'
import  Product from './product/Product.js'
import Footer from './Footer/Footer.js'
// import Slider from './slider/slider';



async function allExe(){

   await Menu()
   await Product()
   await Footer()
    
   
}


allExe()