import React from 'react';
import { BiSolidUserPlus } from 'react-icons/bi';
import { BsExclude } from 'react-icons/bs';
import { CiBag1 } from 'react-icons/ci';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaPersonRunning, FaUsers } from 'react-icons/fa6';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { SiMagento } from 'react-icons/si';

const Card = () => {
    return (
        <div className=' mt-6'>
            <h1 className="font-medium text-xl">Overview</h1>
               <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 grid-cols-1 lg:gap-6 xl:gap-8 w-full">
        <div className=" rounded-lg h-[180px] flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded bg-primaryBg flex justify-center items-center">
            <FaUsers className=" text-whiteText w-12 h-12" />
          </div>
          <div className="mx-2 text-center">
            <p className="text-[18px] font-semibold text-[#193664] my-4">
              Total Customer
            </p>
            <h1 className="text-[34px] font-medium">$570</h1>
          </div>
        </div>
        <div className=" rounded h-[180px] flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded bg-primaryBg flex justify-center items-center">
            <FaUsers className="text-whiteText w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold text-primaryBg my-4">
              Total Employee
            </p>
            <h1 className="text-[34px] font-medium">23</h1>
          </div>
        </div>
        <div className="  rounded h-[180px] flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded bg-primaryBg flex justify-center items-center">
            <FaProjectDiagram className="text-whiteText w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold text-[#193664] my-4">
              Total Project
            </p>
            <h1 className="text-[34px] font-medium">95</h1>
          </div>
        </div>

        
        
      </div>

        </div>
    );
};

export default Card;