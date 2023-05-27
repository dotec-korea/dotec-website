export default function HomeHero() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <header>
        <nav className='w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none'>
          <div className='xl:container m-auto px-6 md:px-12 lg:px-6'>
            <div className='flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5'>
              <div className='w-full items-center flex justify-between lg:w-auto'>
                <a className='relative z-10' href='#' aria-label='logo'>
                  <svg
                    className='h-9'
                    viewBox='0 0 942 272'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g
                      transform='translate(0.000000,201.000000) scale(0.100000,-0.100000)'
                      fill='#000000'
                      stroke='none'>
                      <path
                        d='M0 1005 l0 -1005 2235 0 2235 0 0 1005 0 1005 -2235 0 -2235 0 0
-1005z m793 665 c257 -30 465 -187 563 -426 l28 -71 69 24 c135 45 277 23 403
-63 35 -24 66 -44 69 -44 3 0 5 79 5 175 l0 175 -170 0 -171 0 3 117 3 118
695 1 c709 0 817 -3 902 -32 l48 -16 0 -129 c0 -74 -4 -129 -9 -129 -6 0 -25
9 -43 20 -87 51 -243 62 -346 25 -64 -23 -141 -75 -190 -129 -40 -44 -102
-155 -102 -184 0 -10 77 -12 366 -10 l367 3 14 55 c19 76 72 184 126 257 77
104 216 198 352 239 119 37 373 20 433 -28 8 -7 12 -47 12 -130 0 -137 10
-129 -100 -81 -56 24 -78 28 -160 28 -70 0 -108 -5 -145 -19 -189 -74 -305
-237 -305 -431 0 -280 247 -491 521 -446 39 6 93 23 119 36 27 14 54 25 60 25
12 0 14 -246 2 -254 -5 -3 -43 -14 -85 -25 -268 -72 -572 42 -726 273 -54 82
-74 126 -100 216 l-18 65 -366 3 c-306 2 -367 0 -367 -12 0 -7 16 -45 35 -84
48 -96 137 -178 237 -218 63 -25 84 -29 168 -28 96 1 94 0 238 61 10 4 12 -23
10 -128 l-3 -133 -60 -19 c-91 -29 -286 -29 -380 1 -115 36 -211 96 -300 186
-90 91 -138 175 -174 309 -23 84 -29 245 -11 301 5 17 19 64 31 103 12 40 41
103 65 139 24 37 44 71 44 75 0 5 -65 9 -145 9 l-145 0 -2 -572 -3 -573 -110
0 -110 0 -3 73 c-2 39 -5 72 -8 72 -3 0 -24 -15 -47 -34 -55 -44 -96 -64 -178
-87 -84 -23 -123 -24 -202 -3 -89 23 -154 59 -222 125 l-61 58 -54 -45 c-74
-61 -160 -108 -250 -135 -71 -22 -91 -24 -355 -24 l-280 0 -3 680 c-1 374 0
686 3 693 6 15 386 17 518 2z'
                      />
                      <path
                        d='M495 1429 c-3 -8 -4 -212 -3 -454 l3 -440 120 -3 c66 -2 149 2 185 8
252 44 420 305 355 553 -36 137 -126 245 -254 305 -76 36 -76 36 -238 40 -130
3 -164 1 -168 -9z'
                      />
                      <path
                        d='M1575 985 c-5 -2 -26 -6 -46 -9 -23 -4 -55 -22 -83 -47 -113 -100
-94 -284 37 -359 139 -80 307 5 333 168 12 77 -37 175 -108 215 -40 23 -110
39 -133 32z'
                      />
                    </g>
                  </svg>
                </a>
                <label
                  for='hbr'
                  className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'>
                  <div
                    aria-hidden='true'
                    className='m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300'></div>
                  <div
                    aria-hidden='true'
                    className='m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300'></div>
                </label>
              </div>
              <div className='navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0'>
                <div className='text-gray-600 dark:text-gray-300 lg:pr-4'>
                  <ul className='space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0'>
                    <li>
                      <a
                        href='#'
                        className='block md:px-4 transition hover:text-primary dark:hover:text-primaryLight'>
                        <span>ABOUT US</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block md:px-4 transition hover:text-primary dark:hover:text-primaryLight'>
                        <span>PRODUCTS</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block md:px-4 transition hover:text-primary dark:hover:text-primaryLight'>
                        <span>RESOURCES</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href='/contact'
                        className='block md:px-4 transition hover:text-primary dark:hover:text-primaryLight'>
                        <span>CONTACT US</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className='bg-white relative py-20 dark:bg-gray-900'>
        <div className='relative xl:container m-auto px-6 md:px-12 lg:px-6'>
          <h1 className='sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left  dark:text-white'>
            LIVE TECHNOLOGY
            <br />
            VALUABLE VALUES
          </h1>
          <div className='lg:flex'>
            <div className='relative mt-4 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12'>
              <p className='sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12'>
                A professional & specialist valve manufacturing company with
                years of proven track record
              </p>
              <div className='grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start'>
                <a
                  aria-label='explore more'
                  href='#'
                  className='p-4 bg-blue-600 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-lg duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30'>
                  <div className='flex justify-center space-x-4'>
                    <span className='hidden font-medium md:block text-white'>
                      Explore more
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
