import { useState } from 'react'
import Card from './shared/Card'

function FeedbackForm() {
  const [text, setText] = useState('')
  const handleTextChange = (e) => {
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
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
