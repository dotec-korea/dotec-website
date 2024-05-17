export default function CeoGreetings() {
  return (
    <section id='ceo-greetings' className='bg-gray-100 px-5'>
      <h3 className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24 pt-12 pb-6 text-2xl font-bold text-dotec uppercase sm:text-left md:text-4xl'>
        Ceo Greetings
      </h3>
      <div className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24 w-full pt-6 pb-12 flex justify-center'>
        <div className='w-full lg:w-2/3'>
          <div className='grid justify-center grid-cols-3 gap-5 lg:gap-7'>
            <div className='w-full'>
              <img src='/CEO.webp' alt='' className='w-4/5 object-contain' />
            </div>
            <div className='w-full col-span-2 flex items-center border-t-2 border-dotec'>
              <blockquote className='relative'>
                <svg
                  className='absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-12 w-12 lg:h-24 lg:w-24 text-gray-200'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    d='M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z'
                    fill='currentColor'
                  />
                </svg>

                <div className='relative z-10'>
                  <p className='text-dotec font-bold text-sm lg:text-xl'>
                    <em>
                      We, DOTEC Co. Ltd., are a professional & specialist valve
                      manufacturing company with many years of proven track
                      record.
                    </em>
                  </p>
                  <p className='mt-5 text-gray-900 font-bold text-sm lg:text-lg uppercase'>
                    JONATHAN KOO
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
          <div className='mt-5 text-xs lg:text-base text-justify font-normal text-gray-900'>
            We are dedicated to design, develop and manufacture a wide range of
            superior quality valves and customer-orientated in offering prompt
            service. This website illustrates the types and range of valves we
            manufacture and market; many of which are manufactured by us and
            some, with in-house QC tests and certification by our professional
            engineers, are trade items.
            <br />
            <br />
            Our products are supplied locally and overseas worldwide for new and
            upgrading projects in chemical plants, petrochemical & thermal
            plants, oil-field and refinery applications - both onshore and
            offshore.
            <br />
            <br />
            We are capable of providing timely technical solutions to meet
            customers specific applications and needs and will promptly attend
            to any urgent enquiry. With our long-standing experience & in-depth
            engineering knowledge in valve manufacturing we hope to satisfy your
            service & technical expectations in terms of quality, price,
            delivery and after sales service.
            <br />
            <br />
            We always regard and value our customers as enduring partners in
            business and technological advancement.
            <br />
            <br />
            <br />
            <br />
            WITH BEST WISHES & KIND REGARDS,
            <br />
            <br />
            <br />
            <span className='font-semibold text-base lg:text-lg'>
              JONATHAN KOO
            </span>
            <br />
            PRESIDENT & CEO
          </div>
        </div>
      </div>
    </section>
  );
}
