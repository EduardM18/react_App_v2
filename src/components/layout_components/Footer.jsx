import React from 'react';

class Footer extends React.Component{
    render(){
      const sponsors = this.props.sponsors;
        return(
            <>
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

export default Footer;
  