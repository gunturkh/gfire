import React from 'react';

import Image from 'next/image';

import bg from '../../public/assets/images/aboutbg.png';
import gwoodGfireBg from '../../public/assets/images/Backgroud 1.png';
import batamLogo from '../../public/assets/images/batam investment center.png';
import batamImage from '../../public/assets/images/batam-investment-center image.png';
import berkahImage from '../../public/assets/images/berkah hita djaya image.png';
import berkahLogo from '../../public/assets/images/berkah hita djaya.png';
import berlianImage from '../../public/assets/images/berlian jet alpha image.png';
import berlianLogo from '../../public/assets/images/berlian jet alpha.png';
import britmindoImage from '../../public/assets/images/britmindo image.png';
import britmindoLogo from '../../public/assets/images/britmindo.png';
import structure from '../../public/assets/images/EXECUTIVE STRUCTURE TABLE 0.1.png';
import gfireLogo from '../../public/assets/images/gfire.png';
import gwoodLogo from '../../public/assets/images/gwood.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col"
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-16 md:py-32">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[60px] font-semibold text-[#062881] mb-8 md:mb-16">
            Offering Solutions - Solving Problems
          </h1>
          <div className="max-w-5xl text-center text-sm md:text-base lg:text-lg text-[#02203D] leading-relaxed">
            <p>
              Gfire Asia group network was established to support special
              demands from our Clients, Partners, and Associates. We provide a
              secure, confidential, and professional structure for all parties
              dependent on their specific requirements and objectives. Our
              platform is flexible with no defined market sectors, via four
              general operating divisions: Legal, Services, Projects,
              Commercial. Gfire&apos;s focus is to facilitate specialised
              packages allowing Individuals, Families and Groups to achieve the
              objectives required.
            </p>
          </div>
        </div>

        {/* Companies Showcase Section */}
        <div className="bg-white/70 py-16 md:py-24 px-4 md:px-16">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
            {/* Batam Investment Centre - Logo left, Image right */}
            <div className="flex flex-col md:flex-row items-center justify-end gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <div className="relative w-[300px] h-[120px] md:w-[450px] md:h-[180px] mb-4">
                  <Image
                    src={batamLogo}
                    alt="Batam Investment Centre Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black text-center">
                  Batam Investment Centre
                </h3>
                <p className="text-sm text-black font-bold text-center">
                  Operating divisions of Gfire Nusantara Mandiri
                </p>
              </div>
              <div className="relative w-[280px] md:w-[350px] h-[350px] md:h-[450px]">
                <Image
                  src={batamImage}
                  alt="Batam Investment Centre"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Berlian Jet Alpha - Image left, Logo right */}
            <div className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-16">
              <div className="relative w-[280px] md:w-[350px] h-[350px] md:h-[450px]">
                <Image
                  src={berlianImage}
                  alt="Berlian Jet Alpha"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-[300px] h-[120px] md:w-[450px] md:h-[180px] mb-4">
                  <Image
                    src={berlianLogo}
                    alt="Berlian Jet Alpha Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black text-center">
                  Berlian Jet Alpha
                </h3>
              </div>
            </div>

            {/* Britmindo Group - Logo left, Image right */}
            <div className="flex flex-col md:flex-row items-center justify-end gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <div className="relative w-[300px] h-[120px] md:w-[450px] md:h-[180px] mb-4">
                  <Image
                    src={britmindoLogo}
                    alt="Britmindo Group Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black text-center">
                  Britmindo Group
                </h3>
              </div>
              <div className="relative w-[280px] md:w-[350px] h-[350px] md:h-[450px]">
                <Image
                  src={britmindoImage}
                  alt="Britmindo Group"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Berkah Hita Djaya - Image left, Logo right */}
            <div className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-16">
              <div className="relative w-[280px] md:w-[350px] h-[350px] md:h-[450px]">
                <Image
                  src={berkahImage}
                  alt="Berkah Hita Djaya"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-[300px] h-[120px] md:w-[450px] md:h-[180px] mb-4">
                  <Image
                    src={berkahLogo}
                    alt="Berkah Hita Djaya Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black text-center">
                  Berkah Hita Djaya
                </h3>
              </div>
            </div>

            {/* Gwood and Gfire Logos - Bottom section */}
            <div className="relative py-16 px-8 rounded-lg overflow-hidden">
              <Image
                src={gwoodGfireBg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />
              <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                {/* Gwood Asia Group */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] mb-4">
                    <Image
                      src={gwoodLogo}
                      alt="Gwood Asia Group"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black text-center">
                    Gwood Asia Group
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    www.gwoodasia.com
                  </p>
                </div>

                {/* Gfire Asia Group */}
                <div className="flex flex-col items-center">
                  <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] mb-4">
                    <Image
                      src={gfireLogo}
                      alt="Gfire Asia Group"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-black text-center">
                    Gfire Asia Group
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    www.gfireasia.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Structure Section */}
        <div className="py-16 md:py-24 px-4 md:px-16 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-black font-Montserrat font-semibold text-2xl md:text-4xl text-center mb-12 md:mb-16">
              EXECUTIVE STRUCTURE
            </h2>
            <div className="flex justify-center">
              <Image
                src={structure}
                alt="Executive Structure"
                className="w-full max-w-4xl"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 md:py-24 px-4 md:px-16 bg-gradient-to-br from-gray-50 to-white opacity-90">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-black font-Montserrat font-semibold text-2xl md:text-4xl text-center mb-12">
              SERVICES
            </h2>
            <ul className="space-y-4 text-sm md:text-base lg:text-lg text-black">
              <li>
                <span className="font-semibold">Regional Network:</span>{' '}
                <span>
                  Utilize advantage of our Gfire structure to facilitate new
                  client assets and development opportunities
                </span>
              </li>
              <li>
                <span className="font-semibold">Investor Services:</span>{' '}
                <span>
                  Specialised projects via Gfire network support channels for
                  in-country business development, based on client needs
                </span>
              </li>
              <li>
                <span className="font-semibold">3rd Party Agreements:</span>{' '}
                <span>
                  Coordinate contract service agreements for clients
                  representation of 3rd party projects
                </span>
              </li>
              <li>
                <span className="font-semibold">Multiple Currencies:</span>{' '}
                <span>
                  Provide international currency transactions and payment
                  services for commercial remittances via Gfire network
                </span>
              </li>
              <li>
                <span className="font-semibold">Foreign Trade Support:</span>{' '}
                <span>
                  Promote the import and export opportunities for client project
                  development
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-16 md:py-24 px-4 md:px-16 bg-white/70">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-black font-Montserrat font-semibold text-2xl md:text-4xl text-center mb-12">
              PROJECTS
            </h2>
            <ul className="space-y-4 text-sm md:text-base lg:text-lg text-black">
              <li>
                <span className="font-semibold">EPC Sub-Contracts:</span>{' '}
                <span>
                  Offering administrative processes, mechanical engineering and
                  BOP installation support
                </span>
              </li>
              <li>
                <span className="font-semibold">Engineering Design:</span>{' '}
                <span>
                  Provide design for industrial, utility and manufacturing with
                  QC control reviews for assembly design compliance and
                  installation
                </span>
              </li>
              <li>
                <span className="font-semibold">Remote Site Analysis:</span>{' '}
                <span>
                  On site testing and laboratory assessment for plant
                  optimisation and maintenance for engine, turbine and plant
                  operations
                </span>
              </li>
              <li>
                <span className="font-semibold">One-Off Fabrication:</span>{' '}
                <span>
                  Industrial and mechanical fabrication for heavy machining
                  piping and sub-assembly fixture
                </span>
              </li>
              <li>
                <span className="font-semibold">Filtration System:</span>{' '}
                <span>
                  Specialised &apos;made to order&apos; filtration system
                  solutions for liquid fuel, water treatment, petrochemical and
                  cooling towers
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Commercial Section */}
        <div className="py-16 md:py-24 px-4 md:px-16 bg-gradient-to-br from-gray-50 to-white opacity-90">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-black font-Montserrat font-semibold text-2xl md:text-4xl text-center mb-12">
              COMMERCIAL
            </h2>
            <ul className="space-y-4 text-sm md:text-base lg:text-lg text-black">
              <li>
                <span className="font-semibold">Project Administration:</span>{' '}
                <span>
                  Manpower, supply, invoicing and administrative bookkeeping
                </span>
              </li>
              <li>
                <span className="font-semibold">Global Procurement:</span>{' '}
                <span>
                  Out-sourced procurement of goods and services from
                  international supply origins
                </span>
              </li>
              <li>
                <span className="font-semibold">Logistic Delivery:</span>{' '}
                <span>
                  Coordination, control and documentation for trans-modal
                  shipment of material within agreed project terms & conditions
                </span>
              </li>
              <li>
                <span className="font-semibold">Supply Distribution:</span>{' '}
                <span>
                  OEM brand promotion, distribution & supply management under
                  authorised license agreement
                </span>
              </li>
              <li>
                <span className="font-semibold">Inventory Agreements:</span>{' '}
                <span>
                  Forward purchase agreements, contract management between OEM
                  vendor & end users
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Section */}
        <div className="py-16 md:py-24 px-4 md:px-16 bg-white/70">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-black font-Montserrat font-semibold text-2xl md:text-4xl text-center mb-12">
              LEGAL
            </h2>
            <ul className="space-y-4 text-sm md:text-base lg:text-lg text-black">
              <li>
                <span className="font-semibold">Company Services:</span>{' '}
                <span>
                  Create legal structure for client special projects including:
                  company establishment, shareholder agreements, MOU/NDA/LOI for
                  term of agreed contract services
                </span>
              </li>
              <li>
                <span className="font-semibold">Directors Compliance:</span>{' '}
                <span>
                  Coordination of share composition among local and foreign
                  shareholders or nominated representatives, in support of
                  mutually agreed contract/s between recognised parties
                </span>
              </li>
              <li>
                <span className="font-semibold">License Permits:</span>{' '}
                <span>
                  Administer the application / registration for required company
                  permits, based on agreed client contract
                </span>
              </li>
              <li>
                <span className="font-semibold">Immigration Services:</span>{' '}
                <span>
                  Oversee all necessary company structured work permits &/or
                  visa&apos;s depending on special project scope
                </span>
              </li>
              <li>
                <span className="font-semibold">Financial Accounts:</span>{' '}
                <span>
                  Establish contract relevant banking facilities for respective
                  special project requirements
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
