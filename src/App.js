import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIcon from './components/AboutIcon'
import { FeedbackProvider } from './context/FeedbackContext'

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
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm submit={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
