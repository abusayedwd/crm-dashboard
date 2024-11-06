import { Button, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import React from 'react';
import service1 from './../../../../public/image/service1 (2).png'
import service2 from './../../../../public/image/service2 (2).png'
import { useNavigate } from 'react-router-dom';
import { useAllServiceQuery } from '../../../redux/features/service/allService';
import url from '../../../redux/api/baseUrl';
 
import toast from 'react-hot-toast';
import { useDeleteServiceMutation } from '../../../redux/features/service/deleteService';
const Service = () => {
  const navigate = useNavigate()

  const {data: services, isLoading} = useAllServiceQuery()
  const [deleteservive] =  useDeleteServiceMutation()
  console.log(services)

  const deleteService = async(id) => {
      try{
        const res = await deleteservive(id).unwrap();
         console.log(res);
         toast.success(res?.message)
         
      }catch(error){
        console.log(error); 
      }
  }


    return (
        <div>
            <div className='my-6 flex items-center justify-between border-b'>

<h1 className='text-header font-semibold'>Our Services</h1>
<button onClick={() => navigate('addservice')} className=' bg-primaryBg text-[#FFFFFF] p-2 rounded-lg'>+Add Service</button>
</div>
 
 
     <div className='grid grid-cols-4 gap-4'>
      {
        services?.map(service => 

          <div>
<Card
     
     cover={
       <img
         alt="Scenic view"
         src= {url + service?.serviceImage?.publicFileUrl}
         className="h-48 w-full object-cover"
       />
     }
     className="max-w-xs p-3 h-80"
   >
     <div className="p-4">
       
       <h2 className="font-bold text-lg my-2">
         {service?.title}
       </h2>
       <div className='flex items-center justify-between gap-2'>

       <Button onClick={() => navigate(`editservice/${service._id}`)} icon={<EditOutlined />} className="flex items-center">
         Edit post
       </Button>
       <Button onClick={() => deleteService(service._id)} className="flex items-center !text-[#FFFFFF] !bg-[#ee5f5f]">
          Delete
       </Button>
       </div>
     </div>
   </Card>
          </div>
        )
      }
        
        </div> 

        </div>
    );
};

export default Service;