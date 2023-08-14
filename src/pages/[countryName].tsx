import React from 'react';

import Link from 'next/link';
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
      <div className="flex flex-col md:flex-row">
        <Link href="/">
          <img
            src={'/assets/images/prevdouble.png'}
            alt="back to home"
            className="fixed top-[50%]"
          />
        </Link>
        <img
          src={countryBg(countryName as string)}
          alt={countryName as string}
          className={`w-full md:w-[50%]`}
        />
        <div
          style={{
            background: `url(${cover.src})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
          }}
          className="text-black font-lato w-full h-[50vh] md:h-[100vh] px-10 md:px-20 flex flex-col justify-center items-end"
        >
          <h1 className="text-md md:text-3xl font-bold mt-20 md:mt-36">
            {`Thank you for contacting our`}
          </h1>
          {countryName && (
            <h1 className="text-md md:text-3xl font-bold">
              {`${capitalizeFirstLetter(countryName as string)} division`}
            </h1>
          )}
          <h1 className="text-sm md:text-2xl font-semibold mt-20">
            Please send enquiry to
          </h1>
          <h1 className="text-sm md:text-2xl font-semibold">{`e: contact_${countryName}@gfireasia.com`}</h1>
          {/* lg:px-80 px:20 text-center text-black text-[20px] md:text-[45px] font-normal flex flex-1 justify-center items-center font-Lato */}
        </div>
      </div>
    </div>
  );
}

export default About;
