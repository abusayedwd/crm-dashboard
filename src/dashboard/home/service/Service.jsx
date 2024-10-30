import { Button, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React from 'react';
import service1 from './../../../../public/image/service1 (2).png'
import service2 from './../../../../public/image/service2 (2).png'
import { useNavigate } from 'react-router-dom';
const Service = () => {
  const navigate = useNavigate()
    return (
        <div>
            <div className='my-6 flex items-center justify-between border-b'>

<h1 className='text-header font-semibold'>Our Services</h1>
<button onClick={() => navigate('addservice')} className=' bg-primaryBg text-[#FFFFFF] p-2 rounded-lg'>+Add Service</button>
</div>
 
<div className='grid grid-cols-4 gap-4'>
     <div>
        <Card
     
     cover={
       <img
         alt="Scenic view"
         src= {service1}
         className="h-48 object-cover"
       />
     }
     className="max-w-xs p-3 h-96"
   >
     <div className="p-4">
       <p className="text-gray-500 text-sm">06 September</p>
       <h2 className="font-bold text-lg my-2">
         Why choose a theme that looks good with WooCommerce
       </h2>
       <div className='flex items-center justify-between gap-2'>

       <Button  icon={<EditOutlined />} className="flex items-center">
         Edit post
       </Button>
       <Button  className="flex items-center !text-[#FFFFFF] !bg-[#ee5f5f]">
          Delete
       </Button>
       </div>
     </div>
   </Card>
        </div>
     <div>
        <Card
     
     cover={
       <img
         alt="Scenic view"
         src= {service2}
         className="h-48 object-cover"
       />
     }
     className="max-w-xs p-3 h-96"
   >
     <div className="p-4">
       <p className="text-gray-500 text-sm">06 September</p>
       <h2 className="font-bold text-lg my-2">
         Why choose a theme that looks good with WooCommerce
       </h2>
       <div className='flex items-center justify-between gap-2'>

       <Button  icon={<EditOutlined />} className="flex items-center">
         Edit post
       </Button>
       <Button  className="flex items-center !text-[#FFFFFF] !bg-[#ee5f5f]">
          Delete
       </Button>
       </div>
     </div>
   </Card>
        </div>
         
</div>
        </div>
    );
};

export default Service;