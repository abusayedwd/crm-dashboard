import React from 'react';
import { BiSolidUserPlus } from 'react-icons/bi';
import { BsExclude } from 'react-icons/bs';
import { CiBag1 } from 'react-icons/ci';
import { FaClosedCaptioning, FaProjectDiagram } from 'react-icons/fa';
import { FaPersonRunning, FaUser, FaUsers } from 'react-icons/fa6';
import { HiCurrencyDollar, HiOutlineCurrencyDollar } from 'react-icons/hi';
import { SiMagento } from 'react-icons/si';
import { useTotalReniviewQuery } from '../../redux/features/totalRevinew/totalrevinew';
import { PiCurrencyDollarThin } from 'react-icons/pi';

const Card = () => {

const {data: total} = useTotalReniviewQuery()
console.log(total)

    return (
        <div className=' mt-12'>
          
               <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-5 gap-6 grid-cols-1 lg:gap-6 xl:gap-8 w-full">
        <div className=" rounded-lg h-[150px] flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded  flex justify-center items-center">
            <FaUsers className=" text-[#00bfff] w-12 h-12" />
          </div>
          <div className="mx-2 text-center">
            <p className="text-[18px] font-semibold  my-4">
              Total Customer
            </p>
            <h1 className="text-[34px] font-medium">{total?.data?.customerLength}</h1>
          </div>
        </div>
        <div className=" rounded h-[150px] flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded  flex justify-center items-center">
            <FaUsers className="text-[#00bfff] w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold  my-4">
              Total Employee
            </p>
            <h1 className="text-[34px] font-medium">{total?.data?.employeesLength}</h1>
          </div>
        </div>

        <div className="  rounded h-[150px] flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded  flex justify-center items-center">
            <FaProjectDiagram className="text-[#00bfff] w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold my-4">
              Total Project
            </p>
            <h1 className="text-[34px] font-medium">{total?.data?.projectListLength}</h1>
          </div>
        </div>
        <div className="  rounded h-[150px] flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
        <div className="mx-6 h-16 w-16 rounded  flex justify-center items-center">
        <HiCurrencyDollar className="text-[#00bfff] w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold my-4">
              Total Earning
            </p>
            <h1 className="text-[34px] font-medium">{total?.data?.totalEarn}</h1>
          </div>
        </div>
        <div className="  rounded h-[150px] flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded  flex justify-center items-center">
          <FaClosedCaptioning className="text-[#00bfff] w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold my-4">
              Total Cost
            </p>
            <h1 className="text-[34px] font-medium">{total?.data?.totlaCost}</h1>
          </div>
        </div>
        <div className="  rounded h-[150px] flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded  flex justify-center items-center">
            <FaUser className="text-[#00bfff] w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold my-4">
            EmployeeCost
            </p>
            <h1 className="text-[34px] font-medium">{total?.data?.employeeCost}</h1>
          </div>
        </div>
        <div className="  rounded h-[150px] flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
          <div className="mx-6 h-16 w-16 rounded  flex justify-center items-center">
          <PiCurrencyDollarThin className="text-[#00bfff] w-12 h-12" />
          </div>
          <div className="mx-6 text-center">
            <p className="text-[18px] font-semibold my-4">
            Total Revenue
            </p>
            <h1 className="text-[34px] font-medium">{total?.data?.totalRevinew}</h1>
          </div>
        </div>

        
        
      </div>

        </div>
    );
};

export default Card;