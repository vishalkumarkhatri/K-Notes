import React from 'react'
import Card from '../components/container/Card'

function Library() {
    const cardItems = [
        {
            title: 'Books',
            description: [
                ['Vocational', { slug: '/vocational' }],
                ['Science', { slug: '/science' }],
            ]

        },
        {
            title: 'Notes',
            description: [
                ['Vocational', { slug: '/vocational' }],
                ['Science', { slug: '/science' }],
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

export default Library  