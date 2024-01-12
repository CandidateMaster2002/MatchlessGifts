import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";
import Signup from "./pages/Signup.jsx";
import Cart from "./pages/Cart.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import ModifyProduct from "./pages/ModifyProduct.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import UserProtected from "./components/UserProtected.jsx";
import AdminProtected from "./components/AdminProtected.jsx";
import Admin from "./pages/Admin.jsx";
import AdminHome from "./pages/AdminHome.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import OrderHistory from "./pages/OrderHistory.jsx";
import FAQs from "./pages/FAQs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AdminAllProducts from "./pages/AdminAllProducts.jsx";
import AdminAllOrders from "./pages/AdminAllOrders.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import EnterOTP from "./pages/EnterOTP.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import NotFound from "./pages/NotFound.jsx";
import NoOrders from "./pages/NoOrders.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element:  <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/shop", element: <Products /> },
      { path: "/cart", element: <UserProtected Component={Cart} /> },
      {
        path: "/single-product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/user-profile",
        element: <UserProtected Component={ProfilePage} />,
      },
      {
        path:"/order-history",
        element: <UserProtected Component={OrderHistory} />,
      },
      {
        path:"/faqs",
        element:<FAQs/>
      },
      {
        path:"/contact-us",
        element:<ContactUs/>
      },
      {
        path:"/forgot-password",
        element:<ForgotPassword/>
      },
      {
        path:"/forgot-password/enter-otp",
        element:<EnterOTP/>
      },
      {
        path:"/forgot-password/change-password",
        element:<ChangePassword/>
      },
      {
        path:"/not-found",
        element:<NotFound/>
      },
      {
        path:"no-orders",
        element:<NoOrders/>
      }


    ],
  },
  {
    path:"/admin",
    element: <Admin/>,
    children:[
      {
        path:"/admin",
        element: <AdminProtected Component={AdminHome}/>
      },
      {
        path:"/admin/all-products",
        element:<AdminProtected Component={AdminAllProducts}/>
      },
      {
        path: "/admin/add-product/",
        element:<AdminProtected Component={AddProduct}/>
      },
      {
        path: "/admin/modify-product/:id",
        element:<AdminProtected Component={ModifyProduct}/>
      },
      {
        path:"/admin/login",
        element:<AdminLogin/>
      },
      {
        path:"/admin/all-orders",
        element:<AdminProtected Component={AdminAllOrders}/>
      }
      
    ]

  },
 


  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
