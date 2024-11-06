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
import { useAllProjectQuery } from '../../../redux/features/project/getProject';
import url from '../../../redux/api/baseUrl';
 
 const Project = () => {
  const navigate = useNavigate()


const {data: projects, isLoading} = useAllProjectQuery()
console.log(projects?.data?.attributes)


  return (
    <div className='mt-12'>
      <div className='my-6 flex items-center justify-between'>

      <h1 className='text-header font-semibold'>Featured Project</h1>
      <button onClick={() => navigate('addproject')} className=' bg-primaryBg text-whiteText p-2 rounded-lg'>+Add Project</button>
      </div>
     
      <div className='mx-12'> 
      <Swiper
  slidesPerView={3}
  centeredSlides={false}
  slidesPerGroupSkip={1}
  grabCursor={true}
  keyboard={{
    enabled: true,
  }}
  breakpoints={{
    769: {
      slidesPerView: 3,
      slidesPerGroup: 2,
    },
  }}
  navigation={true}
  modules={[Keyboard, Navigation, Pagination]}
  className="mySwiper"
>
  <div className='mx-12 flex justify-center'>
    {projects?.data?.attributes?.map((project, index) => {
      const date = new Date("2024-11-05T03:24:20.608Z"); // Replace with your actual date source
      const day = String(date.getDate()).padStart(2, '0');
      const month = date.toLocaleString('en-US', { month: 'long' });
      const year = date.getFullYear();
      const formattedDate = `${day} ${month} ${year}`;

      return (
        <SwiperSlide key={index} className="flex justify-center">
          <Card
            cover={
              <img
                alt="Scenic view"
                src={url + project?.projectImage?.publicFileUrl}
                className="h-48 w-full object-cover"
              />
            }
            className="max-w-xs p-3 h-[450px] flex flex-col justify-between"
          >
            <div className="p-4 flex-1">
              <p className="text-gray-500 text-sm">{formattedDate}</p>
              <h1 className='text-lg font-semibold'>{project?.title}</h1>
              <h2 className="font-normal text-md my-2">
                {project?.content.slice(0, 45)}
              </h2>
            </div>
            <Button onClick={() => navigate(`editproject/${project?._id}`)} icon={<EditOutlined />} className="relative bottom-1">
              Edit post
            </Button>
          </Card>
        </SwiperSlide>
      );
    })}
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

 
 