import React, { useState } from 'react';
import { Select, Input, Form, Button, Row, Col, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { useProjectListQuery } from '../../../../redux/features/hourlyratePerDay/projectList';
import { stringify } from 'postcss';
import { useAddCostMutation } from '../../../../redux/features/cost/costAdd';
import toast from 'react-hot-toast';

const { Option } = Select;

const months = [
  { label: 'January', value: '1' },
  { label: 'February', value: '2' },
  { label: 'March', value: '3' },
  { label: 'April', value: '4' },
  { label: 'May', value: '5' },
  { label: 'June', value: '6' },
  { label: 'July', value: '7' },
  { label: 'August', value: '8' },
  { label: 'September', value: '9' },
  { label: 'October', value: '10' },
  { label: 'November', value: '11' },
  { label: 'December', value: '12' },
];

const weeks = [
  { label: 'Week 1', value: 'Week 1' },
  { label: 'Week 2', value: 'Week 2' },
  { label: 'Week 3', value: 'Week 3' },
  { label: 'Week 4', value: 'Week 4' },
];

const AddCostPage = () => {
    const navigate = useNavigate()
  const [form] = Form.useForm();

  const [selectedProject, setSelectedProject] = useState(null);
 const [addcost, {isLoading}] = useAddCostMutation()
  
const { data: projects } = useProjectListQuery();
const projectOptions = projects?.data?.map((project) => ({
  label: project.projectName,
  value: project._id,
}));
const handleProjectChange = (value) => {
  setSelectedProject(value);
  console.log(value)

}

const handleSubmit = async () => {
    try {
      // Validate the form fields
      const values = await form.validateFields();
  
      // Prepare the data object
      const postData = {
        projectId: values.projectName,
        costType: values.costType,
        month: values.month,
        week: [
          {
            weekName: values.week,
            amount: values.amount,
          },
        ],
      };
  
      // Call the API and await the response
      const res = await addcost(postData).unwrap();
    console.log(res)
      // Handle the response
      if (res?.statusCode === 200) {
        toast.success(res?.message || "Cost added successfully!");
        setTimeout(() => {
            navigate('/dashboard/cost')
        }, 1000);
      } else {
        toast.error(res?.message || "An error occurred. Please try again.");
      }
    } catch (error) {
  
      console.error("Error:", error);
      toast.error(error?.message || "An unexpected error occurred.");
    }
  };
  

 

  return (
    <div className='mt-12'>
        <h1 className='text-xl py-4 font-semibold flex items-center gap-1'> <MdArrowBackIos className=' cursor-pointer' onClick={() => navigate('/dashboard/cost')} /> Add Cost</h1>

    <div style={{ padding: '20px', border: '1px solid #f0f0f0',  borderRadius: '10px' }}>
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Project Name"
              name="projectName"
              rules={[{ required: true, message: 'Please enter project name!' }]}
            >
              <Select
            //  style={{ width: 150 ,margin: 12 }}
              value={selectedProject}
              onChange={handleProjectChange}
              options={projectOptions}
              placeholder="Select Project"
              
              loading={!projects}
            /> 
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Cost Type"
              name="costType"
              rules={[{ required: true, message: 'Please enter cost type!' }]}
            >
              <Input placeholder="Enter cost type" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          
          <Col span={12}>
            <Form.Item
              label="Month"
              name="month"
              rules={[{ required: true, message: 'Please select a month!' }]}
            >
              <Select placeholder="Select a month">
                {months.map((month) => (
                  <Option key={month.value} value={month.value}>
                    {month.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Week"
              name="week"
              rules={[{ required: true, message: 'Please select a week!' }]}
            >
              <Select placeholder="Select a week">
                {weeks.map((week) => (
                  <Option key={week.value} value={week.value}>
                    {week.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Amount"
              name="amount"
              rules={[{ required: true, message: 'Please enter the amount!' }]}
            >
              <Input placeholder="Enter amount" />
            </Form.Item>
          </Col>
        </Row>
        <Button
        loading = {isLoading}
        className=' !bg-primaryBg !text-[#FFFFFF]' onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
};

export default AddCostPage;
