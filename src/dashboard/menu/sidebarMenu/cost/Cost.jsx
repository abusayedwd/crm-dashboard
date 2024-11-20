// import { Button, DatePicker, Input, Modal, Select, Space, Table } from "antd";
// import { BsInfoCircle } from "react-icons/bs";
// import { useEffect, useState } from "react";
// import { CloseOutlined } from "@ant-design/icons";
// import styles from './../style.module.css'
// import './../table.css'
// import { useNavigate } from "react-router-dom";
// import { useProjectListQuery } from "../../../../redux/features/hourlyratePerDay/projectList";
// import { FaCalendarAlt } from "react-icons/fa";
// import { useAllcostQuery } from "../../../../redux/features/cost/costshow";
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
// const Cost = () => {
//    const navigate = useNavigate()
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedProject, setSelectedProject] = useState(null);
//     const [month, setMonth] = useState(' ')
//     const [year, setYear] = useState('')
//     console.log(month);

//  const {data: costs} = useAllcostQuery({Year: year, projectId: selectedProject, month: month})
//  console.log(costs);
 
// // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 
//   const columns = [
//     {
//       title: "#SI",
//       dataIndex: "si",
//       key: "si",
//       render: (text,_,index) => index + 1,
//     },
//     {
//       title: "CostType",
//       dataIndex: "name",
//       key: "name",
//       render: (_, record) => (
//         <div className="flex gap-2 items-center">
           
//           <p className="font-medium">Absayed</p>
//         </div>
//       ),
//     },
//     {
//       title: "week 1",
//       dataIndex: "name",
//       key: "name",
//       render: (_, record) => (
//         <div className="flex gap-2 items-center">
           
//           <p className="font-medium">$423</p>
//         </div>
//       ),
//     },
//     {
//       title: "week 2",
//       dataIndex: "name",
//       key: "name",
//       render: (_, record) => (
//         <div className="flex gap-2 items-center">
           
//           <p className="font-medium">11-01-24</p>
//         </div>
//       ),
//     },
//     {
//       title: "week 3",
//       dataIndex: "name",
//       key: "name",
//       render: (_, record) => (
//         <div className="flex gap-2 items-center">
           
//           <p className="font-medium">Team manager</p>
//         </div>
//       ),
//     },
//     {
//       title: "week 4",
//       dataIndex: "name",
//       key: "name",
//       render: (_, record) => (
//         <div className="flex gap-2 items-center">
           
//           <p className="font-medium">Team manager</p>
//         </div>
//       ),
//     },
    
//     // {
//     //   title: "Action",
//     //   key: "action",
//     //   render: (_, record) => (
//     //     <Space size="middle">
         
//     //         <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" />
          
//     //       {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
//     //     </Space>
//     //   ),
//     // },
//   ];
  
//   const generateYears = (startYear, endYear) => {
//     const years = [];
//     for (let year = startYear; year <= endYear; year++) {
//       years.push(year);
//     }
//     return years;
//   };
  
 
//     const currentYear = new Date().getFullYear();
//     const years = generateYears(currentYear - 100, currentYear + 20);  
  
//     const handleMonthChange = (value) => {
//       console.log(`Selected year: ${value}`);
//       setYear(value)
//     };


  
// const { data: projects } = useProjectListQuery();
// const projectOptions = projects?.data?.map((project) => ({
//   label: project.projectName,
//   value: project._id,
// }));
// useEffect(() => {
//   if (projectOptions?.length > 0 && !selectedProject) {
//     setSelectedProject(projectOptions[0].value);
//   }
// }, [projectOptions, selectedProject]);

// const handleProjectChange = (value) => {
//   setSelectedProject(value);
//   // console.log(value)

// }
// const months = [
//   { label: 'January', value: '1' },
//   { label: 'February', value: '2' },
//   { label: 'March', value: '3' },
//   { label: 'April', value: '4' },
//   { label: 'May', value: '5' },
//   { label: 'June', value: '6' },
//   { label: 'July', value: '7' },
//   { label: 'August', value: '8' },
//   { label: 'September', value: '9' },
//   { label: 'October', value: '10' },
//   { label: 'November', value: '11' },
//   { label: 'December', value: '12' },
// ];

 
//   const handleChange = (value) => { 
//     setMonth(value)
//   };

//   return (
//     <div className="">
       
//       <div className="rounded-t-lg mt-[24px]">
//         <div className="flex py-[22px] justify-between items-center">
//           <div>

//           <p className="text-header">Cost</p>
//           </div>
//           <div>
//            <button
//             onClick={() => navigate('addcost')}
//             className="bg-primaryBg mr-4 text-[#FFFFFF] p-1 rounded-lg"
//           >
//             + Add cost
//           </button>
//            <Space direction="vertical"> 
//             <Select
//              style={{ width: 150 ,margin: 12 }}
//               value={selectedProject}
//               onChange={handleProjectChange}
//               options={projectOptions}
//               placeholder="Select Project"
              
