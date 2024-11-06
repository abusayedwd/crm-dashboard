// import { Button, DatePicker, Input, Modal, Space, Table } from "antd";
// import { BsInfoCircle } from "react-icons/bs";
// import { useState } from "react";
// import { CloseOutlined } from "@ant-design/icons";
// import styles from './../style.module.css'
// import './../table.css'
// import { useNavigate } from "react-router-dom";
// import { FaUsers } from "react-icons/fa6";
// const { Search } = Input;
 
// const dataSource = [
//     {
//       key: '1',
      
//       customerName: 'Bashar Islam',
//       email: 'abc@email.com',
//       address: 'Dhaka Bangladesh',
//       date: '16 Apr 2024',
//       phone:'4536656'
//     },
//     {
//       key: '2',
//       applicationId: '12345678',
//       customerName: 'Bashar Islam',
//       email: 'abc@email.com',
//       address: 'Dhaka Bangladesh',
//       date: '16 Apr 2024',
//       phone:'4536656'
//     },
//     {
//       key: '3',
//       applicationId: '12345678',
//       customerName: 'Bashar Islam',
//       email: 'abc@email.com',
//       address: 'Dhaka Bangladesh',
//       date: '16 Apr 2024',
//       phone:'4536656'
//     },
// ]
// const EmpoyeeWeeklyRate = () => {
//    const navigate = useNavigate()
//     const [isModalOpen, setIsModalOpen] = useState(false);

 
// // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 
//   const columns = [
//     {
//       title: "#SI",
//       dataIndex: "si",
//       key: "si",
//       render: (text,_,index) => index + 1,
//     },
//     {
//       title: "Employee",
//       dataIndex: "name",
//       key: "name",
//       render: (_, record) => (
//         <div className="flex gap-2 items-center">
           
//           <p className="font-medium">Absayed</p>
//         </div>
//       ),
//     },
//     {
//       title: "Amount",
//       dataIndex: "name",
//       key: "name",
//       render: (_, record) => (
//         <div className="flex gap-2 items-center">
           
//           <p className="font-medium">$423</p>
//         </div>
//       ),
//     },
//     {
//       title: "Date",
//       dataIndex: "name",
//       key: "name",
//       render: (_, record) => (
//         <div className="flex gap-2 items-center">
           
//           <p className="font-medium">11-01-24</p>
//         </div>
//       ),
//     },
//     {
//       title: "For What",
//       dataIndex: "name",
//       key: "name",
//       render: (_, record) => (
//         <div className="flex gap-2 items-center">
           
//           <p className="font-medium">Team manager</p>
//         </div>
//       ),
//     },
    
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <Space size="middle">
         
//             <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" />
          
//           {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
//         </Space>
//       ),
//     },
//   ];
  
//   const handleView = () => {
//     // setUser(value);
//     // console.log(value)
//     setIsModalOpen(true);
//   };
// //   const onChange = (date, dateString) => {
// //     console.log(date, dateString);
// //   };
// //   console.log(user);
// //   const handleChangePage = (page) => {
// //     setCurrentPage(page);
// //     console.log(page);
// //   };
// const onSearch = (value, _e, info) => console.log(info?.source, value);
// const onChange = (date, dateString) => {
//   console.log(date, dateString);
// };
//   return (
//     <div className="mt-12"> 
//       <div className="rounded-t-lg mt-[24px]">
//         <div className="flex py-[22px] justify-between items-center">
//           <div>

//           <p className="text-header">Weekly Rate</p>
//           </div>
//           <div>
//            <Space direction="vertical">
//     <DatePicker onChange={onChange} />
   
//   </Space>
//           <Search style={{
//             width:"200px",
//             marginLeft:'4px'
//           }} placeholder="input search text" onSearch={onSearch} enterButton />
//           </div>
//         </div>
        
        
//         <Table
//          pagination={{
//           total: dataSource.length,
//           showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
//           defaultPageSize: 5,
//           showSizeChanger: false,
//           itemRender: (current, type, originalElement) => {
//             if (type === 'prev') {
//               return <Button className={styles.paginationButton}>Back</Button>;
//             }
//             if (type === 'next') {
//               return <Button className={styles.paginationButton}>Next</Button>;
//             }
//             return originalElement;
//           },
//           className: styles.paginationCenter,
//         }}
      
//           columns={columns}
//           dataSource={dataSource}
          
//         />
       
