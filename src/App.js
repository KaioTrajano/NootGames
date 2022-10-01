
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Cadastro from './Cadastro';
import Clientes from './Clientes'
import Funcionalidades from './Funcionalidades';
import Informacoes from './Informacoes';
import Sobre from './Sobre';
import Aos from 'aos';
import "aos/dist/aos.css"




function Aosanimation(){
  Aos.init({duration:2000})
}


function menuactive(){

  let menu = document.querySelector("#list")

  menu.classList.toggle("teste2")



}



function App() {

  Aosanimation()

  return (
    <div className='app'>

      <section className='main'>
       <nav>
        <div className='logo'>
         <img src='https://svgshare.com/i/mUa.svg'></img>
        </div>
        <ul id='list'>
          <li><AnchorLink href='#patrocionios'>HOMEa</AnchorLink></li>
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
