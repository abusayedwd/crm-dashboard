import React, { useEffect } from 'react';
import { Form, Input, DatePicker, Button } from 'antd';

import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useSingleEmployeeHourlyQuery } from '../../../../redux/features/hourlyEmRate/HourlyRateEmployeeId';
import { useEditHourlyRateEmployeeMutation } from '../../../../redux/features/hourlyEmRate/EditHourlyRateEmployee';
import { MdArrowBackIos } from 'react-icons/md';
import { useSingleEmployeeQuery } from '../../../../redux/features/employee/singleEmployee';
 

const EditHourlyRateEmployee = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();  
  
  const { data: hourlyRateData, isLoading } = useSingleEmployeeQuery(id)
  // console.log(hourlyRateData);
 
  const [editRate, { isLoading: isUpdating }] = useEditHourlyRateEmployeeMutation()

  useEffect(() => {
    if (hourlyRateData) {
      form.setFieldsValue({
        name: hourlyRateData?.data.name,
        eightHourRate: hourlyRateData?.data.eightHourRate,
        tenHourRate: hourlyRateData?.data.tenHourRate,
        function: hourlyRateData?.data.function,
      });
    }
  }, [hourlyRateData, form]);

  const handleEditRate = async (values) => {
   
  const rateData = {
    function: values?.function ,
    tenHourRate: values?.tenHourRate ,
    eightHourRate : values?.eightHourRate
  }
  console.log(rateData)

    try {
      const res = await editRate({ id, rateData }).unwrap();
      console.log(res);
      if (res?.statusCode === 200) {
        toast.success(res?.message);
      }
      setTimeout(() => {
        navigate('/dashboard/employeerate');
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 mt-12 w-[80%] mx-auto bg-white rounded-lg shadow-md">
      <Toaster />
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <MdArrowBackIos className='cursor-pointer' onClick={() => navigate('/dashboard/employeerate')} /> 
          Add Employee Hourly Rate
          </h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleEditRate}
        initialValues={{ eightHourRate: '', tenHourRate: '', function: '' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Form.Item
            label="Name"
            name="name"
            
          >
            <Input placeholder="Enter name" readOnly />
          </Form.Item>

          <Form.Item
            label="8 Hourly Rate"
            name="eightHourRate"
           
          >
            <Input placeholder="Enter 8-hour rate" />
          </Form.Item>

          <Form.Item
            label="10 Hourly Rate"
            name="tenHourRate"
           
          >
            <Input placeholder="Enter 10-hour rate" />
          </Form.Item>

          <Form.Item
            label="Function"
            name="function"
          
          >
            <Input placeholder="Enter function" />
          </Form.Item>
        </div>

        <Form.Item className="mt-4">
          <Button
            className='!bg-primaryBg text-[#FFFFFF]'
            htmlType="submit"
            loading={isUpdating}
          >
            Update Rate
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditHourlyRateEmployee;
