import React from 'react';
import { IoLogoFacebook } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F]">
      <div className="container mx-auto text-white px-5 pt-15 pb-4">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold">
            Keen
            <span className="font-normal">Keeper</span>
          </h2>
          <p className="text-[#ffffffaa] text-center">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p className="text-xl">Social Links</p>
          <div className="flex justify-center items-center gap-2">
            <a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              className="p-1.5 flex justify-center items-center bg-white rounded-full"
            >
              <TbBrandInstagramFilled className="text-black text-2xl" />
            </a>
            <a
              href="https://web.facebook.com/?_rdc=1&_rdr#"
              target="_blank"
              className="p-1.5 flex justify-center items-center bg-white rounded-full"
            >
              <IoLogoFacebook className="text-black text-2xl" />
            </a>
            <a
              href="https://x.com/"
              target='_blank'
              className="p-1.5 flex justify-center items-center bg-white rounded-full"
            >
              <RiTwitterXLine className="text-black text-2xl" />
            </a>
          </div>
        </div>
        <hr className="my-5 text-[#1A8862]" />
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <p className='order-2 md:order-0 mt-2 md:mt-0'>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex items-center gap-4 order-1 md:order-0">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;