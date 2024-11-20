
import { Button, DatePicker, Form, Input, Select, Space } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './../style.module.css';

const { Option } = Select;

const AddEmployeePayment = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('')
  console.log(date);
  
  const onFinish = (values) => {
    setLoading(true);
    console.log("Form values:", values);
    // Add your submit logic here, e.g., API call
    // setTimeout(() => {
    //   setLoading(false);
    //   navigate("/employee-payments"); // Redirect after submission
    // }, 1000);
  };

  const onChange = (date, dateString) => {
    setDate(dateString);
    // console.log(dateString);
     // Set the selected date in the required format
  };

  return (
    <div className="container mx-auto p-6 mt-12">
      <h2 className="text-xl font-semibold mb-4">Add Employee Payment</h2>
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
            <Input placeholder="Enter employee name" />
          </Form.Item>

          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: "Please enter the amount" }]}
          >
            <Input placeholder="Enter amount" />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select the date" }]}
          >
            <DatePicker onChange={onChange} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="For What"
            name="forWhat"
            rules={[{ required: true, message: "Please enter the purpose" }]}
          >
            <Input placeholder="Enter purpose of payment" />
          </Form.Item>

          <Form.Item
            label="Action"
            name="action"
            rules={[{ required: true, message: "Please select an action" }]}
          >
            <Select placeholder="Select email">
              <Option value="stevenjohn@example.com">stevenjohn@example.com</Option>
              <Option value="johndoe@example.com">johndoe@example.com</Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>
        </div>

        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
            <Button onClick={() => form.resetFields()}>Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddEmployeePayment;
