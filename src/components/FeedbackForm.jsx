import { useContext, useState, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text)
      setBtnDisabled(false)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text.trim().length > 10) {
      setBtnDisabled(false)
      setMessage(null)
    } else {
      setBtnDisabled(true)
      setMessage('Minimum 10 characters are required')
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback({
          ...feedbackEdit.item,
          rating,
          text
        })
      }else {
        addFeedback(newFeedback)
      }
      
      setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate my service?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating)
          }}
        />
        <div className='input-group'>
          <input
            type='text'
            onChange={handleTextChange}
            placeholder='Write a review...'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
