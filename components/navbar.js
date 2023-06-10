import Link from 'next/link';

const Navbar = () => {
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
            <div className='navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0'>
              <div className='text-white lg:pr-4'>
                <ul className='space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0'>
                  <li>
                    <Link
                      href='/about'
                      className='block md:px-5 transition hover:text-primary dark:hover:text-primaryLight'>
                      <span>ABOUT US</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/products'
                      className='block md:px-5 transition hover:text-primary dark:hover:text-primaryLight'>
                      <span>PRODUCTS</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/resources'
                      className='block md:px-5 transition hover:text-primary dark:hover:text-primaryLight'>
                      <span>RESOURCES</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='block md:px-5 transition hover:text-primary dark:hover:text-primaryLight'>
                      <span>CONTACT US</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
