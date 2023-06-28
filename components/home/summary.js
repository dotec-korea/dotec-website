import Link from 'next/link';

export default function Summary({ title, summary, link, image }) {
  return (
    <section id='summary'>
      <div className='flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12'>
        <div className='border-l-4 border-blue-700 p-8'>
          <div className='flex flex-col justify-start'>
            <p className='text-md tracking-wider text-gray-500 text md:text-left'>
              {summary}
            </p>
            <Link
              href={'/about'}
              className='mt-5 underline underline-offset-8 text-sm font-semibold leading-none text-left text-indigo-600 uppercase'
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
