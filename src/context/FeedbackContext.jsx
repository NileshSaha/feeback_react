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
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Add feedback
  const addFeedback = async (newFeedback) => {
    setIsLoading(true)
    const response = await fetch(`/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(newFeedback)
    })
    const item = await response.json()
    setFeedback([item, ...feedback])
    setIsLoading(false)
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you want to delete?')) {
      setIsLoading(true)
      await fetch(`/feedback/${id}`, {
        method:'DELETE',
      })
      setFeedback(feedback.filter((element) => element.id !== id))
      setIsLoading(false)
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
  const updateFeedback = async (item) => {
    setIsLoading(true)
    const response = await fetch(`/feedback/${item.id}`, {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({rating:item.rating, text:item.text})
    })
    const data = await response.json()
    setFeedback(feedback.map((feedback) => (item.id === feedback.id ?  data : feedback)))
    setIsLoading(false)
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
