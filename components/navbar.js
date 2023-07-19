import Link from 'next/link';
import MenuItem from './menu-item';
import { kebab } from '../utils/convert';
import { usePathname } from 'next/navigation';

const Navbar = ({ range }) => {
  const pathname = usePathname();
  const menuItems = getMenuItems(range);

  return (
    <header>
      <nav className='w-full navbar peer-checked:navbar-active dark:shadow-none'>
        <div className='xl:container m-auto px-6 md:px-12 lg:px-6'>
          <div className='flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5'>
            <div className='w-full items-center flex justify-between lg:w-auto'>
              <Link className='relative z-10' href='/' aria-label='logo'>
                <div className='mr-5 h-6 sm:h-9 text-white text-xl font-black'>
                  <img src='/DoTEC.png' alt='logo' className='h-full' />
                </div>
              </Link>
            </div>
            <div className='justify-end items-center border-gray-100 space-y-0 p-0 m-0 flex bg-transparent w-9/12 shadow-none'>
              <div className='text-white lg:pr-4 w-full'>
                <ul className='space-y-6 w-full tracking-wide font-semibold text-base lg:text-sm lg:flex lg:space-y-0'>
                  {menuItems.map((menu, index) => {
                    return (
                      <MenuItem
                        key={index}
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
    </header>
  );
};

const getMenuItems = (range) => {
  let menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About Us',
      url: '/about',
      submenu: [
        {
          title: 'CEO Greetings',
          url: '/about?q=ceo-greetings',
        },
        {
          title: 'Brief History',
          url: '/about?q=history',
        },
        {
          title: 'Facility',
          url: '/about?q=facility',
        },
        {
          title: 'Manufacturing',
          url: '/about?q=manufacturing',
        },
      ],
    },
    {
      title: 'Certification',
      url: '/certification',
    },
    {
      title: 'Contact Us',
      url: '/contact',
    },
  ];

  if (range) {
    const submenu = range
      .sort((x, y) => x.id - y.id)
      .map((element) => {
        const item = {
          title: element.title,
          url: '/products?q=' + kebab(element.title),
        };
        return item;
      });

    const product = {
      title: 'Products',
      url: '/products',
      submenu: submenu,
    };

    const index = 2;
    menuItems = [
      ...menuItems.slice(0, index),
      product,
      ...menuItems.slice(index),
    ];
  }

  return menuItems;
};

export default Navbar;
