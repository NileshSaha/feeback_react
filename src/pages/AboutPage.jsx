import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (<Card>
    <div className='about'>
        <h1>About this project</h1>
        <p>This is a feedback project for react</p>
        <p>Version:1.0.0</p>
        <p>
            <Link to={{
                pathname:'/',
            }}>
                Back to feedback
            </Link>
        </p>
    </div>
  </Card>)
}

export default AboutPage
