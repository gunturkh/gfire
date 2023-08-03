/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Slide } from 'react-slideshow-image';

import GIA from '../../public/assets/images/GIA.png';
import GNM from '../../public/assets/images/GNM.png';
import GSG from '../../public/assets/images/GSG.png';
import HK1 from '../../public/assets/images/HK1.png';
import Next from '../../public/assets/images/next.png';
import PERTH1 from '../../public/assets/images/PERTH1.png';
import Prev from '../../public/assets/images/prev.png';
import SGP1 from '../../public/assets/images/SGP1.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

const properties = {
  autoplay: false,
  easing: 'ease',
  nextArrow: <img src={Next.src} className="px-4 h-[30px] md:h-[80px]" />,
  prevArrow: <img src={Prev.src} className="px-4 h-[30px] md:h-[80px]" />,
  transitionDuration: 500,
};

function Companies() {
  return (
    <>
      <Navbar />
      <Slide {...properties}>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 6%, rgba(255, 255, 255, 0) 20%), url(${GNM.src})`,
            }}
          >
            <div className="font-['Montserrat'] flex flex-col justify-start text-white text-[1rem] md:text-[2rem] py-8 px-8 md:px-16">
              <p>PT Gfire Nusantara Mandiri</p>
              <p>{'(Jakarta)'}</p>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 6%, rgba(255, 255, 255, 0) 20%), url(${GSG.src})`,
            }}
          >
            <div className="font-['Montserrat'] flex flex-col justify-start text-white text-[1rem] md:text-[2rem] py-8 px-8 md:px-16">
              <p>PT Gfire Service Gautama</p>
              <p>{'(Batam)'}</p>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 6%, rgba(255, 255, 255, 0) 20%), url(${HK1.src})`,
            }}
          >
            <div className="font-['Montserrat'] flex flex-col justify-start text-white text-[1rem] md:text-[2rem] py-8 px-8 md:px-16">
              <p>PT Gfire Asia Limited</p>
              <p>{'(Hong Kong)'}</p>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 6%, rgba(255, 255, 255, 0) 20%), url(${SGP1.src})`,
            }}
          >
            <div className="font-['Montserrat'] flex flex-col justify-start text-white text-[1rem] md:text-[2rem] py-8 px-8 md:px-16">
              <p>PT Gfire Asia Projects Pte Ltd</p>
              <p>{'(Singapore)'}</p>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 6%, rgba(255, 255, 255, 0) 20%), url(${PERTH1.src})`,
            }}
          >
            <div className="font-['Montserrat'] flex flex-col justify-start text-white text-[1rem] md:text-[2rem] py-8 px-8 md:px-16">
              <p>Goodwood Communicators Pty Ltd</p>
              <p>{'(Australia)'}</p>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, rgba(255, 255, 255, 0)), url(${GIA.src})`,
            }}
          >
            <div className="font-['Montserrat'] flex flex-col justify-start text-white text-[1rem] md:text-[2rem] py-8 px-8 md:px-16">
              <p>Gfire Independent Archipelago</p>
              <p>{'(Singapore)'}</p>
            </div>
          </div>
        </div>
      </Slide>
      <Footer />
    </>
  );
}

export default Companies;
