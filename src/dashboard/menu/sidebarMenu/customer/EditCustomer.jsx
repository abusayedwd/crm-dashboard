import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
 
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useSingleCustomerQuery } from '../../../../redux/features/customer/singleCustomer';
import { useEditCustomerMutation } from '../../../../redux/features/customer/editCustomer';

const { Option } = Select;

const EditCustomer = () => {
  const { id } = useParams();
  
  const navigate = useNavigate();
  const { data: customerData, isLoading } = useSingleCustomerQuery(id)
  console.log(customerData);
  
  const [updateCustomer] =  useEditCustomerMutation();
  const [form] = Form.useForm();

  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (customerData) {
      // Dynamically set all form fields
      form.setFieldsValue({
        ...customerData?.data,
      });
  
      // Set the file list if customer image exists
      if (customerData.customerImage) {
        setFileList([
          {
            uid: '-1',
            name: 'customerImage.png',
            status: 'done',
            url: customerData.customerImage,
          },
        ]);
      }
    }
  }, [customerData, form]);
  

  const handleChangeImage = ({ fileList: newFileList }) => {
    if (newFileList.length <= 1) {
      setFileList(newFileList);
    } else {
      message.error('You can only upload up to 1 image.');
    }
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    console.log(values);
    

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

    if (fileList && fileList[0]?.originFileObj) {
      formData.append('customerImage', fileList[0].originFileObj);
    }

    try {
      const res = await updateCustomer({ id, formData }).unwrap();
      console.log(res)
      if (res?.statusCode === 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate('/dashboard/customer');
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update customer');
    }
  };

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

//   if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-5 mt-10 w-[90%] mx-auto">
      <h2 className="text-header mb-4">Edit Customer</h2>
      <Form layout="vertical" form={form} onFinish={handleSubmit}>
        <div className="flex flex-wrap mb-4">
          <Form.Item label="Name" name="name" className="flex-1 mr-4">
            <Input />
          </Form.Item>

          <Form.Item label="Gender" name="gender" className="flex-1 mr-4">
            <Select placeholder="Select Gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="Address" name="address" className="flex-1 mr-4">
            <Input />
          </Form.Item>

          <Form.Item label="Postal Code" name="postalCode" className="flex-1 mr-4">
            <Input />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="Mobile No." name="mobile" className="flex-1 mr-4">
            <Input />
          </Form.Item>

          <Form.Item label="Contact Person" name="contactPerson" className="flex-1 mr-4">
            <Input />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="City" name="city" className="flex-1 mr-4">
            <Input />
          </Form.Item>

          <Form.Item label="State / Region" name="state" className="flex-1 mr-4">
            <Input />
          </Form.Item>
        </div>

        <div className="flex flex-wrap mb-4">
          <Form.Item label="Email" name="email" className="flex-1 mr-4">
            <Input />
          </Form.Item>

          <Form.Item label="Billing Email" name="billingEmail" className="flex-1 mr-4">
            <Input />
          </Form.Item>
        </div>

        <Form.Item label="Upload Avatar" name="customerImage">
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleChangeImage}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="mr-2 !bg-primaryBg !text-[#FFFFFF]">
            Update Customer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditCustomer;
