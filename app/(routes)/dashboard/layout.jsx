import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/DashboardHeader";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="fixed hidden md:w-64 md:block ">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
