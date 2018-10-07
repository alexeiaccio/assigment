import PropTypes from 'prop-types'
import React from 'react'

const News = ({ date, title, category }) => (
  <li>
    <h3>{title}</h3>
    <p>{Date(date)}</p>
    <p>{category}</p>
  </li>
)

News.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default News
