const Table = ({ header, body, width }) => {
  return (
    <div className='w-1/4 flex-shrink-0'>
      <table className='w-full'>
        <thead>
          <tr className='text-sm uppercase tracking-wider text-blue-700 text-left'>
            <th className='w-full px-1 py-3'>{header}</th>
          </tr>
        </thead>
        <tbody>
          {body?.map((item, index) => {
            return (
              <tr
                key={index}
                className='text-sm tracking-wider font-semibold text-gray-600'
              >
                <td className='w-full p-1'>{item}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
