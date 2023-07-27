import Link from 'next/link';

export default function Summary({ summary }) {
  return (
    <section id='summary' className='px-5'>
      <div className='flex flex-col mx-auto px-6 md:px-12 lg:px-8 2xl:px-24'>
        <div className='lg:border-l-4 lg:border-blue-700 py-4 lg:p-8'>
          <div className='flex flex-col justify-start'>
            <p className='text-sm md:text-md tracking-wider text-gray-500 md:text-justify'>
              {summary}
            </p>
            <Link
              href={'/about'}
              className='mt-5 underline underline-offset-8 text-xs md:text-sm font-semibold leading-none text-left text-indigo-600 uppercase'
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
