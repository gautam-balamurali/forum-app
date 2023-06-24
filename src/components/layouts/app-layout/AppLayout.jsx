/* eslint-disable */

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppRoutes from "../../../core/app-routes/AppRoutes";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Sortbar from "../sortbar/Sortbar";

const AppLayout = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <section className="section">
        <div className="layout">
          <Sidebar />
          <AppRoutes />
          <Sortbar />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AppLayout;
