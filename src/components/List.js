/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'react-emotion'

import News from './News'

const List = ({ news }) => (
  <div
    className={css`
      ${tw(['flex', 'flex-row', 'flex-wrap'])};
    `}
  >
    {news.map(news => (
      <News
        key={news.id}
        className={css`
          ${tw(['flex', 'relative', 'w-full', 'md:w-1/2'])};
          color: inherit;
          height: 19rem;
        `}
        {...news}
      />
    ))}
  </div>
)

List.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      title: PropTypes.urlToImage,
    }).isRequired
  ).isRequired,
}

export default List
