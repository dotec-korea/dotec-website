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
    title: 'Resources',
    url: '/resources',
  },
  {
    title: 'Contact Us',
    url: '/contact',
  },
];

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='w-100 flex bg-blue-700'>
        <div className='w-1/2 flex flex-col text-white px-6 py-16 mx-auto sm:px-6 lg:px-12'>
          <div className='border-right'>
            <div className='text-sm font-semibold uppercase'>
              Contact Us
              <p className='max-w-xs mt-1 text-xl font-semibold'>000-000-000</p>
            </div>
            <div className='mt-10'>
              <div className='h-6 sm:h-9'>
                <img className='h-full' src='/DoTEC.png' alt='logo' />
              </div>
              <p className='max-w-xs mt-1 text-sm font-normal'>
                Address : Lorem ipsum dolor sit amet. Ex cumque voluptatem sed
                maiores consequatur aut velit volupta
              </p>
            </div>
          </div>
        </div>
        <div className='w-1/2 px-6 py-16 mx-auto'>
          <div className='border-l-2 border-white sm:px-6 lg:px-12'>
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
    </footer>
  );
}
