import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import NewsObject from './news-object';

export default function News() {
  return (
    <section id='news'>
      <div className='px-8 pt-12 pb-6 mx-auto max-w-7xl xl:px-12 grid grid-rows-4 grid-cols-4 grid-flow-col gap-4'>
        <div className='row-span-4 col-span-2 p-6'>
          <div className='inline-flex items-center w-full'>
            <span className='pr-3 font-medium text-blue-700 bg-white uppercase'>
              About
            </span>
            <hr className='w-full my-8 border-blue-700 border-[1.5px]' />
          </div>
          <div className='flex flex-col'>
            <div className='w-full aspect-video bg-gray-200'></div>
            <h2 className='text-xl tracking-wider my-4 font-bold'>
              Lorem ipsum dolor sit amet, consectetur adipisc
            </h2>
            <p className='text-lg tracking-wider font-medium'>
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque o eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad
            </p>
            <div className='flex justify-between my-6'>
              <div className='w-1/3 flex justify-between'>
                <button className='flex items-center uppercase font-bold text-left text-blue-700 hover:opacity-75'>
                  <MdNavigateBefore className='text-4xl' />
                </button>
                <button className='flex items-center uppercase font-bold text-right text-blue-700 hover:opacity-75'>
                  <MdNavigateNext className='text-4xl' />
                </button>
              </div>
              <div className='w-1/3 flex justify-end'>
                <button className='p-2 font-medium border-2 rounded-lg border-blue-700 text-blue-700 bg-white'>
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row-span-2 col-span-2 p-6'>
          <div className='inline-flex items-center w-full'>
            <span className='pr-3 font-medium text-blue-700 bg-white uppercase'>
              News
            </span>
            <hr className='w-full my-8 border-blue-700 border-[1.5px]' />
          </div>
          <div className='flex flex-col'>
            <NewsObject />
            <NewsObject />
          </div>
        </div>
        <div className='row-span-2 col-span-2 p-6'>
          <div className='inline-flex items-center w-full'>
            <span className='pr-3 font-medium text-blue-700 bg-white uppercase'>
              Reports
            </span>
            <hr className='w-full my-8 border-blue-700 border-[1.5px]' />
          </div>
          <div className='flex flex-col'>
            <NewsObject />
            <NewsObject />
          </div>
        </div>
      </div>
    </section>
  );
}
