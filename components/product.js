import React from 'react';
import SectionSeparator from './section-separator';

export default function Product() {
  const description =
    '2 Piece body <br/> Floating Ball  <br/>  Full Bore <br/>  Fire Safe Design  <br/> ISO 5211 Mounting pad <br/>  Locking Device <br/>  Anti-static Device <br/>  Blow-proof stem <br/> Cavity Relief Seat  <br/>  Double "D" Design';

  return (
    <div className='w-full flex my-10'>
      <div className='w-1/4 p-6'>
        <h5 className='font-bold uppercase tracking-wide text-sm mb-3 cursor-default'>
          Metal Seat Ball Valves
        </h5>
        <p className='text-sm my-1 tracking-wide cursor-pointer hover:text-blue-700'>
          Floating metal seat ball valves
        </p>
        <p className='text-sm my-1 tracking-wide cursor-pointer hover:text-blue-700'>
          Floating metal seat ball valves
        </p>
        <p className='text-sm my-1 tracking-wide cursor-pointer hover:text-blue-700'>
          Floating metal seat ball valves
        </p>
        <p className='text-sm my-1 tracking-wide cursor-pointer hover:text-blue-700'>
          Floating metal seat ball valves
        </p>
        <p className='text-sm my-1 tracking-wide cursor-pointer hover:text-blue-700'>
          Floating metal seat ball valves
        </p>
      </div>
      <div className='w-3/4 p-6'>
        <div className='grid grid-cols-3 gap-5'>
          <div className='w-full flex bg-gray-100 p-4'>
            <div className='w-1/2 p-3'>
              <div className='w-full h-24 bg-orange-100'></div>
            </div>
            <div className='w-1/2 text-lg font-medium flex items-center'>
              Floating metal seat ball valves
            </div>
          </div>
          <div className='w-full flex bg-gray-100 p-4'>
            <div className='w-1/2 p-3'>
              <div className='w-full h-24 bg-orange-100'></div>
            </div>
            <div className='w-1/2 text-lg font-medium flex items-center'>
              Floating metal seat ball valves
            </div>
          </div>
          <div className='w-full flex bg-gray-100 p-4'>
            <div className='w-1/2 p-3'>
              <div className='w-full h-24 bg-orange-100'></div>
            </div>
            <div className='w-1/2 text-lg font-medium flex items-center'>
              Floating metal seat ball valves
            </div>
          </div>
          <div className='w-full flex bg-gray-100 p-4'>
            <div className='w-1/2 p-3'>
              <div className='w-full h-24 bg-orange-100'></div>
            </div>
            <div className='w-1/2 text-lg font-medium flex items-center'>
              Floating metal seat ball valves
            </div>
          </div>
        </div>
        <SectionSeparator width={'3/4'} />
        <div className='w-full p-6 bg-gray-100'>
          <div className='flex'>
            <div className='w-full aspect-square bg-orange-100'></div>
            <div className='w-full p-8'>
              <h2 className='text-4xl font-bold'>
                Floating metal seat ball valves
              </h2>
              <p className='my-4 uppercase text-blue-700 text-base font-medium'>
                MODEL NO: BAH
              </p>
              <div className='text-gray-600'>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          </div>
          <SectionSeparator width={'full'} />
          <table className='w-full table-auto'>
            <thead>
              <tr className='text-sm uppercase tracking-wider text-blue-700 text-left '>
                <th className='w-2/12 px-1 py-3'>CLASS</th>
                <th className='w-2/12 px-1 py-3'>SIZE</th>
                <th className='w-4/12 px-1 py-3'>BODY MATERIALS</th>
                <th className='w-4/12 px-1 py-'>DESIGN</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-2/12 p-1'>FB 150lb</td>
                <td className='w-2/12 p-1'>1/2" - 10"</td>
                <td className='w-4/12 p-1'>Cast Stainless Steel</td>
                <td className='w-4/12 p-1'>API 6D</td>
              </tr>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-2/12 p-1'>FB 300lb</td>
                <td className='w-2/12 p-1'>1/2" - 10"</td>
                <td className='w-4/12 p-1'>Cast Stainless Steel</td>
                <td className='w-4/12 p-1'>API 608</td>
              </tr>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-2/12 p-1'>FB 600lb</td>
                <td className='w-2/12 p-1'>1/2" - 6"</td>
                <td className='w-4/12 p-1'>Forged Stainless Steel</td>
                <td className='w-4/12 p-1'>ASME/ANSI B16.34</td>
              </tr>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-2/12 p-1'>FB 1500lb</td>
                <td className='w-2/12 p-1'>1/2" - 2"</td>
                <td className='w-4/12 p-1'>Duples Stainless Steel</td>
                <td className='w-4/12 p-1'>EN ISO 17292</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='w-full p-6 bg-gray-100 mt-4'>
          <table className='w-full table-auto'>
            <thead>
              <tr className='text-sm uppercase tracking-wider  text-left '>
                <th className='w-1/3 px-1 py-3 text-blue-700'>SPECIFICATION</th>
                <th className='w-2/3 px-1 py-3 text-black'>
                  API 607 & API 6FA | NACE STANDARD MR-0175
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-1/3 p-1 text-black'>Wall Thickness</td>
                <td className='w-2/3 p-1'>ASME/ANSI B16.34 & EN ISO 17292</td>
              </tr>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-1/3 p-1 text-black'>Bore Size</td>
                <td className='w-2/3 p-1'>API 602</td>
              </tr>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-1/3 p-1 text-black'>Face to Face</td>
                <td className='w-2/3 p-1'>Maker Standards</td>
              </tr>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-1/3 p-1 text-black'>End Flange</td>
                <td className='w-2/3 p-1'>ASME/ANSI B16.5 & ANSI B16.11</td>
              </tr>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-1/3 p-1 text-black'>Testing</td>
                <td className='w-2/3 p-1'>ANSI B16.104</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
