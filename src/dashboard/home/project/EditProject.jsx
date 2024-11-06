import React, { useState, useEffect } from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useSingleProjectQuery } from '../../../redux/features/project/getProjectId';
// Uncomment and use your mutation hook for updating the project
// import { useUpdateProjectMutation } from '../../../redux/features/project/updateProject';
import toast from 'react-hot-toast';
import { useEditProjectMutation } from '../../../redux/features/project/editProject';

const EditProject = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  // Fetch the project data
  const { data: project, isLoading } = useSingleProjectQuery(id);
  // console.log(project);
  
  const [updateProject] =  useEditProjectMutation()

  useEffect(() => {
    if (project?.data) {
      // Set the initial form values with the fetched project data
      form.setFieldsValue({
        title: project.data.title,
        subTitle: project.data.subTitle,
        content: project.data.content,
      });

      // If the project has an image, add it to the fileList
      if (project.data.projectImage?.publicFileUrl) {
        setFileList([
          {
            uid: '-1',
            name: 'Existing File',
            status: 'done',
            url: project.data.projectImage.publicFileUrl,
          },
        ]);
      }
    }
  }, [project, form]);

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  const onFinish = async (values) => {
    // console.log(values);
    // console.log(fileList);
  
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('subTitle', values.subTitle);
    formData.append('content', values.content);
    formData.append('id', id);
  
    if (fileList.length && fileList[0].originFileObj) {
      formData.append('project', fileList[0].originFileObj);
    }
  
    try {
      const res = await updateProject(formData).unwrap();
      // console.log(res);
      if (res?.statusCode === 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate('/dashboard/home');
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      message.error('Failed to update project');
    }
  };

//   if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-[80%] mx-auto p-4 mt-12">
      <h2 className="text-xl font-semibold text-header mb-4">Edit Project</h2>
      <Form
        layout="vertical"
        form={form}
        className="bg-white shadow-lg p-6 rounded-lg"
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter Title' }]}
        >
          <Input placeholder="Project Title" />
        </Form.Item>

        <Form.Item
          name="subTitle"
          label="Sub Title"
          rules={[{ required: true, message: 'Please enter subTitle' }]}
        >
          <Input placeholder="Project Sub Title" />
        </Form.Item>

        <Form.Item
          name="content"
          label="Content"
          rules={[{ required: true, message: 'Please enter some details' }]}
        >
          <Input.TextArea rows={4} placeholder="Tell us about this project" />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={handleFileChange}
        >
          <Upload.Dragger
            name="files"
            fileList={fileList}
            onChange={handleFileChange}
            multiple={false}
            beforeUpload={() => false} // Prevent automatic upload
          >
            <p className="ant-upload-drag-icon">
              <UploadOutlined />
            </p>
            <p className="ant-upload-text">Drag & Drop Image</p>
            <Button type="primary" className="mt-2">Browse File</Button>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item className="text-right">
          <Button type="primary" htmlType="submit" className="bg-teal-500">
            Update Project
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProject;
