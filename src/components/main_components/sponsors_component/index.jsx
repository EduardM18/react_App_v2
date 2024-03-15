import React from 'react';
import "./style.css"

class Sponsors extends React.Component{
    render(){
        const sponsors = this.props.sponsors;
        return(
            <> 
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
            </>
        );
    }
}

export default Sponsors;
  