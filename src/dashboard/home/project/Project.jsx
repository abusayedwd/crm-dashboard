 import { Button, Card } from 'antd';
import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import profect1 from './../../../../public/image/project1.png'
import profect2 from './../../../../public/image/project2.png'
import profect3 from './../../../../public/image/project3.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
 
 const Project = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-12'>
      <div className='my-6 flex items-center justify-between'>

      <h1 className='text-header font-semibold'>Featured Project</h1>
      <button onClick={() => navigate('addproject')} className=' bg-primaryBg text-whiteText p-2 rounded-lg'>+Add Project</button>
      </div>
     
      <div className='mx-12'> 

      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
        }}
       
        navigation={true}
        
        modules={[Keyboard,  Navigation, Pagination]}
        className="mySwiper "
      >
        <div className='mx-12'>

        <SwiperSlide>
        <Card
     
     cover={
       <img
         alt="Scenic view"
         src= {profect1}
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
       <Button  icon={<EditOutlined />} className="flex items-center">
         Edit post
       </Button>
     </div>
   </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card
     
     cover={
       <img
         alt="Scenic view"
         src= {profect1}
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
       <Button  icon={<EditOutlined />} className="flex items-center">
         Edit post
       </Button>
     </div>
   </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card
     
     cover={
       <img
         alt="Scenic view"
         src= {profect2}
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
       <Button  icon={<EditOutlined />} className="flex items-center">
         Edit post
       </Button>
     </div>
   </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card
     
     cover={
       <img
         alt="Scenic view"
         src= {profect3}
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
       <Button  icon={<EditOutlined />} className="flex items-center">
         Edit post
       </Button>
     </div>
   </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card
     
     cover={
       <img
         alt="Scenic view"
         src= {profect1}
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
       <Button  icon={<EditOutlined />} className="flex items-center">
         Edit post
       </Button>
     </div>
   </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card
     
     cover={
       <img
         alt="Scenic view"
         src= {profect1}
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
       <Button  icon={<EditOutlined />} className="flex items-center">
         Edit post
       </Button>
     </div>
   </Card>
        </SwiperSlide>
        </div>
 
        </Swiper>
   
      </div>

    </div>
  );
 };
 
 export default Project;


 {/* <Card
     
     cover={
       <img
         alt="Scenic view"
         src= {profect1}
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
       <Button  icon={<EditOutlined />} className="flex items-center">
         Edit post
       </Button>
     </div>
   </Card> */}

 
 