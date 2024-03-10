import './App.css';
import React from 'react';
import logo from "./media/logo/logo.svg.png";
import menu_svg from "./media/icons/menu.svg.png";
import arrow_icon from "./media/icons/arrow-bottom.svg.png";
import main_img from "./media/images/div.png";
import sponsor1 from "./media/sponsors_logo/logo-ycombinator.svg.png";
import sponsor2 from "./media/sponsors_logo/logo-coinbase.svg.png";
import sponsor3 from "./media/sponsors_logo/logo-a16z.png.png";
import sponsor4 from "./media/sponsors_logo/logo-blockchange.svg.png";

class App extends React.Component{
  render(){
    return(
      <>
        <header>
            <div id="logo_container">
                <img src = {logo} alt="logo" id="logo_img"/>
            </div>
            <div id="sections_container">
                <div className="section_wrapper">
                    <p className="section_p" id="current_section_p">Home</p>
                </div>
                <div className="section_wrapper">
                    <p className="section_p">About</p>
                </div>
                <div className="section_wrapper">
                    <p className="section_p">Contact</p>
                </div>
                <div className="section_wrapper">
                    <p className="section_p">Career</p>
                    <div className="section_message">2</div>
                </div>
            </div>
            <div id="menu_container">
                <div id="menu_p">Menu</div>
                <img src={menu_svg} alt="menu_bar" id="menu_bar"/>
            </div>
        </header>
        <main>
            <div id="design_studio_container">
                <div id="design_studio_content_container">
                    Design studio<br/>
                    for the<br/>
                    web3 world<br/>
                </div>
                <div id="rotated_content_container">
                    <img src={arrow_icon} alt="arrow_up" id="content_arrow_img"/>
                    <p id="rotated_content_p">We help companies design their products to be ready for web3 world</p>
                </div>
            </div>
            <div id="main_img_container">
                <img src={main_img} alt="phone" id="main_img"/>
            </div>
        </main>
        <footer>
            <p id="backed_by">Our clients are backed by:</p>
            <div id="companies_container">
                <div className="companie_logo_container">
                    <img src={sponsor1} alt="companie" className="companie_logo"/>
                </div>
                <div className="companie_logo_container">
                    <img src={sponsor2} alt="companie" className="companie_logo"/>
                </div>
                <div className="companie_logo_container">
                    <img src={sponsor3} alt="companie" className="companie_logo"/>
                </div>
                <div className="companie_logo_container">
                    <img src={sponsor4} alt="companie" className="companie_logo"/>
                </div>
            </div>
        </footer>
      </>
    );
  }
}

export default App;
