import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
function FeedbackItem({ feedback, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className='close'>
        <FaTimes color='purple'/>
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  )
}

FeedbackItem.defaultProps = {
  feedback: {
    id: 0,
    rating: 0,
    text: '',
  },
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
}

export default FeedbackItem
