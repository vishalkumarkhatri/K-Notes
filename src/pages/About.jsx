import React from 'react'

import vishal from '../assets/images/vishal.png'
import c from '../assets/images/c.svg'
import cpp from '../assets/images/cpp.svg'
import java from '../assets/images/java.svg'
import js from '../assets/images/js.svg'
import react from '../assets/images/react.svg'
import github from '../assets/images/github.svg'
import bootstrap from '../assets/images/bootstrap.svg'
import tailwind from '../assets/images/tailwind-css.svg'
import html from '../assets/images/html-5.svg'
import css from '../assets/images/css3.svg'
import mongoDB from '../assets/images/mongodb.svg'
import mysql from '../assets/images/mysql.svg'
import node from '../assets/images/node-js.svg'
import express from '../assets/images/express.svg'
import excel from '../assets/images/ms-excel.svg'
import powerpoint from '../assets/images/ms-powerpoint.svg'
import word from '../assets/images/ms-word.svg'
import windows from '../assets/images/windows-11.png'
import linux from '../assets/images/linux.png'
import instagram from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
import {Link} from 'react-router-dom'

function About() {
    return (
        <div>
            <div className='py-10'>
                <h1 className='text-3xl font-bold font-serif text-center gradient-text'>About the Developer</h1>
                <h2 className='text-center text-lg font-bold font-serif' style={{ color: '#fbf2c4' }} >-Vishal Kumar Khatri</h2>
                <div className="border border-t-2 border-t-teal-950 mt-5" ></div>

                <div className="flex flex-row justify-center items-center">
                    <div className="w-auto h-auto m-10 flex justify-center items-center">
                        <img src={vishal} alt="Vishal Kumar Khatri" className="w-70 h-70 rounded-full" />
                    </div>
                    <div className="flex flex-row w-199 items-center justify-around" style={{ color: '#fbf2c4' }}>
                        <p className='text-lg font-bold font-serif'>
                            <h4 className='text-2xl font-bold font-serif mb-1'>Hey there!</h4>
                            I am Vishal Kumar Khatri, a full stack web developer and the founder of this website. I am passionate about coding and learning new frameworks and technologies. I am a quick learner and a problem solver. I am a team player and a self-motivated individual.
                        </p>
                    </div>
                </div>
                <div className="border border-t-2 border-t-teal-950 mt-5" > </div>
                <div className="flex flex-col justify-center items-center mt-2">
                    <h5 className='text-2xl font-bold font-serif text-design text-center'>Education</h5>
                    <div className="flex flex-row w-250 items-center justify-around ml-70 mt-2">
                        <p className='text-lg font-bold font-serif' style={{ color: '#fbf2c4' }}>
                            <ul className='list-disc list-outside'>
                                <li>Currently, I am pursuing my Bachelor of Science in Computer Science from Dr. Shyama Prasad Mukherjee University, Ranchi.</li>
                                <li>I have completed my intermidiate from S.S. +2 High School, Gola.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="border border-t-2 border-t-teal-950 mt-5" > </div>
                <div className="flex flex-col justify-center items-center mt-2">
                    <h5 className='text-2xl font-bold font-serif text-design text-center'>Language Known</h5>
                    <div className="flex flex-row w-250 items-center justify-around font-bold font-serif" style={{ color: '#fbf2c4' }}>

                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={c} alt="C" className="w-10 h-10" />
                            <h2 className='ml-2'>C</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={cpp} alt="C++" className="w-10 h-10" />
                            <h2 className='ml-2'>C++</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={java} alt="Java" className="w-10 h-10" />
                            <h2 className='ml-2'>Java</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={js} alt="JavaScript" className="w-10 h-10" />
                            <h2 className='ml-2'>JavaScript</h2>
                        </div>
                    </div>
                </div>
                <div className="border border-t-2 border-t-teal-950 mt-5" > </div>
                <div className="flex flex-col justify-center items-center mt-2">
                    <h5 className='text-2xl font-bold font-serif text-design text-center'>Skills</h5>
                    <div className="flex flex-row w-250 items-center justify-around font-bold font-serif" style={{ color: '#fbf2c4' }}>

                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={html} alt="HTML" className="w-10 h-10" />
                            <h2 className='ml-2'>HTML</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={css} alt="CSS" className="w-10 h-10" />
                            <h2 className='ml-2'>CSS</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={react} alt="React" className="w-10 h-10" />
                            <h2 className='ml-2'>React JS</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={node} alt="node" className="w-10 h-10" />
                            <h2 className='ml-2'>Node JS</h2>
                        </div>
                    </div>
                    <div className="flex flex-row w-250 items-center justify-around font-bold font-serif" style={{ color: '#fbf2c4' }}>

                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={express} alt="Express" className="w-10 h-10" />
                            <h2 className='ml-2'>Express JS</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={mysql} alt="MySQL" className="w-10 h-10" />
                            <h2 className='ml-2'>MySQL</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={mongoDB} alt="mongodb" className="w-10 h-10" />
                            <h2 className='ml-2'>MongoDB</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={github} alt="github" className="w-10 h-10" />
                            <h2 className='ml-2'>Git/GitHub</h2>
                        </div>
                    </div>
                </div>
                <div className="border border-t-2 border-t-teal-950 mt-5" > </div>
                <div className="flex flex-col justify-center items-center mt-2">
                    <h5 className='text-2xl font-bold font-serif text-design text-center'>UI Libraries</h5>
                    <div className="flex flex-row w-150 items-center justify-around font-bold font-serif" style={{ color: '#fbf2c4' }}>

                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={tailwind} alt="tailwind" className="w-10 h-10" />
                            <h2 className='ml-2'>Tailwind CSS</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={bootstrap} alt="bootstrap" className="w-10 h-10" />
                            <h2 className='ml-2'>Bootstap</h2>
                        </div>
                    </div>
                </div>
                <div className="border border-t-2 border-t-teal-950 mt-5" > </div>
                <div className="flex flex-col justify-center items-center mt-2">
                    <h5 className='text-2xl font-bold font-serif text-design text-center'>Other Skills</h5>
                    <div className="flex flex-row w-250 items-center justify-around font-bold font-serif" style={{ color: '#fbf2c4' }}>

                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={word} alt="ms-word" className="w-10 h-10" />
                            <h2 className='ml-2'>MS Word</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={excel} alt="ms-excel" className="w-10 h-10" />
                            <h2 className='ml-2'>MS Excel</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={powerpoint} alt="ms-powerpoint" className="w-10 h-10" />
                            <h2 className='ml-2'>MS Powerpoint</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={windows} alt="windows" className="w-10 h-10" />
                            <h2 className='ml-2'>Windows</h2>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <img src={linux} alt="Linux" className="w-10 h-10" />
                            <h2 className='ml-2'>Linux</h2>
                        </div>
                    </div>
                </div>
                <div className="border border-t-2 border-t-teal-950 mt-5" > </div>
                <div className="flex flex-col justify-center items-center mt-2">
                    <h5 className='text-2xl font-bold font-serif text-design text-center'>To Contact</h5>
                    <div className="flex flex-row w-50 items-center justify-around font-bold font-serif" style={{ color: '#fbf2c4' }}>

                        <div className='flex flex-row justify-center items-center mt-5'>
                            <Link to="https://www.instagram.com/vishalkumarkhatri/">
                                <img src={instagram} alt="Instagram" className="w-10 h-10" />
                            </Link>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <Link to="https://www.linkedin.com/in/vishalkumarkhatri/">
                                <img src={linkedin} alt="Linkdin" className="w-10 h-10" />
                            </Link>
                        </div>
                        <div className='flex flex-row justify-center items-center mt-5'>
                            <Link to="https://github.com/vishalkumarkhatri">
                                <img src={github} alt="Github" className="w-10 h-10" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About