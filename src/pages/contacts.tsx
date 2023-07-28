import React from 'react';

import contacts from '../../public/assets/images/contacts.png';
import contactsbg from '../../public/assets/images/contactsbg.png';
import { Footer } from '../footer/MainFooter';
import Navbar from '../navigation/Navbar';

function Contacts() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          // position: 'relative',
          // top: '79px',
          backgroundImage: `url(${contactsbg.src})`,
          // backgroundSize: 'cover',
          width: '100%',
          // height: '100vh',
          // backgroundAttachment: 'fixed',
        }}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col md:flex-row w-full">
          <img src={contacts.src} alt="contacts" />
          <div className="flex flex-row w-full justify-center mt-24 py-20 ">
            <div className="flex flex-col text-left w-full px-20 md:px-36">
              <h1 className="font-['Montserrat'] text-xl md:text-3xl text-[#062881] font-semibold">
                Get in touch!
              </h1>
              <h2 className="font-['Montserrat'] text-md md:text-xl text-[#81060D] font-normal mt-6">
                Our professional team would love to hear from you!
              </h2>
              <div className="flex flex-col justify-start text-[#062881] text-md md:text-xl ml-[-5px] md:ml-[-10px] mt-36">
                <div className="flex flex-row items-center">
                  <a
                    href="https://www.linkedin.com/in/gwood-asia-92493787/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={'/assets/images/linkedin.svg'}
                      alt="LinkedIn"
                      className="w-[40px] h-[40px]"
                    />
                  </a>
                  <div className="ml-8">Join our linkedin!</div>
                </div>
                <div className="flex flex-row items-center">
                  <a
                    href="https://www.facebook.com/gwood.asia.9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={'/assets/images/fb.svg'}
                      alt="Facebook"
                      className="w-[40px] h-[40px]"
                    />
                  </a>
                  <div className="ml-8">
                    Follow our Official Facebook account
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <a
                    href="mailto:commercial_admin@gwoodasia.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={'/assets/images/email.svg'}
                      alt="Email"
                      className="w-[40px] h-[40px]"
                    />
                  </a>
                  <div className="ml-8">
                    Send email to: operations_admin@gfireasia.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contacts;
