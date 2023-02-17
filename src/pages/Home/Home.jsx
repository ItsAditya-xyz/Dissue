import React from "react";
import Navbar from "../../Components/Navbar";

import star from "../../assets/star.png";
import copies from "../../assets/copies.png";
import fun from "../../assets/fun.png";
import transparency from "../../assets/transparency.png";
import forever from "../../assets/forever.png";
import Spread from "../../Components/Spreadsheet";
const Home = () => {
  return (
    <>
      <Navbar showLogin={true} />
      <Spread />

      <div className='relative inline-flex justify-center rounded-full items-center w-full mt-24 mb-4 px-2 '>
        <div className='relative text-4xl md:pt-10 font-bold text-gray-800 text-center  sm:text-4xl lg:text-6xl leading-normal rounded-full z-10 md:w-3/4'>
          <span className=' blur-2xl filter opacity-10 w-full h-full absolute inset-0 rounded-full'></span>
          <span className='md:px-5'>
            <span className='   font-extrabold    bg-clip-text  bg-gradient-to-r from-blue-500 to-green-600 text-transparent '>
              Innovating
            </span>{" "}
            the Result and Certificate{" "}
            <span className=' bg-clip-text font-extrabold  decoration-slate-100 underline-offset-8 underline  bg-gradient-to-r from-blue-500 to-green-600 text-transparent'>
              Issuance
            </span>{" "}
            in an Exciting Way
          </span>
        </div>
      </div>

      <div className='relative flex justify-center text-gray-800 text-xl leading-normal mt-6 text-center'>
        <p>
          <span className='font-bold'>Dissue</span> enables insitutions to issue
          Blockchain based results and certificates for a more secure and
          transparent system.
        </p>
        <img
          src={star}
          className='invisible sm:visible absolute top-0 right-36 w-20 h-20 opacity-80 -z-40'
        />
      </div>

      <div className='relative flex justify-center mt-6'>
        <button
          target={"_blank"}
          id='navAction'
          className='mx-auto shadow-lg lg:mx-0  text-gray-100 font-extrabold rounded mt-4 lg:mt-0 py-4 px-12  bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-600'>
          Get Started
        </button>
        <img
          src={copies}
          className='invisible sm:visible absolute top-0 left-44 w-20 h-20 opacity-60'
        />
      </div>

      <div>
        <section className='py-14'>
          <div className='container max-w-5xl mx-auto m-8'>
            <h1 className='w-full my-2 text-5xl font-bold leading-tight text-center underline-offset-8 underline text-gray-700 decoration-gray-800'>
              Why Dissue?
            </h1>
            <div className='w-full mb-4'>
              <div className='h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t'></div>
            </div>
            <div className='flex flex-wrap justify-center'>
              <div className='w-5/6 sm:w-1/2 p-6'>
                <h3 className='text-3xl  font-bold leading-none mb-3'>
                  All in one platform for result issuance
                </h3>
                <p className={`  mb-8`}>
                  Dissue aims to provide a single platform for all the needs of
                  a institutions from result issuance to certificate issuance
                  and viewing with verifiable blockhain data.
                  <br />
                  <br />
                </p>
              </div>
              <div className='w-full sm:w-1/3 px-16'>
                <img src={fun} className='w-36 mx-auto'></img>
              </div>
            </div>
            <div className='flex flex-wrap flex-col-reverse sm:flex-row justify-center'>
              <div className='w-full sm:w-1/3 p-6 '>
                <img src={transparency} className='w-40 mx-auto'></img>
                {/* <Image src={noAds} /> */}
              </div>
              <div className='w-full sm:w-1/2 p-6 mt-6 flex'>
                <div className='align-middle'>
                  <h3 className='text-3xl  font-bold leading-none mb-3 text-center'>
                    Transparent
                  </h3>
                  <p className='text-center'>
                    Everythin on Dissue is on Blockchain making Results and
                    Certificates completely verifiable
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap flex-col-reverse sm:flex-row items-center justify-center'>
              <div className='w-full sm:w-1/2 p-6 justify-center mx-auto'>
                <div className='align-middle text-center'>
                  <h3 className='text-3xl  font-bold leading-none mb-3'>
                    Once and Forever
                  </h3>
                  <p>
                    No need to worry about losing your results and certificates.
                    Dissue provides a permanent solution to store student
                    results and certificates using Blochain Technology
                    <br />
                    <br />
                  </p>
                </div>
              </div>
              <div className='w-full sm:w-1/3 p-6 mt-6'>
                <img src={forever} className='w-40 mx-auto'></img>
              </div>
            </div>
            <div className='flex flex-wrap flex-col-reverse sm:flex-row items-center'>
              <div className=' sm:w-1/3 px-20 '></div>
            </div>
          </div>
        </section>

        <footer className={`text-center lg:text-left  `}>
          <div
            className={`flex justify-center items-center lg:justify-between p-6 border-b`}>
            <div className='mr-12 hidden lg:block'>
              <span>Get connected with us on social networks</span>
            </div>
            <div className='flex justify-center'>
              <a
                href='https://twitter.com/ItsAditya_xyz'
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
                    fill='black'
                    d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
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
                  Dissue
                </h6>
                <p>
                Dissue is a decentralized platform for issueing student results and certificates. Dissue is built on the Polygon Blockchain and uses IPFS for storing data.
                </p>
              </div>

              <div className=''>
                <h6 className='uppercase font-semibold mb-4 flex justify-center md:justify-start'>
                  Contact
                </h6>

                <p className='flex items-center justify-center md:justify-start mb-4'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='home'
                    className='w-4 mr-4'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'>
                    <path
                      fill='currentColor'
                      d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'></path>
                  </svg>
                  India
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
