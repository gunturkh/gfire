import React from 'react';

import Image from 'next/image';
import { ImArrowRight2 } from 'react-icons/im';

import GFireLogo from '../../public/assets/images/logohd.png';

export const Footer = () => {
  return (
    <div className="w-full">
      <footer className=" flex flex-row flex-wrap p-10 bg-[#0D005B] text-base-content font-['Inter'] gap-40 justify-around ">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <Image
              src={GFireLogo}
              alt="logo"
              width={100}
              height={100}
              style={{ width: '100px', height: 'auto' }}
            />
          </div>
          <p className="text-white font-semibold text-lg mt-4"> Gfire Asia</p>
        </div>
        <div className="flex flex-col max-w-[600px] gap-8">
          <span className="font-semibold font-Manrope text-white text-lg">
            International Group Operations
          </span>
          <span className="font-thin font-Manrope text-white text-lg">
            Services, Projects, Commercial, Legal
          </span>
          <a className="link link-hover text-white font-thin text-sm">
            Email : david_paddon@gfireasia.com | davidpaddon61@gmail.com
          </a>
        </div>
        <div className="group flex items-start justify-center flex-row gap-4 text-white font-Manrope">
          <div className="inline-flex items-center">
            <ImArrowRight2
              className="transition group-hover:translate-x-0 -translate-x-8 duration-100 ease-in-out"
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <a
              href="mailto:group_admin@gfireasia.com"
              className="font-thin no-underline"
              target="_blank"
              rel="noreferrer"
            >
              group_admin@gfireasia.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
