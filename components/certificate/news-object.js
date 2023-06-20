export default function NewsObject() {
  return (
    <>
      <div className='w-full h-36 flex bg-gray-200 my-1'>
        <div className='w-3/12 aspect-square p-3'>
          <div className='w-full h-full bg-white'></div>
        </div>
        <div className='w-9/12 px-6 py-3'>
          <div className='h-full border-l-8 border-blue-700 p-4 flex flex-col justify-between'>
            <h5 className='text-lg font-bold tracking-wider'>
              Lorem ipsum dolor sit amet, consectetur adipisc
            </h5>
            <p className='text-sm tracking-wider font-medium text-blue-700'>
              ByLorem Ipsum | 02.02.2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
