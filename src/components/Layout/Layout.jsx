import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className="pt-20 lg:pl-64">
        <div className="container py-0">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
