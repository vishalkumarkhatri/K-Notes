import React from 'react'
import { Link } from 'react-router-dom'

function LearningContent() {
    const frontContent = [
        {
            name: 'C',
            slug: '/learning/c',
            content:
            {
                title: 'A Beginner\'s Guide to C',
                description: 'This tutorial is designed for Beginner\'s who want to learn C programming language there fundamentals.',
            }
        },
        {
            name: 'C++',
            slug: '/learning/cpp',
            content:
            {
                title: 'A Beginner\'s Guide to C++',
                description: 'This tutorial is designed for Beginner\'s who want to learn C++ programming language there fundamentals.',
            }
        },
        {
            name: 'Java',
            slug: '/learning/java',
            content:
            {
                title: 'A Beginner\'s Guide to Java',
                description: 'This tutorial is designed for Beginner\'s who want to learn Java programming language there fundamentals.',
            }
        },
        {
            name: 'JavaScript',
            slug: '/learning/javascript',
            content:
            {
                title: 'A Beginner\'s Guide to JavaScript',
                description: 'This tutorial is designed for Beginner\'s who want to learn JavaScript programming language there fundamentals.',
            }
        },
        {
            name: 'Python',
            slug: '/learning/python',
            content:
            {
                title: 'A Beginner\'s Guide to Python',
                description: 'This tutorial is designed for Beginner\'s who want to learn Python programming language there fundamentals.',
            }
        },
        {
            name: 'Command Prompt',
            slug: '/learning/command-prompt',
            content:
            {
                title: 'A Beginner\'s Guide to Command Prompt',
                description: 'This tutorial is designed for Beginner\'s who want to learn Command Prompt programming language there fundamentals.',
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
                        <Link to={item.slug} key={item.slug} className='cursor-pointer'>
                            <div className="felx w-200 h-50 shadow-lg rounded-2xl p-5 flex-row justify-center items-center ml-80 mt-5 overflow-hidden inline-block" style={{ background: '#d1dbe4' }}>
                                <div>
                                    <h2 className="text-xl font-serif text-baseline">Topic: <b>{item.name}</b></h2>
                                    <h1 className="text-2xl font-serif text-baseline mt-2"><b>{item.content.title}</b></h1>
                                    <p className="text-lg font-serif text-baseline mt-2">{item.content.description}</p>
                                </div>
                            </div >
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default LearningContent