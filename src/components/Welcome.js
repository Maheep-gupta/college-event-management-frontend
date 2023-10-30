import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'

function Welcome() {
    const [userAccessibility, setUserAccessibility] = useState(2)

    return (
        <>
            {
                userAccessibility ===1  ?
                  <Login /> :
                  userAccessibility ===0?
                  <Signup />
                  :
                  <div >

                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">Hey,Welcome!</h1>
                    <p>to EventO</p>
                </div>
                <div className="mt-10">
                    <div className="text-justify">
                        Welcome to EventO! We're excited to have you as part of our dynamic community. Our program is designed to ignite your passion and equip you with the skills to excel in the exhilarating world of event planning. You'll gain hands-on experience, collaborate with experts, and immerse yourself in the art of event execution.
                    </div>
                    <div className="text-justify mt-2">
                        Beyond academics, you'll find a vibrant college life with various clubs and activities. This journey is about growth, creativity, and lasting memories. Get ready to shape unforgettable experiences and create a successful future. We're here to support you every step of the way. Cheers to your adventure in event management!
                    </div>

                    <div className="my-5">

                        <button onClick={() => {
                            setUserAccessibility(0)
                        }} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold my-4">
                            REGISTER
                        </button>

                        <button onClick={() => {
                            setUserAccessibility(1)
                        }} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
              }
            
        </>
    )
}

export default Welcome