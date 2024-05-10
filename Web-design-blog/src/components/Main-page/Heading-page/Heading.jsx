import React from 'react'
import Image from '../../../Image/image.png'

const Heading = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="flex flex-row items-center md:justify-center md:p-10 p-2">
                    <div className="md:mt-50 md:ml-20 md:w-3/5 mt-20 w-4/4 mx-10">
                        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-800  lg:text-6xl dark:text-white uppercase">Web development</h1>
                        <p className="mb-6 text-lg font-medium text-gray-700 lg:text-xl dark:text-gray-400">I'm a full-stack developer wielding the Web-develop like a seasoned architect. I enjoy building sites & apps. My focus is React (Node.js).</p>
                        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Contact
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                    <div className="md:mt-30 md:mr-20 mr-10 hidden md:block">
                        <img src={Image} alt="image" className="object-cover transform hover:scale-125 duration-150" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Heading