

// import React, { useState } from 'react';
// import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
// import 'tailwindcss/tailwind.css';  // Make sure Tailwind CSS is set up
// import { useNavigate } from 'react-router-dom';
// import { useAddRevolutPaymentMutation } from '../../../../redux/features/paymentInRevolut/addPayment';
// import toast from 'react-hot-toast';

// const AddPayment = () => {
//  const navigate = useNavigate()
//  const [startDate, setStartdate] = useState('')
//  const [completedData, setCompletedDate] = useState('')

//  const [paymentRevolut, {isLoading}] = useAddRevolutPaymentMutation()

//   const onFinish = async (values) => { 
//     const paymentData = {
//         ...values,
//         startDate,
//         completedData
//     }
//     console.log(paymentData);
    
//      try{
//         const res = await paymentRevolut(paymentData).unwrap();
//         console.log(res);
//         toast.success(res?.message)
//         setTimeout(() => {
//             navigate('/dashboard/paymentrevolut')
//         }, 1000);
        
//      }catch(error){
//         console.log(error)
//      }
//   };

//   const onDateChange = (date, dateString) => {
//     setStartdate(dateString)
//   };

//   const onDueDateChange = (date, dateString) => {
//      setCompletedDate(dateString)
//   };

//   return (
//     <div className="max-w-xl mt-12 ml-32">

//    <h1 className='text-xl mb-4 font-medium'>Add Payment</h1>

//       <Form
//         onFinish={onFinish}
//         layout="vertical"
        
//         className="bg-white p-6 rounded-lg shadow-md"
//       >
//         {/* Start Date */}
//        <div className='flex gap-4'>
//        <div className=' w-full'>
//             <label className="block text-sm  mb-2">* startDate</label>
//             <DatePicker className=" w-full" onChange={onDateChange} />
//           </div>
//           <div className=' w-full'>
//             <label className="block text-sm  mb-2">* completedDate</label>
            
//             <DatePicker className=" w-full" onChange={onDueDateChange} />
//           </div>

//        </div>
//         {/* Type */}
//         <div className='flex gap-4 mt-4'>
//         <div className=' w-full'>
//          <Form.Item
//           name="type"
//           label="Type"
//           rules={[{ required: true, message: 'Please input the type' }]}
//         >
//           <Input className="w-full border border-gray-300 rounded-md" />
//         </Form.Item>
//          </div>
//          <div className=' w-full'>
//          <Form.Item
//           name="referance"
//           label="Reference"
//           rules={[{ required: true, message: 'Please input the reference' }]}
//         >
//           <Input className="w-full border border-gray-300 rounded-md" />
//         </Form.Item>
//          </div>
       

//         {/* Reference */}
       
//         </div>

//         {/* Original Amount */}
//         <Form.Item
//           name="orignalAmount"
//           label="Original Amount"
//           rules={[{ required: true, message: 'Please input the amount' }]}
//         >
//           <InputNumber className="w-full border border-gray-300 rounded-md" />
//         </Form.Item>

//         {/* Submit Button */}
//         <Form.Item>
//           <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default AddPayment;



import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, InputNumber, Upload, message } from 'antd';
import 'tailwindcss/tailwind.css';  // Ensure Tailwind CSS is set up
import { useNavigate } from 'react-router-dom';
// import { useAddRevolutPaymentMutation } from '../../../../redux/features/paymentInRevolut/addPayment';
import toast from 'react-hot-toast';
import { UploadOutlined } from '@ant-design/icons';

const AddPayment = () => {
  const navigate = useNavigate();
  const [startDate, setStartdate] = useState('');
  const [completedData, setCompletedDate] = useState('');
  const [fileList, setFileList] = useState([]);  

  // const [paymentRevolut, { isLoading }] = useAddRevolutPaymentMutation();

  const onFinish = async (values) => {
    const formData = new FormData();
    console.log(fileList);
  
    // Append other form fields
    // formData.append('type', values.type);
    // formData.append('referance', values.referance);
    // formData.append('orignalAmount', values.orignalAmount);
    // formData.append('startDate', startDate);
    // formData.append('completedData', completedData);
  
    // Append the image or CSV file to FormData
    if (fileList.length > 0) {
      formData.append('csvFile', fileList[0].originFileObj); // Add the file to formData
    }

    // {{base_url}}/payment-invoice/upload
    // 10.0.60.205:4040
  
    try {
      // Use fetch to send a POST request with formData
      const response = await fetch('https://api.lenbec.com/api/v1/payment-invoice/upload', {
        method: 'POST',
        body: formData, // FormData will automatically set the correct content-type
      });
  
      // Check if the response is OK (status 200-299)
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        toast.success(res?.message);
  
        // Redirect to another page after success
        setTimeout(() => {
          navigate('/dashboard/paymentrevolut');
        }, 1000);
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };
  
  const onDateChange = (date, dateString) => {
    setStartdate(dateString);
  };

  const onDueDateChange = (date, dateString) => {
    setCompletedDate(dateString);
  };

  // Handle file change (image or CSV upload)
  const handleChange = ({ fileList: newFileList }) => {
    // Validate file type
    const isCsv = newFileList.every(file => file.type === 'text/csv');
    if (!isCsv) {
      message.error('Please upload only CSV files!');
      return;
    }
    setFileList(newFileList); // Update the file list on upload change
  };

  // Handle image or CSV preview
  const handlePreview = async (file) => {
    const src = file.url || file.thumbUrl;
    const imgWindow = window.open(src);
    imgWindow.document.write('<img src="' + src + '" />');
  };

  return (
    <div className="max-w-xl mt-12 ml-32">
      <h1 className="text-xl mb-4 font-medium">Add Payment</h1>

      <Form onFinish={onFinish} layout="vertical" className="bg-white p-6 rounded-lg shadow-md">
        {/* Start Date */}
        {/* <div className="flex gap-4">
          <div className="w-full">
            <label className="block text-sm mb-2">* Start Date</label>
            <DatePicker className="w-full" onChange={onDateChange} />
          </div>
          <div className="w-full">
            <label className="block text-sm mb-2">* Completed Date</label>
            <DatePicker className="w-full" onChange={onDueDateChange} />
          </div>
        </div> */}

        {/* Type and Reference */}
        {/* <div className="flex gap-4 mt-4">
          <div className="w-full">
            <Form.Item
              name="type"
              label="Type"
              rules={[{ required: true, message: 'Please input the type' }]}
            >
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
        </div> */}

        {/* Original Amount */}
        {/* <Form.Item
          name="orignalAmount"
          label="Original Amount"
          rules={[{ required: true, message: 'Please input the amount' }]}>
          <InputNumber className="w-full border border-gray-300 rounded-md" />
        </Form.Item> */}

        {/* File Upload */}
        <Form.Item name="bankrefPicture" label="Upload CSV Document">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // Your upload URL
            listType="picture-card"
            fileList={fileList} // The list of uploaded files
            onPreview={handlePreview} // Preview image when clicked
            onChange={handleChange} // Handle changes to file list
            accept=".csv" // Only allow CSV files
            showUploadList={{ showRemoveIcon: true }} // Show remove icon for each file
            maxCount={1} // Limit to 1 file upload
          >
            {fileList.length < 1 && (
              <Button icon={<UploadOutlined />} className="w-full bg-gray-100 hover:bg-gray-200">
                Upload CSV
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
            // loading={isLoading}
            >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPayment;