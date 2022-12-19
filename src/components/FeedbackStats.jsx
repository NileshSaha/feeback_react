import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating:{isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.defaultProps = {
  feedback: [
    {
      id: '0f858a7a-49a6-494f-9c9d-7e6d0bfafab8',
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ],
}

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default FeedbackStats
