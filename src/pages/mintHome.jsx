import React from 'react';
import { useState, createContext } from 'react';
import { ReactP5Wrapper} from "react-p5-wrapper";
import MainHeader from '../components/header/mainHeader';
import Mint from '../components/mint/mint';
import About from '../components/about/about';
import Team from '../components/team/team';
import MainFooter from '../components/footer/mainFooter';
import VideoCarousel from '../components/videos/videoCarousel';
import RoadWhite from '../components/about/roadmap&whitepaper';

export const ThemeContext = createContext(null);


function Home() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1020;

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     // subscribe to window resize event "onComponentDidMount"
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       // unsubscribe "onComponentDestroy"
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

  const [accounts, setAccounts] = useState([]);
  const [theme, setTheme] = useState("light");

    return (
      <ThemeContext.Provider value ={{theme, setTheme}}>
        <div className="App" id={theme}>
        <div className='mainHeader'>
              <MainHeader setAccounts={setAccounts} theme={theme} setTheme={setTheme}/>
            </div>
          <div className="center">
            <Mint accounts={accounts}/>
            <About/>
            <VideoCarousel/>
            <RoadWhite/>
            <Team/> 
            <MainFooter/>
          </div>
      </div>
      </ThemeContext.Provider>
    );

}

export default Home;
