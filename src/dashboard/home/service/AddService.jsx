import React, { useState } from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
 
  
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]); 
  const handleFileChange = ({ fileList }) => setFileList(fileList);


const onFinish = async (values) => {
   console.log(values , fileList);
   
//   const formData = new FormData()
  
//   formData.append('aboutMe', values.about)
//   formData.append('documentType', values.documentType)
  
 
//   if(fileList){
  
//     formData.append('document', fileList[0].originFileObj)
//   }
  // console.log(formData);
 
  
    
} 

 

  return (
    <div className=" w-[80%] mx-auto p-4 mt-12">
      <h2 className="text-xl font-semibold text-header mb-4">Add Service</h2>
      <Form
        layout="vertical"
        form={form}
        className="bg-white shadow-lg p-6 rounded-lg"
        onFinish={onFinish}
      >
        {/* Document Type */}
        <Form.Item
          name="name"
          label="Service Title"
          rules={[{ required: true, message: 'Please enter Title' }]}
        >
          <Input  placeholder="Project Title" />
        </Form.Item>

        <Form.Item
          name="link"
          label="Service Link"
          rules={[{ required: true, message: 'Please enter Link' }]}
        >
          <Input  placeholder="Project Sub Title" />
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
            Add 
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddService;
