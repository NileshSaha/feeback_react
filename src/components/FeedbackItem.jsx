import PropTypes from 'prop-types'

function FeedbackItem({feedback}) {
  return (
    <div className="card">
        <div className="num-display">{feedback.rating}</div>
        <div className="text-display">{feedback.text}</div>
    </div>
  )
}

FeedbackItem.defaultProps = {
    feedback:{
        id: 0,
        rating: 0,
        text: ''
    }
}

FeedbackItem.propTypes = {
    feedback: PropTypes.object
}

export default FeedbackItem