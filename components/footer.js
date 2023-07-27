import Link from 'next/link';

let menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About Us',
    url: '/about',
  },
  {
    title: 'Products',
    url: '/products',
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

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='w-100 bg-blue-700'>
        <div className='flex flex-col-reverse lg:flex-row mx-auto px-6 md:px-12 lg:px-8 2xl:px-24'>
          <div className='w-full lg:w-1/2 flex flex-col text-white p-6 lg:py-16 mx-auto sm:px-6 lg:px-6'>
            <div className='border-right'>
              <div className='text-sm font-semibold uppercase'>
                Contact Us
                <p className='max-w-xs mt-1 text-xl font-semibold'>
                  82-55-346-5771
                </p>
              </div>
              <div className='mt-10'>
                <div className='h-6 sm:h-9'>
                  <img className='h-full' src='/DoTEC.png' alt='logo' />
                </div>
                <p className='max-w-xs mt-1 text-sm font-normal'>
                  Address: 189, techno—valley gil, Jillye-myun, Gimhae city,
                  Gyeongnam, South Korea
                </p>
                <p className='max-w-xs mt-1 text-sm font-normal'>
                  Fax: <b>82-55346-5772</b>
                </p>
              </div>
            </div>
          </div>
          <div className='w-full border-b-2 border-white lg:border-0 lg:w-1/2 p-6 lg:py-16 mx-auto'>
            <div className='lg:border-l-2 border-white sm:px-6 lg:px-12'>
              <nav className='flex flex-col mt-4 space-y-4 text-sm font-bold text-white'>
                {menuItems.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={item.url}
                      className='hover:opacity-75'
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
