import { HiMenuAlt2 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white shadow-sm z-50">
      <div className="container h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle sidebar"
          >
            <HiMenuAlt2 className="w-6 h-6 text-gray-600" />
          </button>
          
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Hjem
          </Link>
          <Link 
            to="/about" 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Om os
          </Link>
          <Link 
            to="/products" 
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Produkter
          </Link>
          <Link 
            to="/contact" 
            className="btn btn-primary"
          >
            Kontakt os
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
