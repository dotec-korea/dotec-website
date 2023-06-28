import { MdChevronRight } from 'react-icons/md';

export default function Manufacturing({ selectedProcess, setProcess }) {
  const changeProcess = (process) => {
    alert(selectedProcess);
    if (process) {
      setProcess(process);
    }
  };
  return (
    <section id='manufacturing-process' className='bg-gray-100'>
      <h3 className='px-8 pt-12 pb-6 mx-auto max-w-7xl xl:px-12 text-2xl font-bold text-blue-700 uppercase sm:text-left md:text-4xl'>
        MANUFACTURING PROCESS
      </h3>
      <div className='w-full pt-6 mb-12 mx-auto max-w-7xl xl:px-12 flex justify-center'>
        <div class='w-full grid grid-cols-4 gap-4'>
          <div className='flex items-center'>
            <div
              className={`grow cursor-pointer ${
                selectedProcess == 'casting'
                  ? 'text-white bg-blue-700'
                  : 'text-gray-700 bg-gray-100'
              } py-8 flex justify-center`}
              onClick={() => changeProcess('casting')}
            >
              CASTING
            </div>
            <MdChevronRight fontSize={40} className='text-blue-700' />
          </div>
          <div className='flex items-center'>
            <div
              className={`grow cursor-pointer ${
                selectedProcess === 'assembling'
                  ? 'text-white bg-blue-700'
                  : 'text-gray-700 bg-gray-100'
              } py-8 flex justify-center`}
              onClick={() => setProcess('machining')}
            >
              MACHINING
            </div>
            <MdChevronRight fontSize={40} className='text-blue-700' />
          </div>
          <div className='flex items-center'>
            <div
              className={`grow cursor-pointer ${
                selectedProcess === 'assembling'
                  ? 'text-white bg-blue-700'
                  : 'text-gray-700 bg-gray-100'
              } py-8 flex justify-center`}
              onClick={() => setProcess('assembling')}
            >
              ASSEMBLING
            </div>
            <MdChevronRight fontSize={40} className='text-blue-700' />
          </div>
          <div className='flex items-center'>
            <div
              className={`grow cursor-pointer ${
                selectedProcess === 'assembling'
                  ? 'text-white bg-blue-700'
                  : 'text-gray-700 bg-gray-100'
              } py-8 flex justify-center`}
              onClick={() => setProcess('inspection')}
            >
              INSPECTION & TEST
            </div>
          </div>
        </div>
      </div>
      <div className='w-full pt-6 mb-40 mx-auto max-w-7xl xl:px-12 flex justify-center'>
        <div class='w-full grid grid-cols-3 gap-16'>
          {[...Array(8)].map((ele, i) => (
            <div key={i}>
              <img
                className='h-full'
                src='https://plus.unsplash.com/premium_photo-1677323396129-0a5d464eb491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kdXN0cmlhbCUyMGludGVyaW9yfGVufDB8fDB8fHww&w=1000&q=80'
                alt='logo'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
