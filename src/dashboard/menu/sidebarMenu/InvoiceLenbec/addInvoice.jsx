// import React, { useState } from "react";
// import { Input, Select, Button, DatePicker } from "antd";

// const { Option } = Select;

// const AddInvoice = () => {
//   // State for form inputs
//   const [formValues, setFormValues] = useState({
//     customer: "",
//     project: "",
//     invoiceNumber: "",
//     weekNumber: "",
//     description: "",
//     amount: "",
//     date: null,
//     dueDate: "",
//     paid: "",
//   });

//   // Update state on input change
//   const handleInputChange = (field, value) => {
//     setFormValues({ ...formValues, [field]: value });
//   };
// const [date, setDate] = useState('')

//   const onChange = ( date ,dateString) => {
//     console.log( dateString);
//     setDate(dateString)
//   };

// console.log(date);

//   const handleSubmit = async () => {

//     const data = {
//       ...formValues,
//        date
//     }
// console.log(data);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-10 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
//         <h1 className="text-2xl font-bold mb-6 text-center">Invoice Form</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium mb-2">Customer</label>
//             <Input
//               placeholder="Enter customer name"
//               value={formValues.customer}
//               onChange={(e) => handleInputChange("customer", e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Project</label>
//             <Input
//               placeholder="Enter project name"
//               value={formValues.project}
//               onChange={(e) => handleInputChange("project", e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Invoice No.</label>
//             <Input
//               placeholder="Enter invoice number"
//               value={formValues.invoiceNumber}
//               onChange={(e) => handleInputChange("invoiceNumber", e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Week</label>
//             <Input
//               placeholder="Enter week number"
//               value={formValues.weekNumber}
//               onChange={(e) => handleInputChange("weekNumber", e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Description</label>
//             <Input
//               placeholder="Enter description"
//               value={formValues.description}
//               onChange={(e) => handleInputChange("description", e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Amount</label>
//             <Input
//               placeholder="Enter amount"
//               value={formValues.amount}
//               onChange={(e) => handleInputChange("amount", e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Date</label>
//             <DatePicker onChange={onChange} />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Due Date</label>
//             <Input
//               placeholder="Enter due date location"
//               value={formValues.dueDate}
//               onChange={(e) => handleInputChange("dueDate", e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Paid</label>
//             <Select
//               placeholder="Select Yes or No"
//               className="w-full"
//               value={formValues.paid}
//               onChange={(value) => handleInputChange("paid", value)}
//             >
//               <Option value="Yes">Yes</Option>
//               <Option value="No">No</Option>
//             </Select>
//           </div>
//         </div>
//         <div className="mt-8 flex justify-center">
//           <Button type="primary" size="large" onClick={handleSubmit}>
//             Submit
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddInvoice;

import React, { useState } from "react";
import { Input, Select, Button, DatePicker } from "antd";
import { useProjectListQuery } from "../../../../redux/features/hourlyratePerDay/projectList";
import { useCustomerNameQuery } from "../../../../redux/features/customer/custometName";
import { useAddInvoiceMutation } from "../../../../redux/features/Invoice Lenbec/addInvoice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddInvoice = () => {
  const navigate = useNavigate()
  const [selectedProject, setSelectedProject] = useState(null);
  const [name, setName] = useState(null);

  const { data: projects } = useProjectListQuery();
  const { data: customerName } = useCustomerNameQuery();
  const [addInvoice, {isLoading}] = useAddInvoiceMutation()
  // console.log(customerName?.data);
  // State for form inputs
  const [formValues, setFormValues] = useState({
    customer: "",
    project: "",
    invoiceNo: "",
    week: "",
    description: "",
    amount: "",
    date: null,
    dueDate: null,
    paid: "",
  });

  // Update state on input change
  const handleInputChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  // Handle DatePicker change for Date and Due Date
  const onDateChange = (date, dateString) => {
    setFormValues({ ...formValues, date: dateString });
  };

  const onDueDateChange = (date, dateString) => {
    setFormValues({ ...formValues, dueDate: dateString });
  };

  const handleSubmit = async () => {
    const data = {
      ...formValues,
      projectList: selectedProject,
      customer: name,
    };
    console.log(data);
   try{
    const res = await addInvoice(data).unwrap();
    console.log(res)
    if(res?.statusCode == 201){
      toast.success(res?.message)
    }
    setTimeout(() => {
      navigate('/dashboard/invoice')
    }, 1000);
   }catch(error){
    console.log(error)
   }


  };
  const handleProjectChange = (value) => setSelectedProject(value);
  const projectOptions = projects?.data?.map((project) => ({
    label: project.projectName,
    value: project._id,
  }));

  const handleName = (value) => setName(value);
  const customerNameOption = customerName?.data?.map((customer) => ({
    label: customer.name,
    value: customer._id,
  }));

  return (
    <div className=" mt-12 bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6"> Add Invoice</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Customer</label>
            <Select
              value={name}
              onChange={handleName}
              options={customerNameOption}
              placeholder="Select name"
              style={{ width: 400 }}
              loading={!customerName}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Project</label>
            <Select
              value={selectedProject}
              onChange={handleProjectChange}
              options={projectOptions}
              placeholder="Select Project"
              style={{ width: 400 }}
              loading={!projects}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Invoice No.
            </label>
            <Input
              placeholder="Enter invoice number"
              value={formValues.invoiceNumber}
              onChange={(e) =>
                handleInputChange("invoiceNo", e.target.value)
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Week</label>
            <Input
              placeholder="Enter week number"
              value={formValues.weekNumber}
              onChange={(e) => handleInputChange("week", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <Input
              placeholder="Enter description"
              value={formValues.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Amount</label>
            <Input
              placeholder="Enter amount"
              value={formValues.amount}
              onChange={(e) => handleInputChange("amount", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <DatePicker className=" w-full" onChange={onDateChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Due Date</label>
            <DatePicker className=" w-full" onChange={onDueDateChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Paid</label>
            <Select
              placeholder="Select Yes or No"
              className="w-full"
              value={formValues.paid}
              onChange={(value) => handleInputChange("paid", value)}
            >
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button type="primary" size="large" loading = {isLoading} onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddInvoice;
