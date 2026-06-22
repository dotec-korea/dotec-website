import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';
import PropTypes from 'prop-types';
import MenuItemDesktop from './menu-item-desktop';
import MenuItemMobile from './menu-item-mobile';
import { buildMenuItems } from '../lib/menu';

const Navbar = ({ range }) => {
  const pathname = usePathname();
  const menuItems = buildMenuItems(range);

  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState('');

  const showMenu = () => {
    setShow(!show);
    setDropdown('');
  };

  return (
    <header>
      <nav className='w-full hidden lg:block'>
        <div className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24'>
          <div className='flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5'>
            <div className='w-full items-center flex justify-between lg:w-auto'>
              <Link className='relative z-10' href='/' aria-label='logo'>
                <div className='mr-5 h-10 sm:h-16 text-white text-xl font-black'>
                  <img
                    src='/DoTEC.png'
                    alt='logo'
                    className='h-full drop-shadow-2xl'
                  />
                </div>
              </Link>
            </div>
            <div className='justify-end items-center border-gray-100 space-y-0 p-0 m-0 flex bg-transparent w-9/12 shadow-none'>
              <div className='text-white lg:pr-4 w-full'>
                <ul className='space-y-6 w-full tracking-wide font-semibold text-base lg:text-sm lg:flex lg:space-y-0'>
                  {menuItems.map((menu) => {
                    return (
                      <MenuItemDesktop
                        key={menu.id}
                        menu={menu}
                        size={menuItems.length}
                        active={menu.url === pathname}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className='lg:hidden relative w-full'>
        <div className='m-auto py-5 md:px-6'>
          <div className='flex items-center justify-between'>
            <div className='w-full items-center flex justify-between lg:w-auto'>
              <Link className='relative z-10' href='/' aria-label='logo'>
                <div className='mr-5 h-6 sm:h-9 text-white text-xl font-black'>
                  <img src='/DoTEC.png' alt='logo' className='h-full' />
                </div>
              </Link>
            </div>
            <div className='h-full w-1/8'>
              <button
                type='button'
                aria-label='Toggle navigation menu'
                aria-expanded={show}
                onClick={showMenu}
              >
                <MdMenu className='text-white text-3xl' />
              </button>
            </div>
          </div>
        </div>
        {show && (
          <ul className='absolute z-50 bg-white bg-opacity-90 w-full tracking-wide font-semibold text-base'>
            {menuItems.map((menu) => {
              return (
                <MenuItemMobile
                  key={menu.id}
                  menu={menu}
                  active={menu.url === pathname}
                  dropdown={dropdown}
                  setDropdown={setDropdown}
                />
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  range: PropTypes.array,
};

export default Navbar;
