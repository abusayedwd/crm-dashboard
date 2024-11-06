import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import ForgotPassword from "../auth/forgotpassword";
import VerifyOtp from "../auth/VerifyOtp";
import UpdatePassword from "../auth/UpdatePassword";
import Main from "../layout/Main";
import DashboardHome from "../dashboard/home/DashboardHome";
import Notification from "../dashboard/menu/headermenu/Notification";
import Profile from "../dashboard/menu/headermenu/Profile";
import EditProfiel from "../dashboard/menu/headermenu/EditProfile"; 
import PrivacyPolicy from "../dashboard/menu/privacypolicy/PrivacyPolicy";
import EditPrivacy from "../dashboard/menu/privacypolicy/EditPrivacy";
import TermCondition from "../dashboard/menu/termsCondition/TermCondition";
import EditTermCondition from "../dashboard/menu/termsCondition/EditTermCondition";

import ErrorPage from "./ErrorPage";
import About from "../dashboard/menu/about/About";
import EditAbout from "../dashboard/menu/about/EditAbout";
import Subscription from "../dashboard/menu/subscription/Subscription";
import Addsubscripton from "../dashboard/menu/subscription/Addsubscripton";
import Editsubscription from "../dashboard/menu/subscription/Editsubscription";
import AddProject from "../dashboard/home/project/AddProject";
import AddService from "../dashboard/home/service/AddService";
import Settings from "../dashboard/menu/sidebarMenu/Settings";
import EmployeeList from "../dashboard/menu/sidebarMenu/employee/EmployeeList";
import EmployeeRatehr from "../dashboard/menu/sidebarMenu/employee/EmployeeRatehr";
import EmployeePayment from "../dashboard/menu/sidebarMenu/employee/EmployeePayment";
import EmpoyeeWeeklyRate from "../dashboard/menu/sidebarMenu/employee/EmpoyeeWeeklyRate";
import Project from "../dashboard/menu/sidebarMenu/RunningProject";
import Invoice from "../dashboard/menu/sidebarMenu/Invoice";
import Cost from "../dashboard/menu/sidebarMenu/Cost";
import AddRunningProject from "../dashboard/menu/sidebarMenu/AddRunningProject";
import PaymentRevolut from "../dashboard/menu/sidebarMenu/PaymentInRevolut";
import EditProject from "../dashboard/home/project/EditProject";
import Customer from "../dashboard/menu/sidebarMenu/customer/Customer";
import AddCustomer from "../dashboard/menu/sidebarMenu/customer/AddCustomer";
import EditCustomer from "../dashboard/menu/sidebarMenu/customer/EditCustomer";
import EditService from "../dashboard/home/service/EditService";
import AddEmployee from "../dashboard/menu/sidebarMenu/employee/AddEmployee";
import EditEmployee from "../dashboard/menu/sidebarMenu/employee/EditEmployee";
 


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage />
    },
    {
        path: "forgotpassword",
        element: <ForgotPassword></ForgotPassword>
    },
    {
        path: "verifyotp",
        element: <VerifyOtp></VerifyOtp>
    },
    {
        path: "updatepassword",
        element: <UpdatePassword />
    },

    {
        path: "dashboard",
        element: <Main></Main>,
        children: [
            {
                path: "home",
                element: <DashboardHome />
            },
            {
                path: "home/addproject",
                element: <AddProject />
            },
            {
                path: "home/editproject/:id",
                element: <EditProject />
            },
            {
                path: "home/addservice",
                element: <AddService />
            },
            {
                path: "home/editservice/:id",
                element: <EditService />
            },

            {
                path: "notification",
                element: <Notification />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "editprofile",
                element: <EditProfiel />
            },
         
            {
                path:"customer",
                element: <Customer />
            },
            {
                path:"customer/addcustomer",
                element: <AddCustomer />
            },   
            {
                path:"customer/editcustomer/:id",
                element: <EditCustomer />
            },   
            {
                path:"employeelist",
                element: <EmployeeList />
            },   
            {
                path:"employeelist/addemployee",
                element: <AddEmployee />
            },   
            {
                path:"employeelist/editemployee/:id",
                element: <EditEmployee />
            },   
            {
                path:"employeerate",
                element: <EmployeeRatehr />
            },   
            {
                path:"employeepayment",
                element: <EmployeePayment />
            },   
            {
                path:"employee-payment-weeklyrate",
                element: <EmpoyeeWeeklyRate />
            },   
            {
                path:"project",
                element: <Project />
            },   
            {
                path:"project/addrunning-project",
                element:  <AddRunningProject />
            },   
            {
                path:"cost",
                element: <Cost />
            },   
            {
                path:"invoice",
                element: <Invoice />
            },   
            {
                path:"paymentrevolut",
                element: <PaymentRevolut />
            },   
         
            {
                path: 'settings',
                element:<Settings />
            },
            {
                path:'settings/privacypolicy',
                element:<PrivacyPolicy />
            },
            {
                path:'settings/editprivacypolicy',
                element: <EditPrivacy />
            },
            {
                path:"settings/termcondition",
                element:<TermCondition />
            },
            {
                path: "settings/edittermcondition",
                element: <EditTermCondition />
            },
            {
                path:'settings/about',
                element: <About />
            },
            {
                path:'settings/editabout',
                element:<EditAbout />
            },
            {
                path:'subscription',
                element: <Subscription />
            },
            {
                path: 'subscription/addsubscription',
                element: <Addsubscripton />
            },
            {
                path: 'subscription/editsubscription',
                element: <Editsubscription/>
            }
        ]
    }
])