import { Card } from './Card'
import { useFlashCardContext } from '../lib/context'

export const FlashCard = () => {
    const flashcards = useFlashCardContext()

    return (
        <>
            {flashcards.flashCards.map((card, index) => (
                <div
                    className="inline"
                    key={index}
                    onClick={() => flashcards.toggleFlashCard(index)}
                >
                    {!card.isFlipped ? (
                        <Card
                            display={`Answer: ${flashcards.flashCards[index].front}`}
                            category={`Category: ${flashcards.flashCards[index].category}`}
                        />
                    ) : (
                        <Card display={flashcards.flashCards[index].back} />
                    )}
                </div>
            ))}
        </>
    )
}
