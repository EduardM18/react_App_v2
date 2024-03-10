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

const sections = [
  {
    id: 1,
    name: "Home",
    messages_count: 0
  },
  {
    id: 2,
    name: "About",
    messages_count: 0
  },
  {
    id: 3,
    name: "Contact",
    messages_count: 0
  },
  {
    id: 4,
    name: "Career",
    messages_count: 2
  }
];

const sponsors = [
  {
    id: 1,
    logo: sponsor1
  },
  {
    id: 2,
    logo: sponsor2
  },
  {
    id: 3,
    logo: sponsor3
  },
  {
    id: 4,
    logo: sponsor4
  }
]

class App extends React.Component{
  render(){
    return(
      <>
        <header>
            <div id="logo_container">
                <img src = {logo} alt="logo" id="logo_img"/>
            </div>
            <div id="sections_container">
                {sections.map((section) => {
                  if(section.messages_count < 1){
                    if(section.name !== "Home"){
                      return(<div className="section_wrapper" key={`section:${section.id}`}>
                        <p className="section_p">{section.name}</p>
                      </div>);
                    }else{
                      return(<div className="section_wrapper" key={`section:${section.id}`}>
                        <p className="section_p" id="current_section_p">{section.name}</p>
                      </div>);
                    }
                  }else{
                    if(section.name !== "Home"){
                      return(
                        <div className="section_wrapper" key={`section:${section.id}`}>
                          <p className="section_p">{section.name}</p>
                          <div className="section_message">{section.messages_count}</div>
                        </div>
                      )
                    }else{
                      return(
                        <div className="section_wrapper" key={`section:${section.id}`}>
                          <p className="section_p" id="current_section_p">{section.name}</p>
                          <div className="section_message">{section.messages_count}</div>
                        </div>
                      )
                    }
                  }
                })}
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
              {sponsors.map((sponsor) => {
                return(
                  <div className="companie_logo_container" key={`sponsor:${sponsor.id}`}>
                    <img src={sponsor.logo} alt="companie" className="companie_logo"/>
                  </div>
                );
              })}
            </div>
        </footer>
      </>
    );
  }
}

<App sections={sections} sponsors={sponsors}/>

export default App;
