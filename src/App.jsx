import React from 'react';
import Header from './components/layout_components/Header';
import Main from './components/layout_components/Main';
import Footer from './components/layout_components/Footer';
import sponsor1 from "./media/sponsors_logo/logo-ycombinator.svg.png";
import sponsor2 from "./media/sponsors_logo/logo-coinbase.svg.png";
import sponsor3 from "./media/sponsors_logo/logo-a16z.png.png";
import sponsor4 from "./media/sponsors_logo/logo-blockchange.svg.png";

const sections = [
    {
        id: 1,
        name: "Home",
        messages_count: 0,
        current: true
    },
    {
        id: 2,
        name: "About",
        messages_count: 0,
        current: false
    },
    {
        id: 3,
        name: "Contact",
        messages_count: 0,
        current: false
    },
    {
        id: 4,
        name: "Career",
        messages_count: 2,
        current: false
    }
];
  
const sponsors = [
    {
      id: 1,
      logo: sponsor1
    },
    {
      id: 2,
      logo: sponsor2
    },
    {
      id: 3,
      logo: sponsor3
    },
    {
      id: 4,
      logo: sponsor4
    }
]

class App extends React.Component{
    render(){
        return(
            <>
               <Header sections = {sections}/>
               <Main />
               <Footer sponsors = {sponsors}/>
            </>
        );
    }
}
  
export default App;