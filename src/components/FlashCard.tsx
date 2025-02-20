import { useState } from 'react'
import { Card } from './Card'

type FlashCardProps = {
    front: string
    back: string
    isFlipped: boolean
    category: string
}

export const FlashCard = () => {
    const [flashCards, setFlashCards] = useState<FlashCardProps[]>([
        {
            front: 'How much is 1 + 2',
            back: '3',
            isFlipped: false,
            category: 'Math',
        },
        {
            front: 'How old can I cow become',
            back: 'Cows can be up to 20 years',
            isFlipped: false,
            category: 'Common Knowledge',
        },
    ])

    const toggleFlashCard = (index: number) => {
        setFlashCards((prevFlashCards) =>
            prevFlashCards.map((card, i) =>
                i === index ? { ...card, isFlipped: !card.isFlipped } : card
            )
        )
    }

    return (
        <>
            {flashCards.map((card, index) => (
                <div
                    className="inline"
                    key={index}
                    onClick={() => toggleFlashCard(index)}
                >
                    {!card.isFlipped ? (
                        <Card
                            display={`Answer: ${flashCards[index].front}`}
                            category={`Category: ${flashCards[index].category}`}
                        />
                    ) : (
                        <Card display={flashCards[index].back} />
                    )}
                </div>
            ))}
        </>
    )
}
