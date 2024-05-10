import React from 'react'

const Titlecard = () => {
    return (
        <div>
            <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-800 text-center lg:text-4xl p-4 mt-5 dark:text-white"><span className="border-b-4 px-10 border-b-yellow-400">Title</span></h2>
            <div className="flex flex-row flex-wrap justify-center  md:my-5">
                <div className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 transform hover:scale-110 duration-200">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">web development in 2024</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Web development is the process of creating websites or web applications. It involves designing, building, and maintaining websites using various programming languages, frameworks, and tools. Web developers use technologies like HTML, CSS, and JavaScript to create the structure, style, and interactivity of web pages.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Show details
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 transform hover:scale-110 duration-200">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">frontend develope in 2024</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">They are responsible for implementing a website, such as layout, design, and functionality. Frontend developers with designers and backend developers to bring designs to life and ensure seamless user experiences. Proficient in HTML, CSS, and JavaScript, they use frameworks like React, Angular, or Vue.js to build dynamic and responsive web interfaces.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Show details
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
        
                <div className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 transform hover:scale-110 duration-200">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">backend developer in 2024</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Backend developers focus on the server-side of web development. They use languages like Python, Java, or Node.js to handle data storage, user authentication, and application logic. Collaborating with frontend developers, they ensure smooth functioning and performance of web systems.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Titlecard