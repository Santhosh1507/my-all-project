import React from 'react'
import { Link } from 'react-router-dom';
import { TEInput, TERipple } from "tw-elements-react";
import image1 from '../../../images/page1.png'


const Register = () => {
    return (
        <section className="h-full bg-neutral-200 dark:bg-neutral-700 mt-3">
            <div className="container h-full">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap ms-12 ">
                                {/* <!-- Left column container--> */}
                                <div className="px-5 md:px-0 lg:w-7/12 sm:ms-2">
                                    <div className="md:mx-10 md:p-12">
                                        {/* <!--Logo--> */}
                                        <div className="text-center">
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Frontend Developer
                                            </h4>
                                        </div>

                                        <form>
                                            <p className="mb-4">Please register an account</p>
                                            {/* <!--Username input--> */}
                                            <TEInput
                                                type="text"
                                                label="Username"
                                                className="mb-4"
                                            ></TEInput>

                                            <TEInput
                                                type="text"
                                                label="Enter the name"
                                                className="mb-4"
                                            ></TEInput>

                                            {/* <!--Password input--> */}
                                            <TEInput
                                                type="password"
                                                label="Password"
                                                className="mb-4"
                                            ></TEInput>

                                            {/* <!--Submit button--> */}
                                            <div className="mb-12 pb-1 pt-1 text-center">
                                                <TERipple rippleColor="light" className="w-full">
                                                    <button
                                                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                        type="button"
                                                        style={{
                                                            background:
                                                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                                        }}
                                                    >
                                                        Sign up
                                                    </button>
                                                </TERipple>

                                                {/* <!--Forgot password link--> */}
                                                <a href="#!">Terms and conditions</a>
                                            </div>

                                            {/* <!--Register button--> */}
                                            <div className="flex items-center justify-between pb-6 sm-flex">
                                                <p className="mb-0 mr-2">Have an account?</p>
                                                <TERipple rippleColor="light">
                                                  <Link to='/login'> <button
                                                        type="button"
                                                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                    >
                                                        Login
                                                    </button></Link> 
                                                </TERipple>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* <!-- Right column container with background and description--> */}
                                <div
                                    className="flex items-center ms-32 rounded-b-lg lg:w-3/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    
                                >
                                    <div className="hidden lg:block sm:none">
                                    <img className="" src={image1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register