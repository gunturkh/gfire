import React from 'react';

import Image from 'next/image';

import about1 from '../../public/assets/images/about1.png';
import about2 from '../../public/assets/images/about2.png';
import about3 from '../../public/assets/images/about3.png';
import about4 from '../../public/assets/images/about4.png';
import bg from '../../public/assets/images/aboutbg.png';
import structure from '../../public/assets/images/executive-structure.png';
import arrow from '../../public/assets/images/scroll-arrow.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div
        className="h-[200vh] flex flex-row flex-wrap md:py-32 md:px-16 px-4 py-4 "
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          // backgroundAttachment: 'fixed',
          // width: '100vw',
          height: '100%',
        }}
      >
        <div
          className="h-[500px] md:h-screen w-full flex flex-col items-center text-white"
          style={{
            // backgroundImage: `url(${overlay.src})`,
            // backgroundSize: 'cover',
            // width: '100vw',
            height: '100%',
          }}
        >
          <div className="h-[200px] md:h-screen">
            <div className="flex">
              <h1 className="text-center lg:text-[60px] font-semibold mt-8 lg:mt-32 text-[#062881]">
                Offering Solutions - Solving Problem
              </h1>
            </div>
            <div className="w-full flex justify-center mt-20 md:mt-[12rem] animate-bounce">
              <Image
                layout="fixed"
                src={arrow}
                alt="Scroll Arrow"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="bg-white/50 p-5 md:p-20 font-Yantramanav font-semibold text-[#02203D]">
            <div className="text-[12px] sm:text-[20px] lg:text-[40px] font-thin text-left ">
              <div className="flex flex-row flex-wrap sm:flex-nowrap w-full justify-center items-center">
                <img
                  src={about1.src}
                  alt="Image 1"
                  className={`w-[113px] h-[150px] lg:w-[551px] lg:h-[735px]`}
                />
                <div className="max-w-[50vw] p-4 lg:p-20  ">
                  <p>
                    Gfire Asia group network was established to support special
                    demands from our Clients, Partners, and Associates
                  </p>
                </div>
              </div>
            </div>
            <div className="text-[12px] sm:text-[20px] lg:text-[40px] font-thin text-left mt-8 ">
              <div className="flex flex-row flex-wrap sm:flex-nowrap w-full items-center">
                <div className="max-w-[50vw] p-4 lg:p-1  ">
                  <p>
                    We provide a secure, confidential, and professional
                    structure for all parties dependent on their specific
                    requirements and objectives
                  </p>
                </div>
                <img
                  src={about2.src}
                  alt="Image 2"
                  className={`w-[113px] h-[150px] lg:w-[542px] lg:h-[722px]`}
                />
              </div>
            </div>
            <div className="text-[12px] sm:text-[20px] lg:text-[40px] font-thin text-left mt-8 ">
              <div className="flex flex-row flex-wrap sm:flex-nowrap w-full justify-center items-center">
                <img
                  src={about3.src}
                  alt="Image 3"
                  className={`w-[113px] h-[150px] lg:w-[542px] lg:h-[722px]`}
                />
                <div className="max-w-[50vw] p-4 lg:p-20 ">
                  <p>
                    Our platform is flexible with no defined market sectors, via
                    four general operating divisions; Legal, Services, Projects,
                    Commercial
                  </p>
                </div>
              </div>
            </div>
            <div className="text-[12px] sm:text-[20px] lg:text-[40px] font-thin text-left mt-8 ">
              <div className="flex flex-row flex-wrap sm:flex-nowrap w-full justify-center items-center">
                <div className="max-w-[50vw] p-4 lg:p-20  ">
                  <p>
                    {' '}
                    Gfire&apos;s focus is to facilitate specialised packages
                    allowing Individuals, Families and Groups to achieve the
                    objectives required
                  </p>
                </div>
                <img
                  src={about4.src}
                  alt="Image 4"
                  className={`w-[113px] h-[150px] lg:w-[542px] lg:h-[722px]`}
                />
              </div>
            </div>
            <div className="mt-32">
              <h2 className="text-black font-Montserrat font-semibold text-xl md:text-3xl text-center">
                EXECUTIVE STRUCTURE
              </h2>
              <img
                src={structure.src}
                alt="Image 4"
                className={`w-full mt-10 md:mt-20`}
              />
            </div>

            <div className="mt-32">
              <h2 className="text-black font-Montserrat font-light text-xl md:text-3xl text-center">
                SERVICES
              </h2>
              <div className="px-10 md:px-48 mt-16">
                <ul className="list-disc font-Montserrat text-md md:text-2xl">
                  <li>
                    <span>
                      Regional Network:
                      <span className="font-normal">
                        {` Utilize advantage of our Gfire structure to facilitate
                        new client assets and development opportunities`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Investor Services:
                      <span className="font-normal">
                        {` Specialised projects via Gfire network support channels for in-country business development, based on client needs`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      3rd Party Agreements:
                      <span className="font-normal">
                        {` Coordinate contract service agreements for clients respresentation of 3rd party projects`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Multiple Currencies:
                      <span className="font-normal">
                        {` Provide international currency transactions and payment services for commercial remittances via Gfire network`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Foreign Trade Support:
                      <span className="font-normal">
                        {` Promote the import and export opportunities for client project development`}
                      </span>{' '}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-32">
              <h2 className="text-black font-Montserrat font-light text-xl md:text-3xl text-center">
                PROJECTS
              </h2>
              <div className="px-10 md:px-48 mt-16">
                <ul className="list-disc font-Montserrat text-md md:text-2xl">
                  <li>
                    <span>
                      EPC Sub-Contracts:
                      <span className="font-normal">
                        {` Offering administrative processes, mechanical engineering and BOP installation support`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Engineering Design:
                      <span className="font-normal">
                        {` Provide design for industrial, utility and manufacturing with QC control reviews for assembly design compliance and installation`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Remote Site Analysis:
                      <span className="font-normal">
                        {` On site testing and laboratory assessment for plant optimisation and maintenance for engine, turbine and plant operations`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      One-Off Fabrication:
                      <span className="font-normal">
                        {` Industrial and mechanical fabrication for heavy machining piping and sub-assembly fixture`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Filtration System:
                      <span className="font-normal">
                        {` Specialised ‘made to order’ filtration system solutions for liquid fuel, water treatment, petrochemical and cooling towers`}
                      </span>{' '}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-32">
              <h2 className="text-black font-Montserrat font-light text-xl md:text-3xl text-center">
                COMMERCIAL
              </h2>
              <div className="px-10 md:px-48 mt-16">
                <ul className="list-disc font-Montserrat text-md md:text-2xl">
                  <li>
                    <span>
                      Project Administration:
                      <span className="font-normal">
                        {` Manpower, supply, invoicing and administrative bookkeeping`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Global Procurement:
                      <span className="font-normal">
                        {` Out-sourced procurement of goods and services from international supply origins`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Logistic Delivery:
                      <span className="font-normal">
                        {` Coordination, control and documentation for trans-modal shipment of material within agreed project terms & conditions`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Supply Distribution:
                      <span className="font-normal">
                        {` OEM brand promotion, distribution & supply management under authorised license agreement`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Inventory Agreements:
                      <span className="font-normal">
                        {` Forward purchase agreements, contract management between OEM vendor & end users`}
                      </span>{' '}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-32">
              <h2 className="text-black font-Montserrat font-light text-xl md:text-3xl text-center">
                LEGAL
              </h2>
              <div className="px-10 md:px-48 mt-16">
                <ul className="list-disc font-Montserrat text-md md:text-2xl">
                  <li>
                    <span>
                      Company Services:
                      <span className="font-normal">
                        {` Create legal structure for client special projects including; company establishment, shareholder agreements, MOU/NDA/LOI for term of agreed contract services`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Directors Compliance:
                      <span className="font-normal">
                        {` Coordination of share composition among local and foreign shareholders or nominated representatives, in support of mutually agreed contract/s between recognised parties`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      License Permits:
                      <span className="font-normal">
                        {` Administer the application / registration for required company permits, based on agreed client contract`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Immigration Services:
                      <span className="font-normal">
                        {` Oversee all necessary company structured work permits &/or visa’s depending on special project scope`}
                      </span>{' '}
                    </span>
                  </li>
                  <li>
                    <span>
                      Financial Accounts:
                      <span className="font-normal">
                        {` Establish contract relevant banking facilities for respective special project requirements`}
                      </span>{' '}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
