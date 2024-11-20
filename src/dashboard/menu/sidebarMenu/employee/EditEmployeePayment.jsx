import { Button, DatePicker, Form, Input, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './../style.module.css';
import { MdArrowBackIos } from "react-icons/md";
import { useSingleEmployeeQuery } from "../../../../redux/features/employee/singleEmployee";
import { useUpdatePaymentEmployeeMutation } from "../../../../redux/features/employeePayment/updatePayment";
import toast from "react-hot-toast";

const { Option } = Select;

const EditEmployeePayment = () => {
  const [form] = Form.useForm();
  const [date , setDate] = useState(' ')
  const navigate = useNavigate();
  const { id } = useParams(); 
  // console.log(id)
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState(null);
  const { data: singleEmployee, isLoading } = useSingleEmployeeQuery(id)
  const [updatePayment, ] = useUpdatePaymentEmployeeMutation()
  console.log(singleEmployee);
  useEffect(() => {
 
  if(singleEmployee){
      
    const paymentData = {
        
      employeeName: singleEmployee?.data?.name,
      amount: "1000",
      date: "1985-09-18",
      forWhatPayment: singleEmployee?.data?.forWhatPayment || 'n/a',
      action: "stevenjohn@example.com",
    };
    setInitialData(paymentData);
    form.setFieldsValue({
      ...paymentData,
  
    });
  } 
   
  }, [id, form , singleEmployee]);


  const onFinish = async (values) => {
    setLoading(true);
    console.log("Updated values:", values);
    
   const paymentData = {
    paymentAmount : values?.paymentAmount,
    forWhatPayment : values?.forWhatPayment,
    paymentDate : date
   }
   console.log(paymentData);
   
   try{

     const res = await updatePayment({paymentData, id}).unwrap();
     console.log(res)
     if(res?.statusCode == 200){
       toast.success(res?.message)
     }
     setTimeout(() => {
      setLoading(false);
      navigate("/dashboard/employeepayment");  
    }, 1000);
   }catch(error){
    console.log(error?.message);
    
   } 
  };

  const onChange = (date, dateString) => { 
  setDate(dateString)
};

  if (!initialData) return <p>Loading...</p>; // Show loading state if data is not yet fetched

  return (
    <div className="container mx-auto p-6 mt-12">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"> 
        <MdArrowBackIos className="cursor-pointer" onClick={() => navigate('/dashboard/employeepayment')} />
     Employee Payment</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-2 gap-6">
          <Form.Item
            label="Employee Name"
            name="employeeName"
            rules={[{ required: true, message: "Please enter employee name" }]}
          >
            <Input placeholder="Enter employee name" readOnly />
          </Form.Item>

          <Form.Item
            label="Amount"
            name="paymentAmount"
            rules={[{ required: true, message: "Please enter the amount" }]}
          >
            <Input placeholder="Enter amount" />
          </Form.Item>

          <Form.Item
            label="Date"
            name="paymentDate"
            rules={[{ required: true, message: "Please select the date" }]}
          >
            <DatePicker onChange={onChange} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="For What"
            name="forWhatPayment"
            rules={[{ required: true, message: "Please enter the purpose" }]}
          >
            <Input placeholder="Enter purpose of payment" />
          </Form.Item>

           {/* <Form.Item
            label="Action"
            name="action"
            rules={[{ required: true, message: "Please select an action" }]}
          >
            <Select placeholder="Select email">
              <Option value="stevenjohn@example.com">stevenjohn@example.com</Option>
              <Option value="johndoe@example.com">johndoe@example.com</Option>
             
            </Select>
          </Form.Item>  */}

        </div>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
              Save Changes
            </Button>
            <Button onClick={() => form.resetFields()}>Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditEmployeePayment;
