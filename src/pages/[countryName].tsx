import React from 'react';

import { useRouter } from 'next/router';

import australia from '../../public/assets/images/australia.png';
import cover from '../../public/assets/images/gfire-cover.png';
import hongkong from '../../public/assets/images/hongkong.png';
import indonesia from '../../public/assets/images/indonesia.png';
import singapore from '../../public/assets/images/singaporenew.png';
import Navbar from '../navigation/Navbar';
import { capitalizeFirstLetter } from '../utils/functions';

function About() {
  const router = useRouter();
  const { countryName } = router.query;
  // const [selectedTab, setSelectedTab] = useState(0);
  const countryBg = (country: string) => {
    let bg;
    switch (country) {
      case 'singapore':
        bg = singapore.src;
        break;
      case 'australia':
        bg = australia.src;
        break;
      case 'indonesia':
        bg = indonesia.src;
        break;
      case 'hongkong':
        bg = hongkong.src;
        break;
      default:
        bg = singapore.src;
        break;
    }
    return bg;
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-row h-[100vh] ">
        <img
          src={countryBg(countryName as string)}
          alt={countryName as string}
          className={`h-full`}
        />
        <div
          style={{
            background: `url(${cover.src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            // width: '100vw',
            height: '100%',
          }}
        >
          <h1 className="lg:px-80 px:20 text-center text-black text-[20px] md:text-[45px] font-normal flex flex-1 justify-center items-center font-Lato">
            {`Thank you for contacting our ${capitalizeFirstLetter(
              countryName as string
            )} division`}
          </h1>
          <h1 className="lg:px-80 px:20 text-center text-black text-[20px] md:text-[45px] font-normal flex flex-1 justify-center items-center font-Lato">
            Please send enquiry to
          </h1>
          <h1 className="lg:px-80 px:20 text-center text-black text-[20px] md:text-[45px] font-normal flex flex-1 justify-center items-center font-Lato">
            {`e: contact_${countryName}@gfireasia.com`}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
