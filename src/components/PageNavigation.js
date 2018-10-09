/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from '@reach/router'
import { css } from 'react-emotion'
import { v4 } from 'node-uuid'

const PageNavigation = ({ chunkedNews, matchLocation }) => (
  <nav
    className={css`
      ${tw([
        'flex',
        'flex-col',
        'md:flex-row',
        'font-medium',
        'justify-start',
        'md:justify-between',
        'text-base',
      ])};
      padding: 2.5rem 1rem;
    `}
  >
    <div
      className={css`
        ${tw(['mb-4', 'md:mb-0'])};
      `}
    >
      Больше новостей
    </div>
    <div
      className={css`
        ${tw(['flex', 'flex-row', 'flex-wrap'])};
      `}
    >
      {chunkedNews.map(
        (_, i) =>
          (matchLocation && matchLocation[2] - 1 == i) ||
          (!matchLocation && i === 0) ? (
            <span
              key={v4()}
              className={css`
                ${tw(['mb-4', 'md:mb-0', 'text-orange'])};
                &:not(:last-child) {
                  margin-right: 2.25rem;
                }
              `}
            >
              {i + 1}
            </span>
          ) : (
            <Link
              key={v4()}
              className={css`
                ${tw(['mb-4', 'md:mb-0', 'no-underline'])};
                color: inherit;
                &:not(:last-child) {
                  margin-right: 2.25rem;
                }
              `}
              to={`?page=${i + 1}`}
            >
              {i + 1}
            </Link>
          )
      )}
    </div>
  </nav>
)

PageNavigation.propTypes = {
  chunkedNews: PropTypes.array.isRequired,
  matchLocation: PropTypes.array,
}

export default PageNavigation
