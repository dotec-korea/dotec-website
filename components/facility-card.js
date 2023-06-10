export default function FacilityCard({ title, image, text }) {
  return (
    <div className='w-full mx-2 bg-white shadow-lg overflow-hidden flex flex-col justify-center items-center'>
      <div>
        <img
          className='object-center object-cover h-64 w-full'
          src={image}
          alt='photo'
        />
      </div>
      <div className='py-4 sm:py-3 self-start'>
        <p className='text-sm uppercase text-gray-900 font-bold ml-4'>
          {title}
        </p>
        {text && (
          <p className='text-xs text-gray-900 font-normal ml-4 mt-2'>{text}</p>
        )}
      </div>
    </div>
  );
}
