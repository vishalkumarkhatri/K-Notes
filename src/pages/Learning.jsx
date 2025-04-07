import React from 'react'
import { Container } from '../components/index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { li } from 'framer-motion/client'


function Learning() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'C',
            slug: '/learning/c',
            active: true
        },
        {
            name: 'C++',
            slug: '/learning/cpp',
            active: true
        },
        {
            name: 'Java',
            slug: '/learning/java',
            active: true
        },
        {
            name: 'JavaScript',
            slug: '/learning/javascript',
            active: true
        },
        {
            name: 'Python',
            slug: '/learning/python',
            active: true
        },
        {
            name: 'Command Prompts',
            slug: '/learning/command-prompts',
            active: true
        },
        {
            name: 'Git',
            slug: '/learning/git',
            active: true
        },

    ]

    return (
        <>
            <header className="py-1 shadow font-serif" style={{ color: '#fbf2c4' }}>
                <Container>
                    <nav className='flex'>
                        <ul className='flex m-auto'>
                            {
                                navItems.map((item) => (
                                    <li key={item.name}>
                                        <button onClick={() => navigate(item.slug)} className="inline-block px-6 py-2 duration-200 hover:bg-teal-600 rounded-full cursor-pointer">
                                            {item.name}
                                        </button>

                                    </li>
                                ))
                            }

                        </ul>

                    </nav>

                </Container>
            </header>
            <div>
                <div className="felx w-200 h-50 shadow-lg rounded-2xl p-5 flex-row justify-center items-center ml-80 mt-5 overflow-hidden inline-block" style={{ background: '#d1dbe4' }}>
                    <div>
                        <h2 className="text-xl font-serif text-baseline">Topic: <b>C</b></h2>
                        <h1 className="text-2xl font-serif text-baseline mt-2"><b>A Beginner's Guide to C</b></h1>
                        <p className="text-lg font-serif text-baseline mt-2">This tutorial is designed for Beginner's who want to learn C programming language there fundamentals.</p>
                    </div>
                </div >
            </div>

        </>
    )
}

export default Learning