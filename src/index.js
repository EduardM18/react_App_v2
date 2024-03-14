import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import sponsor1 from "./media/sponsors_logo/logo-ycombinator.svg.png";
import sponsor2 from "./media/sponsors_logo/logo-coinbase.svg.png";
import sponsor3 from "./media/sponsors_logo/logo-a16z.png.png";
import sponsor4 from "./media/sponsors_logo/logo-blockchange.svg.png";

const sections = [
  {
    id: 1,
    name: "Home",
    messages_count: 0
  },
  {
    id: 2,
    name: "About",
    messages_count: 0
  },
  {
    id: 3,
    name: "Contact",
    messages_count: 0
  },
  {
    id: 4,
    name: "Career",
    messages_count: 2
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header sections = {sections}/>
    <Main />
    <Footer sponsors = {sponsors}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
