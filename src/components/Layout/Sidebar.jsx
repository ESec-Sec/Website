import { Link } from 'react-router-dom';
import { HiX, HiHome, HiUserGroup, HiCube, HiPhone } from 'react-icons/hi';

const navigation = [
  { name: 'Hjem', to: '/', icon: HiHome },
  { name: 'Om os', to: '/about', icon: HiUserGroup },
  { name: 'Produkter', to: '/products', icon: HiCube },
  { name: 'Kontakt', to: '/contact', icon: HiPhone },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-0
        `}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
          aria-label="Close sidebar"
        >
          <HiX className="w-5 h-5 text-gray-600" />
        </button>

        {/* Logo section */}
        <div className="h-16 flex items-center px-6">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logo.svg" 
              alt="Esecsec Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-semibold text-gray-900">
              Esecsec
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.to}
                className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors mb-1"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Contact section */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Link
            to="/contact"
            className="block w-full btn btn-primary text-center"
          >
            Kontakt os
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
