import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useSingleEmployeeQuery } from '../../../../redux/features/employee/singleEmployee';
import { useEditEmployeeMutation } from '../../../../redux/features/employee/editEmployee';

const EditEmployee = () => {
  const { id } = useParams(); // Get the employee ID from the URL
  const navigate = useNavigate();
  const [form] = Form.useForm();
  
  const { data: employeeData, isLoading } = useSingleEmployeeQuery(id)
  console.log(employeeData);
  
  const [editEmployee] = useEditEmployeeMutation()

  useEffect(() => {
    if (employeeData) {
      form.setFieldsValue({
        name: employeeData?.data?.name,
        dateOfBirth: employeeData?.data?.dateOfBirth,
        inServiceForm: employeeData?.data?.inServiceForm,
        address: employeeData?.data?.address,
        city: employeeData?.data?.city,
        email: employeeData?.data?.email,
        vcaNr: employeeData?.data?.vcaNr,
        bic: employeeData?.data?.bic,
        bnsNr: employeeData?.data?.bnsNr,
        hrId: employeeData?.data?.hrId,
        outOfService: employeeData?.data?.outOfService,
        postalCode: employeeData?.data?.postalCode,
        country: employeeData?.data?.country,
        mobile: employeeData?.data?.mobile,
        ibn: employeeData?.data?.ibn,
      });
    }
  }, [employeeData, form]);

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append('name', values?.name);
    formData.append('dateOfBirth', values?.dateOfBirth);
    formData.append('inServiceForm', values?.inServiceForm);
    formData.append('address', values?.address);
    formData.append('city', values?.city);
    formData.append('email', values?.email);
    formData.append('vcaNr', values?.vcaNr);
    formData.append('bic', values?.bic);
    formData.append('bnsNr', values?.bnsNr);
    formData.append('hrId', values?.hrId);
    formData.append('outOfService', values?.outOfService);
    formData.append('postalCode', values?.postalCode);
    formData.append('country', values?.country);
    formData.append('mobile', values?.mobile);
    formData.append('ibn', values?.ibn);

    try {
      const res = await editEmployee({ id, formData }).unwrap();
    //   console.log(res);
      if (res?.statusCode === 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate('/dashboard/employeelist');
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-[80%] mx-auto p-8 mt-8 bg-white shadow-md rounded-lg">
      <Toaster />
      <h2 className="text-[20px] font-semibold mb-6">Edit Employee</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="grid grid-cols-2 gap-6"
      >
        {/* Form Fields */}
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter name' }]}
        >
          <Input placeholder="Steegmann" />
        </Form.Item>

        <Form.Item
          name="bnsNr"
          label="BNS Nr."
          rules={[{ required: true, message: 'Please enter BNS Nr.' }]}
        >
          <Input placeholder="AllThemes" />
        </Form.Item>

        <Form.Item
          name="dateOfBirth"
          label="Date of Birth"
          rules={[{ required: true, message: 'Please enter date of birth' }]}
        >
          <Input placeholder="18 September 1985" />
        </Form.Item>

        <Form.Item
          name="hrId"
          label="HR ID"
          rules={[{ required: true, message: 'Please enter HR ID' }]}
        >
          <Input placeholder="AllThemes" />
        </Form.Item>

        <Form.Item
          name="inServiceForm"
          label="In Service Form"
          rules={[{ required: true, message: 'Please enter in service form' }]}
        >
          <Input placeholder="stevenjahn@gmail.com" />
        </Form.Item>

        <Form.Item
          name="outOfService"
          label="Out of Service"
          rules={[{ required: true, message: 'Please enter out of service' }]}
        >
          <Input placeholder="+88 95454 2123" />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: 'Please enter address' }]}
        >
          <Input placeholder="United States of America" />
        </Form.Item>

        <Form.Item
          name="postalCode"
          label="Postal Code"
          rules={[{ required: true, message: 'Please enter postal code' }]}
        >
          <Input placeholder="Chicago" />
        </Form.Item>

        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: 'Please enter city' }]}
        >
          <Input placeholder="2972 Westheimer Rd, Santa Ana, Illinois 85486" />
        </Form.Item>

        <Form.Item
          name="country"
          label="Country"
          rules={[{ required: true, message: 'Please enter country' }]}
        >
          <Input placeholder="USA" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please enter email' }]}
        >
          <Input placeholder="stevenjahn@gmail.com" />
        </Form.Item>

        <Form.Item
          name="mobile"
          label="Mobile Number"
          rules={[{ required: true, message: 'Please enter mobile number' }]}
        >
          <Input placeholder="123-456-7890" />
        </Form.Item>

        <Form.Item
          name="vcaNr"
          label="VCA NR"
          rules={[{ required: true, message: 'Please enter VCA NR' }]}
        >
          <Input placeholder="VCA-12345" />
        </Form.Item>

        <Form.Item
          name="ibn"
          label="IBN"
          rules={[{ required: true, message: 'Please enter IBN' }]}
        >
          <Input placeholder="IBN-12345" />
        </Form.Item>

        <Form.Item
          name="bic"
          label="BIC"
          rules={[{ required: true, message: 'Please enter BIC' }]}
        >
          <Input placeholder="BIC-12345" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item className="col-span-2 text-right">
          <Button type="primary" htmlType="submit" className="bg-blue-500">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditEmployee;
