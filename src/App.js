
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Cadastro from './Cadastro';
import Clientes from './Clientes'
import Funcionalidades from './Funcionalidades';
import Informacoes from './Informacoes';
import Sobre from './Sobre';



document.addEventListener("scroll", event =>{

 console.log(window.pageYOffset)

 if(window.pageYOffset >= 1000){
   let beneficios = document.getElementById("beneficios")
   
    beneficios.classList.remove("AOSoff")
    beneficios.classList.add("AOSon")

   
 }
 if(window.pageYOffset >= 2100){
  let greensection = document.getElementById("greensection")
  
   greensection.classList.remove("AOSoff")
   greensection.classList.add("AOSon")

  
}

if(window.pageYOffset >= 2700 && window.pageYOffset < 2800 ){
  let box1 = document.querySelector(".box1")
  
   box1.classList.remove("box1")
   box1.classList.add("AOSon")
}

 if(window.pageYOffset > 3200){
  let box2 = document.querySelector(".box2")
  
   box2.classList.remove("box2")
   box2.classList.add("box2active")
}

})



function menuactive(){

  let menu = document.querySelector("#list")

  menu.classList.toggle("teste2")



}



function App() {
  return (
    <div className='app'>

      <section className='main'>
       <nav>
        <div className='logo'>
         <img src='https://svgshare.com/i/mUa.svg'></img>
        </div>
        <ul id='list'>
          <li><AnchorLink href='#patrocionios'>HOME</AnchorLink></li>
          <li><AnchorLink href='#sobre'>SOBRE</AnchorLink></li>
          <li><AnchorLink href='#beneficios'>FUNCIONALIDADES</AnchorLink></li>
          <li><AnchorLink href='#patrocionios'>CLIENTES</AnchorLink></li>
        </ul>
        <a href="https://www.noot.com.br/" target="_blank" rel="noreferrer">
        <button className='botao'>ESTOU SOBRE LOREM IPSUM</button>
        </a>
        <img onClick={menuactive} id='menubutton' src='https://svgshare.com/i/mXw.svg' title='' />
        
       </nav>

       <Cadastro/>
       <Clientes/>
       <Funcionalidades/>
       <Informacoes/>
       <Sobre/>

       

       <footer>
        <div className='footerbox'>
        <a href="https://www.noot.com.br/" target="_blank" rel="noreferrer">
        <button className='buttondark'>ESTOU SOBRE LOREN IPSUN</button>
        </a>
        </div>
        
       </footer>
   
      </section>

    </div>
  );
}

export default App;
