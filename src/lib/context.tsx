import { createContext, useContext, ReactNode, useState } from 'react'
import { FlashCardProps } from './types'

interface FlashCardContextType {
    flashCards: FlashCardProps[]
    setFlashCards: React.Dispatch<React.SetStateAction<FlashCardProps[]>>
    toggleFlashCard: (index: number) => void
}

// created context
const FlashCardContext = createContext<FlashCardContextType | undefined>(
    undefined
)

// custom hook
export const useFlashCardContext = () => {
    const context = useContext(FlashCardContext)

    if (context === undefined) {
        throw new Error(
            'You must provide flashcard data, useContext returns undefined'
        )
    }
    return context
}

// provider component
export const FlashCardProvider = ({ children }: { children: ReactNode }) => {
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
        <FlashCardContext.Provider
            value={{ flashCards, setFlashCards, toggleFlashCard }}
        >
            {children}
        </FlashCardContext.Provider>
    )
}
