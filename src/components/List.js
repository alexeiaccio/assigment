import PropTypes from 'prop-types'
import React from 'react'

import News from './News'

const List = ({ news }) => (
  <ul>
    {news.map(news => (
      <News key={news.id} {...news} />
    ))}
  </ul>
)

List.propTypes = {
  news: PropTypes.array.isRequired,
}

export default List
