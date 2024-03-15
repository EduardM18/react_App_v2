import React from 'react';
import project1 from "../../../media/projects/project1.jpg";
import project2 from "../../../media/projects/project2.jpg";
import project3 from "../../../media/projects/project3.jpg";
import project4 from "../../../media/projects/project4.jpg";
import project5 from "../../../media/projects/project5.jpg";
import "./style.css"

class Projects extends React.Component{
    render(){
        return(
            <> 
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
            </>
        );
    }
}

export default Projects;
  