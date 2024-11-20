import { Input, Modal, DatePicker, Space, Table, Button } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";

import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./../style.module.css";
import { useNavigate } from "react-router-dom";
import { useShowAllProjectQuery } from "../../../../redux/features/runningProject/allProject";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useProjectDeleteMutation } from "../../../../redux/features/runningProject/projectDelete";
import toast from "react-hot-toast";

const { Search } = Input;

const dataSource = [
  {
    key: "1",
    customerName: "Bashar Islam",
    date: "16 Apr 2024",
    Amount: "45",
    Type: "player",
  },
  {
    key: "2",
    customerName: "Bashar Islam",
    date: "16 Apr 2024",
    Amount: "45",
    Type: "player",
  },
  {
    key: "3",
    customerName: "Bashar Islam",
    date: "16 Apr 2024",
    Amount: "45",
    Type: "player",
  },
];
const Project = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: runningProject } = useShowAllProjectQuery();
  console.log(runningProject);
  const [pDelete, {isLoading}] = useProjectDeleteMutation()
  
  const projectDelete = async (id) => {
         
    try{
      const res = await pDelete(id).unwrap();
      if(res?.statusCode == 200){
        toast.success(res?.message)
      }
    }catch(error){
      console.log(error)
    }
  }
  // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text, _, index) => index + 1,
    },
    {
      title: "Project-Name",
      dataIndex: "customerName",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          {/* <p className="font-medium">{record?.customerName}</p> */}
          <p className="font-medium"> {record?.projectName}</p>
        </div>
      ),
    },

    {
      title: "Address",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.address}</p>
        </div>
      ),
    },
    {
      title: "City",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.city}</p>
        </div>
      ),
    },

    {
      title: "Postal Code",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.postCode}</p>
        </div>
      ),
    },
    {
      title: "Start-Date",
      key: "date",
      dataIndex: "date",
      render: (_, record) => (
        // <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
        <p>{record?.startDate}</p>
      ),
    },
    {
      title: "End-Date",
      key: "date",
      dataIndex: "date",
      render: (_, record) => (
        // <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
        <p>{record?.endDate}</p>
      ),
    },

    {
      title: "Description",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.description}</p>
        </div>
      ),
    },

    {
      title: "Complete-status",
      key: "date",
      dataIndex: "date",
      render: (_, record) => (
        // <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
        <p>No</p>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => navigate(`updaterunning-project/${record?._id}`)}
            className="flex items-center px-2 py-1   text-[#87884a] font-semibold rounded hover:bg-gray-800 transition duration-300"
          >
            <EditOutlined className="mr-2 text-[18px]" />
          </button>

          <button
            onClick={() => projectDelete(record._id)}
            className="flex items-center px-2 py-1   text-[#f83232] font-semibold rounded hover:bg-gray-800 transition duration-300"
          >
            <RiDeleteBin6Line className="mr-2 text-[18px]" />
          </button>
        </Space>
      ),
    },
  ];

  const handleView = () => {
    // setUser(value);
    // console.log(value)
    setIsModalOpen(true);
  };
  //   const onChange = (date, dateString) => {
  //     console.log(date, dateString);
  //   };
  //   console.log(user);
  //   const handleChangePage = (page) => {
  //     setCurrentPage(page);
  //     console.log(page);
  //   };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="">
      <div className="rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] justify-between items-center">
          <div>
            <p className="text-header">Project List</p>
          </div>
          <div>
            <button
              onClick={() => navigate("addrunning-project")}
              className=" bg-primaryBg mr-4 text-[#FFFFFF] p-1 rounded-lg"
            >
              +Add Project
            </button>

            {/* <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space> */}
            <Search
              style={{
                width: "200px",
                marginLeft: "4px",
              }}
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
        <Table
          pagination={{
            total: runningProject?.data?.attributes.length,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
            defaultPageSize: 10,
            showSizeChanger: false,
            itemRender: (current, type, originalElement) => {
              if (type === "prev") {
                return (
                  <Button className={styles.paginationButton}>Back</Button>
                );
              }
              if (type === "next") {
                return (
                  <Button className={styles.paginationButton}>Next</Button>
                );
              }
              return originalElement;
            },
            className: styles.paginationCenter,
          }}
          columns={columns}
          dataSource={runningProject?.data?.attributes}
        />
      </div>
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        closeIcon={
          <CloseOutlined
            style={{
              color: "white", // Icon color
              backgroundColor: "#de0a26", // Background color of the close icon
              borderRadius: "10%", // Rounded background
              padding: "10px", // Padding inside the background
            }}
          />
        }
      >
        <div>
          <div className="flex justify-center items-center gap-2 flex-col border-b border-b-gray-300">
            <p className="text-[26px] mb-[16px] font-medium">
              Transaction Details
            </p>
          </div>
          <div className="p-[20px]">
            <div className="flex justify-between border-b py-[16px]">
              <p>Full Name:</p>
              <p>
                {/* {user?.name ? user?.name : "N/A"} */}
                absayed
              </p>
            </div>

            <div className="flex justify-between border-b py-[16px] ">
              <p>Email:</p>
              <p>
                {/* {user?.email ? user?.email : "N/A"} */}
                ab@gmail.com
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Phone:</p>
              <p>
                {/* {user?.phone ? user?.phone : "N/A"} */}
                +45269875
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>
                {/* {user?.createdAt  ? user?.createdAt?.split("T")[0] : "N/A"} */}
                23-11-24
              </p>
            </div>
            <div className="flex justify-between items-center pt-[16px]">
              <p>address:</p>
              <p className="px-[15px] py-[10px] rounded-lg">
                {/* Regular P550 */}
                UK
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-2 py-2 bg-slate-100 border-2 rounded-e-md w-[50%]">
              Downloard
            </button>
            <button className="px-2 py-2 bg-[#193664] text-white rounded-s-md w-[50%]">
              Print
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
