const Table = ({ header, body, width }) => {
  const isBodyMaterial = header === 'Body Material';

  return (
    body && (
      <div className={`${isBodyMaterial ? 'w-2/4' : 'w-1/4'} flex-shrink-0`}>
        <table className='w-full'>
          <thead>
            <tr className='text-xs lg:text-sm uppercase tracking-wider text-dotec text-left'>
              <th className='w-full px-1 py-3'>{header}</th>
            </tr>
          </thead>
          <tbody>
            {isBodyMaterial ? (
              <tr>
                <td className='w-full p-1'>
                  {body?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className='text-xs lg:text-sm leading-5 tracking-wider font-semibold text-gray-600'
                      >
                        {item}
                      </p>
                    );
                  })}
                </td>
              </tr>
            ) : (
              <>
                {body?.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className='text-xs lg:text-sm tracking-wider font-semibold text-gray-600'
                    >
                      <td className='w-full p-1'>{item}</td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Table;
