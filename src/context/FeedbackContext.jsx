import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you want to delete?')) {
      setFeedback(feedback.filter((element) => element.id !== id))
    }
  }

  // Set Item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit:true
    })
  }

  const updateFeedback = (item) => {
    console.log(item)
    const newFeedbackData = feedback.map((feedback) => {
      if (item.id === feedback.id) {
        return item
      } else {
        return feedback
      }
    })
    setFeedback(newFeedbackData)

  }
  return (
    <FeedbackContext.Provider value={{ feedback: feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
