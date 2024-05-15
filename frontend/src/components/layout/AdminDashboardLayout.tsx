/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';
import AdminHeadbar from "../organisms/Admin/AdminHeadbar";
import AdminSidebar from "../organisms/Admin/AdminSidebar";

const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container-scroller">
      <AdminHeadbar />
      <div className="container-fluid page-body-wrapper">
        <AdminSidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            {children}
          </div>
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                Copyright © 2021. Premium{" "}
                <a href="https://www.bootstrapdash.com/" target="_blank">
                  Bootstrap admin template
                </a>{" "}
                from BootstrapDash. All rights reserved.
              </span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                Hand-crafted & made with{" "}
                <i className="ti-heart text-danger ml-1"></i>
              </span>
            </div>
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                Distributed by{" "}
                <a href="https://www.themewagon.com/" target="_blank">
                  Themewagon
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
