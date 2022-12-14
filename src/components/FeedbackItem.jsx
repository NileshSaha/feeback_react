import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({ feedback }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className='num-display'>{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className='close'>
        <FaTimes color='purple'/>
      </button>
      <button onClick={() => editFeedback(feedback)} className='edit'>
        <FaEdit color='purple'/>
      </button>
      <div className='text-display'>{feedback.text}</div>
    </Card>
  )
}

FeedbackItem.defaultProps = {
  feedback: {
    id: '',
    rating: 0,
    text: '',
  },
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
}

export default FeedbackItem
