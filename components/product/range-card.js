const RangeCard = ({ title, image, description, tables }) => {
  return (
    description && (
      <>
        <div className='w-full p-6 bg-gray-100'>
          <div className='flex flex-col lg:flex-row'>
            <div className='w-full aspect-square'>
              {image?.url && (
                <img
                  src={image?.url}
                  alt={title}
                  className='object-center object-contain h-full w-full'
                />
              )}
            </div>
            <div className='w-full lg:p-8'>
              <h2 className='text-md lg:text-2xl font-bold'>{title}</h2>
              <div
                className='text-gray-600 text-xs lg:text-base'
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
        <div className='w-full p-6 bg-gray-100 mt-4 grid grid-cols-2 gap-4'>
          {tables?.map((item, key) => {
            return (
              <img
                key={key}
                src={item.url}
                alt={title + ' ' + key}
                className='w-full h-full object-contain'
              />
            );
          })}
        </div>
      </>
    )
  );
};

export default RangeCard;
