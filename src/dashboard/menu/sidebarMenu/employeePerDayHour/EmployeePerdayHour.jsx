 

// import React, { useState, useEffect } from 'react';
// import { Select, Space, Table } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { useProjectListQuery } from '../../../../redux/features/hourlyratePerDay/projectList';
// import { usePerdayHoulyWorkQuery } from '../../../../redux/features/hourlyratePerDay/perDayhourlyWork';
// import { EditOutlined } from '@ant-design/icons';

// const EmployeePerdayHour = () => {
//   const navigate = useNavigate();

//   // State for selected project and week
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [selectedWeek, setSelectedWeek] = useState("Week 1"); // Default week
//   const { data: projects } = useProjectListQuery();
//   const { data: perDaywork } = usePerdayHoulyWorkQuery({
//     projectId: selectedProject,
//     weekName: selectedWeek,
//   });

//   // Map fetched projects to Select options
//   const projectOptions = projects?.data.map((project) => ({
//     label: project.projectName,
//     value: project._id,
//   }));

//   // Set default project when projects are available
//   useEffect(() => {
//     if (projectOptions?.length > 0 && !selectedProject) {
//       setSelectedProject(projectOptions[0].value);
//     }
//   }, [projectOptions, selectedProject]);

//   // Generate week options dynamically
//   const weekOptions = Array.from({ length: 52 }, (_, index) => ({
//     label: `Week ${index + 1}`,
//     value: `Week ${index + 1}`,
//   }));

//   // Handle project and week change
//   const handleProjectChange = (value) => setSelectedProject(value);
//   const handleWeekChange = (value) => setSelectedWeek(value);

//   // Process backend data into table format
//   const dataSource = perDaywork?.data?.attributes?.map((attribute, index) => {
//     const days = attribute.weekData.find((week) => week.weekName === selectedWeek)?.days || [];
//     const dayData = days.reduce(
//       (acc, day) => ({ ...acc, [day.dayName.toLowerCase()]: day.hours }),
//       {}
//     );

//     return {
//       key: index + 1,
//       employee: attribute.employeeName,
//       ...dayData,
//       total: days.reduce((total, day) => total + parseInt(day.hours || 0, 10), 0),
//     };
//   });

//   // Define table columns dynamically
//   const columns = [
//     {
//       title: 'Sl No.',
//       dataIndex: 'key',
//       key: 'key',
//     },
//     {
//       title: 'Employee',
//       dataIndex: 'employee',
//       key: 'employee',
//     },
//     ...['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map((day) => ({
//       title: day.charAt(0).toUpperCase() + day.slice(1),
//       dataIndex: day,
//       key: day,
//       render: (text) => <span>{text || '-'}</span>,
//     })),
//     {
//       title: 'Total',
//       dataIndex: 'total',
//       key: 'total',
//     },
//     {
//       title: 'Action',
//       dataIndex: '_id',
//       key: 'action',
//       render: (_, record) => (
//         <button
//         onClick={() => navigate(`editemployeeper-day/${record.dataIndex}`)}
//         className="flex items-center px-2 py-1   text-[#87884a] font-semibold rounded hover:bg-gray-800 transition duration-300"
//       >
//         <EditOutlined className="mr-2 text-[18px]" />
        
//       </button>
//       )
//     },
//   ];

//   return (
//     <div className="mt-12">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-xl font-semibold mb-4">Employee Hours Per Day</h1>
//         </div>
//         <div>
//           <button
//             onClick={() => navigate('addemployeeper-day')}
//             className="bg-primaryBg mr-4 text-[#FFFFFF] p-1 rounded-lg"
//           >
//             +Add hr Rate
//           </button>
//           <Space className="mb-4" size="middle">
//             <Select
//               value={selectedProject}
//               onChange={handleProjectChange}
//               options={projectOptions}
//               placeholder="Select Project"
//               style={{ width: 200 }}
//               loading={!projects}
//             />
//             <Select
//               value={selectedWeek}
//               onChange={handleWeekChange}
//               options={weekOptions}
//               placeholder="Select Week"
//               style={{ width: 200 }}
//             />
//           </Space>
//         </div>
//       </div>

