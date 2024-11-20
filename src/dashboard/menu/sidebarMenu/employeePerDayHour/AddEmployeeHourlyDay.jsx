import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { useProjectListQuery } from '../../../../redux/features/hourlyratePerDay/projectList';
import { useEmployeeListQuery } from '../../../../redux/features/hourlyratePerDay/employeeList';
import { useAddPerDayHourlyrateMutation  } from '../../../../redux/features/hourlyratePerDay/addPerDayHourlyrate';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
 

const { Option } = Select;

const AddemployeeHourlyDay = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const [employeeName, setEmployeeName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [week, setWeek] = useState('');
  const [day, setDay] = useState('');
  const [addHours, setAddHours] = useState('');
  const [error, setError] = useState(' ')

 const {data: projects} = useProjectListQuery()
 const {data: employees} = useEmployeeListQuery()
 console.log(projects?.data );
 console.log(employees?.data);
 
const [perdayHourlyRate, {isLoading}] = useAddPerDayHourlyrateMutation()


  // Sample data for dropdowns
 
  const weeks = Array.from({ length: 52 }, (_, index) => `Week ${index + 1}`);
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const onFinish = async (values) => {
    console.log('Form Submitted:', values);

    try{
      const res = await perdayHourlyRate(values).unwrap();
      console.log(res);
      if(res?.statusCode == 201){
        toast.success(res?.message)
      }
      setTimeout(() => {
        navigate('/dashboard/employee-hourper-day')
      }, 1000);
      
    }catch(error){
      console.log(error?.data?.message);
      setError(error?.data?.message)
      
    }
  };

  return (
    <div className="p-8 w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">Employee Hours Per Day</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/* Employee Name */}
        <div className="flex  gap-4 mb-4">
          <div className="w-full ">
            <Form.Item label="Employee Name" name="employeeId">
              <Select
                value={employeeName}
                onChange={setEmployeeName}
                placeholder="Select Employee"
              >
                {employees?.data?.map((name, index) => (
                  <Option key={index} value={name?._id}>
                    {name?.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
 
          <div className="w-full">
            <Form.Item label="Project Name" name="projectId">
              <Select
                value={projectName}
                onChange={setProjectName}
                placeholder="Select Project"
              >
                { projects?.data?.map((project, index) => (
                  <Option key={index}  value={project._id}>
                    {project?.projectName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>

        {/* Week Selection */}
        <div className="flex   gap-4 mb-4">
          <div className="w-full sm:w-1/2">
            <Form.Item label="Week" name="weekName">
              <Select
                value={week}
                onChange={setWeek}
                placeholder="Select Week"
              >
                {weeks.map((weekOption, index) => (
                  <Option key={index} value={weekOption}>
                    {weekOption}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          {/* Day Selection */}
          <div className="w-full sm:w-1/2">
            <Form.Item label="Day" name="dayName">
              <Select
                value={day}
                onChange={setDay}
                placeholder="Select Day"
              >
                {days.map((day, index) => (
                  <Option key={index} value={day}>
                    {day}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>

        {/* Add Hours */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-full ">
            <Form.Item label="Add Hours" name="hours">
              <Input
                value={addHours}
                onChange={(e) => setAddHours(e.target.value)}
                placeholder="Enter Hours"
                type="number"
              />
            </Form.Item>
          </div>
        </div>
         <p className='text-[#C11B17] font-semibold'> {error}</p>
        {/* Submit Button */}
        <div className="flex justify-center">
          <Button type="primary" htmlType="submit" className="w-full sm:w-auto">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddemployeeHourlyDay;
