import { useState } from 'react'
import { Card } from './Card'

type FlashCardProps = {
    front: string
    back: string
    isFlipped: boolean
}

export const FlashCard = () => {
    const [flashCards, setFlashCards] = useState<FlashCardProps[]>([
        {
            front: 'frontsite',
            back: 'backsite',
            isFlipped: false,
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
                <div key={index} onClick={() => toggleFlashCard(index)}>
                    {!card.isFlipped ? (
                        <Card display={flashCards[0].front} />
                    ) : (
                        <Card display={flashCards[0].back} />
                    )}
                </div>
            ))}
        </>
    )
}