//       <Table columns={columns} dataSource={dataSource} pagination={false} />
//     </div>
//   );
// };

// export default EmployeePerdayHour;

import React, { useState, useEffect } from 'react';
import { Select, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useProjectListQuery } from '../../../../redux/features/hourlyratePerDay/projectList';
import { usePerdayHoulyWorkQuery } from '../../../../redux/features/hourlyratePerDay/perDayhourlyWork';
import { EditOutlined } from '@ant-design/icons';

const EmployeePerdayHour = () => {
  const navigate = useNavigate();

  // State for selected project and week
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState("Week 1"); // Default week
  const { data: projects } = useProjectListQuery();
  const { data: perDaywork } = usePerdayHoulyWorkQuery({
    projectId: selectedProject,
    weekName: selectedWeek,
  });

  // Map fetched projects to Select options
  const projectOptions = projects?.data?.map((project) => ({
    label: project.projectName,
    value: project._id,
  }));

  // Set default project when projects are available
  useEffect(() => {
    if (projectOptions?.length > 0 && !selectedProject) {
      setSelectedProject(projectOptions[0].value);
    }
  }, [projectOptions, selectedProject]);

  // Generate week options dynamically
  const weekOptions = Array.from({ length: 52 }, (_, index) => ({
    label: `Week ${index + 1}`,
    value: `Week ${index + 1}`,
  }));

  // Handle project and week change
  const handleProjectChange = (value) => setSelectedProject(value);
  const handleWeekChange = (value) => setSelectedWeek(value);

  // Process backend data into table format
  const dataSource = perDaywork?.data?.attributes?.map((attribute, index) => {
    const days = attribute.weekData.find((week) => week.weekName === selectedWeek)?.days || [];
    const dayData = days.reduce(
      (acc, day) => ({ ...acc, [day.dayName.toLowerCase()]: day.hours }),
      {}
    );

    return {
      key: attribute._id, // Use the employee's _id as the key
      employee: attribute.employeeName,
      ...dayData,
      total: days.reduce((total, day) => total + parseInt(day.hours || 0, 10), 0),
    };
  });

  // Define table columns dynamically
  const columns = [
    {
      title: 'Sl No.',
      dataIndex: 'key',
      key: 'key',
      render: (_, __, index) => index + 1, // Display serial number
    },
    {
      title: 'Employee',
      dataIndex: 'employee',
      key: 'employee',
    },
    ...['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].map((day) => ({
      title: day.charAt(0).toUpperCase() + day.slice(1),
      dataIndex: day,
      key: day,
      render: (text) => <span>{text || '-'}</span>,
    })),
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <button
          onClick={() => navigate(`editemployeeper-day/${record.key}`)}
          className="flex items-center px-2 py-1 text-[#87884a] font-semibold rounded hover:bg-gray-800 transition duration-300"
        >
          <EditOutlined className="mr-2 text-[18px]" />
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold mb-4">Employee Hours Per Day</h1>
        </div>
        <div>
          <button
            onClick={() => navigate('addemployeeper-day')}
            className="bg-primaryBg mr-4 text-[#FFFFFF] p-1 rounded-lg"
          >
            + Add Hour Rate
          </button>
          <Space className="mb-4" size="middle">
            <Select
              value={selectedProject}
              onChange={handleProjectChange}
              options={projectOptions}
              placeholder="Select Project"
              style={{ width: 200 }}
              loading={!projects}
            />
            <Select
              value={selectedWeek}
              onChange={handleWeekChange}
              options={weekOptions}
              placeholder="Select Week"
              style={{ width: 200 }}
            />
          </Space>
        </div>
      </div>

      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  );
};

export default EmployeePerdayHour;
