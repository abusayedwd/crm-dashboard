import React, { useState } from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAddProjectMutation } from '../../../redux/features/project/addProject';
import toast from 'react-hot-toast';

const AddProject = () => {
 
  
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]); 
  const handleFileChange = ({ fileList }) => setFileList(fileList);

  const [addProject] = useAddProjectMutation()

const onFinish = async (values) => {
   console.log(values , fileList);
   console.log(fileList[0].originFileObj)
   
  const formData = new FormData()
  
  formData.append('title', values.title)
  formData.append('subTitle', values.subTitle)
  formData.append('content', values.content)
  
 
  if(fileList){
  
    formData.append('project', fileList[0].originFileObj)
  }
 try{

  const res = await addProject(formData).unwrap();
  // console.log(res)
  if(res?.statusCode == 201){
    toast.success(res?.message)
  }
  setTimeout(() => {
    navigate('/dashboard/home')
  }, 1000);

 }catch(error){
  console.log(error);
  
 }
 
  
    
} 

 

  return (
    <div className=" w-[80%] mx-auto p-4 mt-12">
      <h2 className="text-xl font-semibold text-header mb-4">Add Project</h2>
      <Form
        layout="vertical"
        form={form}
        className="bg-white shadow-lg p-6 rounded-lg"
        onFinish={onFinish}
      >
        {/* Document Type */}
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter Title' }]}
        >
          <Input  placeholder="Project Title" />
        </Form.Item>

        <Form.Item
          name="subTitle"
          label="Sub Title"
          rules={[{ required: true, message: 'Please enter subTitle' }]}
        >
          <Input  placeholder="Project Sub Title" />
        </Form.Item>
        
    
        <Form.Item
          name="content"
          label="Content"
          rules={[{ required: true, message: 'Please enter some details' }]}
        >
          <Input.TextArea rows={4} placeholder="Tell us about this project" />
        </Form.Item>
  {/* File Upload */}
  <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={handleFileChange}
        >
          <Upload.Dragger name="files" fileList={fileList} onChange={handleFileChange} multiple={false}>
            <p className="ant-upload-drag-icon">
              <UploadOutlined />
            </p>
            <p className="ant-upload-text">Drag & Drop Image</p>
            <Button type="primary" className="mt-2">Browse File</Button>
          </Upload.Dragger>
        </Form.Item>


        {/* Update Button */}
        <Form.Item className="text-right">
          <Button type="primary" htmlType="submit" className="bg-teal-500">
            Add Project
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProject;
