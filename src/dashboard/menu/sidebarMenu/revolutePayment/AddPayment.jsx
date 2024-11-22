

import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
import 'tailwindcss/tailwind.css';  // Make sure Tailwind CSS is set up
import { useNavigate } from 'react-router-dom';
import { useAddRevolutPaymentMutation } from '../../../../redux/features/paymentInRevolut/addPayment';
import toast from 'react-hot-toast';

const AddPayment = () => {
 const navigate = useNavigate()
 const [startDate, setStartdate] = useState('')
 const [completedData, setCompletedDate] = useState('')

 const [paymentRevolut, {isLoading}] = useAddRevolutPaymentMutation()

  const onFinish = async (values) => { 
    const paymentData = {
        ...values,
        startDate,
        completedData
    }
    console.log(paymentData);
    
     try{
        const res = await paymentRevolut(paymentData).unwrap();
        console.log(res);
        toast.success(res?.message)
        setTimeout(() => {
            navigate('/dashboard/paymentrevolut')
        }, 1000);
        
     }catch(error){
        console.log(error)
     }
  };

  const onDateChange = (date, dateString) => {
    setStartdate(dateString)
  };

  const onDueDateChange = (date, dateString) => {
     setCompletedDate(dateString)
  };

  return (
    <div className="max-w-xl mt-12 ml-32">

   <h1 className='text-xl mb-4 font-medium'>Add Payment</h1>

      <Form
        onFinish={onFinish}
        layout="vertical"
        
        className="bg-white p-6 rounded-lg shadow-md"
      >
        {/* Start Date */}
       <div className='flex gap-4'>
       <div className=' w-full'>
            <label className="block text-sm  mb-2">* startDate</label>
            <DatePicker className=" w-full" onChange={onDateChange} />
          </div>
          <div className=' w-full'>
            <label className="block text-sm  mb-2">* completedDate</label>
            
            <DatePicker className=" w-full" onChange={onDueDateChange} />
          </div>

       </div>
        {/* Type */}
        <div className='flex gap-4 mt-4'>
        <div className=' w-full'>
         <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: 'Please input the type' }]}
        >
          <Input className="w-full border border-gray-300 rounded-md" />
        </Form.Item>
         </div>
         <div className=' w-full'>
         <Form.Item
          name="referance"
          label="Reference"
          rules={[{ required: true, message: 'Please input the reference' }]}
        >
          <Input className="w-full border border-gray-300 rounded-md" />
        </Form.Item>
         </div>
       

        {/* Reference */}
       
        </div>

        {/* Original Amount */}
        <Form.Item
          name="orignalAmount"
          label="Original Amount"
          rules={[{ required: true, message: 'Please input the amount' }]}
        >
          <InputNumber className="w-full border border-gray-300 rounded-md" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPayment;
