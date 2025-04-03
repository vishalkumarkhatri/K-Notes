import React from 'react'
import Card from '../components/container/Card'

function Departments() {
    const cardItems = [
        {
            title: 'Vocational',
            description: [
                ['B.Sc.Computer Application', { slug: '/computer-application' }],
                ['B.Sc.Information Technology', { slug: '/information-technology' }],
            ]

        },
        {
            title: 'Science',
            description: [
                ['B.Sc.Mathematics', { slug: '/maths' }],
                ['B.Sc.Physics', { slug: '/physics' }],
                ['B.Sc.Chemistry', { slug: '/chemistry' }],
            ]
        },

    ]
    return (
        <>
            <div className="flex items-center justify-center min-h-130">
                {cardItems.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} />
                ))}
            </div>

        </>
    )
}

export default Departments  