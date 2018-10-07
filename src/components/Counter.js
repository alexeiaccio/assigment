/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'react-emotion'
import { connect } from 'react-redux'
import { Location, navigate } from '@reach/router'

const Counter = ({ count, onChooseCount, onDecrement, onIncrement }) => (
  <Location>{
    props => {
      const match = /\?(.+)[=](.+)\&?/gi
      const matchLocation = match.exec(props.location.search)
      if (matchLocation) {
        const numberFromLocation = matchLocation[2]
        onChooseCount(numberFromLocation)
        navigate('/')
      }
      
      return (
    <p
      className={css`
        ${tw(['text-green'])};
      `}
    >
      Clicked: {count} times <button onClick={onIncrement}>+</button>{' '}
      <button onClick={onDecrement}>-</button>{' '}
    </p>

    )}
  }
  </Location>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onChooseCount: PropTypes.func.isRequired,
}

export default connect(
  ({ count }) => ({ count }),
  dispatch => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
    onChooseCount: n => dispatch({ type: 'CHOOSE_COUNT', payload: parseInt(n) }),
  })
)(Counter)
