import React from 'react'
import { Container } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function PracticeHeader() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'C',
            slug: '/practice/c',
            active: true
        },
        {
            name: 'C++',
            slug: '/practice/cpp',
            active: true
        },
        {
            name: 'DSA',
            slug: '/practice/dsa',
            active: true
        },
        {
            name: 'Java',
            slug: '/practice/java',
            active: true
        },
        {
            name: 'JavaScript',
            slug: '/practice/javascript',
            active: true
        },
        {
            name: 'Python',
            slug: '/practice/python',
            active: true
        },
        {
            name: 'CMD',
            slug: '/practice/command-prompts',
            active: true
        },
        {
            name: 'Git',
            slug: '/practice/git',
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

export default PracticeHeader