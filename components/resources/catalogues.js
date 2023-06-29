import Link from 'next/link';
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdOpenInNew,
  MdPictureAsPdf,
} from 'react-icons/md';
export default function Catalogues({ catalogues }) {
  return (
    catalogues?.length > 0 && (
      <section id='cataloues'>
        <div className='p-8 mx-auto max-w-7xl xl:p-12'>
          <div className='inline-flex items-center w-full'>
            <span className='w-fit mr-5 text-blue-700 bg-white text-lg font-bold uppercase'>
              PRODUCT CATALOGUES
            </span>
            <hr className='w-2/5 my-8 border-blue-700 border-[1.5px]' />
          </div>
          <div className='w-full grid grid-cols-3 gap-4'>
            {catalogues.map((catalogue, index) => (
              <div key={index} className='w-full flex'>
                <div className='w-1/5 p-3 bg-gray-400 flex justify-center items-center'>
                  <MdPictureAsPdf className='text-4xl text-white' />
                </div>
                <div className='w-3/5 px-6 py-4 bg-gray-400 flex justify-center items-center text-lg text-gray-800 font-medium'>
                  {catalogue.title}
                </div>
                <Link
                  href={catalogue.file.url}
                  target='_blank'
                  className='w-1/5  p-3 bg-gray-200 flex justify-center items-center'
                >
                  <MdOpenInNew className='text-4xl text-gray-800' />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}
