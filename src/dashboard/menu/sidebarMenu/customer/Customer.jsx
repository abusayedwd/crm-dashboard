import { Button, DatePicker, Input, Modal, Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./../style.module.css";
import "./../table.css";
import { useNavigate } from "react-router-dom";
import { useAllCustomerQuery } from "../../../../redux/features/customer/allCustomer";
import { useDeleteCustomerMutation } from "../../../../redux/features/customer/deleteCustomer";
import toast from "react-hot-toast";
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
const Customer = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: customers, isLoading } = useAllCustomerQuery();
  // console.log(customers?.data);
  const [deleteCustomer] = useDeleteCustomerMutation()

  const customer = async(id) => {
    console.log('clicek', id);
    
    try{
     const res = await deleteCustomer(id).unwrap();
         if(res.statusCode == 200){
          setTimeout(() => {
            toast.success(res?.message) 
          }, 1000);
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
      title: "Customer",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div key={record._id} className="flex gap-2 items-center">
          <p className="font-medium">{record?.name}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, record) => <p>{record?.email}</p>,
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
      title: "City",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium"> {record?.city}</p>
        </div>
      ),
    },
    {
      title: "Contact Person",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.contactPerson}</p>
        </div>
      ),
    },
    {
      title: "Mobile No.",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">+{record?.mobile}</p>
        </div>
      ),
    },

    {
      title: "Billing Email",
      key: "mail",
      dataIndex: "email",
      render: (_, record) => (
        // <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
        <p>{record?.billingEmail}</p>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" /> */}
          <button onClick={() => navigate(`editcustomer/${record?._id}`)} className="flex items-center px-2 py-1 bg-[#008000] text-[#FFFFFF] font-semibold rounded hover:bg-gray-800 transition duration-300">
            <EditOutlined className="mr-2" />
            Edit
          </button>
          
          <button
   onClick={() => customer(record._id)}
  className="flex items-center px-2 py-1 bg-[#FF0000] text-[#FFFFFF] font-semibold rounded hover:bg-gray-800 transition duration-300"
>
  <DeleteOutlined className="mr-2" />
  Delete
</button>

          {/* <a><RxCross2 size={18} className='text-[red]'/></a> */}
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
            <p className="text-header">Customer</p>
          </div>
          <div>
            <button
              onClick={() => navigate("addcustomer")}
              className=" bg-primaryBg mr-4 text-[#FFFFFF] p-1 rounded-lg"
            >
              +Add Customer
            </button>
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space>
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
            total: customers?.data.length,
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
          dataSource={customers?.data}
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

export default Customer;
