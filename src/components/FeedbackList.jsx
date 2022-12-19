import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedbacks are there</p>
  }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((element) => (
          <motion.div
            key={element.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={element.id}
              feedback={element}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

FeedbackList.defaultProps = {
  feedback: [
    {
      id: '0f858a7a-49a6-494f-9c9d-7e6d0bfafab8',
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ],
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}

export default FeedbackList
