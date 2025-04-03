import React from 'react'
// import backgroundimg from "../assets/images/background-img.jpg"
import backgroundimg from "../assets/images/bg.png"



function Home() {

    return (
        <>


            <div className="h-screen bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url(${backgroundimg})` }}>
            </div>

            <div className=" relative z-10 flex flex-col items-center justify-center min-h-screen text-center"
                style={{ background: '#74a892', color: '#fbf2c4' }}>

                <div className="flex flex-row w-full max-w-4xl mx-auto justify-between items-center">
                    <div className="flex flex-col items-start">
                        <div className="flex items-center mb-4">
                            <div className="bg-gray-600 p-2 rounded-full text-white">
                                ✔
                            </div>
                            <div className="ml-2">
                                <h3 className="text-lg font-bold">Organized Content</h3>
                                <p className="text-gray-600">We collect and organize educational materials.</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="bg-gray-600 p-2 rounded-full text-white">
                                📚
                            </div>
                            <div className="ml-2">
                                <h3 className="text-lg font-bold">Learning</h3>
                                <p className="text-gray-600">We provide learning resources.</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-l border-gray-300 h-32 mx-4"></div>

                    <div className="flex flex-col items-start">
                        <div className="flex items-center mb-4">
                            <div className="bg-gray-600 p-2 rounded-full text-white">
                                📝
                            </div>
                            <div className="ml-2">
                                <h3 className="text-lg font-bold">Exam Special Contents</h3>
                                <p className="text-gray-600">Provides last year questions paper and notes.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400">
                    Discover all the features
                </button>
            </div>

        </>
    );
}

export default Home;