import React from 'react';
import Header from './components/layout_components/Header';
import Main from './components/layout_components/Main';
import Footer from './components/layout_components/Footer';

class Footer extends React.Component{
    render(){
        return(
            <>
               <Header />
               <Main />
               <Footer />
            </>
        );
    }
}
  
export default Footer;