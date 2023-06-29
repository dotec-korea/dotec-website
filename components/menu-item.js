import Link from 'next/link';
import { useState } from 'react';

const MenuItem = ({ menu, size, active }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      className={`w-1/${size} text-center border-b-2 hover:border-blue-700 ${
        active ? 'border-blue-700' : 'border-white'
      }`}
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {menu.submenu ? (
        <div className='relative w-full'>
          <Link
            href={menu.url}
            className='block w-full md:px-5 pb-2 transition hover:text-primary uppercase'
          >
            {menu.title}
          </Link>
          {dropdown && <Dropdown submenus={menu.submenu} />}
        </div>
      ) : (
        <Link
          href={menu.url}
          className='block md:px-5 pb-2 transition hover:text-primary'
        >
          <span className='uppercase'>{menu.title}</span>
        </Link>
      )}
    </li>
  );
};

const Dropdown = ({ submenus }) => {
  return (
    <ul className='absolute z-10 w-full text-center rounded-sm bg-blue-700 bg-opacity-90'>
      {submenus.map((submenu, index) => (
        <Link key={index} className='w-full' href={submenu.url}>
          <li
            className={`py-2 mx-2 v text-white ${
              index + 1 !== submenus.length && 'border-b-2 border-white'
            } hover:font-bold cursor-pointer`}
          >
            {submenu.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MenuItem;
