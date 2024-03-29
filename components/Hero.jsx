import React from 'react';
import DesktopNavs from './DesktopNavs';
import HeroBox from './HeroBox';
import AdsSection from './AdsSection/Ads.jsx';
import BlogCard from './BlogCard/Card.jsx';
const Hero = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div className='hero-main relative bg-cover rounded-5  '>
          <DesktopNavs />
          <HeroBox />
        </div>
        <AdsSection />
        <div className='mt-5 text-white text-lg font-sans font-[700]'>
          <p>Latest Post</p>
        </div>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 my-4'>
            <BlogCard
              imageSrc='./assets/images/Rectangle 38.png'
              heading='The Impact of Technology on the Workplace: How Technology is Changing'
              userImage='./assets/images/Image.png'
              userName='Tracey Wilson'
              date='August 20, 2022'
            />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 my-4'>
            <BlogCard
              imageSrc='./assets/images/CardImages/Rectangle 38.png'
              heading='The Impact of Technology on the Workplace: How Technology is Changing'
              userImage='./assets/images/CardImages/u1.png'
              userName='Jason Francisco'
              date='August 20, 2022'
            />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 my-4'>
            <BlogCard
              imageSrc='./assets/images/CardImages/bg1.png'
              heading='The Impact of Technology on the Workplace: How Technology is Changing'
              userImage='./assets/images/CardImages/u2.png'
              userName='Elizabeth Slavin'
              date='August 20, 2022'
            />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 my-4'>
            <BlogCard
              imageSrc='./assets/images/Rectangle 38.png'
              heading='The Impact of Technology on the Workplace: How Technology is Changing'
              userImage='./assets/images/Image.png'
              userName='Tracey Wilson'
              date='August 20, 2022'
            />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 my-4'>
            <BlogCard
              imageSrc='./assets/images/CardImages/Rectangle 38.png'
              heading='The Impact of Technology on the Workplace: How Technology is Changing'
              userImage='./assets/images/CardImages/u1.png'
              userName='Jason Francisco'
              date='August 20, 2022'
            />
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 my-4'>
            <BlogCard
              imageSrc='./assets/images/CardImages/bg1.png'
              heading='The Impact of Technology on the Workplace: How Technology is Changing'
              userImage='./assets/images/CardImages/u2.png'
              userName='Elizabeth Slavin'
              date='August 20, 2022'
            />
          </div>
        </div>
        <div className='text-center'>
          <button
            className='bg-transparent rounded-lg py-2 px-4'
            style={{ color: '#696A75', border: '1px solid #272938' }}
          >
            View All Post
          </button>
        </div>
        <AdsSection />
      </div>
    </>
  );
};

export default Hero;
