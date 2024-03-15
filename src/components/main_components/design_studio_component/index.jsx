import React from 'react';
import arrow_icon from "../../../media/icons/arrow-bottom.svg.png";
import main_img from "../../../media/images/div.png";
import "./style.css"

class DesignStudio extends React.Component{
    render(){
        return(
            <> 
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
            </>
        );
    }
}

export default DesignStudio;
  