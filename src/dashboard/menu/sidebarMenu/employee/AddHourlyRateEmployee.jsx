import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import { useAddHourlyRateMutation } from '../../../../redux/features/hourlyEmRate/addHourlyRate';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddHourlyRate = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const [addrate, {isLoading}] = useAddHourlyRateMutation()

  const handleAddRate = async(values) => {
    // Log all form values in the console
    console.log('Form Values:', values);
    try{
        const res = await addrate(values).unwrap();
        console.log(res)
        if(res?.statusCode ==201){
            toast.success(res?.message)
        }
        setTimeout(() => { 
            navigate('/dashboard/employeerate')
        }, 1000);
    }catch(error){
        console.log(error)
    }
  };

  return (
    <div className="p-6 mt-12 w-[80%] mx-auto bg-white rounded-lg shadow-md">
        <Toaster />
      <h2 className="text-xl font-semibold mb-4">Add Employee Hourly Rate</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleAddRate} // Submit handler
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>

          <Form.Item
            label="8 Hourly Rate"
            name="eighHours"
            rules={[{ required: true, message: 'Please enter the 8-hour rate' }]}
          >
            <Input placeholder="Enter 8-hour rate" />
          </Form.Item>

          <Form.Item
            label="10 Hourly Rate"
            name="tenHours"
            rules={[{ required: true, message: 'Please select the 10-hour rate date' }]}
          >
            <Input placeholder="Select date" className="w-full" />
          </Form.Item>

          <Form.Item
            label="Function"
            name="func"
            rules={[{ required: true, message: 'Please enter the function' }]}
          >
            <Input placeholder="Enter function" />
          </Form.Item>
        </div>
        
        <Form.Item className="mt-4">
          <Button className='!bg-primaryBg text-[#FFFFFF]' htmlType="submit">Add Rate</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddHourlyRate;
