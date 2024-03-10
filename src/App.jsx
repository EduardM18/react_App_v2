import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <>
        <header>
            <div id="logo_container">
                <img src="media/logo/logo.svg.png" alt="logo" id="logo_img"/>
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
                <img src="media/icons/menu.svg.png" alt="menu_bar" id="menu_bar"/>
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
                    <img src="media/icons/arrow-bottom.svg.png" alt="arrow_up" id="content_arrow_img"/>
                    <p id="rotated_content_p">We help companies design their products to be ready for web3 world</p>
                </div>
            </div>
            <div id="main_img_container">
                <img src="media/images/div.png" alt="phone" id="main_img"/>
            </div>
        </main>
        <footer>
            <p id="backed_by">Our clients are backed by:</p>
            <div id="companies_container">
                <div className="companie_logo_container">
                    <img src="media/sponsors_logo/logo-ycombinator.svg.png" alt="companie" className="companie_logo"/>
                </div>
                <div className="companie_logo_container">
                    <img src="media/sponsors_logo/logo-coinbase.svg.png" alt="companie" className="companie_logo"/>
                </div>
                <div className="companie_logo_container">
                    <img src="media/sponsors_logo/logo-a16z.png.png" alt="companie" className="companie_logo"/>
                </div>
                <div className="companie_logo_container">
                    <img src="media/sponsors_logo/logo-blockchange.svg.png" alt="companie" className="companie_logo"/>
                </div>
            </div>
        </footer>
      </>
    );
  }
}

export default App;
