import React from 'react';
import "./style.css"
import field1 from "../../../media/fields/field1.jpg";
import background_gif from "../../../media/gifs/stoepsorama.gif";

class Grow extends React.Component{
    render(){
        return(
            <> 
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
            </>
        );
    }
}

export default Grow;
  