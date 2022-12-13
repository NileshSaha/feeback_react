import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback}) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedbacks are there</p>
    }
  return (
    <div  className="feedback-list">
        {feedback.map((element) => (
            <FeedbackItem key={element.id} feedback={element}/>
        ))}
    </div>
  )
}



export default FeedbackList