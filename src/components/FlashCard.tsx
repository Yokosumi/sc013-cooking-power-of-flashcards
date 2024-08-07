import { useState, useEffect } from 'react'

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

    useEffect(() => {
        appendFlashCardInState()
    }, [])

    return (
        <>
            <div>
                {flashCard.front}
                {flashCard.back}
            </div>
        </>
    )
}
