import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='w-100 flex bg-blue-700'>
        <div className='w-1/2 flex flex-col text-white px-6 py-16 mx-auto sm:px-6 lg:px-12'>
          <div className='border-right'>
            <div className='text-sm font-medium uppercase'>
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
        <div className='w-1/2 px-6 py-16 mx-auto sm:px-6 lg:px-12'>
          <nav className='flex flex-col mt-4 space-y-4 text-sm font-bold text-white'>
            <Link href='/about' className='hover:opacity-75'>
              About Us
            </Link>
            <Link href='/certification' className='hover:opacity-75'>
              Resources
            </Link>
            <Link href='/products' className='hover:opacity-75'>
              Products
            </Link>
            <Link href='/contact' className='hover:opacity-75'>
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
