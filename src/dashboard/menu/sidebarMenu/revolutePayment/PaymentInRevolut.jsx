import { Button, DatePicker, Image, Input, Modal, Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import styles from "./../style.module.css";
import "./../table.css";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { useRevolutPaymentQuery } from "../../../../redux/features/paymentInRevolut/getpayment";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeletePaymentMutation } from "../../../../redux/features/paymentInRevolut/deletePayment";
import toast, { Toaster } from "react-hot-toast";
const { Search } = Input;
import url from "./../../../../redux/api/baseUrl"
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
const PaymentRevolut = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: payment } = useRevolutPaymentQuery();
<<<<<<< HEAD
   console.log(payment?.data);
=======
   console.log("dataaaaaaaaaaaaaaaaa; ",payment);
>>>>>>> 6c77a49688cfd02372d6e02c0cb886596f44d9f0
  const totalAmount = payment?.data?.reduce(
    (acc, item) => acc + parseInt(item.orignalAmount),
    0
  );
  const [revolutedelete, ] = useDeletePaymentMutation()
  const deletePayment = async(id) => {
       try{
        const res = await revolutedelete(id).unwrap();
          toast.success(res?.message)

       }catch(error){
        console.log(error)
       }
  }
  //  console.log(totalAmount);

  // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text, _, index) => index + 1,
    },
    {
      title: "Start date",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium"> {record?.startDate} </p>
        </div>
      ),
    },

    {
      title: "Completed date",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium"> {record?.completedData} </p>
        </div>
      ),
    },

    {
      title: "Amount",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">${record?.orignalAmount}</p>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p>
            {record?.createdAt?.split("T")[0]
              ? record?.createdAt?.split("T")[0]
              : "N/A"}
          </p>
        </div>
      ),
    },
    {
      title: "Reference",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <p className="font-medium">{record?.referance}</p>
        </div>
      ),
    },
    {
      title: "Payment Document",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
           
          {/* <Image
    width={100}
    src={url + record?.bankrefPicture?.publicFileUrl}   />*/}
    <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
     
    <Image
      width={100}
      src={url + record?.bankrefPicture?.publicFileUrl}
    />
  </Image.PreviewGroup>

        </div>
      ),
    },

    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //        <button onClick={() => navigate(`editrevolutepayment/${record?._id}`)} className="flex items-center px-2 py-1   text-[#87884a] font-semibold rounded hover:bg-gray-800 transition duration-300">
    //         <EditOutlined className="mr-2 text-[18px]" />
           
    //       </button>
    //       {/* <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" /> */}
    //       <button
    //         onClick={() => deletePayment(record?._id)}
    //         className="flex items-center px-2 py-1   text-[#f83232] font-semibold rounded hover:bg-gray-800 transition duration-300"
    //       >
    //         <RiDeleteBin6Line className="mr-2 text-[18px]" />
    //       </button>
    //     </Space>
    //   ),
    // },
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
    // console.log(date, dateString);
  };
  return (
    <div className="mt-12">
      <Toaster />
      <div className=" rounded h-[150px] w-72 flex justify-between items-center card bg-[#E8EBF0] shadow-xl">
        <div className="mx-6 h-16 w-16 rounded flex justify-center items-center">
          <FaUsers className="text-[#00bfff] w-12 h-12" />
        </div>
        <div className="mx-6 text-center">
          <p className="text-[18px] font-semibold my-4">Total Payment</p>
          <h1 className="text-[34px] font-medium">${totalAmount}</h1>
        </div>
      </div>
      <div className="rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] justify-between items-center">
          <div>
            <p className="text-header">Payment in revolut</p>
          </div>
          <button
            onClick={() => navigate("addpayment")}
            className="bg-primaryBg mr-4 text-[#FFFFFF] p-1 rounded-lg"
          >
            + Add Payment
          </button>
        </div>
        <Table
          pagination={{
            total: payment?.data.length,
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
          dataSource={payment?.data}
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

export default PaymentRevolut;
