//example
import React from 'react';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import { slide as Menu } from 'react-burger-menu'

//example



//First view
import home from './assets/market1.png';
//Second view 
import logo from './assets/1m.png';
import menu1 from './assets/menu1.png';
import bebidas from './assets/be.png';
import pos from './assets/postres.png';
//third view
import tapas from './assets/tap.png';
import crudos from './assets/crud.png';
import delacasa from './assets/de.png';
import ensaladas from './assets/en.png';
import panes1 from './assets/panes.png';
import pizz from './assets/pizz.png';
import sushi from './assets/sushi.png';
import tacos from './assets/ta.png';
//Lading views
import tapainfo from './assets/tapin.png';
import crudosinfo from './assets/crudin.png';
import sushinfo from './assets/sushin.png';
import pizzainf from './assets/pizzain.png';
import panesinfo from './assets/panesin.png';
import ensaladasinfo from './assets/ensaladasin.png';
import tacosinfo from './assets/tacosin.png';
import casainfo from './assets/casain.png';
// Drinks menu
import wis from './assets/w.png';
import vin from './assets/v.png';
import ontap from './assets/on.png';
import coctails from './assets/cc.png';
import blanco from './assets/blk.png';
import licor from './assets/licor.png';
import esp from './assets/es.png';
//landing views
import w1 from './assets/w1.png';
import w2 from './assets/ww1.png';
import onn1 from './assets/on1.png';
import on11 from './assets/on11.png';
import on_11 from './assets/on111.png';
import cla11 from './assets/cla1.png';
import ll11 from './assets/ll1.png';
import lll11 from './assets/lll1.png';
//dessert menu
import sweets from './assets/sweet1.png';
import scoops11 from './assets/scoops1.png';
import cafe11 from './assets/cafe1.png';
import infusion from './assets/infusion1.png';
//menu infor
import sweetinfor from './assets/sweetin.png';
import soopsin1 from './assets/soopsin.png';
import infuin from './assets/infuin.png';



function App() {
  
  return (
    <div className="App">
     
     <Carousel >
       
          <Menu>
          
          <a id="home" className="menu-item" href="1">Menu</a>
          <a id="about" className="menu-item" href="#">About</a>
          <a id="contact" className="menu-item" href="#">Contact</a>
          <a className="menu-item--small" href="#">Settings</a>
          <Carousel>

            
          </Carousel>
          </Menu>
        
        <div>
         <img src={home}/>
        </div>
       
       <div>
         <div className="opciones">
           <img src={logo} />
           <img src={menu1}/>
           <img src={bebidas}/>
           <img src={pos}/>
         </div>
        </div>
       
       <div>
          <div className="wrap">
            <img src={tapas}/>
            <img className="margin1" src={pizz}/>
          </div>
          <div className="wrap">
            <img src={crudos}/>
            <img src={panes1}/>
          </div>
          <div className="wrap"> 
            <img src={sushi}/>
            <img src={tacos}/>
          </div>
          <div className="wrap"> 
            <img src={ensaladas}/>
            <img src={delacasa}/>
          </div>
        </div>

        <div id="1" className="landing">
            <img src={tapainfo}/>
        </div>

        <div className="landing">
            <img src={crudosinfo}/>
        </div>

        <div className="landing">
            <img src={sushinfo}/>
        </div>

        <div className="landing">
            <img src={ensaladasinfo}/>
        </div>

        <div className="landing">
            <img src={pizzainf}/>
        </div>

        <div className="landing">
            <img src={panesinfo}/>
        </div>

        <div className="landing">
            <img src={tacosinfo}/>
        </div>

        <div className="landing">
            <img src={casainfo}/>
        </div>

        <div className="flex">
         <div>
          <div className="wrap">
            <img  className="wi" src={wis}/>
            <img className="vi" src={vin}/>
          </div>
          <div className="wrap">
            <img className="on" src={ontap}/>
            <img className="cc" src={coctails}/>
          </div>
          <div className="wrap">
            <img className="blanc" src={blanco}/>
            <img className="cc" src={licor}/>
          </div>
          <div className="wrap">
            <img className="blanc1" src={esp}/>
            <img/>
          </div>
         </div>
        </div>
        <div className="landing">
          <img src={w1}/> 
        </div>

        <div>
        <img src={w2}/> 
        </div>
        <div>
        <img src={onn1}/> 
        </div>
        <div>
        <img src={on11}/> 
        </div>
        <div>
        <img src={on_11}/> 
        </div>
        <div>
        <img src={cla11}/> 
        </div>
        <div>
        <img src={ll11}/> 
        </div>
        <div>
        <img src={lll11}/> 
        </div>
        <div>
          <div className="opciones">
          <img src={sweets}/>
          <img src={scoops11}/>
          <img src={cafe11}/>
          <img src={infusion}/>
          </div>
        </div>
        <div> 
          <img src={sweetinfor}/>
        </div>
        <div>
          <img src={soopsin1}/>
        </div>
        <div>
          <img src={infuin}/>
        </div>
     </Carousel>
    </div>
    
  );
}

export default App;
