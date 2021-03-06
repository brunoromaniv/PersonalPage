import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar'



//Componente
//Estado
//Propriedade

import reactLogo from  './assets/reactjsIcon.png'
import nodeIcon from  './assets/nodejsIcon.jpeg'
import vbaIcon from  './assets/vbaIcon.png'

function Home() {

  
  return (
    <>
      <TopBar />
      <SideBar/>
      <div className="wrapper">
        <div className="main_content">
        
          <p className="arquivoOrigem">
            Acredito na união da <strong>Engenharia</strong> e da <strong>Programação</strong> para buscar melhores resultados.
          </p>
          <p className="arquivoOrigem">
            Entusiasta das mais novas tecnlogias do mercado: <strong>Nodejs, ReactJs, ElectronJs e ReactNative</strong>.
          </p>
          <p className="arquivoOrigem">
            Mais agilidade nos processos, redução de custos e aumento de qualidade devem caminhar juntos.
          </p>
          <p>
            Acredita que sua empresa tem processos que poderiam ser melhorados, mas não sabe como? <strong>Entre em contato!</strong>
          </p>
        <div className="logos">
          <img className  = "logo" src={reactLogo} ></img>
          <img className  = "logo" src={nodeIcon} ></img>
          <img className  = "logo" src={vbaIcon} ></img>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Home;