import { FlashCard } from './components/FlashCard'
import { FlashCardProvider } from './lib/context'

function App() {
    return (
        <FlashCardProvider>
            <div className=" text-white">
                <h1>Flashcards</h1>
                <section>
                    <FlashCard />
                </section>
            </div>
        </FlashCardProvider>
    )
}

export default App
