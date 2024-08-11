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
            back: 'Answer: 3',
            isFlipped: false,
            category: 'Math',
        },
        {
            front: 'How old can I cow become',
            back: 'Answer: Cows can be up to 20 years',
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
                        <Card display={flashCards[index].front} />
                    ) : (
                        <Card display={flashCards[index].back} />
                    )}
                </div>
            ))}
        </>
    )
}
