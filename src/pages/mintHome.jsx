import React from 'react';
import { useState, createContext } from 'react';
import { ReactP5Wrapper} from "react-p5-wrapper";
import MainHeader from '../homeComponents/header/mainHeader';
import Mint from '../homeComponents/mint/mint';
import About from '../homeComponents/about/about';
import Team from '../homeComponents/team/team';
import MainFooter from '../homeComponents/footer/mainFooter';

export const ThemeContext = createContext(null);

function sketchL(p5) {
  let scale = 30;
  let res = 0.016;
  let nPoints = 350;
  let move = 0.000035;
  let light1;
  let w = p5.windowWidth * 0.25;
  let h = p5.windowHeight;
  let radius1, radius2;
  let w1, h1, w2, h2;

  p5.setup = () => {
    p5.createCanvas(w, h);
    p5.colorMode(p5.HSL);
    radius1 = w * 0.85;
    radius2 = w * 0.25;

    w1 = w *0.1;
    h1 = h * 0.8;
    w2 = w *0.7;
    h2 = h * 0.2;
  }

  p5.draw = () => {
    p5.clear();

    p5.noFill();
    var H1 = p5.map(res, 0, 0.03, 170, 230);
    var H2 = p5.map(res, 0, 0.03, 130, 190);
    var H3 = p5.map(res, 0, 0.03, 230, 235);
    var S = p5.map(res, 0, 0.03, 30, 50);
    var L = p5.map(res, 0, 0.03, 0, 40);
    
    p5.waterBall(w1, h1, radius1, 23, H1, H2, H3, S, L);
    p5.waterBall(w2, h2, radius2, 10, H1, H2, H3, S, L);

    if(res <= 0.004 || res >= 0.022){move *=-1};
    res += move;
  };

  p5.waterBall = function(X, Y, RAD, RINGS, H1, H2, H3, S, L){
    for(let r = 0; r < RAD; r += RAD/RINGS){
      p5.beginShape();
      p5.stroke(H1,60,40);
      p5.strokeWeight(3);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            var x = X + r *p5.cos(a);
            var y = Y + r *p5.sin(a);
            var n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale, scale);
            light1 = n *2;
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);

      p5.beginShape();
      p5.stroke(67, 22, 92-light1);
      p5.strokeWeight(1.5);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = X + r *p5.cos(a);
            y = Y + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+2.5, scale-2.5);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);
      
      p5.beginShape();
      p5.stroke(H2 +light1,S,L);
      p5.strokeWeight(2);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = X + r *p5.cos(a);
            y = Y + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+5, scale-5);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);

      p5.beginShape();
      p5.stroke(H3 +light1,S,L);
      p5.strokeWeight(1.5);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = X + r *p5.cos(a);
            y = Y + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+15, scale-15);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);

      p5.beginShape();
      p5.stroke(H1,70,100);
      p5.strokeWeight(0.5);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = X + r *p5.cos(a);
            y = Y + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+20, scale-20);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);
    }

  }

  p5.windowResized = function() {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}

function sketchR(p5) {
  let scale = 30;
  let res = 0.016;
  let nPoints = 350;
  let move = 0.000035;
  let light1;
  let w = p5.windowWidth * 0.25;
  let h = p5.windowHeight;
  let rads = [];
  let ws = [];
  let hs = [];

  p5.setup = () => {
    p5.createCanvas(w, h);
    p5.colorMode(p5.HSL);

    rads = [
      w * 0.2,
      w * 0.25,
      w * 0.45,
    ]

    ws = [
      w/3.7,
      w/2.5,
      w/1.3,
    ]

    hs = [
      h/1.7,
      h/1.2,
      h/4,
    ]
  }

  p5.draw = () => {
    p5.clear();

    p5.noFill();
    var H1 = p5.map(res, 0, 0.03, 170, 230);
    var H2 = p5.map(res, 0, 0.03, 130, 190);
    var H3 = p5.map(res, 0, 0.03, 230, 235);
    var S = p5.map(res, 0, 0.03, 30, 50);
    var L = p5.map(res, 0, 0.03, 0, 40);
    
    p5.waterBall(ws[0], hs[0], rads[0], 7, H1, H2, H3, S, L);
    p5.waterBall(ws[1], hs[1], rads[1], 9, H1, H2, H3, S, L);
    p5.waterBall(ws[2], hs[2], rads[2], 18, H1, H2, H3, S, L);

    if(res <= 0.004 || res >= 0.022){move *=-1};
    res += move;
  };

  p5.waterBall = function(X, Y, RAD, RINGS, H1, H2, H3, S, L){
    for(let r = 0; r < RAD; r += RAD/RINGS){
      p5.beginShape();
      p5.stroke(H1,60,40);
      p5.strokeWeight(3);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            var x = X + r *p5.cos(a);
            var y = Y + r *p5.sin(a);
            var n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale, scale);
            light1 = n *2;
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);

      p5.beginShape();
      p5.stroke(67, 22, 92-light1);
      p5.strokeWeight(1.5);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = X + r *p5.cos(a);
            y = Y + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+2.5, scale-2.5);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);
      
      p5.beginShape();
      p5.stroke(H2 +light1,S,L);
      p5.strokeWeight(2);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = X + r *p5.cos(a);
            y = Y + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+5, scale-5);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);

      p5.beginShape();
      p5.stroke(H3 +light1,S,L);
      p5.strokeWeight(1.5);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = X + r *p5.cos(a);
            y = Y + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+15, scale-15);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);

      p5.beginShape();
      p5.stroke(H1,70,100);
      p5.strokeWeight(0.5);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = X + r *p5.cos(a);
            y = Y + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+20, scale-20);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);
    }

  }

  p5.windowResized = function() {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}


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
  const [theme, setTheme] = useState("dark");

  if (width > breakpoint) {
    return (
      <ThemeContext.Provider value ={{theme, setTheme}}>
        <div className="App" id={theme}>
          <div className="sideLeft">
            <div className="p5Left">
                <ReactP5Wrapper sketch={sketchL}/>
            </div>
          </div>
          <div className="center">
            <div className='mainHeader'>
              <MainHeader setAccounts={setAccounts} theme={theme} setTheme={setTheme}/>
            </div>
            <Mint accounts={accounts}/> 
            <About/>
            <Team/>
            <MainFooter/>
          </div>
          <div className="sideRight">
            <div className="p5Right">
                <ReactP5Wrapper sketch={sketchR}/>
            </div>
          </div>
      </div>
      </ThemeContext.Provider>
    );
  } else {
    return (
      <ThemeContext.Provider value ={{theme, setTheme}}>
        <div className="App" id={theme}>
          <div className="center">
            <div className='mainHeader'>
              <MainHeader setAccounts={setAccounts} theme={theme} setTheme={setTheme}/>
            </div>
            <Mint accounts={accounts}/>
            <About/>
            <Team/> 
            <MainFooter/>
          </div>
      </div>
      </ThemeContext.Provider>
    );
  }
}

export default Home;
