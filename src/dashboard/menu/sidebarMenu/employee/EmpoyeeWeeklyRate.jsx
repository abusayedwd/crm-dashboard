// import { Button, DatePicker, Input, Modal, Select, Space, Table } from "antd";
// import { BsInfoCircle } from "react-icons/bs";
// import { useEffect, useState } from "react";
// import { CloseOutlined } from "@ant-design/icons";
 
// import { useNavigate } from "react-router-dom";
// import { useProjectListQuery } from "../../../../redux/features/hourlyratePerDay/projectList";
// import { useWeeklyEmployeeHourQuery } from "../../../../redux/features/weekHourEmployee/weeklyEmployeeHour";

// const { Search } = Input;

// const EmployeeWeeklyRate = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const { data: projects } = useProjectListQuery();
//   const { data: weeklyProject } = useWeeklyEmployeeHourQuery(selectedProject);
//   console.log(weeklyProject);
  

//   const projectOptions = projects?.data.map((project) => ({
//     label: project.projectName,
//     value: project._id,
//   }));

//   useEffect(() => {
//     if (projectOptions?.length > 0 && !selectedProject) {
//       setSelectedProject(projectOptions[0].value);
//     }
//   }, [projectOptions, selectedProject]);

//   // Generate columns dynamically for weeks
//   const weekColumns = Array.from({ length: 52 }, (_, index) => ({
//     title: `Wk ${index + 1}`,
//     dataIndex: `week${index + 1}`,
//     key: `week${index + 1}`,
//     align: "center",
//   }));

//   // Generate rows for the table
//   const dataSource =
//     weeklyProject?.data.attributes.map((employee) => ({
//       key: employee._id,
//       name: employee.employeeName,
//       totalHours : employee?.totalWeekHours,
//       ...employee.weekData.reduce((acc, week) => {
//         acc[`week${week.weekName.split(" ")[1]}`] = week.totalHours || 0;
//         return acc;
//       }, {}),
//     })) || [];

//   // Basic columns
//   const columns = [
//     {
//       title: "Sl No.",
//       dataIndex: "key",
//       key: "key",
//       render: (_, __, index) => index + 1 + (currentPage - 1) * 12,
//       align: "center",
//     },
//     {
//       title: "Employee",
//       dataIndex: "name",
//       key: "name",
//       align: "center",
//       className: "nowrap-text",
//     },
//     ...weekColumns, // Display all week columns
//     {
//       title: "totalHours",
//       dataIndex: "totalHours",
//       key: "totalHours",
//       fixed: "right",
      
//       align: "center",
//     },
//   ];

//   const handleProjectChange = (value) => {
//     setSelectedProject(value);
//   };

//   return (
//     <div className="mt-12">
//       <div className="rounded-t-lg mt-6">
//         <div className="flex py-6 justify-between items-center">
//           <p className="text-header">Employee Hours per Week</p>
//           <div>
//             <Space direction="vertical">
//               <Select
//                 value={selectedProject}
//                 onChange={handleProjectChange}
//                 options={projectOptions}
//                 placeholder="Select Project"
//                 style={{ width: 200 }}
//                 loading={!projects}
//               />
//             </Space>
             
//           </div>
//         </div>

//         <div style={{ overflowX: "auto" }}>
//           <Table
//             columns={columns}
//             dataSource={dataSource}
//             pagination={{
//               current: currentPage,
//               pageSize: 12, // Show 12 rows per page
//               total: dataSource.length,
//               onChange: (page) => {
//                 setCurrentPage(page);
//               },
//               showSizeChanger: false, // Disable changing number of rows per page
//             }}
//             scroll={{
//               x: 3000, // Enable horizontal scrolling for 52 weeks
//             }}
//             bordered
//           />
//         </div>

//         <Modal
//           open={isModalOpen}
//           onOk={() => setIsModalOpen(false)}
//           onCancel={() => setIsModalOpen(false)}
//           footer={null}
//           closeIcon={
//             <CloseOutlined
//               style={{
//                 color: "white",
//                 backgroundColor: "#de0a26",
//                 borderRadius: "10%",
//                 padding: "10px",
//               }}
//             />
//           }
//         >
//           <div className="p-5">
//             <h1 className="text-xl font-medium text-center">Employee Details</h1>
//             <div className="mt-4">
//               <p className="border-b py-2 flex justify-between">
//                 <span>Full Name:</span> <span>Enrique</span>
//               </p>
//               <p className="border-b py-2 flex justify-between">
//                 <span>Email:</span> <span>enrique@example.com</span>
//               </p>
//               <p className="border-b py-2 flex justify-between">
//                 <span>Phone:</span> <span>+123456789</span>
//               </p>
//               <p className="border-b py-2 flex justify-between">
//                 <span>Date:</span> <span>11-01-24</span>
//               </p>
//               <p className="py-2 flex justify-between">
//                 <span>Address:</span> <span>UK</span>
//               </p>
//             </div>
//           </div>
//         </Modal>
//       </div>
//     </div>
//   );
// };

// export default EmployeeWeeklyRate;


import { Button, DatePicker, Input, Modal, Select, Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./../style.module.css";
import { useNavigate } from "react-router-dom";
import { useProjectListQuery } from "../../../../redux/features/hourlyratePerDay/projectList";
import { useWeeklyEmployeeHourQuery } from "../../../../redux/features/weekHourEmployee/weeklyEmployeeHour";

const { Search } = Input;

const EmployeeWeeklyRate = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const { data: projects } = useProjectListQuery();
  const { data: weeklyProject } = useWeeklyEmployeeHourQuery(selectedProject);
  console.log(weeklyProject?.data?.attributes);
  

  const projectOptions = projects?.data.map((project) => ({
    label: project.projectName,
    value: project._id,
  }));

  useEffect(() => {
    if (projectOptions?.length > 0 && !selectedProject) {
      setSelectedProject(projectOptions[0].value);
    }
  }, [projectOptions, selectedProject]);

  // Generate columns dynamically for weeks
  const weekColumns = Array.from({ length: 52 }, (_, index) => ({
    title: `Week-${index + 1}`,
    dataIndex: `week${index + 1}`,
    key: `week${index + 1}`,
    align: "center",
    className: "w-24",
  }));

  // Generate rows for the table
  const dataSource =
    weeklyProject?.data.attributes.map((employee) => ({
      key: employee._id,
      name: employee.employeeName,
      totalHours: employee?.totalWeekHours,
      
      ...employee.weekData.reduce((acc, week) => {
        acc[`week${week.weekName.split(" ")[1]}`] = week.totalHours || 0;
        return acc;
      }, {}),
    })) || [];

  // Basic columns
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
      align: "center",
      className: "w-40",
    },
    ...weekColumns, 
    {
      title: "Total Hours",
      dataIndex: "totalHours",
      key: "totalHours",
      fixed: "right",
      align: "center",
      className: "w-24",
    },
  ];

  const handleProjectChange = (value) => {
    setSelectedProject(value);
  };

  return (
    <div className="mt-12">
      <div className="rounded-t-lg mt-6">
        <div className="flex py-6 justify-between items-center">
          <p className="text-header">Employee Hours per Week</p>
          <div>
            <Space direction="vertical">
              <Select
                value={selectedProject}
                onChange={handleProjectChange}
                options={projectOptions}
                placeholder="Select Project"
                style={{ width: 200 }}
                loading={!projects}
              />
            </Space>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{
              total:  weeklyProject?.data?.attributes.length,
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
            scroll={{
              x: 3000, // Enable horizontal scrolling for 52 weeks
            }}
            bordered
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
