import React from 'react';
import arrow_icon from "../../media/icons/arrow-bottom.svg.png";
import footer_gif from "../../media/gifs/12gon.gif";

class Footer extends React.Component{
    render(){
        return(
            <>
               <footer>
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

export default Footer;
  