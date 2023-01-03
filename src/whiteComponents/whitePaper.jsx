import React from 'react';
import { useState, createContext } from 'react';
import DarkMode from '../homeComponents/header/darkMode';
import HeaderSocial from '../homeComponents/header/headerSocial';
import { ReactP5Wrapper} from "react-p5-wrapper";

export const ThemeContext = createContext(null);


function sketch(p5) {
  let scale = 30;
  let res = 0.016;
  let nPoints = 350;
  let nRings = 40;
  let move = 0.000035;
  let light1;
  let w = p5.windowWidth * 0.5;
  let h = p5.windowHeight;
  let radius;

  p5.setup = () => {
    p5.createCanvas(w, h);
    p5.colorMode(p5.HSL);
    radius = w * 0.45;
  }

  p5.draw = () => {
    p5.clear();

    p5.noFill();
    var H1 = p5.map(res, 0, 0.03, 170, 230);
    var H2 = p5.map(res, 0, 0.03, 130, 190);
    var H3 = p5.map(res, 0, 0.03, 230, 235);
    var S = p5.map(res, 0, 0.03, 30, 50);
    var L = p5.map(res, 0, 0.03, 10, 40);
    
    for(let r = 0; r < radius; r += radius/nRings){
      p5.beginShape();
      p5.stroke(H1,60,40);
      p5.strokeWeight(3);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            var x = w/2 + r *p5.cos(a);
            var y = h/2 + r *p5.sin(a);
            var n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale, scale);
            light1 = n *2;
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);

      p5.beginShape();
      p5.stroke(67, 22, 92-light1);
      p5.strokeWeight(1.5);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = w/2 + r *p5.cos(a);
            y = h/2 + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+2.5, scale-2.5);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);
      
      p5.beginShape();
      p5.stroke(H2 +light1,S,L);
      p5.strokeWeight(2);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = w/2 + r *p5.cos(a);
            y = h/2 + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+5, scale-5);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);

      p5.beginShape();
      p5.stroke(H3 +light1,S,L);
      p5.strokeWeight(1.5);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = w/2 + r *p5.cos(a);
            y = h/2 + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+15, scale-15);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);

      p5.beginShape();
      p5.stroke(H1,70,100);
      p5.strokeWeight(0.5);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = w/2 + r *p5.cos(a);
            y = h/2 + r *p5.sin(a);
            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+20, scale-20);
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);
    }

    if(res <= 0.004 || res >= 0.022){move *=-1};
    res += move;
  };

  p5.mouseMoved = function() {
    res = p5.map(p5.mouseX, -400, p5.windowWidth, 0.005, 0.022);
  };

  p5.windowResized = function() {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}

function WhitePaper() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value ={{theme, setTheme}}>
      <div className="App" id={theme}>
        <div className='sideLeft'>
          <HeaderSocial/>
        </div>
        <div className='center'>
         <ReactP5Wrapper sketch={sketch}/>
        </div>
        <div className='sideRight'>
          <div className="headerR">
            <DarkMode theme={theme} setTheme={setTheme}/>
          </div>
        </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default WhitePaper;