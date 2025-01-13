import DashboardSidebar from "./_components/DashboardSidebar";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="fixed ">
        <DashboardSidebar />
      </div>
      <div className="lg:ml-[200px]">{children}</div>
    </div>
  );
}

export default DashboardLayout;
