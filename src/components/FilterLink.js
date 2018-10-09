/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'react-emotion'
import { Link } from '@reach/router'

const FilterLink = props => (
  <Link
    getProps={({ isCurrent }) => ({
      className: css`
        ${tw(['font-medium', 'mx-2', 'mb-2', 'sm:mb-0', 'no-underline', 'text-sans', 'text-xxs'])};
        ${isCurrent ? tw(['text-orange']) : tw(['text-grey-light'])};
      `,
    })}
    {...props}
  />
)

FilterLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default FilterLink
