import { Button, DatePicker, Input, Modal, Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import styles from './../style.module.css';
import './../table.css';
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAllEmployeeQuery } from "../../../../redux/features/employee/allEmployee";
import { useTotalPaymentQuery } from "../../../../redux/features/employeePayment/allpayment";
const { Search } = Input;

const EmployeePayment = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const {data : totalAmount} = useTotalPaymentQuery()
  console.log(totalAmount)

  const {data: employees, } = useAllEmployeeQuery()
  console.log(employees);

  // useEffect(() => {
  //   if (payment?.data) {
  //     const total = payment.data.reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);
  //     setTotalAmount(total);
  //   }
  // }, [payment]);

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
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.paymentAmount}</p>
        </div>
      ),
    },
    {
      title: "For What",
      dataIndex: "forWhat",
      key: "forWhat",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.forWhatPayment || "n/a"}</p>
        </div>
      ),
    },
    {
      title: "Function",
      dataIndex: "function",
      key: "function",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.function}</p>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.paymentDate}</p>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle"> 
            {/* <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" /> */} 
           {
            record?.paymentAction == 'paid' ?  <button onClick={() => navigate(`editpayment/${record?._id}`)} className="flex items-center px-1  bg-primaryBg  text-[#FFFFFF] font-semibold rounded hover:bg-gray-800 transition duration-300">
            {record?.paymentAction} 
          </button> 
          :  
          <button onClick={() => navigate(`editpayment/${record?._id}`)} className="flex items-center px-1   text-[#FFFFFF] bg-[#CBCB01] font-semibold rounded hover:bg-gray-800 transition duration-300">
            {record?.paymentAction} 
          </button> 
           }
           
        </Space>
      ),
    },
  ];

  const handleView = () => {
    setIsModalOpen(true);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="mt-12">
      <div className="rounded h-[150px] w-96 flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
        <div className="mx-6 h-16 w-16 rounded flex justify-center items-center">
          <FaUsers className="text-[#00bfff] w-12 h-12" />
        </div>
        <div className="mx-6 text-center">
          <p className="text-[18px] font-semibold my-4">Total Payment</p>
          <h1 className="text-[34px] font-medium">${totalAmount?.data?.totalPaymentAmount}</h1>
        </div>
      </div>
      <div className="rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] justify-between items-center">
          <p className="text-header">Employee Payment</p>
          {/* <Space direction="vertical">
            <DatePicker onChange={onChange} />
          </Space> */}
          <div>
          <button
              onClick={() => navigate("addpayment")}
              className=" bg-primaryBg mr-4 text-[#FFFFFF] p-1 rounded-lg"
            >
              +Add Employee Payment
            </button>
          <Search
            style={{ width: "200px", marginLeft: '4px' }}
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
          </div>
        </div>
        <Table
          pagination={{
            total: employees?.data?.attributes.length,
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
              color: "white",
              backgroundColor: "#de0a26",
              borderRadius: "10%",
              padding: "10px",
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
              <p>absayed</p>
            </div>
            <div className="flex justify-between border-b py-[16px] ">
              <p>Email:</p>
              <p>ab@gmail.com</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Phone:</p>
              <p>+45269875</p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>23-11-24</p>
            </div>
            <div className="flex justify-between items-center pt-[16px]">
              <p>address:</p>
              <p className="px-[15px] py-[10px] rounded-lg">UK</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EmployeePayment;
