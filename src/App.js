import { useState } from 'react'
import Header from "./components/Header"
import FeedbackLisr from "./components/FeedbackList"
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedBack] = useState(FeedbackData)

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackLisr feedback={feedback}/>
            </div>
        </>
    )
}

export default App