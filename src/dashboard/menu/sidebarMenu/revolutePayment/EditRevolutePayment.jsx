import React, { useState, useEffect } from 'react';
import { Form, Input, Button, DatePicker, InputNumber, Upload } from 'antd';
import 'tailwindcss/tailwind.css';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSinglePaymentQuery } from '../../../../redux/features/paymentInRevolut/getById';
import { useUpdatePaymentMutation } from '../../../../redux/features/paymentInRevolut/updatePayment';
import moment from 'moment';
import { CloseSquareFilled, UploadOutlined } from '@ant-design/icons';

const EditRevolutPayment = () => {
  const navigate = useNavigate();
  const { id } = useParams();  // Get payment ID from URL params
  const [startDate, setStartdate] = useState(null);
  const [completedDate, setCompletedDate] = useState(null);
  const [fileList, setFileList] = useState([]);

  // Fetch payment details using the ID
  const { data: paymentData, error, isLoading } = useSinglePaymentQuery(id);
  
  const [updatePayment, { isLoading: isUpdating }] = useUpdatePaymentMutation();

  // When the payment data is fetched, set initial date values and files
  useEffect(() => {
    if (paymentData) {
      setStartdate(paymentData?.data?.startDate ? moment(paymentData.data.startDate) : null);
      setCompletedDate(paymentData?.data?.completedData ? moment(paymentData.data.completedData) : null);
      
      // Handle the file list initialization with a valid URL
      const bankrefPicture = paymentData?.data?.bankrefPicture;
      if (bankrefPicture && typeof bankrefPicture === 'string') {
        setFileList([{
          uid: '-1',
          name: 'bankrefPicture',
          status: 'done',
          url: bankrefPicture, // Ensure URL is a valid string
        }]);
      } else {
        setFileList([]);
      }
    }
  }, [paymentData]);

  const onFinish = async (values) => {
    const formattedStartDate = startDate ? moment(startDate).format('YYYY-MM-DD') : '';
    const formattedCompletedDate = completedDate ? moment(completedDate).format('YYYY-MM-DD') : '';
    console.log(values)
    console.log(formattedStartDate)
    console.log(formattedCompletedDate)

    const formData = new FormData();
    formData.append('type', values?.type);
    formData.append('referance', values?.referance);
    formData.append('orignalAmount', values?.orignalAmount);
    formData.append('startDate', formattedStartDate);
    formData.append('completedData', formattedCompletedDate);
  
    if (fileList.length > 0) {
      formData.append('bankrefPicture', fileList[0].originFileObj);
    }
  
    try {
      const res = await updatePayment({ id, formData }).unwrap();
      console.log(res)
      toast.success('Payment updated successfully!');
      setTimeout(() => {
        navigate('/dashboard/paymentrevolut');
      }, 1000);
    } catch (error) {
      toast.error('Error updating payment!');
    }
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handlePreview = async (file) => {
    const src = file.url || file.thumbUrl;

    // Ensure src is a string before proceeding
    if (typeof src === 'string') {
      // If src is a valid string (URL), open it in a new window
      const imgWindow = window.open(src);
      imgWindow.document.write('<img src="' + src + '" />');
    } else {
      // If src is not a valid string, handle the error or show a default image
      console.error("Invalid file URL:", src);
    }
  };

  const onStartDateChange = (date, dateString) => {
    setStartdate(dateString ? moment(dateString, 'YYYY-MM-DD') : null);
  };

  const onCompletedDateChange = (date, dateString) => {
    setCompletedDate(dateString ? moment(dateString, 'YYYY-MM-DD') : null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading payment details!</div>;
  }

  return (
    <div className="max-w-xl mt-12 ml-32">
      <h1 className="text-xl mb-4 font-medium">Edit Payment</h1>

      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          type: paymentData?.data?.type,
          referance: paymentData?.data?.referance,
          orignalAmount: paymentData?.data?.orignalAmount,
        }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        {/* Start and Completed Date */}
        <div className="flex gap-4">
          <div className="w-full">
            <label className="block text-sm mb-2">* Start Date</label>
            <DatePicker
              className="w-full"
              onChange={onStartDateChange}
              value={startDate}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm mb-2">* Completed Date</label>
            <DatePicker
              className="w-full"
              onChange={onCompletedDateChange}
              value={completedDate}
            />
          </div>
        </div>

        {/* Type and Reference */}
        <div className="flex gap-4 mt-4">
          <div className="w-full">
            <Form.Item
              name="type"
              label="Type"
              rules={[{ required: true, message: 'Please input the type' }]}>
              <Input className="w-full border border-gray-300 rounded-md" />
            </Form.Item>
          </div>
          <div className="w-full">
            <Form.Item
              name="referance"
              label="Reference"
              rules={[{ required: true, message: 'Please input the reference' }]}>
              <Input className="w-full border border-gray-300 rounded-md" />
            </Form.Item>
          </div>
        </div>

        {/* Original Amount */}
        <Form.Item
          name="orignalAmount"
          label="Original Amount"
          rules={[{ required: true, message: 'Please input the amount' }]}>
          <InputNumber className="w-full border border-gray-300 rounded-md" />
        </Form.Item>

        {/* File Upload */}
        <Form.Item name="bankrefPicture" label="Upload Document Image">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            accept="image/*"
            showUploadList={{ showRemoveIcon: true }}
            maxCount={1}
          >
            {fileList.length < 1 && (
              <Button icon={<UploadOutlined />} className="w-full bg-gray-100 hover:bg-gray-200">
              
              </Button>
            )}
          </Upload>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            loading={isUpdating}
          >
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditRevolutPayment;
