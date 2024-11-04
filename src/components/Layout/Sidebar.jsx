import { Link } from 'react-router-dom';
import { HiX, HiHome, HiUserGroup, HiCube, HiPhone, HiCurrencyDollar } from 'react-icons/hi';
import { FaBoxOpen } from "react-icons/fa6";

const navigation = [
  { name: 'Hjem', to: '/', icon: HiHome },
  { name: 'Om os', to: '/about', icon: HiUserGroup },
  { name: 'Produkter', to: '/products', icon: FaBoxOpen  },
  { name: 'Kontakt os', to: '/contact', icon: HiPhone },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - hidden on lg screens */}
      <aside
        className={`
          fixed top-16 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden
          ${isOpen ? 'translate-x-0 translate-y-0' : '-translate-x-full'}
        `}
      >
        {/* Navigation */}
        <nav className="px-4 py-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.to}
                className="flex items-center gap-5 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 hover:text-primary transition-colors mb-1"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
