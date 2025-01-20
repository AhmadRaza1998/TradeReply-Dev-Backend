import SideBar from "@/Components/common/Dashboard/SideBar";
import Header from "@/Components/UI/Header";
import Footer from "@/Components/UI/Footer";
import "../../css/dashboard/layout.scss";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="admin_layout">
        <div className="admin_layout_sidebar">
          <SideBar />
        </div>
        <div className="admin_layout_content">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
