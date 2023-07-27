export default function FacilityCard({ title, image, text }) {
  return (
    <div className='w-fit snap-start flex-shrink-0 px-2'>
      <div className='bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center'>
        <div>
          {image && (
            <img
              className='object-center object-cover h-24 lg:h-64 w-full'
              src={image}
              alt='photo'
            />
          )}
        </div>
        <div className='py-2 lg:py-4 self-start'>
          <p className='text-xs lg:text-sm uppercase text-gray-900 font-bold ml-4'>
            {title}
          </p>
          {text && (
            <p className='text-xs text-gray-900 font-normal mx-4 mt-2'>
              {text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
