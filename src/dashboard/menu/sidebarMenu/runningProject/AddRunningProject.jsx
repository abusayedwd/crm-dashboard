import React, { useState } from 'react';
import { Form, Input, Select, Button, Upload, message, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useProjectAddMutation } from '../../../../redux/features/runningProject/projectAdd';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const AddRunningProject = () => {
  const navigate = useNavigate()
   const [startDate, setStartDate] = useState('')
   const [endDate, setEndDate] = useState('')
  const [fileList, setFileList] = useState([]);
 
  const [addproject, {isLoading} ] = useProjectAddMutation()
 
  const handleChange = (e) => {
  
  };

  const sDate = (date, dateString) => {   
     setStartDate(dateString) 
  };
  const eDate = (date, dateString) => {  
     setEndDate(dateString)
   
  };


   
  const handleSubmit = async(values) => {
    
    const data = {
      address : values?.address,
      city : values?.city,
      description : values?.description,
      postalCode : values?.postalCode,
      project : values?.project,
      projectName : values?.projectName,
      startDate : startDate,
      endDate : endDate,
    }
    console.log(data);
   
    try{
      const res = await addproject(data).unwrap();
      console.log(res)
      if(res?.statusCode == 201){
        toast.success(res?.message)
      }
      setTimeout(() => {
        navigate('/dashboard/project') 
      }, 1000);
    
    }catch(error){
      console.log(error)
    }


  };

  // const uploadButton = (
  //   <div>
  //     <UploadOutlined />
  //     <div style={{ marginTop: 8 }}>Upload</div>
  //   </div>
  // );

  return (
    <div className="p-5 mt-10 w-[90%] mx-auto">
      <h2 className="text-header mb-4">Add Project</h2>
      <Form layout="vertical" onFinish={handleSubmit}>
        <div className="flex flex-wrap mb-4">
          <Form.Item label="Project" name="project" className="flex-1 mr-4">
            <Input name="project" onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Project Name" name="projectName" className="flex-1 mr-4">
            <Input name="projectName" onChange={handleChange} />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="Address" name="address" className="flex-1 mr-4">
            <Input name="address" onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Postal Code" name="postalCode" className="flex-1 mr-4">
            <Input name="postalCode" onChange={handleChange} />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="City" name="city" className="flex-1 mr-4">
            <Input name="city" onChange={handleChange} />
          </Form.Item>

          {/* <Form.Item label="State / Region" name="state" className="flex-1 mr-4">
            <Input name="state" onChange={handleChange} />
          </Form.Item> */}
        </div>

        {/* <div className="flex flex-wrap mb-4">
          <Form.Item label="Email" name="email" className="flex-1 mr-4">
            <Input name="email" onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Billing Email" name="billingEmail" className="flex-1 mr-4">
            <Input name="billingEmail" onChange={handleChange} />
          </Form.Item>
        </div> */}

        <div className="flex flex-wrap mb-4">
          <Form.Item label="Description" name="description" className="flex-1 mr-4">
            <Input.TextArea name="description" onChange={handleChange} />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="Start Date"  className="flex-1 mr-4">
            <DatePicker
             
              onChange={sDate}
              style={{ width: '100%' }}
            />
          </Form.Item>

          <Form.Item label="End Date"  className="flex-1 mr-4">
            <DatePicker 
              onChange={eDate}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </div>
{/* 
        <Form.Item label="Upload Avatar" name="avatar">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={handleChangeImage}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
        </Form.Item> */}

        <Form.Item>
          <Button htmlType="submit" className="mr-2 !bg-primaryBg !text-[#FFFFFF]">
            Add Project
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddRunningProject;
