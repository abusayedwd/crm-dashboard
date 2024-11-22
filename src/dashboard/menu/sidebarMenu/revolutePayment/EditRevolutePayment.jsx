// import React, { useState, useEffect } from 'react';
// import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
// import 'tailwindcss/tailwind.css';  // Make sure Tailwind CSS is set up
// import { useNavigate, useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { useSinglePaymentQuery } from '../../../../redux/features/paymentInRevolut/getById';
// import { useUpdatePaymentMutation } from '../../../../redux/features/paymentInRevolut/updatePayment';
 

// const Editrevolutepayment = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();  // Assuming you have a payment ID in the URL
//   const [startDate, setStartdate] = useState('');
//   const [completedData, setCompletedDate] = useState('');
  
 
//   const {data: paymentData, error} = useSinglePaymentQuery(id)
//   console.log(paymentData,  error);
  
//   const [updatePayment] = useUpdatePaymentMutation();

//   // If data is loaded, set initial values
//   useEffect(() => {
//     if (paymentData) {
//       setStartdate(paymentData?.data?.startDate);
//       setCompletedDate(paymentData?.data?.completedData);
//     }
//   }, [paymentData]);

//   const onFinish = async (values) => {
//     const updatedPaymentData = {
//       ...values,
//       startDate,
//       completedData,
//     };
//     console.log(updatedPaymentData);

//     try {
//       const res = await updatePayment({updatedPaymentData, id}).unwrap();
//       console.log(res);
//       toast.success('Payment updated successfully!');
//       setTimeout(() => {
//         navigate('/dashboard/paymentrevolut');
//       }, 1000);
//     } catch (error) {
//       console.error(error);
//       toast.error('Error updating payment!');
//     }
//   };

//   const onStartDateChange = (date, dateString) => {
//     setStartdate(dateString);
//   };

//   const onCompletedDateChange = (date, dateString) => {
//     setCompletedDate(dateString);
//   };

//   // if (isLoading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (isError) {
//   //   return <div>Error loading payment data.</div>;
//   // }

//   return (
//     <div className="max-w-xl mt-12 ml-32">
//       <h1 className="text-xl mb-4 font-medium">Edit Payment</h1>

//       <Form
//         onFinish={onFinish}
//         layout="vertical"
//         initialValues={{
//           type: paymentData?.data?.type,
//           referance: paymentData?.data?.referance,
//           orignalAmount: paymentData?.data?.orignalAmount,
//         }}
//         className="bg-white p-6 rounded-lg shadow-md"
//       >
//         {/* Start and Completed Date */}
//         <div className="flex gap-4">
//           <div className="w-full">
//             <label className="block text-sm mb-2">* Start Date</label>
//             <DatePicker 
//               className="w-full" 
//               onChange={onStartDateChange} 
//               // value={startDate ? moment(startDate, 'YYYY-MM-DD') : null}
//             />
//           </div>
//           <div className="w-full">
//             <label className="block text-sm mb-2">* Completed Date</label>
//             <DatePicker 
//               className="w-full" 
//               onChange={onCompletedDateChange} 
//               // value={completedDate ? moment(completedDate, 'YYYY-MM-DD') : null}
//             />
//           </div>
//         </div>

//         {/* Type and Reference */}
//         <div className="flex gap-4 mt-4">
//           <div className="w-full">
//             <Form.Item
//               name="type"
//               label="Type"
//               rules={[{ required: true, message: 'Please input the type' }]}
//             >
//               <Input className="w-full border border-gray-300 rounded-md" />
//             </Form.Item>
//           </div>
//           <div className="w-full">
//             <Form.Item
//               name="referance"
//               label="Reference"
//               rules={[{ required: true, message: 'Please input the reference' }]}
//             >
//               <Input className="w-full border border-gray-300 rounded-md" />
//             </Form.Item>
//           </div>
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
//           <Button
//             type="primary"
//             htmlType="submit"
//             className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             // loading={isLoading}
//           >
//             Save Changes
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Editrevolutepayment;


import React, { useState, useEffect } from 'react';
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';
import 'tailwindcss/tailwind.css';  // Make sure Tailwind CSS is set up
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSinglePaymentQuery } from '../../../../redux/features/paymentInRevolut/getById';
import { useUpdatePaymentMutation } from '../../../../redux/features/paymentInRevolut/updatePayment';
import moment from 'moment';  // Import moment.js for date manipulation

const Editrevolutepayment = () => {
  const navigate = useNavigate();
  const { id } = useParams();  // Assuming you have a payment ID in the URL
  const [startDate, setStartdate] = useState('');
  const [completedDate, setCompletedDate] = useState('');
  
  const { data: paymentData, error } = useSinglePaymentQuery(id);
  console.log(paymentData);
  
  const [updatePayment] = useUpdatePaymentMutation();

  // If data is loaded, set initial values
  useEffect(() => {
    if (paymentData) {
      setStartdate(paymentData?.data?.startDate);
      setCompletedDate(paymentData?.data?.completedData);
    }
  }, [paymentData]);

  const onFinish = async (values) => {
    // Convert startDate and completedDate to the format expected by your backend
    const updatedPaymentData = {
      ...values,
      startDate: moment(startDate, 'MM-DD-YYYY').format('YYYY-MM-DD'),
      completedData: moment(completedDate, 'MM-DD-YYYY').format('YYYY-MM-DD'),
    };
    console.log(updatedPaymentData);

    try {
      const res = await updatePayment({ updatedPaymentData, id }).unwrap();
      console.log(res);
      toast.success('Payment updated successfully!');
      setTimeout(() => {
        navigate('/dashboard/paymentrevolut');
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error('Error updating payment!');
    }
  };

  const onStartDateChange = (date, dateString) => {
    setStartdate(dateString);
  };

  const onCompletedDateChange = (date, dateString) => {
    setCompletedDate(dateString);
  };

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
              value={startDate ? moment(startDate, 'MM-DD-YYYY') : null}  // Ensure moment object is passed here
            />
          </div>
          <div className="w-full">
            <label className="block text-sm mb-2">* Completed Date</label>
            <DatePicker 
              className="w-full" 
              onChange={onCompletedDateChange} 
              value={completedDate ? moment(completedDate, 'MM-DD-YYYY') : null}  // Ensure moment object is passed here
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

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Editrevolutepayment;
