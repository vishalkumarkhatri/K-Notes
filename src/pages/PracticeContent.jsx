import React from 'react'
import { Link } from 'react-router-dom'

function PracticeContent() {
    const frontContent = [
        {
            name: 'C',
            slug: '/learning/c',
            content:
            {
                title: 'Beginner\'s to Advanced Problems in C',
                description: 'C programming language questions and solutions for beginners to advanced.',
            }
        },
        {
            name: 'C++',
            slug: '/learning/cpp',
            content:
            {
                title: 'Beginner\'s to Advanced Problems in C++',
                description: 'C++ programming language questions and solutions for beginners to advanced.',
            }
        },
        {
            name: 'DSA',
            slug: '/learning/dsa',
            content:
            {
                title: 'Beginner\'s to Advanced Problems in DSA',
                description: 'DSA questions and solutions for beginners to advanced.',
            }
        },
        {
            name: 'Java',
            slug: '/learning/java',
            content:
            {
                title: 'Beginner\'s to Advanced Problems in Java',
                description: 'Java programming language questions and solutions for beginners to advanced.',
            }
        },
        {
            name: 'JavaScript',
            slug: '/learning/javascript',
            content:
            {
                title: 'Beginner\'s to Advanced Problems in JavaScript',
                description: 'JavaScript questions and solutions for beginners to advanced.',
            }
        },
        {
            name: 'Python',
            slug: '/learning/python',
            content:
            {
                title: 'Beginner\'s to Advanced Problems in Python',
                description: 'Python programming language questions and solutions for beginners to advanced.',
            }
        },
        {
            name: 'Command Prompt',
            slug: '/learning/command-prompt',
            content:
            {
                title: 'Beginner\'s to Advanced Problems in CMD',
                description: 'CMD questions and solutions for beginners to advanced.',
            }
        },
        {
            name: 'Git',
            slug: '/learning/git',
            content:
            {
                title: 'A Beginner\'s Guide to Git',
                description: 'This tutorial is designed for Beginner\'s who want to learn Git programming language there fundamentals.',
            }
        }
    ]

    return (
        <div>
            {
                frontContent.map((item) => {
                    return (
                        <div className="felx w-200 h-50 shadow-lg rounded-2xl p-5 flex-row justify-center items-center ml-80 mt-5 mb-5 overflow-hidden inline-bloc card-gradient" style={{ color: '#fbf2c4' }} >
                            <Link to={item.slug} key={item.slug} className='cursor-pointer'>
                                <div>
                                    <h2 className="text-xl font-serif text-baseline">Topic: <b>{item.name}</b></h2>
                                    <h1 className="text-2xl font-serif text-baseline mt-2"><b>{item.content.title}</b></h1>
                                    <p className="text-lg font-serif text-baseline mt-2">{item.content.description}</p>
                                </div>
                            </Link>
                        </div >
                    )
                })
            }
        </div>
    )
}

export default PracticeContent