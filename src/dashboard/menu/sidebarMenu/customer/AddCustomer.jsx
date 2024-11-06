import React, { useState } from 'react';
import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAddCustomerMutation } from '../../../../redux/features/customer/addCustomer';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    address: '',
    postalCode: '',
    mobileNo: '',
    contactPerson: '',
    city: '',
    state: '',
    email: '',
    billingEmail: '',
  });

  const [fileList, setFileList] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, gender: value });
  };

  const handleChangeImage = ({ fileList: newFileList }) => {
    // Limit the number of files to 8
    if (newFileList.length <= 1) {
      setFileList(newFileList);
    } else {
      message.error('You can only upload up to 1 images.');
    }
  };
  const navigate = useNavigate()
  const [addCustomer] = useAddCustomerMutation()

  const handleSubmit = async (values) => {
   
    console.log(values);
    console.log(fileList[0].originFileObj);
   const formData = new FormData()

    formData.append('name', values?.name);
    formData.append('gender', values?.gender);
    formData.append('address', values?.address);
    formData.append('postalCode', values?.postalCode);
    formData.append('contactPerson', values?.contactPerson);
    formData.append('billingEmail', values?.billingEmail);
    formData.append('city', values?.city);
    formData.append('email', values?.email);
    formData.append('mobile', values?.mobile);
    formData.append('state', values?.state);
    
    if(fileList){
  
      formData.append('customerImage', fileList[0].originFileObj)
    }

  try{
    const res = await addCustomer(formData).unwrap();
    console.log(res)
    if(res?.statusCode == 201){
      toast.success(res?.message)
    }
    setTimeout(() => {
      navigate('/dashboard/customer')
    }, 1000);
  }catch(error){
    console.log(error)
  }


  };

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="p-5 mt-10 w-[90%] mx-auto">
      <h2 className="text-header mb-4">Add Customer</h2>
      <Form layout="vertical" onFinish={handleSubmit}>
        <div className="flex flex-wrap mb-4">
          <Form.Item label="Name" name="name" className="flex-1 mr-4">
            <Input name="name" onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Gender" name="gender" className="flex-1 mr-4">
            <Select onChange={handleSelectChange} placeholder="Select Gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
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
          <Form.Item label="Mobile No." name="mobile" className="flex-1 mr-4">
            <Input name="mobileNo" onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Contact Person" name="contactPerson" className="flex-1 mr-4">
            <Input name="contactPerson" onChange={handleChange} />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="City" name="city" className="flex-1 mr-4">
            <Input name="city" onChange={handleChange} />
          </Form.Item>

          <Form.Item label="State / Region" name="state" className="flex-1 mr-4">
            <Input name="state" onChange={handleChange} />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="Email" name="email" className="flex-1 mr-4">
            <Input name="email" onChange={handleChange} />
          </Form.Item>

          <Form.Item label="Billing Email" name="billingEmail" className="flex-1 mr-4">
            <Input name="billingEmail" onChange={handleChange} />
          </Form.Item>
        </div>

        <Form.Item label="Upload Avatar" name="customerImage">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={handleChangeImage}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button  htmlType="submit" className="mr-2 !bg-primaryBg !text-[#FFFFFF]">
            Add Customer
          </Button>
          
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCustomer;
