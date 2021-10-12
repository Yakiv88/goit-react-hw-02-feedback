import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, handleClick }) {
  return (
    <>
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          name={option}
          onClick={handleClick}
          className={s.button}
        >
          {option}
        </button>
      ))}
    </>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
}
