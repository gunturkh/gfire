import React from 'react';

import { Slide } from 'react-slideshow-image';

import GIA from '../../public/assets/images/GIA.png';
import GNM from '../../public/assets/images/GNM.png';
import GSG from '../../public/assets/images/GSG.png';
import HK1 from '../../public/assets/images/HK1.png';
import PERTH1 from '../../public/assets/images/PERTH1.png';
import SGP1 from '../../public/assets/images/SGP1.png';
import Navbar from '../navigation/Navbar';

function Companies() {
  return (
    <>
      <Navbar />
      <Slide>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${GNM.src})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${GSG.src})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${HK1.src})` }}>
            <span>Slide 3</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${SGP1.src})` }}>
            <span>Slide 4</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${PERTH1.src})` }}>
            <span>Slide 5</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${GIA.src})` }}>
            <span>Slide 6</span>
          </div>
        </div>
      </Slide>
    </>
  );
}

export default Companies;
