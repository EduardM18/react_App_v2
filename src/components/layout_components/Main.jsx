import React from 'react';
import arrow_icon from "../../media/icons/arrow-bottom.svg.png";
import main_img from "../../media/images/div.png";
import project1 from "../../media/projects/project1.jpg";
import project2 from "../../media/projects/project2.jpg";
import project3 from "../../media/projects/project3.jpg";
import project4 from "../../media/projects/project4.jpg";
import project5 from "../../media/projects/project5.jpg";
import field1 from "../../media/fields/field1.jpg";
import background_gif from "../../media/gifs/stoepsorama.gif";


class Main extends React.Component{
    render(){
        const sponsors = this.props.sponsors;
        return(
            <>
                <main>
                    <div id="design_studio_container_wrapper">
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
                    </div>
                    <div id="sponsors_container">
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
                    </div>
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
                </main>
            </>
        );
    }
}

export default Main;
  