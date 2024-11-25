import React, { useEffect, useState } from 'react';
import { Form, Input, Button, DatePicker, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSingleProjectByIdQuery } from '../../../../redux/features/runningProject/singleProject';
import { useUpdateProjectMutation } from '../../../../redux/features/runningProject/updateProject';
import moment from 'moment';  // Import moment for date manipulation

const UpdateRunningProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();  
  console.log(id);
  
  const [startDate, setStartDate] = useState(null);  // Initialize as null
  const [endDate, setEndDate] = useState(null);  // Initialize as null
  const [form] = Form.useForm();

  // Fetch the existing project data
  const { data: project, isLoading, error } =  useSingleProjectByIdQuery(id);   
  console.log(project?.data?.attributes?.postCode)
  
  const [updateProject, { isLoading: isUpdating }] = useUpdateProjectMutation();   

  useEffect(() => {
    if (project) {
      form.setFieldsValue({
        projectName: project?.data?.attributes?.projectName,
        project: project?.data?.attributes?.project,
        address: project?.data?.attributes?.address,
        postCode: project?.data?.attributes?.postCode,
        city: project?.data?.attributes?.city,
        description: project?.data?.attributes?.description,
        // startDate: project?.data?.attributes?.startDate,  
        // endDate: project?.data?.attributes?.endDate,  
      });
      setStartDate(project?.data?.attributes?.startDate);  
      setEndDate(project?.data?.attributes?.endDate);  
    }
  }, [project, form]);

  const sDate = (date,dateString) => {
    // Ensure date is set as moment object
    setStartDate(dateString); // Always wrap with moment
  };

  const eDate = (date, dateString) => {
    // console.log(dateString)
    // Ensure date is set as moment object
    setEndDate(dateString); // Always wrap with moment
  };

  const handleSubmit = async (values) => {
    const data = {
      ...values,
      startDate ,
      endDate 
    };
    console.log(data)

    try {
      const res = await updateProject({ id, data }).unwrap();
      console.log(res);
      
      if (res?.statusCode === 200) {
        toast.success(res?.message);
        navigate('/dashboard/project');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update project');
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-5 mt-10 w-[90%] mx-auto">
      <h2 className="text-header mb-4">Update Project</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div className="flex flex-wrap mb-4">
          <Form.Item label="Project" name="project" className="flex-1 mr-4">
            <Input name="project" />
          </Form.Item>

          <Form.Item label="Project Name" name="projectName" className="flex-1 mr-4">
            <Input name="projectName" />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="Address" name="address" className="flex-1 mr-4">
            <Input name="address" />
          </Form.Item>

          <Form.Item label="Postal Code" name="postCode" className="flex-1 mr-4">
            <Input name="postCode" />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="City" name="city" className="flex-1 mr-4">
            <Input name="city" />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="Description" name="description" className="flex-1 mr-4">
            <Input.TextArea name="description" />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="Start Date" className="flex-1 mr-4">
            {/* <DatePicker
              onChange={sDate}
              value={startDate}  // Pass moment object
              style={{ width: '100%' }}
            /> */}
               <DatePicker 
            //  value={startDate}
              className="w-full" 
              onChange={sDate} 
              value={startDate ? moment(startDate, 'YYYY-MM-DD') : null}
            />
          </Form.Item>

          <Form.Item label="End Date" className="flex-1 mr-4">
            {/* <DatePicker
              onChange={eDate}
              value={endDate}  // Pass moment object
              style={{ width: '100%' }}
            /> */}
             <DatePicker 
            //  value={startDate}
              className="w-full" 
              onChange={eDate} 
              value={endDate ? moment(endDate, 'YYYY-MM-DD') : null}
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button htmlType="submit" className="mr-2 !bg-primaryBg !text-[#FFFFFF]" loading={isUpdating}>
            Update Project
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateRunningProject;
