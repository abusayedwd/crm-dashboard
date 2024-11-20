import { Button, DatePicker, Input, Modal, Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./../style.module.css";
import "./../table.css";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useHourlyRatEmployeeQuery } from "../../../../redux/features/hourlyEmRate/hourlyEmployeeRate";
import { useDeleteHourlyRateEmployeeMutation } from "../../../../redux/features/hourlyEmRate/deleteHourlyRateEmployee";
import toast from "react-hot-toast";
import { useAllEmployeeQuery } from "../../../../redux/features/employee/allEmployee";
const { Search } = Input;

const dataSource = [
  {
    key: "1",

    customerName: "Bashar Islam",
    email: "abc@email.com",
    address: "Dhaka Bangladesh",
    date: "16 Apr 2024",
    phone: "4536656",
  },
  {
    key: "2",
    applicationId: "12345678",
    customerName: "Bashar Islam",
    email: "abc@email.com",
    address: "Dhaka Bangladesh",
    date: "16 Apr 2024",
    phone: "4536656",
  },
  {
    key: "3",
    applicationId: "12345678",
    customerName: "Bashar Islam",
    email: "abc@email.com",
    address: "Dhaka Bangladesh",
    date: "16 Apr 2024",
    phone: "4536656",
  },
];
const EmployeeRatehr = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
 
 
  const {data: employees, } = useAllEmployeeQuery()
  // console.log(employees);
  
  
// const deleteHourlyRate = async (id) => {
//   try{
//     const res = await deleteHourly(id).unwrap();
//     // console.log(res)
//     if(res?.statusCode == 200){
//       toast.success('Hourly rate Employee deleted')
//     }
//   }catch(error){
//     console.log(error)
//   }
// }
  // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text, _, index) => index + 1,
    },
    {
      title: "Employee",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.name}</p>
        </div>
      ),
    },
    {
      title: "8 hourly rate",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">${record?.eightHourRate}</p>
        </div>
      ),
    },
    {
      title: "10 hourly rate",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">${record?.tenHourRate}</p>
        </div>
      ),
    },
   
    {
      title: "Function",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.function}</p>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
         <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
        </div>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" /> */}

          {/* <button
            onClick={() => handleView(record)}
            className="flex items-center px-2 py-1 bg-[#5b6475] text-[#FFFFFF] font-semibold rounded hover:bg-gray-800 transition duration-300"
          >
            details
          </button> */}
          <button
            onClick={() => navigate(`edithourlyrate/${record?._id}`)}
            className="flex items-center px-2 py-1 bg-primaryBg   text-[#FFFFFF] font-semibold rounded hover:bg-gray-800 transition duration-300"
          >
            <EditOutlined className="mr-2 text-[18px]" />
            add hourly rate
          </button>

          {/* <button
            onClick={() => deleteHourlyRate(record._id)}
            className="flex items-center px-2 py-1   text-[#f83232] font-semibold rounded hover:bg-gray-800 transition duration-300"
          >
            <RiDeleteBin6Line className="mr-2 text-[18px]" />
          </button> */}
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
  // const onChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };
  return (
    <div className="">
      <div className="rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] justify-between items-center">
          <div>
            <p className="text-header">Customer</p>
          </div>
          <div>
            {/* <button
              onClick={() => navigate("addhourlyrate")}
              className=" bg-primaryBg mr-4 text-[#FFFFFF] p-1 rounded-lg"
            >
              +Add Employee
            </button> */}

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
            total:  employees?.data?.attributes.length,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
            defaultPageSize: 5,
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
          dataSource={employees?.data?.attributes}
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
          <div className="flex justify-center items-center gap-2 flex-col py-[16px] border-b border-b-gray-300">
            <h1 className="text-xl font-medium">Player Details</h1>
          </div>
          <div className="p-[20px]">
            <div className="flex justify-between border-b mt-4 py-[16px]">
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
        </div>
      </Modal>
    </div>
  );
};

export default EmployeeRatehr;
