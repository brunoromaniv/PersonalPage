import React from 'react';


import {Figure} from 'react-bootstrap'
import TopBar from './TopBar';
import imagem from  './Perfil.png'



function SideBar() {
    return  <>

    <div class="sideBar">
    <img src={imagem} ></img>
    <div class="perfil">
    <p>
      <strong>Bruno Romaniv da Silva</strong>
    </p>
    <p>
      Engenheiro Eletricista
    </p>
    <p>
      Desenvolvedor Javascript
      <p>Nodejs e ReactJS</p>
    </p>
    <p>
      26 anos
    </p>
    </div>
    </div>

  </>
    
  }
  
  export default SideBar;