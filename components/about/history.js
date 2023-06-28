import { MdChevronRight } from 'react-icons/md';

export default function BriefHistory() {
  return (
    <section id='ceo-greetings' className='bg-white mt-16'>
      <h3 className='px-8 pt-12 mx-auto max-w-7xl xl:px-12 text-2xl font-bold text-blue-700 uppercase sm:text-left md:text-4xl'>
        Brief History
      </h3>
      <div className='flex items-center mt-24 mb-56 w-10/12 mx-auto'>
        <div
          className='flex pb-8'
          style={{
            overflowX: 'scroll',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {[...Array(8)].map((ele, i) => (
            <div key={i} className='snap-center py-2' style={{ minWidth: 200 }}>
              <div className='year font-bold text-blue-700 leading-none text-5xl'>
                1999
              </div>
              <div className='month font-light text-blue-700 text-xl'>APR</div>
              <div className='divider text-blue-700 py-5 flex items-center'>
                <div className='w-2 h-2 bg-blue-700 rounded-full'></div>
                <div className='h-0.5 w-full bg-blue-700'></div>
              </div>
              <div className='description w-32'>
                Awarded the prime minister prize on Korean Export Day
              </div>
            </div>
          ))}
        </div>
        <div className='mb-24 arrow'>
          <MdChevronRight
            fontSize={80}
            className='text-blue-700 cursor-pointer'
          />
        </div>
      </div>
    </section>
  );
}
