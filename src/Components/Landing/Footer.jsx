import React from "react";

export default function Footer() {
  return (
    <footer
      className={`text-center lg:text-left  bg-gray-900 text-white py-10`}>
      <div className='flex justify-center items-center lg:justify-between p-6 border-b border-gray-800 $'>
        <div className='mr-12 hidden lg:block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div className='flex justify-center'>
          <a
            href='https://twitter.com/itsaditya_xyz'
            target={"_blank"}
            rel='noreferrer'
            className='mr-6 text-gray-600'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='twitter'
              className='w-4'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'>
              <path
                fill={"white"}
                d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
            </svg>
          </a>
          <a
            href=''
            target={"_blank"}
            rel='noreferrer'
            className='mr-6 
          '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-discord'
              viewBox='0 0 16 16'>
              <path d='M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z' />
            </svg>
          </a>
        </div>
      </div>
      <div className='mx-6 py-10 text-center md:text-left'>
        <div className='grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className=''>
            <h6
              className='
      uppercase
      font-semibold
      mb-4
      flex
      items-center
      justify-center
      md:justify-start
    '>
              DeResult
            </h6>
            <p>
              DeResult is a platform that enables insitiutions to issue
              blockchain based certificates and results
            </p>
          </div>

          <div className=''>
            <h6 className='uppercase font-semibold mb-4 flex justify-center md:justify-start'>
              Contact
            </h6>
          </div>
        </div>
      </div>
      <div className='text-center p-6 '>
        <span>© 2023 Copyright:</span>
        <a
          className='font-semibold'
          href='/'
          rel='noreferrer'>
          Deresult
        </a>
      </div>
    </footer>
  );
}
