import React from 'react';
import logo from "../../media/logo/logo.svg.png";
import menu_svg from "../../media/icons/menu.svg.png";

class Header extends React.Component{
    render(){
        const sections = this.props.sections;
        return(
            <>
                <header>
                    <div id="logo_container">
                        <img src = {logo} alt="logo" id="logo_img"/>
                    </div>
                    <div id="sections_container">
                        {sections.map((section) => {
                            if(section.current === true){
                                if(section.messages_count > 0){
                                    return(
                                        <div className="section_wrapper" key={`section:${section.id}`}>
                                            <p className="section_p" id="current_section_p">{section.name}</p>
                                            <div className="section_message">{section.messages_count}</div>
                                        </div>
                                    )
                                }
                                return(
                                    <div className="section_wrapper" key={`section:${section.id}`}>
                                    <p className="section_p" id="current_section_p">{section.name}</p>
                                    </div>
                                );
                            }else{
                                if(section.messages_count > 0){
                                    return(
                                        <div className="section_wrapper" key={`section:${section.id}`}>
                                            <p className="section_p">{section.name}</p>
                                            <div className="section_message">{section.messages_count}</div>
                                        </div>
                                    )
                                }
                                return(
                                    <div className="section_wrapper" key={`section:${section.id}`}>
                                    <p className="section_p">{section.name}</p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div id="menu_container">
                        <div id="menu_p">Menu</div>
                        <img src={menu_svg} alt="menu_bar" id="menu_bar"/>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;