import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedBack] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you want to delete?')) {
      setFeedBack(feedback.filter((element) => element.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedBack([newFeedback, ...feedback])
  }
  
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm submit={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