//       </div>
//       <Modal
//         open={isModalOpen}
//         onOk={() => setIsModalOpen(false)}
//         onCancel={() => setIsModalOpen(false)}
//         footer={[]}
//         closeIcon={
//           <CloseOutlined
//             style={{
//               color: "white", // Icon color
//               backgroundColor: "#de0a26", // Background color of the close icon
//               borderRadius: "10%", // Rounded background
//               padding: "10px", // Padding inside the background
//             }}
//           />
//         }
//       >
//       <div>
//         <div className="flex justify-center items-center gap-2 flex-col py-[16px] border-b border-b-gray-300">
//            <h1 className="text-xl font-medium">Player Details</h1>
//         </div>
//         <div  className="p-[20px]">
//         <div className="flex justify-between border-b mt-4 py-[16px]">
//             <p>Full Name:</p>
//             <p>
//               {/* {user?.name ? user?.name : "N/A"} */}
//               absayed
//             </p>
//           </div>
        
         
//           <div className="flex justify-between border-b py-[16px] ">
//             <p>Email:</p>
//             <p>
//               {/* {user?.email ? user?.email : "N/A"} */}
//               ab@gmail.com
//             </p>
//           </div>
//           <div className="flex justify-between border-b py-[16px]">
//             <p>Phone:</p>
//             <p>
//               {/* {user?.phone ? user?.phone : "N/A"} */}
//               +45269875
//             </p>
//           </div>
//           <div className="flex justify-between border-b py-[16px]">
//             <p>Date:</p>
//             <p>
//               {/* {user?.createdAt  ? user?.createdAt?.split("T")[0] : "N/A"} */}
//               23-11-24
//             </p>
//           </div>
//           <div className="flex justify-between items-center pt-[16px]">
//             <p>address:</p>
//             <p className="px-[15px] py-[10px] rounded-lg">
//               {/* Regular P550 */}
//               UK
//             </p>
//           </div>

//         </div>
//       </div>
//       </Modal>
//     </div>
//   );
// };

// export default EmpoyeeWeeklyRate;
import { Button, DatePicker, Input, Modal, Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./../style.module.css";
import "./../table.css";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

// Generate data source
const dataSource = new Array(5).fill({}).map((_, index) => ({
  key: index + 1,
  name: "Enrique",
  ...Array.from({ length: 52 }, (_, weekIndex) => [`week${weekIndex + 1}`, 39]).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {}
  ),
}));

// Generate columns for 52 weeks
const weekColumns = Array.from({ length: 52 }, (_, index) => ({
  title: `Wk ${index + 1}`,
  dataIndex: `week${index + 1}`,
  key: `week${index + 1}`,
}));

const EmployeeWeeklyRate = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Basic columns
  const columns = [
    {
      title: "Sl No.",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Employee",
      dataIndex: "name",
      key: "name",
      className: "nowrap-text", // Add a class to prevent text wrapping
    },
    ...weekColumns,
    {
      title: "Action",
      key: "action",
      fixed: "right",
      render: () => (
        <Space size="middle">
          <BsInfoCircle
            onClick={() => setIsModalOpen(true)}
            size={18}
            className="text-red-500 cursor-pointer"
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="mt-12">
      <div className="rounded-t-lg mt-6">
        <div className="flex py-6 justify-between items-center">
          <p className="text-header">Employee Hours per Week</p>
          <div>
            <Space direction="vertical">
              <DatePicker onChange={(date, dateString) => console.log(date, dateString)} />
            </Space>
            <Search
              style={{ width: "200px", marginLeft: "4px" }}
              placeholder="Search"
              onSearch={(value) => console.log(value)}
              enterButton
            />
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: dataSource.length,
              onChange: (page, pageSize) => {
                setCurrentPage(page);
                setPageSize(pageSize);
              },
              showSizeChanger: true,
              pageSizeOptions: ["10", "20", "50", "100"],
            }}
            scroll={{ x: 3000 }}
          />
        </div>

        <Modal
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
          closeIcon={
            <CloseOutlined
              style={{
                color: "white",
                backgroundColor: "#de0a26",
                borderRadius: "10%",
                padding: "10px",
              }}
            />
          }
        >
          <div className="p-5">
            <h1 className="text-xl font-medium text-center">Employee Details</h1>
            <div className="mt-4">
              <p className="border-b py-2 flex justify-between">
                <span>Full Name:</span> <span>Enrique</span>
              </p>
              <p className="border-b py-2 flex justify-between">
                <span>Email:</span> <span>enrique@example.com</span>
              </p>
              <p className="border-b py-2 flex justify-between">
                <span>Phone:</span> <span>+123456789</span>
              </p>
              <p className="border-b py-2 flex justify-between">
                <span>Date:</span> <span>11-01-24</span>
              </p>
              <p className="py-2 flex justify-between">
                <span>Address:</span> <span>UK</span>
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EmployeeWeeklyRate;
