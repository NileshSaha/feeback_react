import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
// import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    fetchFeedback()
  }, [])

  //Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

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

  // Update feedback
  const updateFeedback = (item) => {
    setFeedback(feedback.map((feedback) => (item.id === feedback.id ?  item : feedback)))
  }
  
  return (
    <FeedbackContext.Provider 
      value={{ 
        feedback: feedback, 
        feedbackEdit, 
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
