import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from 'react-icons/Hi';
import { ImCross } from 'react-icons/Im';

const NavBar = () => {

  const [open, setOpen] = useState(false)
  const routes = [
    { path: '/', name: 'Home', id: 1 },
    { path: '/products', name: 'Products', id: 2 },
    { path: '/about', name: 'About Us', id: 3 },
    { path: '/contact', name: 'Contact Us', id: 4 },
    { path: '/settings', name: 'Settings', id: 5 },
  ];


  return (
    <nav className="bg-yellow-500 p-6 text-black font-bold">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {
          open === true ?
            <ImCross className="text-lg"></ImCross>
            : <HiMenuAlt1></HiMenuAlt1>
        }

      </div>
      <ul className={`md:flex duration-700 absolute px-6 md:static 
      ${open ? 'top-16' : '-top-60'}
      bg-yellow-500`}>
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </nav>
  );
};

export default NavBar;