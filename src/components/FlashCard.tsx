import { useState, useEffect } from 'react'
import { Card } from './Card'

type FlashCardProps = {
    front: string
    back: string
    isFlipped: boolean
}

export const FlashCard = () => {
    const [flashCards, setFlashCards] = useState<FlashCardProps[]>([])

    const flashCard: FlashCardProps = {
        front: 'frontsite',
        back: 'backsite',
        isFlipped: false,
    }

    const appendFlashCardInState = () => {
        const copyOfFlashCardsState = [...flashCards, flashCard]
        setFlashCards(copyOfFlashCardsState)
    }

    const toggleFlashCard = (index: number) => {
        setFlashCards((prevFlashCards) =>
            prevFlashCards.map((card, i) =>
                i === index ? { ...card, isFlipped: !card.isFlipped } : card
            )
        )
    }

    useEffect(() => {
        appendFlashCardInState()
    }, [])

    return (
        <>
            {flashCards.map((card, index) => (
                <div key={index} onClick={() => toggleFlashCard(index)}>
                    {!card.isFlipped ? (
                        <Card display={flashCard.front} />
                    ) : (
                        <Card display={flashCard.back} />
                    )}
                </div>
            ))}
        </>
    )
}
