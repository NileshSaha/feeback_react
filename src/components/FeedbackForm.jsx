import { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
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
  return (
    <Card>
      <form>
        <h2>How would you rate my service?</h2>
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
