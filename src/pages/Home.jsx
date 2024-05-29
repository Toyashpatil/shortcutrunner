import React from 'react'
import { motion } from "framer-motion"

const Home = () => {
    return (
        <div className='flex items-center justify-center'>
                <motion.div
                className='bg-red-500'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                    drag="x"
                    dragConstraints={{ left: 100, right: 100 }}
                >
                    <motion.svg>
                        Hello
                    </motion.svg>
                </motion.div>

            {/* <div className=' justify-center items-center space-y-10 '>
                <div className='flex items-center justify-center'>
                    <h1>TOYASH PATIL</h1>
                </div>
                <div className=' gap-2 flex items-center bg-yellow-500 justify-center'>
                    <div>
                        FullStack dev
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        Student
                    </div>
                </div>

            </div> */}

        </div>
    )
}

export default Home