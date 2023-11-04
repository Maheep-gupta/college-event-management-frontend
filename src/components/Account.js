import React from 'react'
import Navbar from './Navbar'

function Account() {
    function handleLogout() {
        localStorage.setItem('adminLogged', false)
        localStorage.setItem('userLogged', false)
        window.location.href='/'
    }
    return (
        <>
            <div className='flex lg:h-full h-full w-screen flex-col lg:flex-row '>

                <Navbar title='account' />
                <div className='bg-gradient-to-tl from-green-400 to-indigo-900 w-full'>
                    <section class=" bg-gradient-to-tl from-green-400 to-indigo-900 w-full">
                        <div class="px-4 mx-auto">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                                <div class="px-6">
                                    <div class="flex flex-wrap justify-center">
                                        <div class="w-full px-4 flex justify-center">
                                            <div class="">
                                                <img alt="..." src={require('../assets/student-icon.png')} class="shadow-xl rounded-full h-auto align-middle border-none absolute mt-2 -ml-20 lg:-ml-16 w-24" />
                                            </div>
                                        </div>
                                        <div className="w-full px-4 text-center mt-20">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">

                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        10
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">Event Participated</span>
                                                </div>
                                                <div className="lg:mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        89
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">Event Joined</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            Jenna Stones
                                        </h3>
                                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                            Los Angeles, California
                                        </div>
                                        <div className="mb-2 text-blueGray-600">
                                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                            Kamla Nehru Institute of Physical and Social Sciences
                                        </div>
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12 px-4">
                                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                    An artist of considerable range, Jenna the name taken
                                                    by Melbourne-raised, Brooklyn-based Nick Murphy
                                                    writes, performs and records all of his own music,
                                                    giving it a warm, intimate feel with a solid groove
                                                    structure. An artist of considerable range.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center align-center'><button class=" flex shadow  block border-blue-600 border-2 rounded focus:outline-none focus:border-blue-600 px-4 py-2 text-blue-600 hover:text-white " onClick={handleLogout}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='text-blue-600  ' style={{ fill: 'rgb(37 99 235)' }}><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                                    
                                </button></div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </>
    )
}

export default Account