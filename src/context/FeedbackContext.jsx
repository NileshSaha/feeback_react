import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: '0f858a7a-49a6-494f-9c9d-7e6d0bfafab8',
      rating: 10,
      text: 'This item is from context',
    },
  ])
  return (
    <FeedbackContext.Provider value={{ feedback: feedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
