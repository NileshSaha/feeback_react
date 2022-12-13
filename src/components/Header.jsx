import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <header>
        <div className="container">
            <h2>Feedback UI</h2>
            <h3>{text}</h3>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'hi guys'
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header