import React from 'react';
import DesignStudio from '../main_components/design_studio_component/index';
import Sponsors from '../main_components/sponsors_component';
import Projects from '../main_components/projects_component';
import Grow from '../main_components/grow_component';

class Main extends React.Component{
    render(){
        const sponsors = this.props.sponsors;
        return(
            <>
                <main>
                    <DesignStudio />
                    <Sponsors sponsors = {sponsors} />
                    <Projects />
                    <Grow />
                </main>
            </>
        );
    }
}

export default Main;
  