//               loading={!projects}
//             /> 
   
//   </Space>
//       <Select
//       style={{ width: 150 }}
//       placeholder={
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <span>Select a month</span>
//           <FaCalendarAlt style={{ marginLeft: 8 }} />
//         </div>
//       }
//       onChange={handleChange}
//     >
//       {months.map((month) => (
//         <Option key={month.value} value={month.value}>
//           {month.label}
//         </Option>
//       ))}
//     </Select>

//     <Select
//       style={{ width: 150 , marginLeft: 10}}
//       placeholder="Select a year"
//       onChange={handleMonthChange}
//     >
//       {years.map((year) => (
//         <Option key={year} value={year}>
//           {year}
//         </Option>
//       ))}
//     </Select>
  
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

// export default Cost;

import React, { useEffect, useState } from "react";
import { Table, Select, Space } from "antd";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAllcostQuery } from "../../../../redux/features/cost/costshow";
import { useProjectListQuery } from "../../../../redux/features/hourlyratePerDay/projectList";

const Cost = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("2024");

  const { data: costs } = useAllcostQuery({
    Year: year,
    projectId: selectedProject,
    month: month,
  });

  const { data: projects } = useProjectListQuery();
  const projectOptions = projects?.data?.map((project) => ({
    label: project.projectName,
    value: project._id,
  }));

  useEffect(() => {
    if (projectOptions?.length > 0 && !selectedProject) {
      setSelectedProject(projectOptions[0].value);
    }
  }, [projectOptions, selectedProject]);

  const handleProjectChange = (value) => {
    setSelectedProject(value);
  };

  const months = [
    { label: "January", value: "1" },
    { label: "February", value: "2" },
    { label: "March", value: "3" },
    { label: "April", value: "4" },
    { label: "May", value: "5" },
    { label: "June", value: "6" },
    { label: "July", value: "7" },
    { label: "August", value: "8" },
    { label: "September", value: "9" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ];

  const generateYears = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const currentYear = new Date().getFullYear();
  const years = generateYears(currentYear - 100, currentYear + 20);

  const handleMonthChange = (value) => {
    setMonth(value);
  };

  const handleYearChange = (value) => {
    setYear(value);
  };

  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Cost Type",
      dataIndex: "costType",
      key: "costType",
    },
    {
      title: "Week 1",
      dataIndex: "week1",
      key: "week1",
    },
    {
      title: "Week 2",
      dataIndex: "week2",
      key: "week2",
    },
    {
      title: "Week 3",
      dataIndex: "week3",
      key: "week3",
    },
    {
      title: "Week 4",
      dataIndex: "week4",
      key: "week4",
    },
  ];

  // Map costs to table dataSource
  const dataSource = costs?.data?.attributes?.map((cost) => ({
    key: cost._id,
    costType: cost.costType,
    week1: cost?.week?.find((w) => w.weekName === "Week 1")?.amount || "-",
    week2: cost?.week?.find((w) => w.weekName === "Week 2")?.amount || "-",
    week3: cost?.week?.find((w) => w.weekName === "Week 3")?.amount || "-",
    week4: cost?.week?.find((w) => w.weekName === "Week 4")?.amount || "-",
  }));

  return (
    <div className="rounded-t-lg mt-[24px]">
      <div className="flex py-[22px] justify-between items-center">
        <div>
          <p className="text-header">Cost</p>
        </div>
        <div>
          <button
            onClick={() => navigate("addcost")}
            className="bg-primaryBg mr-4 text-[#FFFFFF] p-1 rounded-lg"
          >
            + Add cost
          </button>
          <Space direction="vertical">
            <Select
              style={{ width: 150, margin: 12 }}
              value={selectedProject}
              onChange={handleProjectChange}
              options={projectOptions}
              placeholder="Select Project"
              loading={!projects}
            />
          </Space>
          <Select
            style={{ width: 150 }}
            placeholder={
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Select a month</span>
                <FaCalendarAlt style={{ marginLeft: 8 }} />
              </div>
            }
            onChange={handleMonthChange}
          >
            {months.map((month) => (
              <Select.Option key={month.value} value={month.value}>
                {month.label}
              </Select.Option>
            ))}
          </Select>

          <Select
            style={{ width: 150, marginLeft: 10 }}
            placeholder="Select a year"
            onChange={handleYearChange}
            defaultValue={'2024'}
          >
            {years.map((year) => (
              <Select.Option key={year} value={year}>
                {year}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>
      <Table
        pagination={{
          total: costs?.data?.attributes?.length,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
          defaultPageSize: 5,
          showSizeChanger: false,
        }}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default Cost;
