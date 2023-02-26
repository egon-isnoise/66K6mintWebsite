import React from 'react';
import { useState, createContext } from 'react';
import MainHeader from '../components/header/mainHeader';
import Mint from '../components/mint/mint';
import About from '../components/about/about';
import Team from '../components/team/team';
import MainFooter from '../components/footer/mainFooter';

export const ThemeContext = createContext(null);


function WhitePaper() {
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
            <About/>
            <MainFooter/>
          </div>
      </div>
      </ThemeContext.Provider>
    );

}

export default WhitePaper;
