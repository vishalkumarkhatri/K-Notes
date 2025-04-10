import React from 'react'
import { Container } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


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
            name: 'DSA',
            slug: '/learning/dsa',
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
            name: 'CMD',
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
            <header className="py-1 shadow font-serif" style={{ color: '#fbf2c4', background: 'rgba(24, 138, 141, 1) 100%' }}>
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

        </>
    )
}

export default Learning