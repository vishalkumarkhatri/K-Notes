import React from "react";
import { Container } from '../index'
import Logo from '../Logo'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "../header/LogoutBtn";



function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Departments',
            slug: '/departments',
            active: true
        },
        {
            name: 'Learning',
            slug: '/learning',
            active: true
        },
        {
            name: 'Contrubute',
            slug: '/contribute',
            active: true
        },
        {
            name: 'About',
            slug: '/about',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: false
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: false
        }
    ]


    return (
        <header className="py-1 shadow" style={{ color: '#fbf2c4' }}>
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        
                            <Logo width="70px" />
                        
                    </div>

                    <ul className="flex ml-auto">
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-block px-6 py-2 duration-200 hover:bg-teal-600 rounded-full cursor-pointer">
                                        {item.name}
                                    </button>
                                    {
                                        item.name === 'Login' || item.name === 'Signup' ? (
                                            authStatus === 'unauthenticated' ? (
                                                <button
                                                    onClick={() => navigate(item.slug)}
                                                    className="inline-block px-6 py-2 duration-200 hover:bg-teal-600 rounded-full cursor-pointer">
                                                    {item.name}
                                                </button>
                                            ) : (
                                                <LogoutBtn />
                                            )
                                        ) : null
                                    }
                                </li>
                            ) : null
                        ))}
                    </ul>

                </nav>
            </Container>
        </header>
    )
}

export default Header;