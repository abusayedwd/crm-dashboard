import { Button, DatePicker, Input, Modal, Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from './../style.module.css'
import './../table.css'
import { useNavigate } from "react-router-dom";
import { useAllEmployeeQuery } from "../../../../redux/features/employee/allEmployee";
import { useDeleteEmployeeMutation } from "../../../../redux/features/employee/deleteEmployee";
import toast, { Toaster } from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
const { Search } = Input;
 
const dataSource = [
    {
      key: '1',
      
      customerName: 'Bashar Islam',
      email: 'abc@email.com',
      address: 'Dhaka Bangladesh',
      date: '16 Apr 2024',
      phone:'4536656'
    },
    {
      key: '2',
      applicationId: '12345678',
      customerName: 'Bashar Islam',
      email: 'abc@email.com',
      address: 'Dhaka Bangladesh',
      date: '16 Apr 2024',
      phone:'4536656'
    },
    {
      key: '3',
      applicationId: '12345678',
      customerName: 'Bashar Islam',
      email: 'abc@email.com',
      address: 'Dhaka Bangladesh',
      date: '16 Apr 2024',
      phone:'4536656'
    },
]
const EmployeeList = () => {
   const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({})
 const {data: employees, isLoading} = useAllEmployeeQuery()
 const [deleteEmployee] = useDeleteEmployeeMutation()
//  console.log(employees?.data);
//  console.log(user);
 
// const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const employeeDelete = async (id)=> {
  try{
    const res = await  deleteEmployee(id).unwrap();
    if(res?.statusCode == 200){
      toast.success(res?.message)
    } 
  }catch(error){
    console.log(error); 
  }
}
 
  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text,_,index) => index + 1,
    },
    {
      title: "Customer",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
           
          <p className="font-medium">{record.name}</p>
        </div>
      ),
    },

    {
      title: "HR ID",
      dataIndex: "Id",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
           
          <p className="font-medium">{record.hrId}</p>
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
      title: "Postal Code",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
           
          <p className="font-medium">{record?.postalCode}</p>
        </div>
      ),
    },
    {
      title: "County",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
           
          <p className="font-medium">{record?.country}</p>
        </div>
      ),
    },
    // {
    //   title: "Contact Person",
    //   dataIndex: "name",
    //   key: "name",
    //   render: (_, record) => (
    //     <div className="flex gap-2 items-center">
           
    //       <p className="font-medium">hangcuay</p>
    //     </div>
    //   ),
    // },
    {
      title: "Mobile No.",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
           
          <p className="font-medium">{record?.mobile}</p>
        </div>
      ),
    },
   
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, record) => (
        <p>{record?.email}</p>
      )
    },
    
    // {
    //   title: "Billing Email",
    //   key: "mail",
    //   dataIndex: "email",
    //   render: (_, record) => (
    //     // <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
    //     <p>hang@yaho.com</p>
    //   )
    // },
    
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
         
            {/* <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" /> */}
          
            <button onClick={() => handleView(record)} className="flex items-center px-2 py-1 bg-[#5b6475] text-[#FFFFFF] font-semibold rounded hover:bg-gray-800 transition duration-300">
            
            details
          </button>
            <button onClick={() => navigate(`editemployee/${record?._id}`)} className="flex items-center px-2 py-1   text-[#87884a] font-semibold rounded hover:bg-gray-800 transition duration-300">
            <EditOutlined className="mr-2 text-[18px]" />
           
          </button>
          
          <button
   onClick={() => employeeDelete(record._id)}
  className="flex items-center px-2 py-1   text-[#f83232] font-semibold rounded hover:bg-gray-800 transition duration-300"
>
<RiDeleteBin6Line className="mr-2 text-[18px]" />
 
</button>
        </Space>
      ),
    },
  ];
  
  const handleView = (value) => {
    setUser(value);
    console.log(value)
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
       <Toaster />
      <div className="rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] justify-between items-center">
          <div>

          <p className="text-header">Employee</p>
          </div>
          <div>
          <button onClick={() => navigate('addemployee')} className=' bg-primaryBg mr-4 text-[#FFFFFF] p-1 rounded-lg'>+Add Employee</button>
          <Space direction="vertical">
    <DatePicker onChange={onChange} />
   
  </Space>
          <Search style={{
            width:"200px",
            marginLeft:'4px'
          }} placeholder="input search text" onSearch={onSearch} enterButton />
          </div>
        </div>
        <Table
         pagination={{
          total: employees?.data.length,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          defaultPageSize: 5,
          showSizeChanger: false,
          itemRender: (current, type, originalElement) => {
            if (type === 'prev') {
              return <Button className={styles.paginationButton}>Back</Button>;
            }
            if (type === 'next') {
              return <Button className={styles.paginationButton}>Next</Button>;
            }
            return originalElement;
          },
          className: styles.paginationCenter,
        }}
      
          columns={columns}
          dataSource={employees?.data}
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
           <h1 className="text-xl font-medium">Employee Details</h1>
        </div>
        <div  className="p-[20px]">
        <div className="flex justify-between border-b mt-4 py-[16px]">
            <p>Full Name:</p>
            <p>
              {user?.name ? user?.name : "N/A"}
              {/* absayed */}
            </p>
          </div>
        
         
          <div className="flex justify-between border-b py-[16px] ">
            <p>Email:</p>
            <p>
              {user?.email ? user?.email : "N/A"}
              {/* ab@gmail.com */}
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Phone:</p>
            <p>
              {user?.mobile ? user?.mobile : "N/A"}
              {/* +45269875 */}
            </p>
          </div>
          <div className="flex justify-between border-b py-[16px]">
            <p>Date:</p>
            <p>
              {user?.createdAt  ? user?.createdAt?.split("T")[0] : "N/A"}
            
            </p>
          </div>
          <div className="flex justify-between items-center border-b pt-[16px]">
            <p>address:</p>
            <p className="px-[15px] py-[10px] rounded-lg">
              {user?.address} 
            
            </p>
          </div>
          <div className="flex justify-between items-center border-b pt-[16px]">
            <p>dateOfBirth:</p>
            <p className="px-[15px] py-[10px] rounded-lg">
              {user?.address} 
            
            </p>
          </div>
          <div className="flex justify-between items-center border-b pt-[16px]">
            <p>address:</p>
            <p className="px-[15px] py-[10px] rounded-lg">
              {user?.dateOfBirth} 
            
            </p>
          </div>
          <div className="flex justify-between items-center border-b pt-[16px]">
            <p>inServiceForm:</p>
            <p className="px-[15px] py-[10px] rounded-lg">
              {user?.inServiceForm} 
            
            </p>
          </div>
          <div className="flex justify-between items-center border-b pt-[16px]">
            <p>bnsNr:</p>
            <p className="px-[15px] py-[10px] rounded-lg">
              {user?.bnsNr} 
            
            </p>
          </div>
          <div className="flex justify-between items-center border-b pt-[16px]">
            <p>ibn:</p>
            <p className="px-[15px] py-[10px] rounded-lg">
              {user?.ibn} 
            
            </p>
          </div>
          <div className="flex justify-between items-center border-b pt-[16px]">
            <p>city:</p>
            <p className="px-[15px] py-[10px] rounded-lg">
              {user?.city} 
            
            </p>
          </div>

        </div>
      </div>
      </Modal>
    </div>
  );
};

export default EmployeeList;
