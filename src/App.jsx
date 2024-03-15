import React from 'react';
import Header from './components/layout_components/Header';
import Main from './components/layout_components/Main';
import Footer from './components/layout_components/Footer';
import sponsor1 from "./media/sponsors_logo/logo-ycombinator.svg.png";
import sponsor2 from "./media/sponsors_logo/logo-coinbase.svg.png";
import sponsor3 from "./media/sponsors_logo/logo-a16z.png.png";
import sponsor4 from "./media/sponsors_logo/logo-blockchange.svg.png";
import project1 from "./media/projects/project1.jpg";
import project2 from "./media/projects/project2.jpg";
import project3 from "./media/projects/project3.jpg";
import project4 from "./media/projects/project4.jpg";
import project5 from "./media/projects/project5.jpg";
import field1 from "./media/fields/field1.jpg";
import background_gif from "./media/gifs/stoepsorama.gif";
import arrow_icon from "./media/icons/arrow-bottom.svg.png";
import footer_gif from "./media/gifs/12gon.gif";

const sections = [
    {
        id: 1,
        name: "Home",
        messages_count: 0,
        current: true
    },
    {
        id: 2,
        name: "About",
        messages_count: 0,
        current: false
    },
    {
        id: 3,
        name: "Contact",
        messages_count: 0,
        current: false
    },
    {
        id: 4,
        name: "Career",
        messages_count: 2,
        current: false
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
                <Header sections = {sections}/>
                <Main />
                <Footer sponsors = {sponsors}/>
                <div id="projects_container">
                    <h1 id="projects_container_header">Projects</h1>
                    <div id="projects_grid_container">
                        <div className="grid_item">
                            <div className="project_info_container">
                                <h1 className="project_name">WingRiders</h1>
                                <p className="project_info">UX/UI Design, Design system</p>
                            </div>
                            <img src= {project1} alt="project" className="grid_item_img" />
                        </div>
                        <div className="grid_item" id="item2">
                            <div className="project_info_container">
                                <h1 className="project_name">Worldcoin app</h1>
                            </div>
                            <img src= {project2} alt="project" className="grid_item_img" />
                        </div>
                        <div className="grid_item">
                            <div className="project_info_container">
                                <h1 className="project_name">Trackee app</h1>
                                <p className="project_info">UX/UI Design, Branding, Design system</p>
                            </div>
                            <img src= {project3} alt="project" className="grid_item_img" />
                        </div>
                        <div className="grid_item">
                            <div className="project_info_container">
                                <h1 className="project_name">Audience+</h1>
                                <p className="project_info">Wireframes, UX/UI Design, Rebranding</p>
                            </div>
                            <img src= {project4} alt="project" className="grid_item_img" />
                        </div>
                        <div className="grid_item">
                            <div className="project_info_container">
                                <h1 className="project_name">Cardinal</h1>
                                <p className="project_info">Wireframes, UX/UI Design, Rebranding</p>
                            </div>
                            <img src= {project5} alt="project" className="grid_item_img" />
                        </div>
                    </div>
                </div>
                <div id="grow_container">
                    <img src={background_gif} alt="gif" id="background_gif" />
                    <h1 id="grow_container_header">How we can <br/> help grow</h1>
                    <div id="grow_content_container">
                        <ul id="field_ul">
                            <li className="field_li" id="active_field_li">Product clarity</li>
                            <li className="field_li">UX/UI design</li>
                            <li className="field_li">Maintain process</li>
                        </ul>
                        <div id="field_img_container">
                            <img src= {field1} alt="field" id="field_img" />
                        </div>
                        <div id="about_field_container">
                            <p id="field_description">
                                Are you at the idea stage? We will help you identify the critical MVP product scope.
                            </p>
                            <ul id="skills_ul">
                                <li className="skills_li">product goal&vision</li>
                                <li className="skills_li">brand voice</li>
                                <li className="skills_li">product positioning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <footer id="footer">
                    <img src={footer_gif} alt="gif" id="footer_live_gif" />
                    <div id="product_studio_container">
                        <div id="product_studio_content_container">
                            <h1 id="product_studio_header">Web3 product studio</h1>
                            <p id="product_studio_content">
                                Feel free to reach out if you want to collaborate <br/>
                                with us, or simply have a chat.
                            </p>
                        </div>
                        <div id="mail_link_container">
                            <h1 id="mail_link">hello@thirdweb.studio</h1>
                            <img src={arrow_icon} alt="arrow_up" id="mail_arrow_img"/>
                        </div>
                    </div>
                    <div id="project_social_container">
                        <ul className="footer_ul">
                            <label className="footer_ul_header">Our projects</label>
                            <li className="footer_li">WingRiders</li>
                            <li className="footer_li">Trackee</li>
                            <li className="footer_li">Worldcoin</li>
                            <li className="footer_li">Audience+</li>
                        </ul>
                        <ul className="footer_ul">
                            <label className="footer_ul_header">Follow us</label>
                            <li className="footer_li">Facebook</li>
                            <li className="footer_li">Instagram</li>
                            <li className="footer_li">Dribbble</li>
                            <li className="footer_li">Linkedin</li>
                        </ul>
                    </div>
                    <div id="back_to_top_container">
                        <img src={arrow_icon} alt="arrow_up" id="back_to_top_arrow"/>
                        <p id="back_to_top_content">Back to top</p>
                    </div>
                </footer>
            </>
        );
    }
}
  
export default App;