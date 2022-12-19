import React from 'react';
import { useState } from 'react';
import HeaderRight from './components/header/headerMint';
import HeaderLeft from './components/header/headerSocial';
import Mint from './components/mint/mint';
import About from './components/about/about';
import Team from './components/team/team';
import { ReactP5Wrapper } from "react-p5-wrapper";

function sketch(p5) {
  let scale = 30;
  let res = 0.011;
  let nPoints = 350;
  let radius = 460;
  let nRings = 40;
  let move = 0.000035;
  let light1, light2, light3;

  let w = p5.windowWidth * 0.55;
  let h = p5.windowHeight;

  p5.setup = () => {
    p5.createCanvas(w, h);
    p5.colorMode(p5.HSL)
  }

  p5.draw = () => {
    p5.background(67, 22, 92);
    p5.noFill();
    let ska = 0;
    
    for(let r = 0; r < radius; r += radius/nRings){
      p5.beginShape();
      p5.stroke(8, 71 -light1, 10);
      p5.strokeWeight(2);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            var x = w/2 + r *p5.cos(a);
            var y = h/2 + r *p5.sin(a);

            var n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale, scale);
            light1 = n *2;
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);
      p5.beginShape();
      p5.stroke(8, 71 +light2, 64);
      p5.strokeWeight(1);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = w/2 + r *p5.cos(a);
            y = h/2 + r *p5.sin(a);

            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+5, scale-5);
            light2 = n *3.5;
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);

      p5.beginShape();
      p5.stroke(58, 71 +light3, 74);
      p5.strokeWeight(0.5);
        for(let a = 0; a <= p5.TAU; a += p5.TAU/nPoints){
            x = w/2 + r *p5.cos(a);
            y = h/2 + r *p5.sin(a);

            n = p5.map(p5.noise(x *res, y *res), 0, 1, -scale+10, scale-10);
            light3 = n *5;
            p5.curveVertex(x +n, y +n);
        }
      p5.endShape(p5.CLOSE);
    }

    if(res <= -0.02 || res >= 0.022){move *=-1};
    res += move;
    console.log(res);

  };

  p5.mouseMoved = function() {
    res = p5.map(p5.mouseX, 0.011, p5.windowWidth, 0, 0.022);
  };

  p5.windowResized = function() {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
}

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      {/* <div className='main'> */}
        <div className='sideLeft'>
          <HeaderLeft/>
          <About/>
          <Team/>
        </div>
        <div className='center'>
         <ReactP5Wrapper sketch={sketch}/>
        </div>
        <div className='sideRight'>
          <HeaderRight accounts={accounts} setAccounts={setAccounts}/>
          <Mint accounts={accounts} setAccounts={setAccounts}/>
        </div>

      {/* </div> */}
    </div>
  );
}

export default App;
