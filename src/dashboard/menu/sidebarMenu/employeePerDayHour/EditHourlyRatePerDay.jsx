
import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
 
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
 
import { useEditPerdayHourMutation } from '../../../../redux/features/hourlyratePerDay/editperdayHour';

const { Option } = Select;

const EditHourlyRatePerDay = () => {
  const { id } = useParams(); 
  console.log(id)
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [error, setError] = useState(''); 
  const [updateHourlyRate, { isLoading }] = useEditPerdayHourMutation()

 

  const weeks = Array.from({ length: 52 }, (_, index) => `Week ${index + 1}`);
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const onFinish = async (values) => {
    console.log(values)
    try {
      const res = await updateHourlyRate({ id, values }).unwrap();
      console.log(res)
      if (res?.statusCode === 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate('/dashboard/employee-hourper-day');
        }, 1000);
      }
    } catch (error) {
      console.log(error?.data);
      setError(error?.data?.message);
    }
  };

  return (
    <div className="p-8 w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">Edit Employee Hours Per Day</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <div className="flex gap-4 mb-4">
          {/* <div className="w-full">
            <Form.Item label="Employee Name" name="employeeId">
              <Select placeholder="Select Employee">
                {employees?.data?.map((name, index) => (
                  <Option key={index} value={name?._id}>
                    {name?.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div> */}

          {/* <div className="w-full">
            <Form.Item label="Project Name" name="projectId">
              <Select placeholder="Select Project">
                {projects?.data?.map((project, index) => (
                  <Option key={index} value={project._id}>
                    {project?.projectName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div> */}
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-full sm:w-1/2">
            <Form.Item label="Week" name="weekName">
              <Select placeholder="Select Week">
                {weeks.map((weekOption, index) => (
                  <Option key={index} value={weekOption}>
                    {weekOption}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <div className="w-full sm:w-1/2">
            <Form.Item label="Day" name="dayName">
              <Select placeholder="Select Day">
                {days.map((day, index) => (
                  <Option key={index} value={day}>
                    {day}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-full">
            <Form.Item label="Add Hours" name="hours">
              <Input placeholder="Enter Hours" type="number" />
            </Form.Item>
          </div>
        </div>
        {/* <p className="text-[#C11B17] font-semibold">{error}</p> */}
        <div className="flex justify-center">
          <Button type="primary" htmlType="submit" className="w-full sm:w-auto" >
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditHourlyRatePerDay;
